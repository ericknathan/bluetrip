import {
  Viro3DObject,
  ViroARImageMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroAnimations,
  ViroSpotLight,
} from "@viro-community/react-viro";
import React, { useState } from "react";

const FishSceneAR = () => {
  const [animateModel, setAnimateModel] = useState(false);

  const _onAnchorFound = () => {
    setAnimateModel(true);
  };

  return (
    <ViroARScene>
      <ViroARImageMarker target="logo" onAnchorFound={_onAnchorFound}>
        <ViroSpotLight
          innerAngle={5}
          outerAngle={45}
          direction={[0, -1, -0.2]}
          position={[0, 3, 0]}
          color="#535353"
          castsShadow={true}
          influenceBitMask={2}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={0.7}
        />

        <Viro3DObject
          source={require("./res/fish/scene.gltf")}
          scale={[0, 0, 0]}
          type="GLTF"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}
          transformBehaviors={["billboardY"]}
          resources={[require("./res/fish/scene.bin")]}
          animation={{ name: "scaleModel", run: animateModel }}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export function ScannerScreen() {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: FishSceneAR,
      }}
      style={{ flex: 1 }}
    />
  );
}

ViroARTrackingTargets.createTargets({
  logo: {
    source: require("./res/logo.png"),
    orientation: "Up",
    physicalWidth: 0.165,
  },
});

ViroAnimations.registerAnimations({
  scaleModel: {
    properties: { scaleX: 0.1, scaleY: 0.1, scaleZ: 0.1 },
    duration: 500,
    easing: "bounce",
  },
});
