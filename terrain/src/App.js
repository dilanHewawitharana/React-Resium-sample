import './App.css';

import { hot } from "react-hot-loader/root";

import React from "react";
import { Viewer, Entity, PointGraphics, CameraFlyTo} from "resium";
import { Cartesian3, createWorldTerrain, IonResource, Ion} from "cesium";

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YTE5OTgwYi02OTFlLTQ1MTAtYmMyYS1jMDJmNmU2NDA0Y2IiLCJpZCI6NDM4MTQsImlhdCI6MTYxMzE3NzEyOX0.ObeEH-g-STnws6Kwbs0xSNFvjfGC8k8SrmTyd-SEsW0';

const terrainProvider = createWorldTerrain(
  {
    url: IonResource.fromAssetId(3957),
    requestWaterMask : true, // required for water effects
    requestVertexNormals : true // required for terrain lighting
  }
);

const position = Cartesian3.fromDegrees(100, 25, 3000);

const App = () => (

  <Viewer full terrainProvider={terrainProvider}>
    <Entity position={position}>
      <PointGraphics pixelSize={10} />
    </Entity>

    <CameraFlyTo
      destination={position}
      orientation={{
        heading: 0.1,
        pitch: -0.2,
        roll : 0,
      }}
      duration={0}>
    </CameraFlyTo>
  </Viewer>
);

export default hot(App);
