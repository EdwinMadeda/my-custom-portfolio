import { urlFor } from '../sanityClient';

// eslint-disable-next-line import/no-anonymous-default-export
const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img className="m-2" src={urlFor(value)} alt="" loading="lazy" />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  block: {
    normal: ({ children }) => <p className="">{children}</p>,
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[var(--color-accent)] dark:text-[var(--color-accent-light)] hover:underline"
        >
          {children}
        </a>
      );
    },
  },

  list: {
    bullet: ({ children }) => <ul className="indent-4">{children}</ul>,
    number: ({ children }) => <ol className="indent-4">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
        {children}
      </li>
    ),
    checkmarks: ({ children }) => <li>{children}</li>,
  },
};

export default myPortableTextComponents;
