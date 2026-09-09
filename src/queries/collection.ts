import { MONEY_FRAGMENT, IMAGE_FRAGMENT } from "./fragments";
import { PRODUCT_VARIANT_FRAGMENT } from "./product";

// Collection-specific fragments
export const COLLECTION_FRAGMENT: string = `
  fragment CollectionFields on Collection {
    id
    handle
    title
    description
    descriptionHtml
    updatedAt
    onlineStoreUrl
    seo {
      title
      description
    }
    image {
      ...ImageFields
    }
  }
`;

export const COLLECTION_PRODUCT_VARIANT_FRAGMENT: string = `
  fragment ProductVariantFields on ProductVariant {
    id
    title
    availableForSale
    price {
      ...MoneyFields
    }
    compareAtPrice {
      ...MoneyFields
    }
    image {
      ...ImageFields
    }
    selectedOptions {
      name
      value
    }
  }
`;

export const COLLECTION_PRODUCT_FRAGMENT: string = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    vendor
    productType
    tags
    availableForSale
    priceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    seo {
      title
      description
    }
    featuredImage {
      ...ImageFields
    }
    images(first: 5) {
      nodes {
        ...ImageFields
      }
    }
    variants(first: 10) {
      nodes {
        ...ProductVariantFields
      }
    }
  }
`;

// Queries
export const GET_COLLECTION_BY_ID: string = `
  ${IMAGE_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  query GetCollectionById($id: ID!) {
    collection(id: $id) {
      ...CollectionFields
    }
  }
`;

export const GET_COLLECTION_BY_HANDLE: string = `
  ${IMAGE_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  query GetCollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      ...CollectionFields
    }
  }
`;

export const GET_COLLECTION_WITH_PRODUCTS: string = `
  ${MONEY_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  ${COLLECTION_PRODUCT_VARIANT_FRAGMENT}
  ${COLLECTION_PRODUCT_FRAGMENT}
  query GetCollectionWithProducts(
    $id: ID
    $handle: String
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: ProductCollectionSortKeys
    $filters: [ProductFilter!]
    $country: CountryCode
  ) @inContext(country: $country) {
    collection(id: $id, handle: $handle) {
      ...CollectionFields
      products(
        first: $first
        after: $after
        last: $last
        before: $before
        reverse: $reverse
        sortKey: $sortKey
        filters: $filters
      ) {
        nodes {
          ...ProductFields
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
      }
    }
  }
`;

export const GET_COLLECTIONS: string = `
  ${IMAGE_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  query GetCollections(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: CollectionSortKeys
    $query: String
  ) {
    collections(
      first: $first
      after: $after
      last: $last
      before: $before
      reverse: $reverse
      sortKey: $sortKey
      query: $query
    ) {
      nodes {
        ...CollectionFields
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const COLLECTION_PRODUCT_WITH_OPTIONS_FRAGMENT: string = `
  fragment ProductWithOptionsFields on Product {
    id
    handle
    title
    description
    vendor
    productType
    tags
    availableForSale
    seo {
      title
      description
    }
    priceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    featuredImage {
      ...ImageFields
    }
    options {
      id
      name
      optionValues {
        id
        name
        swatch {
          color
          image {
            id
            mediaContentType
            previewImage {
              ...ImageFields
            }
          }
        }
      }
    }
    variants(first: $variantsFirst) {
      nodes {
        ...ProductVariantFields
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const GET_COLLECTIONS_BY_IDS_WITH_PRODUCTS: string = `
  ${MONEY_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${COLLECTION_PRODUCT_WITH_OPTIONS_FRAGMENT}
  query GetCollectionsByIdsWithProducts(
    $ids: [ID!]!
    $first: Int
    $variantsFirst: Int
    $country: CountryCode
  ) @inContext(country: $country) {
    nodes(ids: $ids) {
      ... on Collection {
        ...CollectionFields
        products(first: $first) {
          nodes {
            ...ProductWithOptionsFields
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_COLLECTIONS: string = `
  ${IMAGE_FRAGMENT}
  ${COLLECTION_FRAGMENT}
  query GetProductCollections($id: ID!, $first: Int) {
    product(id: $id) {
      id
      collections(first: $first) {
        nodes {
          ...CollectionFields
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;
