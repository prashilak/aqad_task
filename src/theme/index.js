import colors from './colors';
import images from './images';
import fonts from './fonts';
import metrics from './metrics';
import universalStyles from './universalStyles';

var heightRef = 710;
var widthRef = 360;
const ratioHeight = metrics.screenHeight / heightRef;
const ratioWidth = metrics.screenWidth / widthRef;
export {
  colors,
  images,
  metrics,
  fonts,
  universalStyles,
  heightRef,
  widthRef,
  ratioHeight,
  ratioWidth,
};
