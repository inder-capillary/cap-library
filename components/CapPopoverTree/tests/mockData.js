export const mockData = {
  treeData: [
    {
      title: "on Event",
      key: "onEvent",
      icon: "survey-response",
      children: [
        {
          title: "skuCode",
          key: "skuCode",
        },
        {
          title: "brandCode",
          key: "brandCode",
        },
      ],
    },
    {
      title: "on Store",
      key: "onStore",
      icon: "bulb",
      children: [
        {
          title: "New store",
          key: "newStore",

        },
      ],
    },
  ],

  treeNode: {
    node: {
      props: {
        isLeafNode: true,
        expanded: true,
        eventKey: 'brandCode',
      },
    },
  },
  selectedParentKey: ['onEvent'],
  selectedChildKey: ['brandCode'],
  componentProps: {
    visible: true,
    trigger: 'click',
  },
};
