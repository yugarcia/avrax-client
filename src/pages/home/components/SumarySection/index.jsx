import React from "react";
import { SumaryContainer } from "./styled-components";
import { useIntersect } from "../../../../hooks/useIntersect";
import { useIncrement } from "../../../../hooks/useIncrement";
import SumaryBox from "./SumaryBox";

const Sumary = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });

  const years = useIncrement(entry?.isIntersecting, 8, 1);
  const houses = useIncrement(entry?.isIntersecting, 765, 15);
  const projects = useIncrement(entry?.isIntersecting, 28, 1);
  const cities = useIncrement(entry?.isIntersecting, 115, 5);

  return (
    <SumaryContainer ref={intersectRef}>
      <SumaryBox
        title={`${years}+`}
        subtitle="Years in Business"
        background="primary"
        color="primary.light"
      />
      <SumaryBox
        title={`${houses}+`}
        subtitle="Houses Protected"
        background="primary.light"
        color="primary"
      />
      <SumaryBox
        title={`${projects}+`}
        subtitle="New Projects"
        background="red.light"
        color="primary.light"
      />
      <SumaryBox
        title={`${cities}+`}
        subtitle="Cities"
        background="secondary.dark"
        color="primary.light"
      />
    </SumaryContainer>
  );
};

export default Sumary;
