import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import { W, INC } from "../../consts/droppableTypes";

const DraggableObject = (props) => {
  const { type, onDragStart } = props;
  const draggableElement = useRef(null);
  const [grabbed, setGrabbed] = useState(false);
  const [X, setX] = useState("0px");
  const [Y, setY] = useState("0px");

  const onMouseDown = (event) => {
    console.log("mouse down");
    setGrabbed(true);

    console.log(`objectX: ${X}`);
    console.log(`objectY: ${Y}`);

    moveElement(event.pageX, event.pageY);
  };

  const onMouseMove = (event) => {
    if (grabbed) {
      console.log("moving while grabbed");
      moveElement(event.pageX, event.pageY);
    }
    return;
  };

  const moveElement = (pageX, pageY) => {
    setX(pageX - draggableElement.current.offsetWidth / 2 + "px");
    setY(pageY - draggableElement.current.offsetHeight / 2 + "px");
  };

  return (
    <Wrapper
      draggable
      onDragStart={onDragStart}
      onMouseDown={(event) => onMouseDown(event)}
      onMouseMove={(event) => onMouseMove(event)}
      onMouseUp={() => setGrabbed(false)}
      onMouseLeave={() => setGrabbed(false)}
      ref={draggableElement}
      left={X}
      top={Y}
    >
      <DraggableText>
        {type === W ? `W` : type === INC ? "inc." : null}
      </DraggableText>
    </Wrapper>
  );
};

export default DraggableObject;

const Wrapper = styled.div.attrs((props) => ({
  style: {
    left: props.left,
    top: props.top,
  },
}))`
  padding: 1rem;
  position: absolute;
  z-index: 1000;
  cursor: grab;
  display: inline;
  background-color: green;
`;

const DraggableText = styled.span`
  user-select: none;
`;
