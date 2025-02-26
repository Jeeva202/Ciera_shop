// import { ImageSourcePropType } from 'react-native';

// declare module '*.png' {
//     const value: ImageSourcePropType;
//     export default value;
// }
// declare module '*.svg' {
//     const value: ImageSourcePropType;
//     export default value;
// }

declare module '*.png' {
    const value: string;
    export default value;
}
// declare module '*.svg' {
//     const content: string;
//     export default content;
// }


declare module '*.svg' {
    import { ReactComponent as ReactSVG } from 'react-native-svg';
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
  }