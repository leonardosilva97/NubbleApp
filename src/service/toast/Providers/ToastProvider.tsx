import {createContext, useState} from 'react';

import {Toast} from '../toastTypes';
import {ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  const showToast = (_toast: Toast) => {
    setToast(_toast);
  };

  const hideToast = () => {
    setToast(null);
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ToastContext.Provider value={{hideToast: hideToast, showToast, toast}}>
      {children}
    </ToastContext.Provider>
  );
}
