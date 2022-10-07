import DeviceInfo from 'react-native-device-info';

export interface IUtils {
    isTablet: string;
};


const isTablet = DeviceInfo.getModel();
const Utils = {
    isTablet: isTablet,
};

export default Utils;