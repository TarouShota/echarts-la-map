
# echarts-la-map
Map was created using Apache Echart.

### I got the station's data from geohub lacity.
### Sample data:

```js{
    "X": "-118.19292099988",
    "Y": "33.768070999739",
    "id": 1,
    "MetroLine": "Blue Line",
    "Station": "Downtown Long Beach Station",
    "StopNumber": 80101,
    "TOOLTIP": "Stop: Downtown Long Beach Station\\nStop No: 80101\\nBlue Line",
    "NLA_URL": "http://www.metro.net/riding/maps/blue-line/?nla_target=1&nla_win=p,75,75"
  }
  ```

-  Data from geohub lacity was from .csv format, so I had to convert it to JSON format first.

- Also, I have set up a lightweight JSON endpoint on npoint.io to fetch station's json from there

-  All that is left is write an algorithm, which is going to go through a specific range of stations and connect them.  
-  ```js
-   let set = new Set();
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
          //finding nodes using 'id' property
          source: `${i}`,
          target: i + 1 <= to ? `${i + 1}` : `${i}`//to keep in range
        });
        set.add(stops[i]["MetroLine"]);
      }
    };
    ```


-  I have separated all the lines in different functions for better readability.
