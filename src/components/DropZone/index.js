import React from "react";
import styled from "styled-components/macro";
import {
  handleDragStart,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} from "../../utilities/helpers/handleDragEvents";
import { W } from "../../consts/droppableTypes";
import DraggableObject from "../DraggableObject/";

const DragAndDropZone = (props) => {
  const { data, dispatch } = props;

  return (
    <DragAndDropZoneOuter
      inDropZone={data.inDropZone}
      onDrop={(event) => handleDrop({ event, data, dispatch })}
      onDragOver={(event) => handleDragOver({ event, data, dispatch })}
      onDragEnter={(event) => handleDragEnter({ event, data, dispatch })}
      onDragLeave={(event) => handleDragLeave({ event, data, dispatch })}
    >
      <DraggableObject
        type={W}
        onDragStart={(event) => handleDragStart({ event, data, dispatch })}
      />
    </DragAndDropZoneOuter>
  );
};

export default DragAndDropZone;

const DragAndDropZoneOuter = styled.div`
  background-color: ${(props) => (props.inDropZone ? "tomato" : "red")};
  transition: color 0.3s ease-out;
  width: 80%;
`;
