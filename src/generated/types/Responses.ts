import {
  type Product,
  decodeProduct,
  type ProductConnection,
  decodeProductConnection,
  type ProductVariant,
  decodeProductVariant,
} from "./Products";
import {
  type Collection,
  decodeCollection,
  type CollectionConnection,
  decodeCollectionConnection,
} from "./Collections";
import { type Cart, decodeCart, type CartMutationResult, decodeCartMutationResult } from "./Cart";
import {
  type Customer,
  decodeCustomer,
  type AccessTokenResult,
  decodeAccessTokenResult,
  type CustomerUserError,
  decodeCustomerUserError,
  type CustomerMutationResult,
  decodeCustomerMutationResult,
  type AddressMutationResult,
  decodeAddressMutationResult,
} from "./Customer";
import {
  type SearchResultItemConnection,
  decodeSearchResultItemConnection,
  type PredictiveSearchResult,
  decodePredictiveSearchResult,
} from "./Search";
import {
  type Page,
  decodePage,
  type PageConnection,
  decodePageConnection,
  type Blog,
  decodeBlog,
  type BlogConnection,
  decodeBlogConnection,
  type Article,
  decodeArticle,
  type ArticleConnection,
  decodeArticleConnection,
  type Menu,
  decodeMenu,
} from "./Content";
import {
  type Metaobject,
  decodeMetaobject,
  type MetaobjectConnection,
  decodeMetaobjectConnection,
} from "./Metafields";
import { type Shop, decodeShop } from "./Shop";
import { type Localization, decodeLocalization } from "./Localization";
import {
  isJSON,
  decodeString,
  _decodeString,
  decodeBoolean,
  _decodeBoolean,
  decodeNumber,
  _decodeNumber,
  decodeArray,
  _decodeArray,
} from "type-decoder";

/**
 * @type { ProductResponse }
 * @description GraphQL response containing a single product
 */
export type ProductResponse = {
  /**
   * @type { Product }
   * @memberof ProductResponse
   */
  product: Product | null;
};

export function decodeProductResponse(rawInput: unknown): ProductResponse | null {
  if (isJSON(rawInput)) {
    const decodedProduct = decodeProduct(rawInput["product"]);

    return {
      product: decodedProduct,
    };
  }
  return null;
}

/**
 * @type { ProductsResponse }
 * @description GraphQL response containing product connection
 */
export type ProductsResponse = {
  /**
   * @type { ProductConnection }
   * @memberof ProductsResponse
   */
  products: ProductConnection | null;
};

export function decodeProductsResponse(rawInput: unknown): ProductsResponse | null {
  if (isJSON(rawInput)) {
    const decodedProducts = decodeProductConnection(rawInput["products"]);

    return {
      products: decodedProducts,
    };
  }
  return null;
}

/**
 * @type { ProductRecommendationsResponse }
 * @description GraphQL response containing product recommendations
 */
export type ProductRecommendationsResponse = {
  /**
   * @type { Product[] }
   * @memberof ProductRecommendationsResponse
   */
  productRecommendations: Product[] | null;
};

export function decodeProductRecommendationsResponse(
  rawInput: unknown
): ProductRecommendationsResponse | null {
  if (isJSON(rawInput)) {
    const decodedProductRecommendations = decodeArray(
      rawInput["productRecommendations"],
      decodeProduct
    );

    return {
      productRecommendations: decodedProductRecommendations,
    };
  }
  return null;
}

/**
 * @type { ProductsByIdsResponse }
 * @description GraphQL response containing products resolved by ID via the nodes query
 */
export type ProductsByIdsResponse = {
  /**
   * @type { Product[] }
   * @memberof ProductsByIdsResponse
   */
  nodes: Product[] | null;
};

export function decodeProductsByIdsResponse(rawInput: unknown): ProductsByIdsResponse | null {
  if (isJSON(rawInput)) {
    const decodedNodes = decodeArray(rawInput["nodes"], decodeProduct);

    return {
      nodes: decodedNodes,
    };
  }
  return null;
}

/**
 * @type { ProductVariantsResponse }
 * @description GraphQL response containing product variants resolved by ID
 */
export type ProductVariantsResponse = {
  /**
   * @type { ProductVariant[] }
   * @memberof ProductVariantsResponse
   */
  nodes: ProductVariant[] | null;
};

export function decodeProductVariantsResponse(rawInput: unknown): ProductVariantsResponse | null {
  if (isJSON(rawInput)) {
    const decodedNodes = decodeArray(rawInput["nodes"], decodeProductVariant);

    return {
      nodes: decodedNodes,
    };
  }
  return null;
}

/**
 * @type { CollectionResponse }
 * @description GraphQL response containing a single collection
 */
export type CollectionResponse = {
  /**
   * @type { Collection }
   * @memberof CollectionResponse
   */
  collection: Collection | null;
};

export function decodeCollectionResponse(rawInput: unknown): CollectionResponse | null {
  if (isJSON(rawInput)) {
    const decodedCollection = decodeCollection(rawInput["collection"]);

    return {
      collection: decodedCollection,
    };
  }
  return null;
}

/**
 * @type { CollectionsResponse }
 * @description GraphQL response containing collection connection
 */
export type CollectionsResponse = {
  /**
   * @type { CollectionConnection }
   * @memberof CollectionsResponse
   */
  collections: CollectionConnection | null;
};

export function decodeCollectionsResponse(rawInput: unknown): CollectionsResponse | null {
  if (isJSON(rawInput)) {
    const decodedCollections = decodeCollectionConnection(rawInput["collections"]);

    return {
      collections: decodedCollections,
    };
  }
  return null;
}

/**
 * @type { CollectionsByIdsResponse }
 * @description GraphQL response containing collections resolved by ID via the nodes query
 */
export type CollectionsByIdsResponse = {
  /**
   * @type { Collection[] }
   * @memberof CollectionsByIdsResponse
   */
  nodes: Collection[] | null;
};

export function decodeCollectionsByIdsResponse(rawInput: unknown): CollectionsByIdsResponse | null {
  if (isJSON(rawInput)) {
    const decodedNodes = decodeArray(rawInput["nodes"], decodeCollection);

    return {
      nodes: decodedNodes,
    };
  }
  return null;
}

/**
 * @type { ProductCollections }
 * @description A product with the collections it belongs to
 */
export type ProductCollections = {
  /**
   * @type { string }
   * @memberof ProductCollections
   */
  id: string;
  /**
   * @type { CollectionConnection }
   * @memberof ProductCollections
   */
  collections: CollectionConnection;
};

export function decodeProductCollections(rawInput: unknown): ProductCollections | null {
  if (isJSON(rawInput)) {
    const decodedId = decodeString(rawInput["id"]);
    const decodedCollections = decodeCollectionConnection(rawInput["collections"]);

    if (decodedId === null || decodedCollections === null) {
      return null;
    }

    return {
      id: decodedId,
      collections: decodedCollections,
    };
  }
  return null;
}

/**
 * @type { ProductCollectionsResponse }
 * @description GraphQL response containing the collections of a product
 */
export type ProductCollectionsResponse = {
  /**
   * @type { ProductCollections }
   * @memberof ProductCollectionsResponse
   */
  product: ProductCollections | null;
};

export function decodeProductCollectionsResponse(
  rawInput: unknown
): ProductCollectionsResponse | null {
  if (isJSON(rawInput)) {
    const decodedProduct = decodeProductCollections(rawInput["product"]);

    return {
      product: decodedProduct,
    };
  }
  return null;
}

/**
 * @type { CartResponse }
 * @description GraphQL response containing a cart
 */
export type CartResponse = {
  /**
   * @type { Cart }
   * @memberof CartResponse
   */
  cart: Cart | null;
};

export function decodeCartResponse(rawInput: unknown): CartResponse | null {
  if (isJSON(rawInput)) {
    const decodedCart = decodeCart(rawInput["cart"]);

    return {
      cart: decodedCart,
    };
  }
  return null;
}

/**
 * @type { CartCreateResponse }
 * @description GraphQL response for cartCreate mutation
 */
export type CartCreateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartCreateResponse
   */
  cartCreate: CartMutationResult | null;
};

export function decodeCartCreateResponse(rawInput: unknown): CartCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartCreate = decodeCartMutationResult(rawInput["cartCreate"]);

    return {
      cartCreate: decodedCartCreate,
    };
  }
  return null;
}

/**
 * @type { CartLinesAddResponse }
 * @description GraphQL response for cartLinesAdd mutation
 */
export type CartLinesAddResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartLinesAddResponse
   */
  cartLinesAdd: CartMutationResult | null;
};

export function decodeCartLinesAddResponse(rawInput: unknown): CartLinesAddResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartLinesAdd = decodeCartMutationResult(rawInput["cartLinesAdd"]);

    return {
      cartLinesAdd: decodedCartLinesAdd,
    };
  }
  return null;
}

/**
 * @type { CartLinesUpdateResponse }
 * @description GraphQL response for cartLinesUpdate mutation
 */
export type CartLinesUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartLinesUpdateResponse
   */
  cartLinesUpdate: CartMutationResult | null;
};

export function decodeCartLinesUpdateResponse(rawInput: unknown): CartLinesUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartLinesUpdate = decodeCartMutationResult(rawInput["cartLinesUpdate"]);

    return {
      cartLinesUpdate: decodedCartLinesUpdate,
    };
  }
  return null;
}

/**
 * @type { CartLinesRemoveResponse }
 * @description GraphQL response for cartLinesRemove mutation
 */
export type CartLinesRemoveResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartLinesRemoveResponse
   */
  cartLinesRemove: CartMutationResult | null;
};

export function decodeCartLinesRemoveResponse(rawInput: unknown): CartLinesRemoveResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartLinesRemove = decodeCartMutationResult(rawInput["cartLinesRemove"]);

    return {
      cartLinesRemove: decodedCartLinesRemove,
    };
  }
  return null;
}

/**
 * @type { CartNoteUpdateResponse }
 * @description GraphQL response for cartNoteUpdate mutation
 */
export type CartNoteUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartNoteUpdateResponse
   */
  cartNoteUpdate: CartMutationResult | null;
};

export function decodeCartNoteUpdateResponse(rawInput: unknown): CartNoteUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartNoteUpdate = decodeCartMutationResult(rawInput["cartNoteUpdate"]);

    return {
      cartNoteUpdate: decodedCartNoteUpdate,
    };
  }
  return null;
}

/**
 * @type { CartAttributesUpdateResponse }
 * @description GraphQL response for cartAttributesUpdate mutation
 */
export type CartAttributesUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartAttributesUpdateResponse
   */
  cartAttributesUpdate: CartMutationResult | null;
};

export function decodeCartAttributesUpdateResponse(
  rawInput: unknown
): CartAttributesUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartAttributesUpdate = decodeCartMutationResult(rawInput["cartAttributesUpdate"]);

    return {
      cartAttributesUpdate: decodedCartAttributesUpdate,
    };
  }
  return null;
}

/**
 * @type { CartBuyerIdentityUpdateResponse }
 * @description GraphQL response for cartBuyerIdentityUpdate mutation
 */
export type CartBuyerIdentityUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartBuyerIdentityUpdateResponse
   */
  cartBuyerIdentityUpdate: CartMutationResult | null;
};

export function decodeCartBuyerIdentityUpdateResponse(
  rawInput: unknown
): CartBuyerIdentityUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartBuyerIdentityUpdate = decodeCartMutationResult(
      rawInput["cartBuyerIdentityUpdate"]
    );

    return {
      cartBuyerIdentityUpdate: decodedCartBuyerIdentityUpdate,
    };
  }
  return null;
}

/**
 * @type { CartDiscountCodesUpdateResponse }
 * @description GraphQL response for cartDiscountCodesUpdate mutation
 */
export type CartDiscountCodesUpdateResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartDiscountCodesUpdateResponse
   */
  cartDiscountCodesUpdate: CartMutationResult | null;
};

export function decodeCartDiscountCodesUpdateResponse(
  rawInput: unknown
): CartDiscountCodesUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartDiscountCodesUpdate = decodeCartMutationResult(
      rawInput["cartDiscountCodesUpdate"]
    );

    return {
      cartDiscountCodesUpdate: decodedCartDiscountCodesUpdate,
    };
  }
  return null;
}

/**
 * @type { CartGiftCardCodesAddResponse }
 * @description GraphQL response for cartGiftCardCodesAdd mutation
 */
export type CartGiftCardCodesAddResponse = {
  /**
   * @type { CartMutationResult }
   * @memberof CartGiftCardCodesAddResponse
   */
  cartGiftCardCodesAdd: CartMutationResult | null;
};

export function decodeCartGiftCardCodesAddResponse(
  rawInput: unknown
): CartGiftCardCodesAddResponse | null {
  if (isJSON(rawInput)) {
    const decodedCartGiftCardCodesAdd = decodeCartMutationResult(rawInput["cartGiftCardCodesAdd"]);

    return {
      cartGiftCardCodesAdd: decodedCartGiftCardCodesAdd,
    };
  }
  return null;
}

/**
 * @type { CustomerResponse }
 * @description GraphQL response containing a customer
 */
export type CustomerResponse = {
  /**
   * @type { Customer }
   * @memberof CustomerResponse
   */
  customer: Customer | null;
};

export function decodeCustomerResponse(rawInput: unknown): CustomerResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomer = decodeCustomer(rawInput["customer"]);

    return {
      customer: decodedCustomer,
    };
  }
  return null;
}

/**
 * @type { CustomerAccessTokenCreateResponse }
 * @description GraphQL response for customerAccessTokenCreate mutation
 */
export type CustomerAccessTokenCreateResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerAccessTokenCreateResponse
   */
  customerAccessTokenCreate: AccessTokenResult | null;
};

export function decodeCustomerAccessTokenCreateResponse(
  rawInput: unknown
): CustomerAccessTokenCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessTokenCreate = decodeAccessTokenResult(
      rawInput["customerAccessTokenCreate"]
    );

    return {
      customerAccessTokenCreate: decodedCustomerAccessTokenCreate,
    };
  }
  return null;
}

/**
 * @type { CustomerAccessTokenRenewResponse }
 * @description GraphQL response for customerAccessTokenRenew mutation
 */
export type CustomerAccessTokenRenewResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerAccessTokenRenewResponse
   */
  customerAccessTokenRenew: AccessTokenResult | null;
};

export function decodeCustomerAccessTokenRenewResponse(
  rawInput: unknown
): CustomerAccessTokenRenewResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessTokenRenew = decodeAccessTokenResult(
      rawInput["customerAccessTokenRenew"]
    );

    return {
      customerAccessTokenRenew: decodedCustomerAccessTokenRenew,
    };
  }
  return null;
}

/**
 * @type { CustomerAccessTokenDeleteResponse }
 * @description GraphQL response for customerAccessTokenDelete mutation
 */
export type CustomerAccessTokenDeleteResponse = {
  /**
   * @type { CustomerAccessTokenDeleteResult }
   * @memberof CustomerAccessTokenDeleteResponse
   */
  customerAccessTokenDelete: CustomerAccessTokenDeleteResult | null;
};

export function decodeCustomerAccessTokenDeleteResponse(
  rawInput: unknown
): CustomerAccessTokenDeleteResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAccessTokenDelete = decodeCustomerAccessTokenDeleteResult(
      rawInput["customerAccessTokenDelete"]
    );

    return {
      customerAccessTokenDelete: decodedCustomerAccessTokenDelete,
    };
  }
  return null;
}

/**
 * @type { CustomerAccessTokenDeleteResult }
 * @description Result of customerAccessTokenDelete mutation
 */
export type CustomerAccessTokenDeleteResult = {
  /**
   * @type { string }
   * @memberof CustomerAccessTokenDeleteResult
   */
  deletedAccessToken: string | null;
  /**
   * @type { string }
   * @memberof CustomerAccessTokenDeleteResult
   */
  deletedCustomerAccessTokenId: string | null;
  /**
   * @type { CustomerUserError[] }
   * @memberof CustomerAccessTokenDeleteResult
   */
  customerUserErrors: CustomerUserError[] | null;
};

export function decodeCustomerAccessTokenDeleteResult(
  rawInput: unknown
): CustomerAccessTokenDeleteResult | null {
  if (isJSON(rawInput)) {
    const decodedDeletedAccessToken = decodeString(rawInput["deletedAccessToken"]);
    const decodedDeletedCustomerAccessTokenId = decodeString(
      rawInput["deletedCustomerAccessTokenId"]
    );
    const decodedCustomerUserErrors = decodeArray(
      rawInput["customerUserErrors"],
      decodeCustomerUserError
    );

    return {
      deletedAccessToken: decodedDeletedAccessToken,
      deletedCustomerAccessTokenId: decodedDeletedCustomerAccessTokenId,
      customerUserErrors: decodedCustomerUserErrors,
    };
  }
  return null;
}

/**
 * @type { CustomerCreateResponse }
 * @description GraphQL response for customerCreate mutation
 */
export type CustomerCreateResponse = {
  /**
   * @type { CustomerMutationResult }
   * @memberof CustomerCreateResponse
   */
  customerCreate: CustomerMutationResult | null;
};

export function decodeCustomerCreateResponse(rawInput: unknown): CustomerCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerCreate = decodeCustomerMutationResult(rawInput["customerCreate"]);

    return {
      customerCreate: decodedCustomerCreate,
    };
  }
  return null;
}

/**
 * @type { CustomerUpdateResponse }
 * @description GraphQL response for customerUpdate mutation
 */
export type CustomerUpdateResponse = {
  /**
   * @type { CustomerMutationResult }
   * @memberof CustomerUpdateResponse
   */
  customerUpdate: CustomerMutationResult | null;
};

export function decodeCustomerUpdateResponse(rawInput: unknown): CustomerUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerUpdate = decodeCustomerMutationResult(rawInput["customerUpdate"]);

    return {
      customerUpdate: decodedCustomerUpdate,
    };
  }
  return null;
}

/**
 * @type { CustomerRecoverResponse }
 * @description GraphQL response for customerRecover mutation
 */
export type CustomerRecoverResponse = {
  /**
   * @type { CustomerRecoverResult }
   * @memberof CustomerRecoverResponse
   */
  customerRecover: CustomerRecoverResult | null;
};

export function decodeCustomerRecoverResponse(rawInput: unknown): CustomerRecoverResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerRecover = decodeCustomerRecoverResult(rawInput["customerRecover"]);

    return {
      customerRecover: decodedCustomerRecover,
    };
  }
  return null;
}

/**
 * @type { CustomerRecoverResult }
 * @description Result of customerRecover mutation
 */
export type CustomerRecoverResult = {
  /**
   * @type { CustomerUserError[] }
   * @memberof CustomerRecoverResult
   */
  customerUserErrors: CustomerUserError[] | null;
};

export function decodeCustomerRecoverResult(rawInput: unknown): CustomerRecoverResult | null {
  if (isJSON(rawInput)) {
    const decodedCustomerUserErrors = decodeArray(
      rawInput["customerUserErrors"],
      decodeCustomerUserError
    );

    return {
      customerUserErrors: decodedCustomerUserErrors,
    };
  }
  return null;
}

/**
 * @type { CustomerResetResponse }
 * @description GraphQL response for customerReset mutation
 */
export type CustomerResetResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerResetResponse
   */
  customerReset: AccessTokenResult | null;
};

export function decodeCustomerResetResponse(rawInput: unknown): CustomerResetResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerReset = decodeAccessTokenResult(rawInput["customerReset"]);

    return {
      customerReset: decodedCustomerReset,
    };
  }
  return null;
}

/**
 * @type { CustomerResetByUrlResponse }
 * @description GraphQL response for customerResetByUrl mutation
 */
export type CustomerResetByUrlResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerResetByUrlResponse
   */
  customerResetByUrl: AccessTokenResult | null;
};

export function decodeCustomerResetByUrlResponse(
  rawInput: unknown
): CustomerResetByUrlResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerResetByUrl = decodeAccessTokenResult(rawInput["customerResetByUrl"]);

    return {
      customerResetByUrl: decodedCustomerResetByUrl,
    };
  }
  return null;
}

/**
 * @type { CustomerActivateResponse }
 * @description GraphQL response for customerActivate mutation
 */
export type CustomerActivateResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerActivateResponse
   */
  customerActivate: AccessTokenResult | null;
};

export function decodeCustomerActivateResponse(rawInput: unknown): CustomerActivateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerActivate = decodeAccessTokenResult(rawInput["customerActivate"]);

    return {
      customerActivate: decodedCustomerActivate,
    };
  }
  return null;
}

/**
 * @type { CustomerActivateByUrlResponse }
 * @description GraphQL response for customerActivateByUrl mutation
 */
export type CustomerActivateByUrlResponse = {
  /**
   * @type { AccessTokenResult }
   * @memberof CustomerActivateByUrlResponse
   */
  customerActivateByUrl: AccessTokenResult | null;
};

export function decodeCustomerActivateByUrlResponse(
  rawInput: unknown
): CustomerActivateByUrlResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerActivateByUrl = decodeAccessTokenResult(rawInput["customerActivateByUrl"]);

    return {
      customerActivateByUrl: decodedCustomerActivateByUrl,
    };
  }
  return null;
}

/**
 * @type { CustomerAddressCreateResponse }
 * @description GraphQL response for customerAddressCreate mutation
 */
export type CustomerAddressCreateResponse = {
  /**
   * @type { AddressMutationResult }
   * @memberof CustomerAddressCreateResponse
   */
  customerAddressCreate: AddressMutationResult | null;
};

export function decodeCustomerAddressCreateResponse(
  rawInput: unknown
): CustomerAddressCreateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddressCreate = decodeAddressMutationResult(
      rawInput["customerAddressCreate"]
    );

    return {
      customerAddressCreate: decodedCustomerAddressCreate,
    };
  }
  return null;
}

/**
 * @type { CustomerAddressUpdateResponse }
 * @description GraphQL response for customerAddressUpdate mutation
 */
export type CustomerAddressUpdateResponse = {
  /**
   * @type { AddressMutationResult }
   * @memberof CustomerAddressUpdateResponse
   */
  customerAddressUpdate: AddressMutationResult | null;
};

export function decodeCustomerAddressUpdateResponse(
  rawInput: unknown
): CustomerAddressUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddressUpdate = decodeAddressMutationResult(
      rawInput["customerAddressUpdate"]
    );

    return {
      customerAddressUpdate: decodedCustomerAddressUpdate,
    };
  }
  return null;
}

/**
 * @type { CustomerAddressDeleteResponse }
 * @description GraphQL response for customerAddressDelete mutation
 */
export type CustomerAddressDeleteResponse = {
  /**
   * @type { CustomerAddressDeleteResult }
   * @memberof CustomerAddressDeleteResponse
   */
  customerAddressDelete: CustomerAddressDeleteResult | null;
};

export function decodeCustomerAddressDeleteResponse(
  rawInput: unknown
): CustomerAddressDeleteResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerAddressDelete = decodeCustomerAddressDeleteResult(
      rawInput["customerAddressDelete"]
    );

    return {
      customerAddressDelete: decodedCustomerAddressDelete,
    };
  }
  return null;
}

/**
 * @type { CustomerAddressDeleteResult }
 * @description Result of customerAddressDelete mutation
 */
export type CustomerAddressDeleteResult = {
  /**
   * @type { string }
   * @memberof CustomerAddressDeleteResult
   */
  deletedCustomerAddressId: string | null;
  /**
   * @type { CustomerUserError[] }
   * @memberof CustomerAddressDeleteResult
   */
  customerUserErrors: CustomerUserError[] | null;
};

export function decodeCustomerAddressDeleteResult(
  rawInput: unknown
): CustomerAddressDeleteResult | null {
  if (isJSON(rawInput)) {
    const decodedDeletedCustomerAddressId = decodeString(rawInput["deletedCustomerAddressId"]);
    const decodedCustomerUserErrors = decodeArray(
      rawInput["customerUserErrors"],
      decodeCustomerUserError
    );

    return {
      deletedCustomerAddressId: decodedDeletedCustomerAddressId,
      customerUserErrors: decodedCustomerUserErrors,
    };
  }
  return null;
}

/**
 * @type { CustomerDefaultAddressUpdateResponse }
 * @description GraphQL response for customerDefaultAddressUpdate mutation
 */
export type CustomerDefaultAddressUpdateResponse = {
  /**
   * @type { CustomerMutationResult }
   * @memberof CustomerDefaultAddressUpdateResponse
   */
  customerDefaultAddressUpdate: CustomerMutationResult | null;
};

export function decodeCustomerDefaultAddressUpdateResponse(
  rawInput: unknown
): CustomerDefaultAddressUpdateResponse | null {
  if (isJSON(rawInput)) {
    const decodedCustomerDefaultAddressUpdate = decodeCustomerMutationResult(
      rawInput["customerDefaultAddressUpdate"]
    );

    return {
      customerDefaultAddressUpdate: decodedCustomerDefaultAddressUpdate,
    };
  }
  return null;
}

/**
 * @type { SearchResponse }
 * @description GraphQL response for search query
 */
export type SearchResponse = {
  /**
   * @type { SearchResultItemConnection }
   * @memberof SearchResponse
   */
  search: SearchResultItemConnection | null;
};

export function decodeSearchResponse(rawInput: unknown): SearchResponse | null {
  if (isJSON(rawInput)) {
    const decodedSearch = decodeSearchResultItemConnection(rawInput["search"]);

    return {
      search: decodedSearch,
    };
  }
  return null;
}

/**
 * @type { PredictiveSearchResponse }
 * @description GraphQL response for predictiveSearch query
 */
export type PredictiveSearchResponse = {
  /**
   * @type { PredictiveSearchResult }
   * @memberof PredictiveSearchResponse
   */
  predictiveSearch: PredictiveSearchResult | null;
};

export function decodePredictiveSearchResponse(rawInput: unknown): PredictiveSearchResponse | null {
  if (isJSON(rawInput)) {
    const decodedPredictiveSearch = decodePredictiveSearchResult(rawInput["predictiveSearch"]);

    return {
      predictiveSearch: decodedPredictiveSearch,
    };
  }
  return null;
}

/**
 * @type { PageResponse }
 * @description GraphQL response containing a page
 */
export type PageResponse = {
  /**
   * @type { Page }
   * @memberof PageResponse
   */
  page: Page | null;
};

export function decodePageResponse(rawInput: unknown): PageResponse | null {
  if (isJSON(rawInput)) {
    const decodedPage = decodePage(rawInput["page"]);

    return {
      page: decodedPage,
    };
  }
  return null;
}

/**
 * @type { PagesResponse }
 * @description GraphQL response containing page connection
 */
export type PagesResponse = {
  /**
   * @type { PageConnection }
   * @memberof PagesResponse
   */
  pages: PageConnection | null;
};

export function decodePagesResponse(rawInput: unknown): PagesResponse | null {
  if (isJSON(rawInput)) {
    const decodedPages = decodePageConnection(rawInput["pages"]);

    return {
      pages: decodedPages,
    };
  }
  return null;
}

/**
 * @type { BlogResponse }
 * @description GraphQL response containing a blog
 */
export type BlogResponse = {
  /**
   * @type { Blog }
   * @memberof BlogResponse
   */
  blog: Blog | null;
};

export function decodeBlogResponse(rawInput: unknown): BlogResponse | null {
  if (isJSON(rawInput)) {
    const decodedBlog = decodeBlog(rawInput["blog"]);

    return {
      blog: decodedBlog,
    };
  }
  return null;
}

/**
 * @type { BlogsResponse }
 * @description GraphQL response containing blog connection
 */
export type BlogsResponse = {
  /**
   * @type { BlogConnection }
   * @memberof BlogsResponse
   */
  blogs: BlogConnection | null;
};

export function decodeBlogsResponse(rawInput: unknown): BlogsResponse | null {
  if (isJSON(rawInput)) {
    const decodedBlogs = decodeBlogConnection(rawInput["blogs"]);

    return {
      blogs: decodedBlogs,
    };
  }
  return null;
}

/**
 * @type { ArticleResponse }
 * @description GraphQL response containing an article
 */
export type ArticleResponse = {
  /**
   * @type { Article }
   * @memberof ArticleResponse
   */
  article: Article | null;
};

export function decodeArticleResponse(rawInput: unknown): ArticleResponse | null {
  if (isJSON(rawInput)) {
    const decodedArticle = decodeArticle(rawInput["article"]);

    return {
      article: decodedArticle,
    };
  }
  return null;
}

/**
 * @type { ArticlesResponse }
 * @description GraphQL response containing article connection
 */
export type ArticlesResponse = {
  /**
   * @type { ArticleConnection }
   * @memberof ArticlesResponse
   */
  articles: ArticleConnection | null;
};

export function decodeArticlesResponse(rawInput: unknown): ArticlesResponse | null {
  if (isJSON(rawInput)) {
    const decodedArticles = decodeArticleConnection(rawInput["articles"]);

    return {
      articles: decodedArticles,
    };
  }
  return null;
}

/**
 * @type { MenuResponse }
 * @description GraphQL response containing a menu
 */
export type MenuResponse = {
  /**
   * @type { Menu }
   * @memberof MenuResponse
   */
  menu: Menu | null;
};

export function decodeMenuResponse(rawInput: unknown): MenuResponse | null {
  if (isJSON(rawInput)) {
    const decodedMenu = decodeMenu(rawInput["menu"]);

    return {
      menu: decodedMenu,
    };
  }
  return null;
}

/**
 * @type { MetaobjectResponse }
 * @description GraphQL response containing a metaobject
 */
export type MetaobjectResponse = {
  /**
   * @type { Metaobject }
   * @memberof MetaobjectResponse
   */
  metaobject: Metaobject | null;
};

export function decodeMetaobjectResponse(rawInput: unknown): MetaobjectResponse | null {
  if (isJSON(rawInput)) {
    const decodedMetaobject = decodeMetaobject(rawInput["metaobject"]);

    return {
      metaobject: decodedMetaobject,
    };
  }
  return null;
}

/**
 * @type { MetaobjectsResponse }
 * @description GraphQL response containing metaobject connection
 */
export type MetaobjectsResponse = {
  /**
   * @type { MetaobjectConnection }
   * @memberof MetaobjectsResponse
   */
  metaobjects: MetaobjectConnection | null;
};

export function decodeMetaobjectsResponse(rawInput: unknown): MetaobjectsResponse | null {
  if (isJSON(rawInput)) {
    const decodedMetaobjects = decodeMetaobjectConnection(rawInput["metaobjects"]);

    return {
      metaobjects: decodedMetaobjects,
    };
  }
  return null;
}

/**
 * @type { ShopResponse }
 * @description GraphQL response containing shop info
 */
export type ShopResponse = {
  /**
   * @type { Shop }
   * @memberof ShopResponse
   */
  shop: Shop | null;
};

export function decodeShopResponse(rawInput: unknown): ShopResponse | null {
  if (isJSON(rawInput)) {
    const decodedShop = decodeShop(rawInput["shop"]);

    return {
      shop: decodedShop,
    };
  }
  return null;
}

/**
 * @type { LocalizationResponse }
 * @description GraphQL response containing localization info
 */
export type LocalizationResponse = {
  /**
   * @type { Localization }
   * @memberof LocalizationResponse
   */
  localization: Localization | null;
};

export function decodeLocalizationResponse(rawInput: unknown): LocalizationResponse | null {
  if (isJSON(rawInput)) {
    const decodedLocalization = decodeLocalization(rawInput["localization"]);

    return {
      localization: decodedLocalization,
    };
  }
  return null;
}
