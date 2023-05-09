import { createContext, useEffect, useReducer } from 'react';
import HTML from '../../assets/images/html.png';
import CSS from '../../assets/images/css.png';
import JavaScript from '../../assets/images/javascript.png';
import React from '../../assets/images/react.png';
import Node from '../../assets/images/node.png';
import FireBase from '../../assets/images/firebase.png';
import GitHub from '../../assets/images/github.png';
import Tailwind from '../../assets/images/tailwind.png';
import Mongo from '../../assets/images/mongo.png';

import Ayo_Ogunseinde from '../../assets/images/testimonial_avatars/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg';
import Brooke_Cagle from '../../assets/images/testimonial_avatars/brooke-cagle-Nm70URdtf3c-unsplash.jpg';
import Christopher_Campbell from '../../assets/images/testimonial_avatars/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import Edward_Cisneros from '../../assets/images/testimonial_avatars/edward-cisneros-_H6wpor9mjs-unsplash.jpg';
import Erik_Lucatero from '../../assets/images/testimonial_avatars/erik-lucatero-d2MSDujJl2g-unsplash.jpg';
import Marivi_Pazos from '../../assets/images/testimonial_avatars/marivi-pazos-cvpk5Y4ZWUs-unsplash.jpg';
// import Seth_Doyle from '../assets/images/testimonial_avatars/seth-doyle-vmBik4xv27s-unsplash.jpg';

import workImg from '../../assets/images/works-thumbnails/workImg.jpeg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    IconEl: ({ size }) => <FaLinkedin size={size} />,
    to: '',
  },
  {
    label: 'Github',
    bgColor: 'bg-[#333333]',
    textColor: 'text-[#333333]',
    IconEl: ({ size }) => <FaGithub size={size} />,
    to: '',
  },
  {
    label: 'Email',
    bgColor: 'bg-[#6fc2b0]',
    textColor: 'text-[#6fc2b0]',
    IconEl: ({ size }) => <HiOutlineMail size={size} />,
    to: 'mailto:edwinmadeda@gmail.com',
  },
  {
    label: 'Resume',
    bgColor: 'bg-[#565f69]',
    textColor: 'text-[#565f69]',
    IconEl: ({ size }) => <BsFillPersonLinesFill size={size} />,
    to: '',
  },
];

const SKILLS = [
  { label: 'HTML', img: HTML },
  { label: 'CSS', img: CSS },
  { label: 'JavaScript', img: JavaScript },
  { label: 'React', img: React },
  { label: 'Tailwind', img: Tailwind },
];

const TESTIMONIALS = [
  {
    id: 0,
    avatar: Ayo_Ogunseinde,
    name: 'trido23',
    about: 'United States',
    msg: 'Very helpful! I needed some changes made to my website, and they walked me through the process step by step. I look forward to buying more themes from this author! ',
  },
  {
    id: 1,
    avatar: Brooke_Cagle,
    name: 'sorathiyameet777',
    about: 'India',
    msg: "Great Code Qualiy and Customer support. I asked him for some extra files and he provided everything that I wanted plus one more file that he though I may need. Great service and GREAT GREAT GREAT comments given very well commented code. and The Design factor and design aesthetics are great no code replication only when necessary and needed. he has put 2 to 3 versions of many page and overall the product is value for money. I'll say value of money x10 he should increase the price  ",
  },
  {
    id: 2,
    avatar: Christopher_Campbell,
    name: 'freephpbr',
    about: 'Brazil',
    msg: 'I recommend buying this theme! This theme is professional, beautiful design, works great! The author offers one of the best customer support, always ready to help, he is attentive and very professional, buy it, you like it! ',
  },
  {
    id: 3,
    avatar: Edward_Cisneros,
    name: 'fuhrj',
    about: 'united States',
    msg: 'Easy template to work with with minimal components. Design quality is great. I had a few questions about the template and support responded very quickly. ',
  },
  {
    id: 4,
    avatar: Erik_Lucatero,
    name: 'fuhrj',
    about: 'united States',
    msg: 'Easy template to work with with minimal components. Design quality is great. I had a few questions about the template and support responded very quickly. ',
  },
  {
    id: 4,
    avatar: Marivi_Pazos,
    name: 'fuhrj',
    about: 'united States',
    msg: 'Easy template to work with with minimal components. Design quality is great. I had a few questions about the template and support responded very quickly. ',
  },
];

const WORKS = [
  {
    id: 1,
    name: 'Project 1',
    description: '',
    slug: 'project-1',
    thumbnail: workImg,
    techStack: ['React', 'Tailwind', 'Javascript'],
    demoURL: null,
    codeURL: null,
  },
  {
    id: 2,
    name: 'Project 2',
    description: '',
    slug: 'project-2',
    thumbnail: workImg,
    techStack: ['React', 'Tailwind', 'Javascript'],
    demoURL: null,
    codeURL: null,
  },
  {
    id: 3,
    name: 'Project 3',
    description: '',
    slug: 'project-3',
    thumbnail: workImg,
    techStack: ['React', 'Tailwind', 'Javascript'],
    demoURL: null,
    codeURL: null,
  },
];

const THEME = localStorage.theme ?? 'light';

const setTheme = () => {
  document.documentElement.classList[
    localStorage.theme === 'dark' || !('theme' in localStorage)
      ? 'add'
      : 'remove'
  ]('dark');
};

const Store = createContext();

const reducer = (state, action) => {
  switch (action.type) {
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

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    THEME,
    SOCIAL_LINKS,
    SKILLS,
    WORKS,
    TESTIMONIALS,
  });

  const setThemeVariant = ({ light, dark }) =>
    state.THEME === 'light' ? light : state.THEME === 'dark' ? dark : '';

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <Store.Provider value={{ ...state, setThemeVariant, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export default Store;
