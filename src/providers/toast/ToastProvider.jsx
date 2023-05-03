import React, { createContext } from 'react';
import { Store } from 'react-notifications-component';


export const ToastContext = createContext()

const ToastProvider = ({children}) => {

    const handleToast = (titleText, message, toastType) => {
        Store.addNotification({
            title: titleText,
            message: message,
            type: toastType,
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }

          });
    }

    return (
        <ToastContext.Provider value={handleToast}>
            {children}
        </ToastContext.Provider>
    );
};

export default ToastProvider;