// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    ...config.resolver,
    assetExts: [
      ...config.resolver.assetExts,
      "obj",
      "mtl",
      "stl",
      "mp3",
      "JPG",
      "vrx",
      "hdr",
      "gltf",
      "glb",
      "bin",
      "arobject",
      "gif",
    ],
  },
};
