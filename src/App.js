import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Viewer, Entity, PointGraphics, EntityDescription } from 'resium';
import { Cartesian3 } from 'cesium';

function App() {
  return (
    <Viewer full>
      <Entity
        name="BoxGraphics"
        position={Cartesian3.fromDegrees(0, 0, 0)}
      >
        <PointGraphics pixelSize={20} />
        <EntityDescription>
          <h1>Hello</h1>
        </EntityDescription>
      </Entity>
    </Viewer>
  );
}

export default hot(App);
