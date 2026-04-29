export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  category: "flags" | "buntings";
  subcategory?: string;
  images: string[];
  variants?: ProductVariant[];
  sizes?: string[];
  inStock: boolean;
  featured: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  type: "color" | "size" | "material";
  value: string;
  hex?: string;
  priceModifier?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedVariant?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  shipping: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
  status: "pending" | "paid" | "shipped" | "delivered";
  createdAt: string;
}

export interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
