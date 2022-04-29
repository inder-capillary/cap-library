import {DragDropContext} from 'react-dnd-cal';
import HTML5Backend from 'react-dnd-html5-backend-cal';

export default DragDropContext(HTML5Backend);
// import React,{useRef} from "react";
// import {HTML5Backend} from "react-dnd-html5-backend";
// import { DndProvider, DndContext, createDndContext } from "react-dnd";
// import { createDragDropManager } from 'dnd-core';
// const testMgr = createDragDropManager(HTML5Backend,DndContext)

// export const withDragDropContext = (Component) => (props) => (
//   <DndProvider backend={HTML5Backend} context={DndContext}>
//     <Component {...props} />
//   </DndProvider>
// );

// export default (Component) => {
//     return (props) =>
//      {
//         //  const managerRef = useRef(testContext)
//         // console.log(managerRef);
//          return (<DndProvider backend={HTML5Backend} context={DndContext} manager={testMgr}>
//         <Component {...props} />
//       </DndProvider>)
//     }
//     ;
//   };
