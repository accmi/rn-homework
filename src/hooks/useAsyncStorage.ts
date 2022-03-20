import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key: string, data?: string) => {
  const [loading, setLoading] = useState(false);
  const [receivedData, setReceivedData] = useState<string | null>();

  useEffect(() => {
    setLoading(true);

    if (data) {
      AsyncStorage.setItem(key, data).then(() => {
        setReceivedData(data);
        setLoading(false);
      });

      return;
    }

    AsyncStorage.getItem(key).then(item => {
      setReceivedData(item);
      setLoading(false);
    });
  }, [key, data]);

  return {loading, data: receivedData};
};
