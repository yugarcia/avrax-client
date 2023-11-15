const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const StatoscopeWebpackPlugin = require("@statoscope/webpack-plugin").default;
const nodeExternals = require("webpack-node-externals");
const SentryPlugin = require("@sentry/webpack-plugin");

const pkg = require("./package.json");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const alias = {
  "@src": path.resolve(__dirname, "./src"),
};

const assetLoader = {
  test: /\.(bmp|png|jpg|svg|jpeg|gif|webp)$/i,
  exclude: /node_modules/,
  type: "asset",
  parser: {
    dataUrlCondition: { maxSize: 2 * 1024 }, // 10kb
  },
};

const client = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "microsite",
    projectName: micrositeId,
    webpackConfigEnv,
    argv,
  });

  const sentryEnabled =
    argv.mode === "production" && process.env.SKIP_SENTRY !== "true";

  /* Remove default single spa loader for assets, sometimes we want to inline assets */
  defaultConfig.module.rules = defaultConfig.module.rules.filter(
    (rule) => rule.type !== "asset/resource"
  );

  const config = {
    name: "client",
    entry: { main: "./app/microsite" },
    output: {
      path: resolveApp("build/static"),
      assetModuleFilename: "images/[name][ext]",
      publicPath: productionPublicPath,
      filename: `${micrositeId}-[name]-[contenthash:8].js`,
      chunkFilename: `${micrositeId}-[name]-[contenthash:8].js`,
    },
    resolve: { alias: { ...alias, nconf: false } },
    module: { rules: [assetLoader] },
    plugins: [
      new webpack.DefinePlugin({
        APP_NAME: JSON.stringify(applicationName),
        APP_VERSION: JSON.stringify(applicationVersion),
        SENTRY_DSN: JSON.stringify(
          "https://f4146d115fb54fc7ad799e21c162769a@sentry-v2.peya.app/200"
        ),
        SENTRY_ENABLED: sentryEnabled,
      }),
      new WebpackManifestPlugin({
        fileName: "asset-manifest.json",
        useEntryKeys: true,
        writeToFileEmit: true,
        serialize: (manifest) => JSON.stringify({ assets: manifest }),
      }),
      process.env.ANALYZE === "true" ? new StatoscopeWebpackPlugin() : null,
    ].filter(Boolean),
    externals: ["styled-components", "axios"],
  };

  if (sentryEnabled) {
    return merge(defaultConfig, config, {
      plugins: [
        new SentryPlugin({
          authToken: process.env.SENTRY_API_TOKEN,
          org: "pedidosya",
          project: "web-micro-site-loyalty-program",
          url: "https://sentry-v2.peya.app/",
          urlPrefix: productionPublicPath,
          release: `${applicationName}@${applicationVersion}`,
          include: path.resolve(process.cwd(), "build/static"),
          ignore: ["node_modules", "webpack.config.js"],
        }),
      ],
    });
  }

  return merge(defaultConfig, config, {
    output: {
      publicPath: developmentPublicPath,
      filename: `${micrositeId}-[name].js`,
      chunkFilename: `${micrositeId}-[name].js`,
    },
    devtool: "inline-source-map",
    devServer: {
      port: 8005,
      devMiddleware: { writeToDisk: true },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  });
};

module.exports = [client];
