import { createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { animateScroll, scroller } from 'react-scroll';

const PageScroll = createContext();

const initialValues = {
  duration: 500,
  delay: 60,
  smooth: true,
  offset: -70,
};

export const PageScrollProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const scrollToAnchor = (
    anchor,
    scrollBehaviour = initialValues,
    callback
  ) => {
    if (anchor) {
      scroller.scrollTo(anchor, {
        ...initialValues,
        ...scrollBehaviour,
      });
    } else animateScroll.scrollToTop();

    callback && callback();
  };

  const navigateAndScroll = ({
    anchor,
    domLink = '/',
    scrollBehaviour = initialValues,
    callback,
  }) => {
    const location = path.split('/')[1];

    const toggleNavigateAndScroll = async (anchor, domLink) => {
      await navigate(domLink);
      await scrollToAnchor(anchor, scrollBehaviour);
    };

    if (location === '' && anchor) scrollToAnchor(anchor, callback);
    else toggleNavigateAndScroll(anchor, domLink ?? '/');
  };

  return (
    <PageScroll.Provider
      value={{ ...initialValues, scrollToAnchor, navigateAndScroll }}
    >
      {children}
    </PageScroll.Provider>
  );
};

export default PageScroll;
