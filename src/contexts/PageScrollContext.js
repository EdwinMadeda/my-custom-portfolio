import { createContext } from 'react';

const PageScroll = createContext();

const initialValues = {
  offset: -70,
  smooth: true,
  duration: 500,
  delay: 0,
};

export const PageScrollProvider = ({ children }) => {
  return (
    <PageScroll.Provider value={initialValues}>{children}</PageScroll.Provider>
  );
};

export default PageScroll;
