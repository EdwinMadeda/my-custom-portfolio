import { useContext } from 'react';
import { SocialIconsDesktop } from './SocialIcons';
import SnackBarContext from '../contexts/SnackBarContext';
import Snackbar from './Snackbar';

const PageWrap = (Page) =>
  function HOC() {
    const snackbarCtx = useContext(SnackBarContext);
    return (
      <>
        <Page />
        <SocialIconsDesktop />
        {snackbarCtx.isDisplayed && <Snackbar />}
      </>
    );
  };
export default PageWrap;
