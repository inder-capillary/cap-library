export const mockdata = {
  computeJoinGraphNodesDataInput: [
    {
      width: 148,
      height: 180,
      id: "C_Dx-bl4PV",
      to: ["P9x2uEdq1d", "04keK6m-H3", "X4pqXQKF7t"],
      type: "ENTRY_TRIGGER",
      pathsInfo: {
        P9x2uEdq1d: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 1",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        "04keK6m-H3": {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 2",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 60,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        X4pqXQKF7t: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 3",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 45,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        }
      },
      props: {
        blockData: {
          triggerType: "USER_EVENT",
          userEventTrigger: {
            triggerFilterType: "ALL_CUSTOMERS",
            eventType: "transactionAdded",
            conditionalPaths: [
              {
                path: {
                  pathName: null,
                  pathBlockId: "P9x2uEdq1d"
                },
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE",
                              params: []
                            },
                            functions: [],
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              longValue: null,
                              stringValue: null,
                              doubleValue: 50,
                              booleanValue: null,
                              longList: null,
                              stringList: null,
                              doubleList: null
                            },
                            isExcluded: false,
                            excluded: false
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                path: {
                  pathName: null,
                  pathBlockId: "xA0_93gkpd"
                },
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE",
                              params: []
                            },
                            functions: [],
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              longValue: null,
                              stringValue: null,
                              doubleValue: 60,
                              booleanValue: null,
                              longList: null,
                              stringList: null,
                              doubleList: null
                            },
                            isExcluded: false,
                            excluded: false
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                path: {
                  pathName: null,
                  pathBlockId: "lcEwakzb6c"
                },
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE",
                              params: []
                            },
                            functions: [],
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              longValue: null,
                              stringValue: null,
                              doubleValue: 45,
                              booleanValue: null,
                              longList: null,
                              stringList: null,
                              doubleList: null
                            },
                            isExcluded: false,
                            excluded: false
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          },
          audienceListTrigger: null
        },
        viewMode: false
      },
      isMultiPath: true,
      placeholderToIndex: 1
    },
    {
      id: "P9x2uEdq1d",
      name: "TILL",
      userEventTrigger: {
        triggerFilterType: "ALL_CUSTOMERS",
        eventType: "transactionAdded",
        conditionalPaths: [
          {
            path: {
              pathName: null,
              pathBlockId: "aO5-eWUPMk"
            },
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      waitDurationRO: {
        duration: 1,
        timeUnit: "HOURS"
      },
      postWaitPath: {
        pathName: "Wait time expired path",
        pathBlockId: "GoPSnp68IE"
      },
      props: {
        iconType: "waitEvent",
        color: "#23cccc",
        blockType: "WAIT_TILL_EVENT",
        isConfigured: true,
        viewMode: false,
        id: "P9x2uEdq1d",
        isMultiPath: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            blockData: {
              id: "P9x2uEdq1d",
              name: "TILL",
              userEventTrigger: {
                triggerFilterType: "ALL_CUSTOMERS",
                eventType: "transactionAdded",
                conditionalPaths: [
                  {
                    path: {
                      pathName: null,
                      pathBlockId: "aO5-eWUPMk"
                    },
                    condition: {
                      compoundExpression: {
                        operator: "OR",
                        expressionGroups: [
                          {
                            operator: "AND",
                            simpleExpressions: [
                              {
                                fact: {
                                  factId: "tjqr20",
                                  profileId: "TRANSACTION_PROFILE",
                                  params: []
                                },
                                functions: [],
                                operator: "EQ",
                                operand: {
                                  type: "DOUBLE_VALUE",
                                  longValue: null,
                                  stringValue: null,
                                  doubleValue: 50,
                                  booleanValue: null,
                                  longList: null,
                                  stringList: null,
                                  doubleList: null
                                },
                                isExcluded: false,
                                excluded: false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              waitDurationRO: {
                duration: 1,
                timeUnit: "HOURS"
              },
              postWaitPath: {
                pathName: "Wait time expired path",
                pathBlockId: "GoPSnp68IE"
              },
              blockType: "WAIT_TILL_EVENT"
            },
            blockId: "P9x2uEdq1d",
            type: "WAIT_TILL_EVENT"
          },
          _owner: null,
          _store: {}
        }
      },
      type: "BLOCK_NODE",
      to: ["CLN_1RQ9YY", "12pNxGPAma"],
      pathsInfo: {
        CLN_1RQ9YY: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "waitTillEvent",
            name: {
              key: null,
              ref: null,
              props: {
                id: "adionaUIApp.common.eventPath",
                defaultMessage: "Event path",
                values: {}
              },
              _owner: null,
              _store: {}
            },
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "P9x2uEdq1d",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        "12pNxGPAma": {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "waitExpiredPath",
            name: "Wait time expired path",
            condition: {
              duration: 1,
              timeUnit: "HOURS"
            },
            blockId: "P9x2uEdq1d",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        }
      },
      from: "C_Dx-bl4PV"
    },
    {
      id: "CLN_1RQ9YY",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "CLN_1RQ9YY",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS1"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS1"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS1"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS1"
            },
            blockId: "CLN_1RQ9YY"
          },
          _owner: null,
          _store: {}
        },
        joinBlockNameArray: ["JOIN1", "JOIN2"]
      },
      to: ["aO5-eWUPMk"],
      from: "P9x2uEdq1d",
      type: "BLOCK_NODE"
    },
    {
      width: 42,
      height: 42,
      id: "aO5-eWUPMk",
      props: {
        type: "end",
        style: {
          color: "#47af46",
          padding: "9px 0"
        },
        textLabel: {
          type: {
            displayName: "CapLabel",
            attrs: [],
            componentStyle: {
              rules: [
                "font-size:",
                null,
                ";font-weight:",
                null,
                ";color:",
                null,
                ";line-height:",
                null,
                ";"
              ],
              isStatic: false,
              componentId: "CapLabel-n7zsf5-0",
              lastClassName: "hcywYU"
            },
            foldedComponentIds: [],
            styledComponentId: "CapLabel-n7zsf5-0",
            target: "div",
            propTypes: {},
            CapLabelInline: {
              displayName: "CapLabel__CapLabelInline",
              attrs: [],
              componentStyle: {
                rules: [
                  "font-size:",
                  null,
                  ";font-weight:",
                  null,
                  ";color:",
                  null,
                  ";line-height:",
                  null,
                  ";"
                ],
                isStatic: false,
                componentId: "CapLabel__CapLabelInline-n7zsf5-1",
                lastClassName: "gBSzRM"
              },
              foldedComponentIds: [],
              styledComponentId: "CapLabel__CapLabelInline-n7zsf5-1",
              target: "span"
            },
            _foldedDefaultProps: {
              type: "label1"
            }
          },
          key: null,
          ref: null,
          props: {
            type: "label2",
            className: "margin-l-2 margin-t-5",
            children: {
              key: null,
              ref: null,
              props: {
                id: "adionaUIApp.common.end",
                defaultMessage: "End",
                values: {}
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        }
      },
      type: "END_NODE",
      from: "CLN_1RQ9YY"
    },
    {
      id: "12pNxGPAma",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "12pNxGPAma",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureJoin",
            defaultMessage: "Join",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          name: "JOIN3",
          nextBlock: {
            pathBlockId: "04keK6m-H3",
            pathName: "SMS2"
          }
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "JOIN",
            flowControlBlockName: "JOIN3",
            joinedBlockName: "SMS2"
          },
          _owner: null,
          _store: {}
        }
      },
      from: "P9x2uEdq1d",
      type: "BLOCK_NODE"
    },
    {
      id: "04keK6m-H3",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "04keK6m-H3",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS2"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS2"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS2"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS2"
            },
            blockId: "04keK6m-H3"
          },
          _owner: null,
          _store: {}
        },
        joinBlockNameArray: ["JOIN3"]
      },
      to: ["YsirnCRiSb"],
      from: "C_Dx-bl4PV",
      type: "BLOCK_NODE"
    },
    {
      id: "YsirnCRiSb",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "YsirnCRiSb",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureJoin",
            defaultMessage: "Join",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          name: "JOIN2",
          nextBlock: {
            pathBlockId: "CLN_1RQ9YY",
            pathName: "SMS1"
          }
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "JOIN",
            flowControlBlockName: "JOIN2",
            joinedBlockName: "SMS1"
          },
          _owner: null,
          _store: {}
        }
      },
      from: "04keK6m-H3",
      type: "BLOCK_NODE"
    },
    {
      id: "X4pqXQKF7t",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "X4pqXQKF7t",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS3"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS3"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS3"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS3"
            },
            blockId: "X4pqXQKF7t"
          },
          _owner: null,
          _store: {}
        }
      },
      to: ["mj3MUxj6CH"],
      from: "C_Dx-bl4PV",
      type: "BLOCK_NODE"
    },
    {
      id: "mj3MUxj6CH",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "mj3MUxj6CH",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureJoin",
            defaultMessage: "Join",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          name: "JOIN1",
          nextBlock: {
            pathBlockId: "CLN_1RQ9YY",
            pathName: "SMS1"
          }
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "JOIN",
            flowControlBlockName: "JOIN1",
            joinedBlockName: "SMS1"
          },
          _owner: null,
          _store: {}
        }
      },
      from: "X4pqXQKF7t",
      type: "BLOCK_NODE"
    },
    {
      width: 148,
      height: 180,
      id: "59iTeDxv_B",
      to: [],
      type: "EXIT_TRIGGER",
      pathsInfo: {},
      props: {
        blockData: {
          triggerType: "USER_EVENT",
          userEventTrigger: {
            triggerFilterType: "ALL_CUSTOMERS",
            eventType: "transactionAdded",
            conditionalPath: {
              condition: {
                compoundExpression: {
                  operator: "OR",
                  expressionGroups: [
                    {
                      operator: "AND",
                      simpleExpressions: [
                        {
                          fact: {
                            factId: "tjqr20",
                            profileId: "TRANSACTION_PROFILE",
                            params: []
                          },
                          functions: [],
                          operator: "EQ",
                          operand: {
                            type: "DOUBLE_VALUE",
                            longValue: null,
                            stringValue: null,
                            doubleValue: 50,
                            booleanValue: null,
                            longList: null,
                            stringList: null,
                            doubleList: null
                          },
                          isExcluded: false,
                          excluded: false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        },
        viewMode: false,
        blockType: "EXIT_TRIGGER",
        grammar: {
          LqNBP7: "Bill type of the transaction",
          "32p234": "Basket Sum with product",
          "8arjDE": "Date of the transaction",
          "56de3w": "Extended field in the customer",
          "3UcyB2": "Discount on the transaction",
          sRc59p: "Customer source",
          o765rt: "OrgUnit",
          "5sLAB9": "Customer's slab name",
          "5LFP9e": "Customer Lifetime Purchases",
          "5zpWFg": "Transaction number",
          "87ytre": "Customer externalId",
          sNb89U: "Customer slab number",
          "3er25q": "Customer Custom fields filter",
          "4cP21P": "Customer points",
          loY34k: "Customer is Loyal",
          "5HmDCN": "Count of line-items in the transaction",
          tjqr20: "Value of the transaction",
          cy654u: "Concept",
          t987re: "Customer Lifetime Transaction Count",
          "9i58j1": "Zone",
          "23g26d": "Extended fields in the transaction",
          "9LF38S": "Customer Lifetime Points",
          "17t80a": "Store",
          mFL59r: "Gross amount of the transaction",
          "1wg27d": "Custom fields in the transaction",
          c654er: "Customer's segments"
        }
      },
      isMultiPath: false
    },
    {
      width: 148,
      height: 161,
      id: "5eDwSQu6Fi",
      type: "SCHEDULE_BLOCK",
      isMultiPath: false,
      props: {
        id: "5eDwSQu6Fi",
        blockData: {
          startType: "IMMEDIATE",
          endType: "NEVER",
          startsFrom: null,
          endsAt: 7226562600000
        },
        viewMode: false
      }
    }
  ],
  computeJoinGraphNodesDataOutput: {
    "12pNxGPAma": ["04keK6m-H3", "JOIN3"],
    YsirnCRiSb: ["CLN_1RQ9YY", "JOIN2"],
    mj3MUxj6CH: ["CLN_1RQ9YY", "JOIN1"]
  },
  updateJoinOrJoinedGraphNodePropInput1: [
    {
      width: 148,
      height: 180,
      id: "C_Dx-bl4PV",
      to: ["P9x2uEdq1d", "X4pqXQKF7t"],
      type: "ENTRY_TRIGGER",
      pathsInfo: {
        P9x2uEdq1d: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 1",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE"
                        },
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          doubleValue: 50
                        },
                        isExcluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {
                CLN_1RQ9YY: [],
                "04keK6m-H3": [],
                X4pqXQKF7t: []
              }
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        X4pqXQKF7t: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 2",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE"
                        },
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          doubleValue: 45
                        },
                        isExcluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {
                CLN_1RQ9YY: [],
                "04keK6m-H3": [],
                X4pqXQKF7t: []
              }
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        }
      },
      props: {
        blockData: {
          triggerType: "USER_EVENT",
          userEventTrigger: {
            triggerFilterType: "ALL_CUSTOMERS",
            eventType: "transactionAdded",
            conditionalPaths: [
              {
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE"
                            },
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              doubleValue: 50
                            },
                            isExcluded: false
                          }
                        ]
                      }
                    ]
                  }
                },
                path: {
                  pathBlockId: "P9x2uEdq1d",
                  pathName: null
                }
              },
              {
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE"
                            },
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              doubleValue: 45
                            },
                            isExcluded: false
                          }
                        ]
                      }
                    ]
                  }
                },
                path: {
                  pathBlockId: "X4pqXQKF7t",
                  pathName: null
                }
              }
            ]
          }
        },
        allAudienceGroups: {}
      },
      isMultiPath: true,
      placeholderToIndex: 1
    },
    {
      id: "P9x2uEdq1d",
      name: "TILL",
      userEventTrigger: {
        triggerFilterType: "ALL_CUSTOMERS",
        eventType: "transactionAdded",
        conditionalPaths: [
          {
            path: {
              pathName: null,
              pathBlockId: "aO5-eWUPMk"
            },
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      waitDurationRO: {
        duration: 1,
        timeUnit: "HOURS"
      },
      postWaitPath: {
        pathName: "Wait time expired path",
        pathBlockId: "GoPSnp68IE"
      },
      props: {
        iconType: "waitEvent",
        color: "#23cccc",
        blockType: "WAIT_TILL_EVENT",
        isConfigured: true,
        viewMode: false,
        id: "P9x2uEdq1d",
        isMultiPath: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            blockData: {
              id: "P9x2uEdq1d",
              name: "TILL",
              userEventTrigger: {
                triggerFilterType: "ALL_CUSTOMERS",
                eventType: "transactionAdded",
                conditionalPaths: [
                  {
                    path: {
                      pathName: null,
                      pathBlockId: "aO5-eWUPMk"
                    },
                    condition: {
                      compoundExpression: {
                        operator: "OR",
                        expressionGroups: [
                          {
                            operator: "AND",
                            simpleExpressions: [
                              {
                                fact: {
                                  factId: "tjqr20",
                                  profileId: "TRANSACTION_PROFILE",
                                  params: []
                                },
                                functions: [],
                                operator: "EQ",
                                operand: {
                                  type: "DOUBLE_VALUE",
                                  longValue: null,
                                  stringValue: null,
                                  doubleValue: 50,
                                  booleanValue: null,
                                  longList: null,
                                  stringList: null,
                                  doubleList: null
                                },
                                isExcluded: false,
                                excluded: false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              waitDurationRO: {
                duration: 1,
                timeUnit: "HOURS"
              },
              postWaitPath: {
                pathName: "Wait time expired path",
                pathBlockId: "GoPSnp68IE"
              },
              blockType: "WAIT_TILL_EVENT"
            },
            blockId: "P9x2uEdq1d",
            type: "WAIT_TILL_EVENT"
          },
          _owner: null,
          _store: {}
        }
      },
      type: "BLOCK_NODE",
      to: ["CLN_1RQ9YY", "12pNxGPAma"],
      pathsInfo: {
        CLN_1RQ9YY: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "waitTillEvent",
            name: {
              key: null,
              ref: null,
              props: {
                id: "adionaUIApp.common.eventPath",
                defaultMessage: "Event path",
                values: {}
              },
              _owner: null,
              _store: {}
            },
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "P9x2uEdq1d",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        "12pNxGPAma": {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "waitExpiredPath",
            name: "Wait time expired path",
            condition: {
              duration: 1,
              timeUnit: "HOURS"
            },
            blockId: "P9x2uEdq1d",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        }
      },
      from: "C_Dx-bl4PV"
    },
    {
      id: "CLN_1RQ9YY",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "CLN_1RQ9YY",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS1"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS1"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS1"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS1"
            },
            blockId: "CLN_1RQ9YY"
          },
          _owner: null,
          _store: {}
        },
        joinBlockNameArray: ["JOIN1", "JOIN2"]
      },
      to: ["aO5-eWUPMk"],
      from: "P9x2uEdq1d",
      type: "BLOCK_NODE"
    },
    {
      width: 42,
      height: 42,
      id: "aO5-eWUPMk",
      props: {
        type: "end",
        style: {
          color: "#47af46",
          padding: "9px 0"
        },
        textLabel: {
          type: {
            displayName: "CapLabel",
            attrs: [],
            componentStyle: {
              rules: [
                "font-size:",
                null,
                ";font-weight:",
                null,
                ";color:",
                null,
                ";line-height:",
                null,
                ";"
              ],
              isStatic: false,
              componentId: "CapLabel-n7zsf5-0",
              lastClassName: "hcywYU"
            },
            foldedComponentIds: [],
            styledComponentId: "CapLabel-n7zsf5-0",
            target: "div",
            propTypes: {},
            CapLabelInline: {
              displayName: "CapLabel__CapLabelInline",
              attrs: [],
              componentStyle: {
                rules: [
                  "font-size:",
                  null,
                  ";font-weight:",
                  null,
                  ";color:",
                  null,
                  ";line-height:",
                  null,
                  ";"
                ],
                isStatic: false,
                componentId: "CapLabel__CapLabelInline-n7zsf5-1",
                lastClassName: "gBSzRM"
              },
              foldedComponentIds: [],
              styledComponentId: "CapLabel__CapLabelInline-n7zsf5-1",
              target: "span"
            },
            _foldedDefaultProps: {
              type: "label1"
            }
          },
          key: null,
          ref: null,
          props: {
            type: "label2",
            className: "margin-l-2 margin-t-5",
            children: {
              key: null,
              ref: null,
              props: {
                id: "adionaUIApp.common.end",
                defaultMessage: "End",
                values: {}
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        }
      },
      type: "END_NODE",
      from: "CLN_1RQ9YY"
    },
    {
      id: "12pNxGPAma",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "12pNxGPAma",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureJoin",
            defaultMessage: "Join",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          name: "JOIN3",
          nextBlock: {
            pathBlockId: "04keK6m-H3",
            pathName: "SMS2"
          }
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "JOIN",
            flowControlBlockName: "JOIN3",
            joinedBlockName: "SMS2"
          },
          _owner: null,
          _store: {}
        }
      },
      from: "P9x2uEdq1d",
      type: "BLOCK_NODE"
    },
    {
      id: "X4pqXQKF7t",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "X4pqXQKF7t",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS3"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS3"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS3"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS3"
            },
            blockId: "X4pqXQKF7t"
          },
          _owner: null,
          _store: {}
        }
      },
      to: ["mj3MUxj6CH"],
      from: "C_Dx-bl4PV",
      type: "BLOCK_NODE"
    },
    {
      id: "mj3MUxj6CH",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "mj3MUxj6CH",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureJoin",
            defaultMessage: "Join",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          name: "JOIN1",
          nextBlock: {
            pathBlockId: "CLN_1RQ9YY",
            pathName: "SMS1"
          }
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "JOIN",
            flowControlBlockName: "JOIN1",
            joinedBlockName: "SMS1"
          },
          _owner: null,
          _store: {}
        }
      },
      from: "X4pqXQKF7t",
      type: "BLOCK_NODE"
    },
    {
      width: 148,
      height: 180,
      id: "59iTeDxv_B",
      to: [],
      type: "EXIT_TRIGGER",
      pathsInfo: {},
      props: {
        blockData: {
          triggerType: "USER_EVENT",
          userEventTrigger: {
            triggerFilterType: "ALL_CUSTOMERS",
            eventType: "transactionAdded",
            conditionalPath: {
              condition: {
                compoundExpression: {
                  operator: "OR",
                  expressionGroups: [
                    {
                      operator: "AND",
                      simpleExpressions: [
                        {
                          fact: {
                            factId: "tjqr20",
                            profileId: "TRANSACTION_PROFILE",
                            params: []
                          },
                          functions: [],
                          operator: "EQ",
                          operand: {
                            type: "DOUBLE_VALUE",
                            longValue: null,
                            stringValue: null,
                            doubleValue: 50,
                            booleanValue: null,
                            longList: null,
                            stringList: null,
                            doubleList: null
                          },
                          isExcluded: false,
                          excluded: false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        },
        viewMode: false,
        blockType: "EXIT_TRIGGER",
        grammar: {
          LqNBP7: "Bill type of the transaction",
          "32p234": "Basket Sum with product",
          "8arjDE": "Date of the transaction",
          "56de3w": "Extended field in the customer",
          "3UcyB2": "Discount on the transaction",
          sRc59p: "Customer source",
          o765rt: "OrgUnit",
          "5sLAB9": "Customer's slab name",
          "5LFP9e": "Customer Lifetime Purchases",
          "5zpWFg": "Transaction number",
          "87ytre": "Customer externalId",
          sNb89U: "Customer slab number",
          "3er25q": "Customer Custom fields filter",
          "4cP21P": "Customer points",
          loY34k: "Customer is Loyal",
          "5HmDCN": "Count of line-items in the transaction",
          tjqr20: "Value of the transaction",
          cy654u: "Concept",
          t987re: "Customer Lifetime Transaction Count",
          "9i58j1": "Zone",
          "23g26d": "Extended fields in the transaction",
          "9LF38S": "Customer Lifetime Points",
          "17t80a": "Store",
          mFL59r: "Gross amount of the transaction",
          "1wg27d": "Custom fields in the transaction",
          c654er: "Customer's segments"
        }
      },
      isMultiPath: false
    },
    {
      width: 148,
      height: 161,
      id: "5eDwSQu6Fi",
      type: "SCHEDULE_BLOCK",
      isMultiPath: false,
      props: {
        id: "5eDwSQu6Fi",
        blockData: {
          startType: "IMMEDIATE",
          endType: "NEVER",
          startsFrom: null,
          endsAt: 7226562600000
        },
        viewMode: false
      }
    }
  ],
  updateJoinOrJoinedGraphNodePropInput2: {
    "12pNxGPAma": ["04keK6m-H3", "JOIN3"],
    YsirnCRiSb: ["CLN_1RQ9YY", "JOIN2"],
    mj3MUxj6CH: ["CLN_1RQ9YY", "JOIN1"]
  },
  updateJoinOrJoinedGraphNodePropOutput: [
    {
      width: 148,
      height: 180,
      id: "C_Dx-bl4PV",
      to: ["P9x2uEdq1d", "X4pqXQKF7t"],
      type: "ENTRY_TRIGGER",
      pathsInfo: {
        P9x2uEdq1d: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 1",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE"
                        },
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          doubleValue: 50
                        },
                        isExcluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {
                CLN_1RQ9YY: [],
                "04keK6m-H3": [],
                X4pqXQKF7t: []
              }
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        X4pqXQKF7t: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "entryTrigger",
            name: "Path 2",
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE"
                        },
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          doubleValue: 45
                        },
                        isExcluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "C_Dx-bl4PV",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {
                CLN_1RQ9YY: [],
                "04keK6m-H3": [],
                X4pqXQKF7t: []
              }
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        }
      },
      props: {
        blockData: {
          triggerType: "USER_EVENT",
          userEventTrigger: {
            triggerFilterType: "ALL_CUSTOMERS",
            eventType: "transactionAdded",
            conditionalPaths: [
              {
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE"
                            },
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              doubleValue: 50
                            },
                            isExcluded: false
                          }
                        ]
                      }
                    ]
                  }
                },
                path: {
                  pathBlockId: "P9x2uEdq1d",
                  pathName: null
                }
              },
              {
                condition: {
                  compoundExpression: {
                    operator: "OR",
                    expressionGroups: [
                      {
                        operator: "AND",
                        simpleExpressions: [
                          {
                            fact: {
                              factId: "tjqr20",
                              profileId: "TRANSACTION_PROFILE"
                            },
                            operator: "EQ",
                            operand: {
                              type: "DOUBLE_VALUE",
                              doubleValue: 45
                            },
                            isExcluded: false
                          }
                        ]
                      }
                    ]
                  }
                },
                path: {
                  pathBlockId: "X4pqXQKF7t",
                  pathName: null
                }
              }
            ]
          }
        },
        allAudienceGroups: {}
      },
      isMultiPath: true,
      placeholderToIndex: 1
    },
    {
      id: "P9x2uEdq1d",
      name: "TILL",
      userEventTrigger: {
        triggerFilterType: "ALL_CUSTOMERS",
        eventType: "transactionAdded",
        conditionalPaths: [
          {
            path: {
              pathName: null,
              pathBlockId: "aO5-eWUPMk"
            },
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      waitDurationRO: {
        duration: 1,
        timeUnit: "HOURS"
      },
      postWaitPath: {
        pathName: "Wait time expired path",
        pathBlockId: "GoPSnp68IE"
      },
      props: {
        iconType: "waitEvent",
        color: "#23cccc",
        blockType: "WAIT_TILL_EVENT",
        isConfigured: true,
        viewMode: false,
        id: "P9x2uEdq1d",
        isMultiPath: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            blockData: {
              id: "P9x2uEdq1d",
              name: "TILL",
              userEventTrigger: {
                triggerFilterType: "ALL_CUSTOMERS",
                eventType: "transactionAdded",
                conditionalPaths: [
                  {
                    path: {
                      pathName: null,
                      pathBlockId: "aO5-eWUPMk"
                    },
                    condition: {
                      compoundExpression: {
                        operator: "OR",
                        expressionGroups: [
                          {
                            operator: "AND",
                            simpleExpressions: [
                              {
                                fact: {
                                  factId: "tjqr20",
                                  profileId: "TRANSACTION_PROFILE",
                                  params: []
                                },
                                functions: [],
                                operator: "EQ",
                                operand: {
                                  type: "DOUBLE_VALUE",
                                  longValue: null,
                                  stringValue: null,
                                  doubleValue: 50,
                                  booleanValue: null,
                                  longList: null,
                                  stringList: null,
                                  doubleList: null
                                },
                                isExcluded: false,
                                excluded: false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              waitDurationRO: {
                duration: 1,
                timeUnit: "HOURS"
              },
              postWaitPath: {
                pathName: "Wait time expired path",
                pathBlockId: "GoPSnp68IE"
              },
              blockType: "WAIT_TILL_EVENT"
            },
            blockId: "P9x2uEdq1d",
            type: "WAIT_TILL_EVENT"
          },
          _owner: null,
          _store: {}
        }
      },
      type: "BLOCK_NODE",
      to: ["CLN_1RQ9YY", "12pNxGPAma"],
      pathsInfo: {
        CLN_1RQ9YY: {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "waitTillEvent",
            name: {
              key: null,
              ref: null,
              props: {
                id: "adionaUIApp.common.eventPath",
                defaultMessage: "Event path",
                values: {}
              },
              _owner: null,
              _store: {}
            },
            condition: {
              compoundExpression: {
                operator: "OR",
                expressionGroups: [
                  {
                    operator: "AND",
                    simpleExpressions: [
                      {
                        fact: {
                          factId: "tjqr20",
                          profileId: "TRANSACTION_PROFILE",
                          params: []
                        },
                        functions: [],
                        operator: "EQ",
                        operand: {
                          type: "DOUBLE_VALUE",
                          longValue: null,
                          stringValue: null,
                          doubleValue: 50,
                          booleanValue: null,
                          longList: null,
                          stringList: null,
                          doubleList: null
                        },
                        isExcluded: false,
                        excluded: false
                      }
                    ]
                  }
                ]
              }
            },
            blockId: "P9x2uEdq1d",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        },
        "12pNxGPAma": {
          previewComponent: {
            displayName: "withStyles__StyledComponent",
            attrs: [],
            componentStyle: {
              rules: [
                "&.entry-trigger-popover,&.decision-split-popover{&.ant-popover.cap-popover-v2{width:650px;max-width:650px;max-height:360px;}.ant-popover-inner-content{max-height:360px;overflow:auto;}.condition-group-block{margin-top:24px;}.condition-simple-block{margin-top:16px;}.condition-divider{margin:0px;}.within-text{display:inline-block;margin-right:5px;}.within-duration{display:inline-block;margin-right:3px;font-size:14px;}.decision-split-condition-wrapper{padding:4px 0px;}.decision-split-condition{padding:2px 0px;}}&.remainder-truncate-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40px;}.cap-truncate-list{.ant-tooltip-inner{max-height:300px;}}",
                ";"
              ],
              isStatic: false,
              componentId: "withStyles__StyledComponent-sc-1eghlp0-0",
              lastClassName: "kWaAQH"
            },
            foldedComponentIds: [],
            styledComponentId: "withStyles__StyledComponent-sc-1eghlp0-0"
          },
          previewProps: {
            header: "waitExpiredPath",
            name: "Wait time expired path",
            condition: {
              duration: 1,
              timeUnit: "HOURS"
            },
            blockId: "P9x2uEdq1d",
            events: [
              {
                type: "STANDARD",
                name: "CouponRedeem"
              },
              {
                type: "STANDARD",
                name: "customerAdded"
              },
              {
                type: "STANDARD",
                name: "transactionAdded"
              },
              {
                type: "BEHAVIOURAL",
                name: "reviewAdded"
              }
            ],
            grammar: {
              LqNBP7: "Bill type of the transaction",
              "32p234": "Basket Sum with product",
              "8arjDE": "Date of the transaction",
              "56de3w": "Extended field in the customer",
              "3UcyB2": "Discount on the transaction",
              sRc59p: "Customer source",
              o765rt: "OrgUnit",
              "5sLAB9": "Customer's slab name",
              "5LFP9e": "Customer Lifetime Purchases",
              "5zpWFg": "Transaction number",
              "87ytre": "Customer externalId",
              sNb89U: "Customer slab number",
              "3er25q": "Customer Custom fields filter",
              "4cP21P": "Customer points",
              loY34k: "Customer is Loyal",
              "5HmDCN": "Count of line-items in the transaction",
              tjqr20: "Value of the transaction",
              cy654u: "Concept",
              t987re: "Customer Lifetime Transaction Count",
              "9i58j1": "Zone",
              "23g26d": "Extended fields in the transaction",
              "9LF38S": "Customer Lifetime Points",
              "17t80a": "Store",
              mFL59r: "Gross amount of the transaction",
              "1wg27d": "Custom fields in the transaction",
              c654er: "Customer's segments"
            },
            couponsData: {
              couponsData: {}
            },
            allAudienceGroups: {},
            brand: [],
            category: [],
            productAttribute: [],
            customerSegmentValues: [],
            conceptValues: [],
            zoneValues: [],
            storeValues: [],
            customFieldValues: []
          }
        }
      },
      from: "C_Dx-bl4PV"
    },
    {
      id: "CLN_1RQ9YY",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "CLN_1RQ9YY",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS1"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS1"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS1"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS1"
            },
            blockId: "CLN_1RQ9YY"
          },
          _owner: null,
          _store: {}
        },
        joinBlockNameArray: ["JOIN1"]
      },
      to: ["aO5-eWUPMk"],
      from: "P9x2uEdq1d",
      type: "BLOCK_NODE"
    },
    {
      width: 42,
      height: 42,
      id: "aO5-eWUPMk",
      props: {
        type: "end",
        style: {
          color: "#47af46",
          padding: "9px 0"
        },
        textLabel: {
          type: {
            displayName: "CapLabel",
            attrs: [],
            componentStyle: {
              rules: [
                "font-size:",
                null,
                ";font-weight:",
                null,
                ";color:",
                null,
                ";line-height:",
                null,
                ";"
              ],
              isStatic: false,
              componentId: "CapLabel-n7zsf5-0",
              lastClassName: "hcywYU"
            },
            foldedComponentIds: [],
            styledComponentId: "CapLabel-n7zsf5-0",
            target: "div",
            propTypes: {},
            CapLabelInline: {
              displayName: "CapLabel__CapLabelInline",
              attrs: [],
              componentStyle: {
                rules: [
                  "font-size:",
                  null,
                  ";font-weight:",
                  null,
                  ";color:",
                  null,
                  ";line-height:",
                  null,
                  ";"
                ],
                isStatic: false,
                componentId: "CapLabel__CapLabelInline-n7zsf5-1",
                lastClassName: "gBSzRM"
              },
              foldedComponentIds: [],
              styledComponentId: "CapLabel__CapLabelInline-n7zsf5-1",
              target: "span"
            },
            _foldedDefaultProps: {
              type: "label1"
            }
          },
          key: null,
          ref: null,
          props: {
            type: "label2",
            className: "margin-l-2 margin-t-5",
            children: {
              key: null,
              ref: null,
              props: {
                id: "adionaUIApp.common.end",
                defaultMessage: "End",
                values: {}
              },
              _owner: null,
              _store: {}
            }
          },
          _owner: null,
          _store: {}
        }
      },
      type: "END_NODE",
      from: "CLN_1RQ9YY"
    },
    {
      id: "12pNxGPAma",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "12pNxGPAma",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: "Join",
        blockData: {
          name: "JOIN3"
        },
        isConfigured: false
      },
      from: "P9x2uEdq1d",
      type: "BLOCK_NODE"
    },
    {
      id: "X4pqXQKF7t",
      props: {
        iconType: "sms",
        color: "#fec52e",
        id: "X4pqXQKF7t",
        blockType: "SMS",
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureSms",
            defaultMessage: "SMS",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          content: {
            couponOffers: [],
            pointsOffers: [],
            body: "SMS3"
          },
          deliverySettings: {
            domainId: 3461,
            gsmSenderId: "TATADG"
          },
          name: "SMS3"
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "SMS",
            blockData: {
              content: {
                couponOffers: [],
                pointsOffers: [],
                body: "SMS3"
              },
              deliverySettings: {
                domainId: 3461,
                gsmSenderId: "TATADG"
              },
              name: "SMS3"
            },
            blockId: "X4pqXQKF7t"
          },
          _owner: null,
          _store: {}
        }
      },
      to: ["mj3MUxj6CH"],
      from: "C_Dx-bl4PV",
      type: "BLOCK_NODE"
    },
    {
      id: "mj3MUxj6CH",
      props: {
        iconType: "join",
        color: "#23cccc",
        id: "mj3MUxj6CH",
        blockType: "JOIN",
        isMultiPath: false,
        nodeTitle: {
          key: null,
          ref: null,
          props: {
            id: "adionaUIApp.components.pages.JourneyBuilder.configureJoin",
            defaultMessage: "Join",
            values: {}
          },
          _owner: null,
          _store: {}
        },
        blockData: {
          name: "JOIN1",
          nextBlock: {
            pathBlockId: "CLN_1RQ9YY",
            pathName: "SMS1"
          }
        },
        isConfigured: true,
        nodePreview: {
          key: null,
          ref: null,
          props: {
            type: "JOIN",
            flowControlBlockName: "JOIN1",
            joinedBlockName: "SMS1"
          },
          _owner: null,
          _store: {}
        }
      },
      from: "X4pqXQKF7t",
      type: "BLOCK_NODE"
    },
    {
      width: 148,
      height: 180,
      id: "59iTeDxv_B",
      to: [],
      type: "EXIT_TRIGGER",
      pathsInfo: {},
      props: {
        blockData: {
          triggerType: "USER_EVENT",
          userEventTrigger: {
            triggerFilterType: "ALL_CUSTOMERS",
            eventType: "transactionAdded",
            conditionalPath: {
              condition: {
                compoundExpression: {
                  operator: "OR",
                  expressionGroups: [
                    {
                      operator: "AND",
                      simpleExpressions: [
                        {
                          fact: {
                            factId: "tjqr20",
                            profileId: "TRANSACTION_PROFILE",
                            params: []
                          },
                          functions: [],
                          operator: "EQ",
                          operand: {
                            type: "DOUBLE_VALUE",
                            longValue: null,
                            stringValue: null,
                            doubleValue: 50,
                            booleanValue: null,
                            longList: null,
                            stringList: null,
                            doubleList: null
                          },
                          isExcluded: false,
                          excluded: false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        },
        viewMode: false,
        blockType: "EXIT_TRIGGER",
        grammar: {
          LqNBP7: "Bill type of the transaction",
          "32p234": "Basket Sum with product",
          "8arjDE": "Date of the transaction",
          "56de3w": "Extended field in the customer",
          "3UcyB2": "Discount on the transaction",
          sRc59p: "Customer source",
          o765rt: "OrgUnit",
          "5sLAB9": "Customer's slab name",
          "5LFP9e": "Customer Lifetime Purchases",
          "5zpWFg": "Transaction number",
          "87ytre": "Customer externalId",
          sNb89U: "Customer slab number",
          "3er25q": "Customer Custom fields filter",
          "4cP21P": "Customer points",
          loY34k: "Customer is Loyal",
          "5HmDCN": "Count of line-items in the transaction",
          tjqr20: "Value of the transaction",
          cy654u: "Concept",
          t987re: "Customer Lifetime Transaction Count",
          "9i58j1": "Zone",
          "23g26d": "Extended fields in the transaction",
          "9LF38S": "Customer Lifetime Points",
          "17t80a": "Store",
          mFL59r: "Gross amount of the transaction",
          "1wg27d": "Custom fields in the transaction",
          c654er: "Customer's segments"
        }
      },
      isMultiPath: false
    },
    {
      width: 148,
      height: 161,
      id: "5eDwSQu6Fi",
      type: "SCHEDULE_BLOCK",
      isMultiPath: false,
      props: {
        id: "5eDwSQu6Fi",
        blockData: {
          startType: "IMMEDIATE",
          endType: "NEVER",
          startsFrom: null,
          endsAt: 7226562600000
        },
        viewMode: false
      }
    }
  ]
};
