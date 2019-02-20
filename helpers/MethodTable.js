import { TableHOC } from './TableHOC';

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Description", dataIndex: "description", key: "description" },
];

const MethodTable = TableHOC(columns, "Component Methods");
export default MethodTable;
