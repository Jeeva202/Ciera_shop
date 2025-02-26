// const { getDefaultConfig } = require('@expo/metro-config');

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);
//   const { resolver: { sourceExts, assetExts } } = defaultConfig;

//   return { 
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//       ...defaultConfig.transformer, // Extend Expo's transformer
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//       ...defaultConfig.resolver, // Extend Expo's resolver
//     },
//   };
// })();

// const { getDefaultConfig } = require('expo/metro-config');
// module.exports = getDefaultConfig(__dirname);

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('png', 'jpg', 'jpeg', 'gif', 'webp');

module.exports = defaultConfig;
