import { createContext } from 'react';
import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JavaScript from '../assets/images/javascript.png';
import React from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import FireBase from '../assets/images/firebase.png';
import GitHub from '../assets/images/github.png';
import Tailwind from '../assets/images/tailwind.png';
import Mongo from '../assets/images/mongo.png';

import Ayo_Ogunseinde from '../assets/images/testimonial_avatars/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg';
import Brooke_Cagle from '../assets/images/testimonial_avatars/brooke-cagle-Nm70URdtf3c-unsplash.jpg';
import Christopher_Campbell from '../assets/images/testimonial_avatars/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import Edward_Cisneros from '../assets/images/testimonial_avatars/edward-cisneros-_H6wpor9mjs-unsplash.jpg';
import Erik_Lucatero from '../assets/images/testimonial_avatars/erik-lucatero-d2MSDujJl2g-unsplash.jpg';
import Marivi_Pazos from '../assets/images/testimonial_avatars/marivi-pazos-cvpk5Y4ZWUs-unsplash.jpg';
// import Seth_Doyle from '../assets/images/testimonial_avatars/seth-doyle-vmBik4xv27s-unsplash.jpg';

import workImg from '../assets/images/works-thumbnails/workImg.jpeg';

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

const Store = createContext();

const initialValues = {
  SKILLS,
  WORKS,
  TESTIMONIALS,
};

export const StoreProvider = ({ children }) => {
  return <Store.Provider value={initialValues}>{children}</Store.Provider>;
};

export default Store;