import { getCollection } from 'astro:content';

const featuredOrder = ['argentina', 'islanda', 'canada'];

export const getPublishedTravels = () =>
  getCollection('travels', ({ data }) => data.published);

export const getFeaturedTravels = async () => {
  const travels = await getCollection(
    'travels',
    ({ data }) => data.published && data.featured,
  );

  return travels.sort(
    (first, second) =>
      featuredOrder.indexOf(first.data.slug) -
      featuredOrder.indexOf(second.data.slug),
  );
};
