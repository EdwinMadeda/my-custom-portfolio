import { createContext, useEffect, useReducer } from 'react';
import { sanityClient } from '../../utils/sanityClient';

import { socialHandles } from '../../utils/constants';

const Store = createContext();
const initialState = {
  THEME: localStorage.theme ?? 'light',
  INTRODUCTION: { role: '', briefDescription: [] },
  ABOUT: {
    snippet: [] /*`Hi. Nice to meet you. Please take a look around.`*/,
    content: [],
  },
  QUICK_SOCIAL_LINKS: [],
  RESUME: { url: '', fileName: 'resume' },
  SKILLS: [],
  WORKS: [],
  TESTIMONIALS: [],
  CONTACTS: { phone: '', email: '' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setValues': {
      const setHandle = (name, urlLink) => {
        const handle = socialHandles.all.find(({ label }) => label === name);

        return handle
          ? {
              ...handle,
              urlLink,
            }
          : null;
      };

      const formatFileName = (str) =>
        str
          ? str
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, '')
              .replace(/[\s_-]+/g, '_')
              .replace(/^-+|-+$/g, '')
          : 'resume';

      const {
        INTRODUCTION,
        ABOUT,
        SKILLS,
        WORKS,
        TESTIMONIALS,
        QUICK_SOCIAL_LINKS: savedSocialHandles,
        RESUME,
        CONTACTS,
      } = action.payload;

      const myEmail = CONTACTS?.email?.[0];
      const myResumeUrl = RESUME?.details?.asset?.url;

      const QUICK_SOCIAL_LINKS = savedSocialHandles
        ?.map(({ name, urlLink }) => setHandle(name, urlLink))
        .concat(
          myEmail ? setHandle('Email', `mailto:${myEmail}`) : null,
          myResumeUrl ? setHandle('Resume', '/resume') : null
        )
        .filter((handle) => handle);

      return {
        ...state,
        INTRODUCTION,
        ABOUT,
        QUICK_SOCIAL_LINKS,
        RESUME: {
          ...state.RESUME,
          url: myResumeUrl,
          fileName: formatFileName(RESUME?.details?.name ?? ''),
        },
        SKILLS,
        WORKS,
        TESTIMONIALS,
        CONTACTS,
      };
    }

    case 'resetTheme': {
      const { THEME } = state;
      const selectTheme = THEME !== 'dark' ? 'dark' : 'light';
      localStorage.theme = selectTheme;
      setTheme();

      return { ...state, THEME: selectTheme };
    }
    default:
      return state;
  }
};

const setTheme = () => {
  document.documentElement.classList[
    localStorage.theme === 'dark' || !('theme' in localStorage)
      ? 'add'
      : 'remove'
  ]('dark');
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setThemeVariant = ({ light, dark }) =>
    state.THEME === 'light' ? light : state.THEME === 'dark' ? dark : '';

  useEffect(() => {
    setTheme();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPortfolio = () => {
      sanityClient
        .fetch(
          `*[_type == "portfolio"][0]{
          "INTRODUCTION": introduction,
          "ABOUT": about,
          "SKILLS": skills[]->{
            _id,
            "label": name,
            "img": icon.asset -> {url}
          },
          "WORKS": works[]->{
            ...,
            description,
            "slug": slug.current,
            "thumbnail": thumbnail.asset->{url},
            "backgroundPhoto": backgroundPhoto.asset->{url},
            techStack,
            projectLink,
            codeLink,
          },
          "TESTIMONIALS": testimonials[]->{
            ...,
            "avatar": avatar.asset->{url},
            "slug": slug.current
          },
          "RESUME": resume->{
            ...,
            "details": resume{
              name,
              identifier,
              asset->{url}
            }
          },
          "QUICK_SOCIAL_LINKS": socialHandles[]->,
          "CONTACTS": contacts,
        }`,
          { signal }
        )
        .then((portfolio) => {
          dispatch({ type: 'setValues', payload: portfolio });
        })
        .catch(
          (error) => error.isNetworkError && console.log('Network Error!')
        );
    };
    fetchPortfolio();
    return () => controller.abort();
  }, []);

  return (
    <Store.Provider value={{ ...state, setThemeVariant, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export default Store;
