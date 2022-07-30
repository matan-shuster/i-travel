'use strict';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Events', [
            {
                name: 'McDonalds',
                address: 'HaHashmonaim St 94, Tel Aviv-Yafo, 6713311, Israel',
                latitude: '32.0690383',
                longitude: '34.7845191',
                type: 'restaurant',
                reviewRating: 3.6,
                openingHours: JSON.stringify({
                    "periods": [

                        {

                            "close": {

                                "day": 0,

                                "time": "2200"

                            },

                            "open": {

                                "day": 0,

                                "time": "1200"

                            }

                        },

                        {

                            "close": {

                                "day": 1,

                                "time": "2300"

                            },

                            "open": {

                                "day": 1,

                                "time": "1200"

                            }

                        },

                        {

                            "close": {

                                "day": 2,

                                "time": "2300"

                            },

                            "open": {

                                "day": 2,

                                "time": "1200"

                            }

                        },

                        {

                            "close": {

                                "day": 3,

                                "time": "2300"

                            },

                            "open": {

                                "day": 3,

                                "time": "1200"

                            }

                        },

                        {

                            "close": {

                                "day": 4,

                                "time": "2300"

                            },

                            "open": {

                                "day": 4,

                                "time": "1200"

                            }

                        },

                        {

                            "close": {

                                "day": 5,

                                "time": "2300"

                            },

                            "open": {

                                "day": 5,

                                "time": "1200"

                            }

                        },

                        {

                            "close": {

                                "day": 6,

                                "time": "2300"

                            },

                            "open": {

                                "day": 6,

                                "time": "1200"

                            }

                        }

                    ],
                    "weekday_text": [

                        "Monday: 12:00 – 11:00 PM",

                        "Tuesday: 12:00 – 11:00 PM",

                        "Wednesday: 12:00 – 11:00 PM",

                        "Thursday: 12:00 – 11:00 PM",

                        "Friday: 12:00 – 11:00 PM",

                        "Saturday: 12:00 – 11:00 PM",

                        "Sunday: 12:00 – 11:00 PM"

                    ]

                }),
                picture: null,
                eventStart: '2022-07-25 09:00:00',
                eventEnd: '2022-07-25 12:00:00',
                tripID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '416',
                address: 'HaArbaa St 16, Tel Aviv-Yafo, Israel',
                latitude: ' 32.07027519999999',
                longitude: '34.78460130000001',
                type: 'restaurant',
                reviewRating: 4.5,
                openingHours: JSON.stringify({
                "open_now": true,
                "periods": [

                    {

                        "close": {

                            "day": 0,

                            "time": "2300"

                        },

                        "open": {

                            "day": 0,

                            "time": "1200"

                        }

                    },

                    {

                        "close": {

                            "day": 1,

                            "time": "2300"

                        },

                        "open": {

                            "day": 1,

                            "time": "1200"

                        }

                    },

                    {

                        "close": {

                            "day": 2,

                            "time": "2300"

                        },

                        "open": {

                            "day": 2,

                            "time": "1200"

                        }

                    },

                    {

                        "close": {

                            "day": 3,

                            "time": "2300"

                        },

                        "open": {

                            "day": 3,

                            "time": "1200"

                        }

                    },

                    {

                        "close": {

                            "day": 4,

                            "time": "2300"

                        },

                        "open": {

                            "day": 4,

                            "time": "1200"

                        }

                    },

                    {

                        "close": {

                            "day": 5,

                            "time": "2300"

                        },

                        "open": {

                            "day": 5,

                            "time": "1200"

                        }

                    },

                    {

                        "close": {

                            "day": 6,

                            "time": "2300"

                        },

                        "open": {

                            "day": 6,

                            "time": "1200"

                        }

                    }

                ],
                "weekday_text": [

                    "Monday: 12:00 – 11:00 PM",

                    "Tuesday: 12:00 – 11:00 PM",

                    "Wednesday: 12:00 – 11:00 PM",

                    "Thursday: 12:00 – 11:00 PM",

                    "Friday: 12:00 – 11:00 PM",

                    "Saturday: 12:00 – 11:00 PM",

                    "Sunday: 12:00 – 11:00 PM"

                ]

            }),
                    picture: null,
                    eventStart: '2022-07-25 13:00:00',
                    eventEnd: '2022-07-25 16:00:00',
                    tripID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            {
                    name: "the brothers",
                    address: "Shlomo Ibn Gabirol St 26, Tel Aviv-Yafo, Israel",
                    latitude: '32.0745892',
                    longitude: '34.78206639999999',
                    type: 'restaurant',
                    reviewRating: 4.5,
                    openingHours: JSON.stringify({


                        "periods": [

                            {

                                "close": {

                                    "day": 0,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 0,

                                    "time": "0800"

                                }

                            },

                            {

                                "close": {

                                    "day": 1,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 1,

                                    "time": "0800"

                                }

                            },

                            {

                                "close": {

                                    "day": 2,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 2,

                                    "time": "0800"

                                }

                            },

                            {

                                "close": {

                                    "day": 3,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 3,

                                    "time": "0800"

                                }

                            },

                            {

                                "close": {

                                    "day": 4,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 4,

                                    "time": "0800"

                                }

                            },

                            {

                                "close": {

                                    "day": 5,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 5,

                                    "time": "0800"

                                }

                            },

                            {

                                "close": {

                                    "day": 6,

                                    "time": "2300"

                                },

                                "open": {

                                    "day": 6,

                                    "time": "1200"

                                }

                            }

                        ],

                        "weekday_text": [

                            "Monday: 8:00 AM – 11:00 PM",

                            "Tuesday: 8:00 AM – 11:00 PM",

                            "Wednesday: 8:00 AM – 11:00 PM",

                            "Thursday: 8:00 AM – 11:00 PM",

                            "Friday: 8:00 AM – 11:00 PM",

                            "Saturday: 12:00 – 11:00 PM",

                            "Sunday: 8:00 AM – 11:00 PM"

                        ]

                    }),
                    picture: null,
                    eventStart: '2022-07-25 17:00:00',
                    eventEnd: '2022-07-25 20:00:00',
                    tripID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
            },
            {
                    name: "Zozobra",
                    address: "HaHashmonaim St 96, Tel Aviv-Yafo, Israel",
                    latitude: '32.0691568',
                    longitude: '34.7855231',
                    type: 'restaurant',
                    reviewRating: 4.4,
                    openingHours: JSON.stringify({
                        "periods": [
                            {
                                "close": {
                                    "day": 0,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 0,
                                    "time": "1200"
                                }
                            },
                            {
                                "close": {
                                    "day": 1,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 1,
                                    "time": "1200"
                                }
                            },
                            {
                                "close": {
                                    "day": 2,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 2,
                                    "time": "1200"
                                }
                            },
                            {
                                "close": {
                                    "day": 3,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 3,
                                    "time": "1200"
                                }
                            },
                            {
                                "close": {
                                    "day": 4,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 4,
                                    "time": "1200"
                                }
                            },
                            {
                                "close": {
                                    "day": 5,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 5,
                                    "time": "1200"
                                }
                            },
                            {
                                "close": {
                                    "day": 6,
                                    "time": "2230"
                                },
                                "open": {
                                    "day": 6,
                                    "time": "1200"
                                }
                            }
                        ],
                        "weekday_text": [
                            "Monday: 12:00 – 10:30 PM",
                            "Tuesday: 12:00 – 10:30 PM",
                            "Wednesday: 12:00 – 10:30 PM",
                            "Thursday: 12:00 – 10:30 PM",
                            "Friday: 12:00 – 10:30 PM",
                            "Saturday: 12:00 – 10:30 PM",
                            "Sunday: 12:00 – 10:30 PM"
                        ]
                    }),
                    picture: null,
                    eventStart: '2022-07-25 21:00:00',
                    eventEnd: '2022-07-25 22:00:00',
                    tripID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
            },
            {
                name: "Chicken Station",
                address: "HaHashmonaim St 96, Tel Aviv-Yafo, Israel",
                latitude: "32.0691568",
                longitude: "34.7855231",
                type: "restaurant",
                reviewRating: 4.4,
                openingHours:JSON.stringify( {
                    "periods": [

                        {

                            "close": {

                                "day": 0,

                                "time": "1700"

                            },

                            "open": {

                                "day": 0,

                                "time": "1100"

                            }

                        },

                        {

                            "close": {

                                "day": 1,

                                "time": "1700"

                            },

                            "open": {

                                "day": 1,

                                "time": "1100"

                            }

                        },

                        {

                            "close": {

                                "day": 2,

                                "time": "1700"

                            },

                            "open": {

                                "day": 2,

                                "time": "1100"

                            }

                        },

                        {

                            "close": {

                                "day": 3,

                                "time": "1700"

                            },

                            "open": {

                                "day": 3,

                                "time": "1100"

                            }

                        },

                        {

                            "close": {

                                "day": 4,

                                "time": "1700"

                            },

                            "open": {

                                "day": 4,

                                "time": "1100"

                            }

                        },

                        {

                            "close": {

                                "day": 5,

                                "time": "1300"

                            },

                            "open": {

                                "day": 5,

                                "time": "1100"

                            }

                        }

                    ],
                    "weekday_text": [

                        "Monday: 11:00 AM – 5:00 PM",

                        "Tuesday: 11:00 AM – 5:00 PM",

                        "Wednesday: 11:00 AM – 5:00 PM",

                        "Thursday: 11:00 AM – 5:00 PM",

                        "Friday: 11:00 AM – 1:00 PM",

                        "Saturday: Closed",

                        "Sunday: 11:00 AM – 5:00 PM"

                    ]

                }),
                picture: null,
                eventStart: '2022-07-25 22:30:00',
                eventEnd: '2022-07-25 23:30:00',
                tripID: 1,
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: "Zozobra2",
                address: "HaHashmonaim St 96, Tel Aviv-Yafo, Israel",
                latitude: '32.0691568',
                longitude: '34.7855231',
                type: 'restaurant',
                reviewRating: 4.4,
                openingHours: JSON.stringify({
                    "periods": [
                        {
                            "close": {
                                "day": 0,
                                "time": "2230"
                            },
                            "open": {
                                "day": 0,
                                "time": "1200"
                            }
                        },
                        {
                            "close": {
                                "day": 1,
                                "time": "2230"
                            },
                            "open": {
                                "day": 1,
                                "time": "1200"
                            }
                        },
                        {
                            "close": {
                                "day": 2,
                                "time": "2230"
                            },
                            "open": {
                                "day": 2,
                                "time": "1200"
                            }
                        },
                        {
                            "close": {
                                "day": 3,
                                "time": "2230"
                            },
                            "open": {
                                "day": 3,
                                "time": "1200"
                            }
                        },
                        {
                            "close": {
                                "day": 4,
                                "time": "2230"
                            },
                            "open": {
                                "day": 4,
                                "time": "1200"
                            }
                        },
                        {
                            "close": {
                                "day": 5,
                                "time": "2230"
                            },
                            "open": {
                                "day": 5,
                                "time": "1200"
                            }
                        },
                        {
                            "close": {
                                "day": 6,
                                "time": "2230"
                            },
                            "open": {
                                "day": 6,
                                "time": "1200"
                            }
                        }
                    ],
                    "weekday_text": [
                        "Monday: 12:00 – 10:30 PM",
                        "Tuesday: 12:00 – 10:30 PM",
                        "Wednesday: 12:00 – 10:30 PM",
                        "Thursday: 12:00 – 10:30 PM",
                        "Friday: 12:00 – 10:30 PM",
                        "Saturday: 12:00 – 10:30 PM",
                        "Sunday: 12:00 – 10:30 PM"
                    ]
                }),
                picture: null,
                eventStart: '2022-07-27 09:00:00',
                eventEnd: '2022-07-27 11:00:00',
                tripID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
                {
            name: "the brothers2",
            address: "Shlomo Ibn Gabirol St 26, Tel Aviv-Yafo, Israel",
            latitude: '32.0745892',
            longitude: '34.78206639999999',
            type: 'restaurant',
            reviewRating: 4.5,
            openingHours: JSON.stringify({


            "periods": [

                {

                    "close": {

                        "day": 0,

                        "time": "2300"

                    },

                    "open": {

                        "day": 0,

                        "time": "0800"

                    }

                },

                {

                    "close": {

                        "day": 1,

                        "time": "2300"

                    },

                    "open": {

                        "day": 1,

                        "time": "0800"

                    }

                },

                {

                    "close": {

                        "day": 2,

                        "time": "2300"

                    },

                    "open": {

                        "day": 2,

                        "time": "0800"

                    }

                },

                {

                    "close": {

                        "day": 3,

                        "time": "2300"

                    },

                    "open": {

                        "day": 3,

                        "time": "0800"

                    }

                },

                {

                    "close": {

                        "day": 4,

                        "time": "2300"

                    },

                    "open": {

                        "day": 4,

                        "time": "0800"

                    }

                },

                {

                    "close": {

                        "day": 5,

                        "time": "2300"

                    },

                    "open": {

                        "day": 5,

                        "time": "0800"

                    }

                },

                {

                    "close": {

                        "day": 6,

                        "time": "2300"

                    },

                    "open": {

                        "day": 6,

                        "time": "1200"

                    }

                }

            ],

            "weekday_text": [

                "Monday: 8:00 AM – 11:00 PM",

                "Tuesday: 8:00 AM – 11:00 PM",

                "Wednesday: 8:00 AM – 11:00 PM",

                "Thursday: 8:00 AM – 11:00 PM",

                "Friday: 8:00 AM – 11:00 PM",

                "Saturday: 12:00 – 11:00 PM",

                "Sunday: 8:00 AM – 11:00 PM"

            ]

        }),
            picture: null,
            eventStart: '2022-07-27 13:00:00',
            eventEnd: '2022-07-27 15:00:00',
            tripID: 2,
            createdAt: new Date(),
            updatedAt: new Date()
    },
            ]
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Event', null, {});
    }
};
