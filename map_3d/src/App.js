import './App.css';
import { hot } from "react-hot-loader/root";

import React from "react";
import { Cartesian3, Ion } from "cesium";
import { Viewer, Entity, PointGraphics, CameraFlyTo } from "resium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YTE5OTgwYi02OTFlLTQ1MTAtYmMyYS1jMDJmNmU2NDA0Y2IiLCJpZCI6NDM4MTQsImlhdCI6MTYxMzE3NzEyOX0.ObeEH-g-STnws6Kwbs0xSNFvjfGC8k8SrmTyd-SEsW0';

const position = Cartesian3.fromDegrees(139.767052, 35.681167, 100);

const App = () => (

  <Viewer full >
    <Entity position={position} name="Tokyo" description="Hello, world.">
      <PointGraphics pixelSize={10} />
    </Entity>

    <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(139.767052, 35.681167, 1000000)} />
  </Viewer>

);

export default hot(App);
