// import {DragDropContext} from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'

// export default DragDropContext(HTML5Backend);
import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider, DndContext } from "react-dnd";

export const withDragDropContext = (Component) => (props) => (
  <DndProvider backend={HTML5Backend} context={DndContext}>
    <Component {...props} />
  </DndProvider>
);
