import type { APIResponse } from "typesafe-api-call";
import type { Executor } from "./executor";
import {
  type Product,
  type ProductConnection,
  type ProductVariant,
  type StorefrontError,
  type GetProductsArgs,
  type GetProductRecommendationsArgs,
  decodeProductResponse,
  decodeProductsResponse,
  decodeProductRecommendationsResponse,
  decodeProductVariantsResponse,
  decodeProductsByIdsResponse,
} from "../generated/types";
import {
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_HANDLE,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_IDS,
  GET_PRODUCT_VARIANTS,
  GET_PRODUCT_RECOMMENDATIONS,
} from "../queries";

export function createProductApi(executor: Executor): ProductApi {
  return {
    getById(id: string): Promise<APIResponse<Product, StorefrontError[]>> {
      return executor.execute(
        GET_PRODUCT_BY_ID,
        { id },
        (data) => decodeProductResponse(data)?.product ?? null
      );
    },

    getByHandle(handle: string): Promise<APIResponse<Product, StorefrontError[]>> {
      return executor.execute(
        GET_PRODUCT_BY_HANDLE,
        { handle },
        (data) => decodeProductResponse(data)?.product ?? null
      );
    },

    getMany(
      args: Partial<GetProductsArgs> = {}
    ): Promise<APIResponse<ProductConnection, StorefrontError[]>> {
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
        GET_PRODUCTS,
        variables,
        (data) => decodeProductsResponse(data)?.products ?? null
      );
    },

    getByIds(ids: string[], country?: string): Promise<APIResponse<Product[], StorefrontError[]>> {
      return executor.execute(
        GET_PRODUCTS_BY_IDS,
        { ids, country },
        (data) => decodeProductsByIdsResponse(data)?.nodes ?? null
      );
    },

    getVariantsByIds(
      ids: string[],
      country?: string
    ): Promise<APIResponse<ProductVariant[], StorefrontError[]>> {
      return executor.execute(
        GET_PRODUCT_VARIANTS,
        { ids, country },
        (data) => decodeProductVariantsResponse(data)?.nodes ?? null
      );
    },

    getRecommendations(
      args: GetProductRecommendationsArgs
    ): Promise<APIResponse<Product[], StorefrontError[]>> {
      return executor.execute(
        GET_PRODUCT_RECOMMENDATIONS,
        { productId: args.productId, intent: args.intent },
        (data) => decodeProductRecommendationsResponse(data)?.productRecommendations ?? null
      );
    },
  };
}

export type ProductApi = {
  getById: (id: string) => Promise<APIResponse<Product, StorefrontError[]>>;
  getByHandle: (handle: string) => Promise<APIResponse<Product, StorefrontError[]>>;
  getMany: (
    args?: Partial<GetProductsArgs>
  ) => Promise<APIResponse<ProductConnection, StorefrontError[]>>;
  getByIds: (ids: string[], country?: string) => Promise<APIResponse<Product[], StorefrontError[]>>;
  getVariantsByIds: (
    ids: string[],
    country?: string
  ) => Promise<APIResponse<ProductVariant[], StorefrontError[]>>;
  getRecommendations: (
    args: GetProductRecommendationsArgs
  ) => Promise<APIResponse<Product[], StorefrontError[]>>;
};
