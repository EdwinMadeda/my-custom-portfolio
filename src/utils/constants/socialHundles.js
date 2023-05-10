import { AiFillBehanceSquare, AiFillInstagram } from 'react-icons/ai';
import {
  BsDiscord,
  BsFacebook,
  BsFillPersonLinesFill,
  BsMedium,
  BsReddit,
  BsSlack,
  BsStackOverflow,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { FaBitbucket, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AnchorContainer = ({ children, href = '', ...attributes }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...attributes}>
    {children}
  </a>
);

const allSocialHundles = [
  {
    label: 'LinkedIn',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    IconEl: ({ size }) => <FaLinkedin size={size} />,
    urlLink: '',
    AnchorContainer,
  },
  {
    label: 'Github',
    bgColor: 'bg-[#333333]',
    textColor: 'text-[#333333]',
    IconEl: ({ size }) => <FaGithub size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Bitbucket',
    bgColor: 'bg-[#2684ff]' /*Dodger Blue*/,
    textColor: 'text-[#2684ff]',
    IconEl: ({ size }) => <FaBitbucket size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Facebook',
    bgColor: 'bg-[#0078FF]' /*Azure*/,
    textColor: 'text-[#0078FF]',
    IconEl: ({ size }) => <BsFacebook size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Twitter',
    bgColor: 'bg-[#55ACEE]' /*Blue Jeans*/,
    textColor: 'text-[#55ACEE]',
    IconEl: ({ size }) => <BsTwitter size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Discord',
    bgColor: 'bg-[#738adb]' /*Vista Blue*/,
    textColor: 'text-[#738adb]',
    IconEl: ({ size }) => <BsDiscord size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Slack',
    bgColor: 'bg-[#3F0F3F]' /*Russian Violet*/,
    textColor: 'text-[#3F0F3F]',
    IconEl: ({ size }) => <BsSlack size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'StackOverflow',
    bgColor: 'bg-[#ef8236]' /*Shade of Orange*/,
    textColor: 'text-[#ef8236]',
    IconEl: ({ size }) => <BsStackOverflow size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Youtube',
    bgColor: 'bg-[#ff0000]' /*Red*/,
    textColor: 'text-[#ff0000]',
    IconEl: ({ size }) => <BsYoutube size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Instagram',
    bgColor: 'bg-[#DD2A7B]' /*Vivid Cerise*/,
    textColor: 'text-[#DD2A7B]',
    IconEl: ({ size }) => <AiFillInstagram size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Behance',
    bgColor: 'bg-[#0057ff]' /*Shade of Blue*/,
    textColor: 'text-[#0057ff]',
    IconEl: ({ size }) => <AiFillBehanceSquare size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Medium',
    bgColor: 'bg-[#ffc017]' /*Shade of Yellow*/,
    textColor: 'text-[#ffc017]',
    IconEl: ({ size }) => <BsMedium size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Reddit',
    bgColor: 'bg-[#ff4500]' /*Red-Orange*/,
    textColor: 'text-[#ff4500]',
    IconEl: ({ size }) => <BsReddit size={size} />,
    urlLink: '',
    AnchorContainer,
  },

  {
    label: 'Email',
    bgColor: 'bg-[#6fc2b0]',
    textColor: 'text-[#6fc2b0]',
    IconEl: ({ size }) => <HiOutlineMail size={size} />,
    urlLink: '',
    AnchorContainer,
  },
  {
    label: 'Resume',
    bgColor: 'bg-[#565f69]',
    textColor: 'text-[#565f69]',
    IconEl: ({ size }) => <BsFillPersonLinesFill size={size} />,
    urlLink: '',
    AnchorContainer: ({ children, href = '', ...attributes }) => (
      <Link to={href} {...attributes}>
        {children}
      </Link>
    ),
  },
];

const basicSocialHundles = allSocialHundles.filter(({ label }) =>
  ['LinkedIn', 'Github', 'Email', 'Resume'].find((item) => item === label)
);

const socialHandles = {
  all: allSocialHundles,
  basic: basicSocialHundles,
};

export default socialHandles;
