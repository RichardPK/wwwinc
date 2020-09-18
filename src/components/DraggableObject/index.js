import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import styled from "styled-components/macro";
import { W, INC } from "../../consts/droppableTypes";

const DraggableObject = forwardRef((props, ref) => {
  const { type, onDragStart, setGrabbedElement, grabbedElement } = props;
  const draggableElement = useRef(null);
  const [grabbed, setGrabbed] = useState(false);
  const [X, setX] = useState("0px");
  const [Y, setY] = useState("0px");

  const onMouseDown = (event) => {
    console.log("mouse down");
    setGrabbed(true);
    if (!grabbedElement) {
      setGrabbedElement(draggableElement);
    }
    console.log(`objectX: ${X}`);
    console.log(`objectY: ${Y}`);

    moveElement(event.pageX, event.pageY);
  };

  const moveElement = (pageX, pageY) => {
    setX(pageX - draggableElement.current.offsetWidth / 2 + "px");
    setY(pageY - draggableElement.current.offsetHeight / 2 + "px");
  };

  useImperativeHandle(ref, () => ({
    moveElement(pageX, pageY) {
      setX(pageX - draggableElement.current.offsetWidth / 2 + "px");
      setY(pageY - draggableElement.current.offsetHeight / 2 + "px");
    },
  }));

  return (
    <Wrapper
      draggable
      onDragStart={onDragStart}
      onMouseDown={(event) => onMouseDown(event)}
      onMouseUp={() => setGrabbed(false)}
      // onMouseLeave={() => setGrabbed(false)}
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
  padding: 1rem;
  position: absolute;
  z-index: 1000;
  cursor: grab;
  display: inline;
  background-color: lime;
`;

const Inner = styled.div`
  background-color: green;
  padding: 1rem;
`;

const DraggableText = styled.span`
  user-select: none;
`;
