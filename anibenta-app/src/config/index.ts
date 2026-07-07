import { API_URL_ANDROID, API_URL_IOS, ENVIRONMENT } from '@env';
import { Platform } from 'react-native';

const getApiUrl = (): string => {
  if (ENVIRONMENT === 'production') {
    return 'https://api.anibenta.com';
  }

  return Platform.OS === 'android' 
    ? API_URL_ANDROID 
    : API_URL_IOS;
};

export const config = {
  apiUrl: getApiUrl(),
  environment: ENVIRONMENT,
  isDevelopment: ENVIRONMENT === 'development',
  isProduction: ENVIRONMENT === 'production',
  timeout: 10000,
};