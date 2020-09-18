export const handleDragEnter = ({ event, data, dispatch }) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
};
export const handleDragLeave = ({ event, data, dispatch }) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
  if (data.dropDepth > 0) return;
  dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
};
export const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
export const handleDrop = ({ event, data, dispatch }) => {
  event.preventDefault();
  event.stopPropagation();
  let files = [...event.dataTransfer.files];

  if (files && files.length > 0) {
    const existingFiles = data.fileList.map((f) => f.name);
    files = files.filter((f) => !existingFiles.includes(f.name));

    dispatch({ type: "ADD_FILE_TO_LIST", files });
    event.dataTransfer.clearData();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  }
};
