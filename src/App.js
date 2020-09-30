import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Viewer, Entity, BoxGraphics } from 'resium';
import { Cartesian3, Color } from 'cesium';

function App() {
  return (
    <Viewer full>
      <Entity
        name="BoxGraphics"
        description="BoxGraphics!!"
        position={Cartesian3.fromDegrees(0, 0, 0)}
      >
        <BoxGraphics
          material={Color.RED}
          dimensions={new Cartesian3(400000.0, 300000.0, 500000.0)}
        />
      </Entity>
    </Viewer>
  );
}

export default hot(App);
