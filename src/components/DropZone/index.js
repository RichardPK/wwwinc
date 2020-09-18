import React from "react";
import DraggableObject from "../DraggableObject/";
import styled from "styled-components/macro";
import {
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} from "../../utilities/helpers/handleDragEvents";

const DropZone = (props) => {
  const { data, dispatch } = props;

  return (
    <DraggableAreaOuter
      inDropZone={data.inDropZone}
      onDrop={(event) => handleDrop({ event, data, dispatch })}
      onDragOver={(event) => handleDragOver({ event, data, dispatch })}
      onDragEnter={(event) => handleDragEnter({ event, data, dispatch })}
      onDragLeave={(event) => handleDragLeave({ event, data, dispatch })}
    >
      <DraggableObject />
    </DraggableAreaOuter>
  );
};

export default DropZone;

const DraggableAreaOuter = styled.div`
  background-color: ${(props) => (props.inDropZone ? "tomato" : "red")};
  transition: color 0.3s ease-out;
  width: 80%;
`;
