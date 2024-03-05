import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { supabase } from '@lib/supabase';

export const PRODUCTS_QUERY_KEY = 'products';

export const useProductList = () => {
  return useQuery({
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
  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEY, id],
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

export const useInsertProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(data: any) {
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

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(data: any) {
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
