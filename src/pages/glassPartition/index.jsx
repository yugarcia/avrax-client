import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import MasonryImageList from "../../components/MasonryImageList/index.jsx";
import Providers from "../../components/Provider/index.jsx";
import TextSection from "../../components/TextSection/index.jsx";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const GlassPartitionPage = () => {
  return (
    <>
      <PagesHeader title="Glass Partitions" />
      <TextSection
        paragraph="Avrax Impact Windows & Doors ® is a corporation headquartered in
        Miami with another workplace in Cape Coral, FL. Our mission is to
        make houses more secure with an incredible price. We believe every
        customer deserves to be treated with respect and understanding, and
        we are committed to providing the best possible service to our
        clients. We are devoted to providing our customers with the best
        products in the market and have a proven track record of success.
        Our products and services are designed to help our clients achieve
        their goals. We offer a wide range of products, including hurricane
        impact windows and doors. We are dedicated in providing astonishing
        customer service. Our team is available to answer your questions and
        help you to find the right solution for your needs. If you are
        looking for an excellent outcome, Avrax Impact Windows & Doors ® is
        the right choice for you. CONTACT US today to learn more about how
        we can help you “OPEN YOUR DOORS TO THE FUTURE”."
        paragraphColor="secondary.light"
        paragraphInitialColor="primary"
      />
      <MasonryImageList items={itemData} />
      <Providers />
      <Footer />
    </>
  );
};

export default GlassPartitionPage;
