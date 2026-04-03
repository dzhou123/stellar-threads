import { Product } from "@/types";
import productsData from "@/data/products.json";

export function getAllProducts(): Product[] {
  return productsData.products as Product[];
}

export function getProductById(id: string): Product | undefined {
  return (productsData.products as Product[]).find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return (productsData.products as Product[]).find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return (productsData.products as Product[]).filter(
    (p) => p.category === category
  );
}

export function getFeaturedProducts(): Product[] {
  return (productsData.products as Product[]).filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return (productsData.products as Product[]).filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
