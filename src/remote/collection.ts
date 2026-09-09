import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Collection,
  type CollectionConnection,
  type StorefrontError,
  type GetCollectionsArgs,
  type GetCollectionProductsArgs,
  decodeCollectionResponse,
  decodeCollectionsResponse,
  decodeCollectionsByIdsResponse,
  decodeProductCollectionsResponse,
} from "../generated/types";
import {
  GET_COLLECTION_BY_ID,
  GET_COLLECTION_BY_HANDLE,
  GET_COLLECTION_WITH_PRODUCTS,
  GET_COLLECTIONS,
  GET_COLLECTIONS_BY_IDS_WITH_PRODUCTS,
  GET_PRODUCT_COLLECTIONS,
} from "../queries";

export function createCollectionApi(executor: Executor): CollectionApi {
  return {
    getById(id: string): Promise<APIResponse<Collection, StorefrontError[]>> {
      return executor.execute(
        GET_COLLECTION_BY_ID,
        { id },
        (data) => decodeCollectionResponse(data)?.collection ?? null
      );
    },

    getByHandle(handle: string): Promise<APIResponse<Collection, StorefrontError[]>> {
      return executor.execute(
        GET_COLLECTION_BY_HANDLE,
        { handle },
        (data) => decodeCollectionResponse(data)?.collection ?? null
      );
    },

    getWithProducts(
      idOrHandle: { id: string } | { handle: string },
      args: Partial<GetCollectionProductsArgs> = {},
      country?: string
    ): Promise<APIResponse<Collection, StorefrontError[]>> {
      const variables: Record<string, unknown> = {
        ...idOrHandle,
        first: args.first ?? 20,
        after: args.after,
        last: args.last,
        before: args.before,
        reverse: args.reverse,
        sortKey: args.sortKey,
        filters: args.filters,
        country,
      };
      return executor.execute(
        GET_COLLECTION_WITH_PRODUCTS,
        variables,
        (data) => decodeCollectionResponse(data)?.collection ?? null
      );
    },

    getMany(
      args: Partial<GetCollectionsArgs> = {}
    ): Promise<APIResponse<CollectionConnection, StorefrontError[]>> {
      const variables: Record<string, unknown> = {
        first: args.first ?? 20,
        after: args.after,
        last: args.last,
        before: args.before,
        reverse: args.reverse,
        sortKey: args.sortKey,
        query: args.query,
      };
      return executor.execute(
        GET_COLLECTIONS,
        variables,
        (data) => decodeCollectionsResponse(data)?.collections ?? null
      );
    },

    getByIdsWithProducts(
      ids: string[],
      args: { first?: number; variantsFirst?: number } = {},
      country?: string
    ): Promise<APIResponse<Collection[], StorefrontError[]>> {
      return executor.execute(
        GET_COLLECTIONS_BY_IDS_WITH_PRODUCTS,
        { ids, first: args.first ?? 20, variantsFirst: args.variantsFirst ?? 30, country },
        (data) => decodeCollectionsByIdsResponse(data)?.nodes ?? null
      );
    },

    getByProductId(
      productId: string,
      first: number = 10
    ): Promise<APIResponse<Collection[], StorefrontError[]>> {
      return executor.execute(
        GET_PRODUCT_COLLECTIONS,
        { id: productId, first },
        (data) => decodeProductCollectionsResponse(data)?.product?.collections.nodes ?? null
      );
    },
  };
}

export type CollectionApi = {
  getById: (id: string) => Promise<APIResponse<Collection, StorefrontError[]>>;
  getByHandle: (handle: string) => Promise<APIResponse<Collection, StorefrontError[]>>;
  getWithProducts: (
    idOrHandle: { id: string } | { handle: string },
    args?: Partial<GetCollectionProductsArgs>,
    country?: string
  ) => Promise<APIResponse<Collection, StorefrontError[]>>;
  getMany: (
    args?: Partial<GetCollectionsArgs>
  ) => Promise<APIResponse<CollectionConnection, StorefrontError[]>>;
  getByIdsWithProducts: (
    ids: string[],
    args?: { first?: number; variantsFirst?: number },
    country?: string
  ) => Promise<APIResponse<Collection[], StorefrontError[]>>;
  getByProductId: (
    productId: string,
    first?: number
  ) => Promise<APIResponse<Collection[], StorefrontError[]>>;
};
