import React, { useReducer } from "react";
import styled from "styled-components/macro";
import DragAndDropZone from "../components/DragAndDropZone";
import {
  SET_DROP_DEPTH,
  SET_IN_DROP_ZONE,
  ADD_FILE_TO_LIST,
} from "../consts/actionTypes";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_DROP_DEPTH:
        return { ...state, dropDepth: action.dropDepth };
      case SET_IN_DROP_ZONE:
        return { ...state, inDropZone: action.inDropZone };
      case ADD_FILE_TO_LIST:
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  console.log(`drop depth: ${data.dropDepth}`);

  return (
    <AppWrapper>
      <DragAndDropZone data={data} dispatch={dispatch} />
      <ol className="dropped-files">
        {data.fileList.map((f) => {
          return <li key={f.name}>{f.name}</li>;
        })}
      </ol>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  color: white;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  font-size: calc(10px + 2vmin);

  li {
    color: red;
  }
`;

export default App;
