import { images } from '../../utils/constants';

export const skills = [
  { _id: '0', label: 'HTML', img: { url: images.HTML } },
  { _id: '1', label: 'CSS', img: { url: images.CSS } },
  { _id: '2', label: 'JavaScript', img: { url: images.JavaScript } },
  { _id: '3', label: 'React', img: { url: images.React } },
  { _id: '4', label: 'Tailwind', img: { url: images.Tailwind } },
];

export const works = [
  {
    _id: 1,
    title: 'Project 1',
    description: '',
    slug: 'project-1',
    thumbnail: { url: images.workImg },
    backgroundPhoto: { url: images.workImg },
    techStack: ['React', 'Tailwind', 'Javascript'],
    projectLink: null,
    codeLink: null,
  },
  {
    _id: 2,
    title: 'Project 2',
    description: '',
    slug: 'project-2',
    thumbnail: { url: images.workImg },
    backgroundPhoto: { url: images.workImg },
    techStack: [
      { _key: '1', name: 'React', designation: 'mainHighlight' },
      { _key: '2', name: 'Tailwind', designation: 'other' },
      { _key: '3', name: 'Javascript', designation: 'other' },
    ],
    projectLink: null,
    codeLink: null,
  },
  {
    _id: 3,
    title: 'Project 3',
    description: '',
    slug: 'project-3',
    thumbnail: { url: images.workImg },
    backgroundPhoto: { url: images.workImg },
    techStack: [
      { _key: '1', name: 'React', designation: 'mainHighlight' },
      { _key: '2', name: 'Tailwind', designation: 'other' },
      { _key: '3', name: 'Javascript', designation: 'other' },
    ],
    projectLink: null,
    codeLink: null,
  },
];

export const testimonial = [
  {
    _id: 0,
    avatar: { url: images.Ayo_Ogunseinde },
    name: 'trido23',
    about: { text: 'United States', context: 'Country' },
    msg: 'Very helpful! I needed some changes made to my website, and they walked me through the process step by step. I look forward to buying more themes from this author! ',
  },
  {
    _id: 1,
    avatar: { url: images.Brooke_Cagle },
    name: 'sorathiyameet777',
    about: { text: 'India', context: 'Country' },
    msg: "Great Code Qualiy and Customer support. I asked him for some extra files and he provided everything that I wanted plus one more file that he though I may need. Great service and GREAT GREAT GREAT comments given very well commented code. and The Design factor and design aesthetics are great no code replication only when necessary and needed. he has put 2 to 3 versions of many page and overall the product is value for money. I'll say value of money x10 he should increase the price  ",
  },
  {
    _id: 2,
    avatar: { url: images.Christopher_Campbell },
    name: 'freephpbr',
    about: { text: 'Brazil', context: 'Country' },
    msg: 'I recommend buying this theme! This theme is professional, beautiful design, works great! The author offers one of the best customer support, always ready to help, he is attentive and very professional, buy it, you like it! ',
  },
  {
    _id: 3,
    avatar: { url: images.Edward_Cisneros },
    name: 'fuhrj',
    about: { text: 'united States', context: 'Country' },
    msg: 'Easy template to work with with minimal components. Design quality is great. I had a few questions about the template and support responded very quickly. ',
  },
  {
    _id: 4,
    avatar: { url: images.Erik_Lucatero },
    name: 'fuhrj',
    about: { text: 'united States', context: 'Country' },
    msg: 'Easy template to work with with minimal components. Design quality is great. I had a few questions about the template and support responded very quickly. ',
  },
  {
    _id: 4,
    avatar: { url: images.Marivi_Pazos },
    name: 'fuhrj',
    about: { text: 'united States', context: 'Country' },
    msg: 'Easy template to work with with minimal components. Design quality is great. I had a few questions about the template and support responded very quickly. ',
  },
];
