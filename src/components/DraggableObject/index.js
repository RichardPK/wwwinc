import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { handleDragStart } from "../../utilities/helpers/handleDragEvents";
import styled from "styled-components/macro";
import { W, INC } from "../../consts/droppableTypes";

const DraggableObject = forwardRef((props, ref) => {
  const { type, setGrabbedElement, grabbedElement } = props;
  const draggableElement = useRef(null);
  const [grabbed, setGrabbed] = useState(false);
  const [X, setX] = useState("0px");
  const [Y, setY] = useState("0px");

  const onMouseDown = (event) => {
    setGrabbed(true);
    if (!grabbedElement) {
      setGrabbedElement(draggableElement);
    }
  };

  useImperativeHandle(ref, () => ({
    moveElement(pageX, pageY) {
      if (grabbed) {
        setX(pageX - draggableElement.current.offsetWidth / 2 + "px");
        setY(pageY - draggableElement.current.offsetHeight / 2 + "px");
      }
    },
  }));

  return (
    <Wrapper
      draggable
      onDragStart={(event) => handleDragStart(event)}
      onMouseDown={(event) => onMouseDown(event)}
      onMouseUp={() => {
        setGrabbed(false);
        setGrabbedElement(false);
      }}
      ref={draggableElement}
      left={X}
      top={Y}
    >
      <Inner>
        <DraggableText>
          {type === W ? `W` : type === INC ? "inc." : null}
        </DraggableText>
      </Inner>
    </Wrapper>
  );
});

export default DraggableObject;
const Wrapper = styled.div.attrs((props) => ({
  style: {
    left: props.left,
    top: props.top,
  },
}))`
  position: absolute;
  z-index: 1000;
  cursor: grab;
  display: inline;
  background-color: lime;
`;

const Inner = styled.div`
  background-color: green;
  padding: 0.5rem;
`;

const DraggableText = styled.span`
  user-select: none;
`;
