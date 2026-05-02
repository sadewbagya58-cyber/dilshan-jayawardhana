import { groq } from 'next-sanity';

export const getFeaturedImageQuery = groq`
  *[_type == "galleryImage" && featured == true][0] {
    _id,
    title,
    image,
    alt,
    clientName,
    location,
    "categoryTitle": category->title
  }
`;

export const getCategoriesQuery = groq`
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    videoLink
  }
`;

export const getSignatureMomentsQuery = groq`
  *[_type == "galleryImage" && featured == true][1...7] | order(_createdAt desc) {
    _id,
    title,
    image,
    alt,
    clientName,
    location,
    "categoryTitle": category->title
  }
`;

export const getGalleryByCategoryQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "images": *[_type == "galleryImage" && references(^._id)] | order(_createdAt desc) {
      _id,
      title,
      image,
      alt,
      clientName,
      location
    }
  }
`;


