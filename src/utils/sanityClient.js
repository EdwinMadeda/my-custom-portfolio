import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-09',
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export const urlFor = (source) =>
  imageUrlBuilder(sanityClient).image(source).url();
