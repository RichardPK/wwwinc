import {
  SET_DROP_DEPTH,
  SET_IN_DROP_ZONE,
  ADD_FILE_TO_LIST,
} from "../../consts/actionTypes";

const defaultEventHandlers = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const handleDragStart = (event) => {
  defaultEventHandlers(event);
};

export const handleDragEnter = ({ event, data, dispatch }) => {
  defaultEventHandlers(event);
  dispatch({ type: SET_DROP_DEPTH, dropDepth: data.dropDepth + 1 });
};

export const handleDragLeave = ({ event, data, dispatch }) => {
  defaultEventHandlers(event);
  dispatch({ type: SET_DROP_DEPTH, dropDepth: data.dropDepth - 1 });
  dispatch({ type: SET_IN_DROP_ZONE, inDropZone: false });
};

export const handleDragOver = ({ event, data, dispatch }) => {
  defaultEventHandlers(event);
  event.dataTransfer.dropEffect = "copy";
  dispatch({ type: SET_IN_DROP_ZONE, inDropZone: true });
};

export const handleDrop = ({ event, data, dispatch }) => {
  defaultEventHandlers(event);
  let files = [...event.dataTransfer.files];

  if (files && files.length > 0) {
    const existingFiles = data.fileList.map((f) => f.name);
    files = files.filter((f) => !existingFiles.includes(f.name));

    dispatch({ type: ADD_FILE_TO_LIST, files });
    event.dataTransfer.clearData();
    dispatch({ type: SET_DROP_DEPTH, dropDepth: 0 });
    dispatch({ type: SET_IN_DROP_ZONE, inDropZone: false });
  }
};
