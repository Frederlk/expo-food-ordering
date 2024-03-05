import { PostgrestError } from '@supabase/supabase-js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Product } from '@types';

import { supabase } from '@lib/supabase';

export const PRODUCTS_QUERY_KEY = 'products';

export const useProductList = () => {
  return useQuery<Product[], PostgrestError>({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: async () => {
      const { data, error } = await supabase.from(PRODUCTS_QUERY_KEY).select('*');
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product, PostgrestError>({
    queryKey: [PRODUCTS_QUERY_KEY, id],
    enabled: !!id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from(PRODUCTS_QUERY_KEY)
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

type InsertProductRequestData = Omit<Product, 'created_at' | 'id'>;

export const useInsertProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Product, PostgrestError, InsertProductRequestData>({
    async mutationFn(data: InsertProductRequestData) {
      const { error, data: newProduct } = await supabase
        .from(PRODUCTS_QUERY_KEY)
        .insert({
          name: data.name,
          image: data.image,
          price: data.price,
        })
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return newProduct;
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: [PRODUCTS_QUERY_KEY] });
    },
  });
};

type UpdateProductRequestData = Omit<Product, 'created_at'>;

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Product, PostgrestError, UpdateProductRequestData>({
    async mutationFn(data: UpdateProductRequestData) {
      const { error, data: updatedProduct } = await supabase
        .from(PRODUCTS_QUERY_KEY)
        .update({
          name: data.name,
          image: data.image,
          price: data.price,
        })
        .eq('id', data.id)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return updatedProduct;
    },
    async onSuccess(_, { id }) {
      await queryClient.invalidateQueries({ queryKey: [PRODUCTS_QUERY_KEY] });
      await queryClient.invalidateQueries({ queryKey: [PRODUCTS_QUERY_KEY, id] });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(id: number) {
      const { error } = await supabase.from(PRODUCTS_QUERY_KEY).delete().eq('id', id);
      if (error) {
        throw new Error(error.message);
      }
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: [PRODUCTS_QUERY_KEY] });
    },
  });
};
