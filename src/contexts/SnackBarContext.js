import React, { useState } from 'react';

const SnackbarContext = React.createContext({
  msg: '',
  variant: 'info',
  autoHideDuration: 8000,
  isDisplayed: false,
  displayMsg: (msg) => {},
  onClose: () => {},
});

let timer;

export const SnackBarContextProvider = (props) => {
  const [msg, setMsg] = useState('');
  const [variant, setVariant] = useState('info');
  const [autoHideDuration, setAutoHideDuration] = useState(8000);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const displayHandler = ({ msg, variant, autoHideDuration = 8000 }) => {
    setMsg(msg);
    setVariant(variant, autoHideDuration);
    setAutoHideDuration();
    setIsDisplayed(true);
    timer = setTimeout(() => {
      closeHandler();
    }, autoHideDuration); // close snackbar after x seconds
  };

  const closeHandler = () => {
    clearTimeout(timer);
    setIsDisplayed(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        msg,
        variant,
        autoHideDuration,
        isDisplayed,
        displaySnackbar: displayHandler,
        onClose: closeHandler,
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
