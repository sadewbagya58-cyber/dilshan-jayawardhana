import { type SchemaTypeDefinition } from 'sanity';

import { categoryType } from './categoryType';
import { galleryImageType } from './galleryImageType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, galleryImageType],
};
