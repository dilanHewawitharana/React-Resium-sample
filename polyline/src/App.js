import './App.css';
import { hot } from "react-hot-loader/root";
import React from "react";
import { Ion, Transforms,  Cartesian3, Cartesian2, Color, Plane, EasingFunction, IonResource, createWorldTerrain} from "cesium";
import { Viewer,CameraFlyTo, PolylineCollection , Polyline, Entity, } from "resium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YTE5OTgwYi02OTFlLTQ1MTAtYmMyYS1jMDJmNmU2NDA0Y2IiLCJpZCI6NDM4MTQsImlhdCI6MTYxMzE3NzEyOX0.ObeEH-g-STnws6Kwbs0xSNFvjfGC8k8SrmTyd-SEsW0';

const center = Cartesian3.fromDegrees(100, 25, 3000);
const positions = [
  new Cartesian3(-8000,  8000, 4000),
  new Cartesian3(-8000, -8000, 4500),
  new Cartesian3( 8000, -8000, 5000),
  new Cartesian3( 8000,  8000, 5500),
  new Cartesian3(-8000,  8000, 6000),
  new Cartesian3(-8000, -8000, 6500),
  new Cartesian3( 8000, -8000, 7000),
  new Cartesian3( 8000,  8000, 7500),
  new Cartesian3(-8000,  8000, 8000),
  new Cartesian3(-8000, -8000, 8500),
  new Cartesian3( 8000, -8000, 9000),
  new Cartesian3( 8000,  8000, 9500),
  new Cartesian3(-8000,  8000, 10000),
];

const bluePlane = {
  plane: new Plane(Cartesian3.UNIT_X, 0.0),
  dimensions: new Cartesian2(20000.0, 20000.0),
  material: Color.BLUE,
}

const redPlane = {
    plane: new Plane(Cartesian3.UNIT_Y, 0.0),
    dimensions: new Cartesian2(20000.0, 20000.0),
    material: Color.RED.withAlpha(0.5),
    outline: true,
    outlineColor: Color.BLACK,
}

const outlineplane = {
    plane: new Plane(Cartesian3.UNIT_Z, 0.0),
    dimensions: new Cartesian2(20000.0, 20000.0),
    fill: false,
    outline: true,
    outlineColor: Color.YELLOW,
}

const terrainProvider = createWorldTerrain(
  {
    url: IonResource.fromAssetId(3957),
    requestWaterMask : true, // required for water effects
    requestVertexNormals : true // required for terrain lighting
  }
)


const App = () => (
  <Viewer full terrainProvider={terrainProvider}>
    <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
      <Polyline width={2} positions={positions} />
    </PolylineCollection>

    <Entity name="Blue plane" position={center} plane={bluePlane} />

    <Entity name="Red plane with black outline" position={center} plane={redPlane} />

    <Entity name="Yellow plane outline" width={10} position={center} plane={outlineplane} />

    <CameraFlyTo  duration={8} 
                  destination={Cartesian3.fromDegrees(99.64, 24.89, 20000)}     
                  orientation={{
                                heading: -4.98,
                                pitch: -0.32003481981370063,
                              }}
                  easingFunction={EasingFunction.QUADRATIC_IN_OUT} />
  </Viewer>

);
export default hot(App);