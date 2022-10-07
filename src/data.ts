var ROOT_PATH: {
  nodes: (
    | {
        id: string;
        name: string;
        x: number;
        y: number;
        value: number;
        category: number;
      }
    | {
        id: string;
        name: string;
        x: string;
        y: string;
        value: number;
        category: number;
      }
  )[];
  links: (
    | {
        source: number;
        target: string;
      }
    | {}
  )[];
  categories: {}[];
} = {
  nodes: [
    {
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
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
    },
    {
      id: "9",
      name: "testName",
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
