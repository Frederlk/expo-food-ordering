export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      order_items: {
        Row: {
          created_at: string;
          id: number;
          order_id: number;
          product_id: number;
          quantity: number;
          size: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          order_id: number;
          product_id: number;
          quantity?: number;
          size?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          order_id?: number;
          product_id?: number;
          quantity?: number;
          size?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_order_items_order_id_fkey';
            columns: ['order_id'];
            isOneToOne: false;
            referencedRelation: 'orders';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_order_items_product_id_fkey';
            columns: ['product_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
        ];
      };
      orders: {
        Row: {
          created_at: string;
          id: number;
          status: string;
          total: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string;
          total?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string;
          total?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_orders_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          created_at: string;
          id: number;
          image: string | null;
          name: string;
          price: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image?: string | null;
          name: string;
          price: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          image?: string | null;
          name?: string;
          price?: number;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          group: string;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
          stripe_customer_id?: string | null;
          expo_push_token?: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          group?: string;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
          stripe_customer_id?: string | null;
          expo_push_token?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          group?: string;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
          stripe_customer_id?: string | null;
          expo_push_token?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
