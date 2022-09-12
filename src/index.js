import * as echarts from "echarts";
import $, { map } from "jquery";
import ROOT_PATH from "./data.js";
import "echarts/extension/bmap/bmap";
// import data from '../insertData.js'
var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});

fetch("./src/railStops.json").then(async (response) => {
  const stops = await response.json();
  //console.log(stops);
  let graphNodes = {
    nodes: [],
    links: [],
    categories: []
  };
  const createGraph = () => {
    let set = new Set();
    const pushFromTo = (from, to) => {
      let i = from;
      for (i; i <= to; i++) {
        graphNodes.nodes.push({
          id: stops[i]["id"],
          value: stops[i]["id"],
          symbolSize: 4,
          x: stops[i]["X"],
          y: -stops[i]["Y"],
          name: stops[i]["Station"],
          category: stops[i]["MetroLine"]
        });
        graphNodes.links.push({
          source: `${i}`,
          target: i + 1 <= to ? `${i + 1}` : `${i}`
        });
        set.add(stops[i]["MetroLine"]);
      }
    };
    const connectLinks = (source, target) => {
      graphNodes.links.push({
        //.name of the nodes
        source: `${source}`,
        target: `${target}`
      });
    };

    stops.unshift({});
    const pushBlueLine = () => {
      pushFromTo(1, 2);
      pushFromTo(31, 32);
      pushFromTo(3, 20);
      connectLinks(32, 3);
      connectLinks(1, 31);
    };
    const pushGreenLine = () => {
      pushFromTo(49, 62);
    };
    const pushGoldenLine = () => {
      pushFromTo(63, 83);
      pushFromTo(91, 96);
      connectLinks(83, 91);
    };
    const pushRedLine = () => {
      pushFromTo(33, 46);
    };
    const pushExpoLine = () => {
      pushFromTo(21, 30);
      pushFromTo(84, 90);
      connectLinks(84, 30);
    };
    const pushPurleLine = () => {
      pushFromTo(99, 104);
    };
    pushBlueLine();
    pushGreenLine();
    pushGoldenLine();
    pushRedLine();
    pushExpoLine();
    pushPurleLine();

    console.log(graphNodes);
    for (let val of set) {
      graphNodes.categories.push({
        name: val
      });
    }
  };
  createGraph();

  var app = {};
  var option;
  myChart.showLoading();
  let mal = function (graph) {
    myChart.hideLoading();
    option = {
      color: ["#3868C9", "#61E435", "#DFAC12", "#ee6666", "#6AEAEC", "#AA2CEE"],
      backgroundColor: "black",
      tooltip: {},
      // yAxis:[{
      //   inverse:true,
      // }],
      // xAxis:true,
      legend: [
        {
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }
      ],
      series: [
        {
          type: "graph",
          layout: "none",
          circular: {
            rotateLabel: true
          },
          // coordinateSystem:'cartesian2d',
          // xAxisIndex:0,
          // yAxisIndex:1,
          //geoIndex:
          // polyline: true,
          // title:"linear",
          name: "Station",
          // type: "graph",
          // layout: "none",
          inverse: true,
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            show: true,
            position: "right",
            formatter: "{b}"
          },
          labelLayout: {
            hideOverlap: true
          },
          scaleLimit: {
            min: 1,
            max: 10
          },
          lineStyle: {
            width: 1,
            title: "linear",
            color: "source",
            curveness: 0.00001
          }
        }
      ]
    };
    myChart.setOption(option);
  };
  mal(graphNodes);

  option && myChart.setOption(option);

  window.addEventListener("resize", myChart.resize);
});
