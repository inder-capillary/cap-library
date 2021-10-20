export const mockdata = {
  pathList1: [
    {
      contents: "Test 1",
      pathName: null,
      id: '1',
    },
  ],
  pathList1Add: [
    {
      contents: "Test 1",
      pathName: null,
      id: '1',
    },
    {
      contents: "Hello World",
      pathName: null,
      id: '1000', //mock with jest for nanoid -> return '1000'
    },
  ],
  pathList1Item1Update: [{ contents: "Test 1", pathName: "abc", id: '1' }],
  pathList2: [
    { contents: "Test 1", pathName: "abc", id: '1' },
    { contents: "Test 2", pathName: "xyz", id: '2' },
  ],
  pathList3: [
    { contents: "Test 1", pathName: "abc", id: '1' },
    { contents: "Test 2", pathName: "pqr", id: '2' },
    { contents: "Test 3", pathName: "xyz", id: '3' },
  ],
  pathList3Item1Up: [
    { contents: "Test 2", pathName: "pqr", id: '2' },
    { contents: "Test 1", pathName: "abc", id: '1' },
    { contents: "Test 3", pathName: "xyz", id: '3' },
  ],
  pathList3Item1Down: [
    { contents: "Test 1", pathName: "abc", id: '1' },
    { contents: "Test 3", pathName: "xyz", id: '3' },
    { contents: "Test 2", pathName: "pqr", id: '2' },
  ],
  pathList3Item1Delete: [
    { contents: "Test 1", pathName: "abc", id: '1' },
    { contents: "Test 3", pathName: "xyz", id: '3' },
  ],
};
