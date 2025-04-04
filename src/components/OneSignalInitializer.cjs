'use client';
import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

export default function OneSignalInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      OneSignal.init({
        appId: 'a9b548df-4dff-46c0-979e-f63f1398258e',
        notifyButton: {
          enable: true,
        },
      });
    }
  }, []);

  return null;
}
