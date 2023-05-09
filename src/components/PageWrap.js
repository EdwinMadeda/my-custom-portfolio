import { SocialIconsDesktop } from './SocialIcons';

const PageWrap = (Page) =>
  function HOC() {
    return (
      <>
        <Page />
        <SocialIconsDesktop />
      </>
    );
  };
export default PageWrap;
