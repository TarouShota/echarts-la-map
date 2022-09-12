var ROOT_PATH = {
  nodes: [
    {
      // {
      //   "X": "-117.932505999518",
      //   "Y": "34.1290480003333",
      //   "OBJECTID": 94,
      //   "MetroLine": "Gold Line",
      //   "Station": "Irwindale Station",
      //   "StopNumber": 80425,
      //   "TOOLTIP": "Stop: Irwindale Station\\nStop No: 80425\\nGold Line",
      //   "NLA_URL": "http://www.metro.net/riding/maps/gold-line/?nla_target=1&nla_win=p,75,75"
      // },
      // {
      //   "X": "-117.906631000008",
      //   "Y": "34.135863000022",
      //   "OBJECTID": 95,
      //   "MetroLine": "Gold Line",
      //   "Station": "Azusa Downtown Station",
      //   "StopNumber": 80426,
      //   "TOOLTIP": "Stop: Azusa Downtown Station\\nStop No: 80426\\nGold Line",
      //   "NLA_URL": "http://www.metro.net/riding/maps/gold-line/?nla_target=1&nla_win=p,75,75"
      // },
      // {
      //   "X": "-117.891635999466",
      //   "Y": "34.1368139997524",
      //   "OBJECTID": 96,
      // {
      //   id: 3,
      //   x: -118.189384000152,
      //   y:33.7818300003661,
      //   value: 2,
      //   name:3,
      //   category: 0
      // }, {
      //   id: 2,
      //   x: -118.19369999947,
      //   y: 33.7722580000581,
      //   name:2,
      //   value: 1,
      //   category: 0
      // }
      //   "MetroLine": "Gold Line",
      //   "Station": "APU / Citrus College Station",
      //   "StopNumber": 80427,
      //   "TOOLTIP": "Stop: APU / Citrus College Station\\nStop No: 80427\\nGold Line",
      //   "NLA_URL": "http://www.metro.net/riding/maps/gold-line/?nla_target=1&nla_win=p,75,75"
      // },
      id: "0",
      name: "Myriel",
      // symbolSize: 4.12381,
      x: -118.189384000152,
      y: 33.7818300003661,
      value: 3,
      category: 0
    },
    {
      id: "1",
      name: "Napoleon",
      // symbolSize: 2.6666666666666665,
      x: -118.19369999947,
      y: 33.7722580000581,
      value: 5,
      category: 1
    },
    {
      id: "2",
      name: "MlleBaptistine",
      // symbolSize: 6.323809333333333,
      x: -117.891635999466,
      y: 34.1368139997524,
      value: 9.485714,
      category: 0
    },
    {
      id: "9",
      name: "munynya",
      x: -118.222503000242,
      y: 33.8760820000881,
      value: 2,
      category: 1
    },
    {
      id: "8",
      name: "chupapi",
      x: "-118.224248999995",
      y: "33.8974900001615",
      value: 1,
      category: 1
    }
  ],
  links: [
    {
      source: 0,
      target: "8"
    },
    {
      source: "2",
      target: "1"
    },
    {
      source: "3",
      target: "0"
    },
    {
      source: "8",
      target: "9"
    }
  ],
  categories: [
    {
      name: "A"
    },
    {
      name: "B"
    },
    {
      name: "C"
    }
  ]
};
export default ROOT_PATH;
