var Cesium = require('cesium/Cesium');
require('./css/main.css');
require('cesium/Widgets/widgets.css');

var viewer = new Cesium.Viewer('cesiumContainer');

var wyoming = viewer.entities.add({
    polygon : {
      hierarchy : Cesium.Cartesian3.fromDegreesArray([
                                -109.080842,45.002073,
                                -105.91517,45.002073,
                                -104.058488,44.996596,
                                -104.053011,43.002989,
                                -104.053011,41.003906,
                                -105.728954,40.998429,
                                -107.919731,41.003906,
                                -109.04798,40.998429,
                                -111.047063,40.998429,
                                -111.047063,42.000709,
                                -111.047063,44.476286,
                                -111.05254,45.002073]),
      height : 0,
      material : Cesium.Color.RED.withAlpha(0.5),
      outline : true,
      outlineColor : Cesium.Color.BLACK
    }
  });

var blueBox = viewer.entities.add({
    name: "Blue box",
    position: Cesium.Cartesian3.fromDegrees(-114.0, 38.0, 300000.0),
    box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        material: Cesium.Color.BLUE,
    },
});

var redBox = viewer.entities.add({
    name: "Red box with black outline",
    position: Cesium.Cartesian3.fromDegrees(-107.0, 38.0, 300000.0),
    box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK,
    },
});

var boxoutlineOnly = viewer.entities.add({
    name: "Yellow box outline",
    position: Cesium.Cartesian3.fromDegrees(-100.0, 38.0, 300000.0),
    box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.YELLOW,
    },
});

var greenCircle = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-111.0, 32, 150000.0),
    name: "Green circle at height with outline",
    ellipse: {
      semiMinorAxis: 300000.0,
      semiMajorAxis: 300000.0,
      height: 200000.0,
      material: Cesium.Color.GREEN,
      outline: true, // height must be set for outline to display
    },
  });
  
var redEllipse = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-103.0, 32),
    name: "Red ellipse on surface",
    ellipse: {
        semiMinorAxis: 250000.0,
        semiMajorAxis: 400000.0,
        material: Cesium.Color.RED.withAlpha(0.5),
    },
});

var blueEllipse = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-95.0, 32, 100000.0),
    name: "Blue translucent, rotated, and extruded ellipse with outline",
    ellipse: {
        semiMinorAxis: 150000.0,
        semiMajorAxis: 300000.0,
        extrudedHeight: 200000.0,
        rotation: Cesium.Math.toRadians(45),
        material: Cesium.Color.BLUE.withAlpha(0.5),
        outline: true,
    },
});

var redCorridor = viewer.entities.add({
    name: "Red corridor on surface with rounded corners",
    corridor: {
        positions: Cesium.Cartesian3.fromDegreesArray([
        -90.0,
        40.0,
        -95.0,
        40.0,
        -95.0,
        45.0,
        ]),
        width: 200000.0,
        material: Cesium.Color.RED.withAlpha(0.5),
    },
});

var greenCorridor = viewer.entities.add({
    name: "Green corridor at height with mitered corners and outline",
    corridor: {
        positions: Cesium.Cartesian3.fromDegreesArray([
        -80.0,
        40.0,
        -85.0,
        40.0,
        -85.0,
        45.0,
        ]),
        height: 100000.0,
        width: 200000.0,
        cornerType: Cesium.CornerType.MITERED,
        material: Cesium.Color.GREEN,
        outline: true, // height required for outlines to display
    },
});
  
var blueCorridor = viewer.entities.add({
    name: "Blue extruded corridor with beveled corners and outline",
    corridor: {
        positions: Cesium.Cartesian3.fromDegreesArray([
        -70.0,
        40.0,
        -75.0,
        40.0,
        -75.0,
        45.0,
        ]),
        height: 200000.0,
        extrudedHeight: 100000.0,
        width: 200000.0,
        cornerType: Cesium.CornerType.BEVELED,
        material: Cesium.Color.BLUE.withAlpha(0.5),
        outline: true, // height or extrudedHeight must be set for outlines to display
        outlineColor: Cesium.Color.WHITE,
    },
});

var greenCylinder = viewer.entities.add({
    name: "Green cylinder with black outline",
    position: Cesium.Cartesian3.fromDegrees(-100.0, 25.0, 200000.0),
    cylinder: {
    length: 400000.0,
    topRadius: 200000.0,
    bottomRadius: 200000.0,
    material: Cesium.Color.GREEN.withAlpha(0.5),
    outline: true,
    outlineColor: Cesium.Color.DARK_GREEN,
    },
});

var redCone = viewer.entities.add({
  name: "Red cone",
  position: Cesium.Cartesian3.fromDegrees(-105.0, 25.0, 200000.0),
  cylinder: {
    length: 400000.0,
    topRadius: 0.0,
    bottomRadius: 200000.0,
    material: Cesium.Color.RED,
  },
});

var redPolygon = viewer.entities.add({
    name: "Red polygon on surface",
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([
        -115.0,
        37.0,
        -115.0,
        32.0,
        -107.0,
        33.0,
        -102.0,
        31.0,
        -102.0,
        35.0,
      ]),
      material: Cesium.Color.RED,
    },
  });
  
var greenPolygon = viewer.entities.add({
    name: "Green extruded polygon",
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
        -108.0,
        42.0,
        -100.0,
        42.0,
        -104.0,
        40.0,
        ]),
        extrudedHeight: 500000.0,
        material: Cesium.Color.GREEN,
        closeTop: false,
        closeBottom: false,
    },
});

var orangePolygon = viewer.entities.add({
    name: "Orange polygon with per-position heights and outline",
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
        -108.0,
        25.0,
        100000,
        -100.0,
        25.0,
        100000,
        -100.0,
        30.0,
        100000,
        -108.0,
        30.0,
        300000,
        ]),
        extrudedHeight: 0,
        perPositionHeight: true,
        material: Cesium.Color.ORANGE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK,
    },
});

var bluePolygon = viewer.entities.add({
    name: "Blue polygon with holes",
    polygon: {
        hierarchy: {
        positions: Cesium.Cartesian3.fromDegreesArray([
            -99.0,
            30.0,
            -85.0,
            30.0,
            -85.0,
            40.0,
            -99.0,
            40.0,
        ]),
        holes: [
            {
            positions: Cesium.Cartesian3.fromDegreesArray([
                -97.0,
                31.0,
                -97.0,
                39.0,
                -87.0,
                39.0,
                -87.0,
                31.0,
            ]),
            holes: [
                {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    -95.0,
                    33.0,
                    -89.0,
                    33.0,
                    -89.0,
                    37.0,
                    -95.0,
                    37.0,
                ]),
                holes: [
                    {
                    positions: Cesium.Cartesian3.fromDegreesArray([
                        -93.0,
                        34.0,
                        -91.0,
                        34.0,
                        -91.0,
                        36.0,
                        -93.0,
                        36.0,
                    ]),
                    },
                ],
                },
            ],
            },
        ],
        },
        material: Cesium.Color.BLUE.withAlpha(0.5),
        height: 0,
        outline: true, // height is required for outline to display
    },
});

var cyanPolygon = viewer.entities.add({
    name: "Cyan vertical polygon with per-position heights and outline",
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
        -90.0,
        41.0,
        0.0,
        -85.0,
        41.0,
        500000.0,
        -80.0,
        41.0,
        0.0,
        ]),
        perPositionHeight: true,
        material: Cesium.Color.CYAN.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK,
    },
});

var purplePolygonUsingRhumbLines = viewer.entities.add({
    name: "Purple polygon using rhumb lines with outline",
    polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArray([
        -115.0,
        50.0,
        -75.0,
        50.0,
        -75.0,
        60.0,
        -115.0,
        60.0,
        ]),
        extrudedHeight: 50000,
        material: Cesium.Color.PURPLE,
        outline: true,
        outlineColor: Cesium.Color.MAGENTA,
        arcType: Cesium.ArcType.RHUMB,
    },
});

var redWall = viewer.entities.add({
    name: "Red wall at height",
    wall: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -115.0,
        44.0,
        200000.0,
        -90.0,
        44.0,
        200000.0,
      ]),
      minimumHeights: [100000.0, 100000.0],
      material: Cesium.Color.RED,
    },
  });
  
var greenWall = viewer.entities.add({
    name: "Green wall from surface with outline",
    wall: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -107.0,
        43.0,
        100000.0,
        -97.0,
        43.0,
        100000.0,
        -97.0,
        40.0,
        100000.0,
        -107.0,
        40.0,
        100000.0,
        -107.0,
        43.0,
        100000.0,
        ]),
        material: Cesium.Color.GREEN,
        outline: true,
    },
});

var blueWall = viewer.entities.add({
    name: "Blue wall with sawtooth heights and outline",
    wall: {
        positions: Cesium.Cartesian3.fromDegreesArray([
        -115.0,
        50.0,
        -112.5,
        50.0,
        -110.0,
        50.0,
        -107.5,
        50.0,
        -105.0,
        50.0,
        -102.5,
        50.0,
        -100.0,
        50.0,
        -97.5,
        50.0,
        -95.0,
        50.0,
        -92.5,
        50.0,
        -90.0,
        50.0,
        ]),
        maximumHeights: [
        100000,
        200000,
        100000,
        200000,
        100000,
        200000,
        100000,
        200000,
        100000,
        200000,
        100000,
        ],
        minimumHeights: [
        0,
        100000,
        0,
        100000,
        0,
        100000,
        0,
        100000,
        0,
        100000,
        0,
        ],
        material: Cesium.Color.BLUE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK,
    },
});

var blueEllipsoid = viewer.entities.add({
    name: "Blue ellipsoid",
    position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
    ellipsoid: {
      radii: new Cesium.Cartesian3(200000.0, 200000.0, 300000.0),
      material: Cesium.Color.BLUE,
    },
});

var redSphere = viewer.entities.add({
    name: "Red sphere with black outline",
    position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
    ellipsoid: {
        radii: new Cesium.Cartesian3(300000.0, 300000.0, 300000.0),
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK,
    },
});

var outlineOnly = viewer.entities.add({
    name: "Yellow ellipsoid outline",
    position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 300000.0),
    ellipsoid: {
        radii: new Cesium.Cartesian3(200000.0, 200000.0, 300000.0),
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.YELLOW,
        slicePartitions: 24,
        stackPartitions: 36,
    },
});

viewer.zoomTo(viewer.entities);

// Toggle the tileset's show property when the button is clicked.
document.querySelector('#wyoming').onclick = function() { wyoming.show = !wyoming.show; };
document.querySelector('#blueBox').onclick = function() { blueBox.show = !blueBox.show; };
document.querySelector('#redBox').onclick = function() { redBox.show = !redBox.show; };
document.querySelector('#boxoutlineOnly').onclick = function() { boxoutlineOnly.show = !boxoutlineOnly.show; };
document.querySelector('#greenCircle').onclick = function() { greenCircle.show = !greenCircle.show; };
document.querySelector('#redEllipse').onclick = function() { redEllipse.show = !redEllipse.show; };
document.querySelector('#blueEllipse').onclick = function() { blueEllipse.show = !blueEllipse.show; };
document.querySelector('#redCorridor').onclick = function() { redCorridor.show = !redCorridor.show; };
document.querySelector('#greenCorridor').onclick = function() { greenCorridor.show = !greenCorridor.show; };
document.querySelector('#blueCorridor').onclick = function() { blueCorridor.show = !blueCorridor.show; };
document.querySelector('#greenCylinder').onclick = function() { greenCylinder.show = !greenCylinder.show; };
document.querySelector('#redCone').onclick = function() { redCone.show = !redCone.show; };
document.querySelector('#redPolygon').onclick = function() { redPolygon.show = !redPolygon.show; };
document.querySelector('#greenPolygon').onclick = function() { greenPolygon.show = !greenPolygon.show; };
document.querySelector('#orangePolygon').onclick = function() { orangePolygon.show = !orangePolygon.show; };
document.querySelector('#bluePolygon').onclick = function() { bluePolygon.show = !bluePolygon.show; };
document.querySelector('#cyanPolygon').onclick = function() { cyanPolygon.show = !cyanPolygon.show; };
document.querySelector('#purplePolygonUsingRhumbLines').onclick = function() { purplePolygonUsingRhumbLines.show = !purplePolygonUsingRhumbLines.show; };
document.querySelector('#redWall').onclick = function() { redWall.show = !redWall.show; };
document.querySelector('#greenWall').onclick = function() { greenWall.show = !greenWall.show; };
document.querySelector('#blueWall').onclick = function() { blueWall.show = !blueWall.show; };
document.querySelector('#blueEllipsoid').onclick = function() { blueEllipsoid.show = !blueEllipsoid.show; };
document.querySelector('#redSphere').onclick = function() { redSphere.show = !redSphere.show; };
document.querySelector('#outlineOnly').onclick = function() { outlineOnly.show = !outlineOnly.show; };

