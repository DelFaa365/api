import type { Schema, Attribute } from '@strapi/strapi';

export interface ParamsCatParams extends Schema.Component {
  collectionName: 'components_params_cat_params';
  info: {
    displayName: 'params';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'params-cat.params': ParamsCatParams;
    }
  }
}
