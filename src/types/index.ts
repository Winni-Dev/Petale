export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface SubCategory {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string; // Pour compatibilité avec l'existant
  images?: string[]; // Nouvelles images multiples
  category_id: string;
  sub_category_id: string;
  is_active: boolean;
  created_at: string;
  category?: Category;
  sub_category?: SubCategory;
  ingredients?: string;
  is_best_seller?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  category?: string;
}

export interface User {
  id: string;
  email: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface WhatsAppOrder {
  items: OrderItem[];
  total: number;
}