## Lambert-Wilson


This library enables you to convert any french based coordinates defined by Lambert into longitude, latitude (WGS).

Installation:

```
npm install lambert-wilson
```

Example usage:

```
var lw = require("../index.js")(45, 0, 0);

lw.toLambert(-0.570645, 44.840397);
{ X: 1417799.8,
  Y: 4188483.8 }

lw.toLonLat(1417799.8, 4188483.8);
{lon: -0.570645, lat: 44.840397}

```
