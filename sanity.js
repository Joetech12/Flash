import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import { REACT_APP_SANITY_PROJECT_ID } from '@env';

export const client = createClient({
  //   projectId: 'x5gvxvt6',
  projectId: `${REACT_APP_SANITY_PROJECT_ID}`,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
