const mockData = {
  categories: [
    {
      key: 'boostSales',
      label: 'Boost sales',
      value: 'boostSales',
      color: '#91e5e5',
      panes: [
        {
          key: 'browseAbandonNew',
          label: 'Browse abandon new',
          value: 'browseAbandonNew',
          description: 'Target contacts who have visited your product pages more than once but have not added anything to their cart',
          icon: 'basket',
        },
        {
          key: 'cartAbandonNew',
          label: 'Cart abandon new',
          value: 'cartAbandonNew',
          description: 'Target contacts who have added item to cart but haven\'t completed the purchase',
          icon: 'add',
        },
      ],
    },
  ],
};
export default mockData;
