## Lambert-Wilson


This library enables you to convert any french based coordinates defined by Lambert into longitude, latitude (WGS).

Installation:

```
npm install lambert-wilson
```

Example usage:

```
var CC = 45; // CC is the number of the lamber projection 
var deltaX = 4177302.562212417;
var deltaY = 1297500.1046884255; 
// deltaX, deltaY are the shifts from the original center

var lw = require("lambert-wilson")(CC, deltaX, deltaY);
```

and then you can:

```
lw.toLambert(-0.575587, 44.837900)
{ X: -2759905.345153167,
  Y: 2890723.679827112 }
```

and reverse:

```
lw.toLonLat(-2759905.345153167, 2890723.679827112)
{ lon: -0.5755870000000036,
  lat: -44.83789998510867 }
```

