import sanityClient from '@sanity/client';

export const sanity = sanityClient({
  projectId: 'e7vplq5o',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});
