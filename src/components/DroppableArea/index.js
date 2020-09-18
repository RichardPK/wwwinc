import React from "react";
import styled from "styled-components/macro";
import { W, INC } from "../../consts/droppableTypes";

const DroppableArea = (props) => {
  const { type } = props;
  return <Wrapper>{type === W ? `W` : type === INC ? "inc." : null}</Wrapper>;
};

export default DroppableArea;

const Wrapper = styled.div`
  display: inline;
  background-color: blue;
`;
