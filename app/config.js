import { Platform } from 'react-native';

/**
    https://www.juhe.cn/docs/api/id/163
*/

export const KEY = "664b9884a4c2199b15ccfcfbdd7dbf5c";

const SHOW_ANDROID_DRAWER = true;

const SHOW_IOS_DRAWER = true;

export const IS_TAB_STYLE = Platform.OS === 'ios' && !SHOW_IOS_DRAWER || Platform.OS !== 'ios' && ! SHOW_ANDROID_DRAWER;
