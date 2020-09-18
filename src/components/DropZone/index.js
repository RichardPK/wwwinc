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
    <Wrapper
      onDrop={(event) => handleDrop({ event, data, dispatch })}
      onDragOver={(event) => handleDragOver(event)}
      onDragEnter={(event) => handleDragEnter({ event, data, dispatch })}
      onDragLeave={(event) => handleDragLeave({ event, data, dispatch })}
    >
      <DraggableObject />
    </Wrapper>
  );
};

export default DropZone;

const Wrapper = styled.div`
  background-color: #282c34;
  width: 80%;
`;
