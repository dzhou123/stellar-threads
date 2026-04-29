"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Plus, Edit2, Trash2, Search, ChevronLeft, ChevronRight,
  Package, DollarSign, Tag, Image as ImageIcon, ToggleLeft, ToggleRight
} from "lucide-react";
import { Product } from "@/types";
import { getAllProducts, formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setProducts(getAllProducts());
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-silver-50">
      <div className="bg-navy text-white py-8">
        <div className="container-width">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-montserrat font-bold">Admin Dashboard</h1>
              <p className="text-silver-300 mt-1">Manage your products</p>
            </div>
            <Link href="/" className="text-silver-300 hover:text-white transition-colors">
              ← Back to Store
            </Link>
          </div>
        </div>
      </div>

      <div className="container-width py-8">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-silver-200">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-10 w-full md:w-80"
                />
              </div>
              <button
                onClick={() => {
                  setIsAddingNew(true);
                  setEditingProduct(null);
                }}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={20} />
                Add Product
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-silver-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-navy">Product</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-navy">Category</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-navy">Price</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-navy">Featured</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-navy">Stock</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-navy">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-silver-200">
                {paginatedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-silver-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-silver-100">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-navy">{product.name}</p>
                          <p className="text-sm text-silver-500 truncate max-w-xs">{product.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize text-navy">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-navy">{formatPrice(product.price)}</span>
                      {product.compareAtPrice && (
                        <span className="text-sm text-silver-500 line-through ml-2">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {product.featured ? (
                        <span className="inline-flex items-center gap-1 text-green-600">
                          <ToggleRight size={20} /> Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-silver-400">
                          <ToggleLeft size={20} /> No
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {product.inStock ? (
                        <span className="text-green-600 font-medium">In Stock</span>
                      ) : (
                        <span className="text-crimson font-medium">Out of Stock</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setEditingProduct(product);
                            setIsAddingNew(false);
                          }}
                          className="p-2 text-navy hover:bg-navy/10 rounded-lg transition-colors"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 text-crimson hover:bg-crimson/10 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="p-4 border-t border-silver-200 flex items-center justify-between">
              <p className="text-sm text-silver-600">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-silver-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-silver-50"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="px-4 py-2 text-navy font-medium">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-silver-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-silver-50"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                <Package size={24} className="text-navy" />
              </div>
              <div>
                <p className="text-sm text-silver-600">Total Products</p>
                <p className="text-2xl font-bold text-navy">{products.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-silver-600">Featured Products</p>
                <p className="text-2xl font-bold text-navy">
                  {products.filter((p) => p.featured).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-crimson/10 rounded-full flex items-center justify-center">
                <Tag size={24} className="text-crimson" />
              </div>
              <div>
                <p className="text-sm text-silver-600">Categories</p>
                <p className="text-2xl font-bold text-navy">
                  {[...new Set(products.map((p) => p.category))].length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-montserrat font-bold text-navy mb-2">How to Edit Products</h3>
          <p className="text-silver-600 text-sm">
            To add, edit, or remove products, you can directly modify the{" "}
            <code className="bg-white px-2 py-1 rounded text-navy font-mono text-xs">
              src/data/products.json
            </code>{" "}
            file. Each product object has the following structure:
          </p>
          <div className="mt-4 bg-white rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-silver-700 font-mono">
{`{
  "id": "unique-id",
  "name": "Product Name",
  "slug": "product-slug",
  "description": "Short description",
  "longDescription": "Full product description",
  "price": 29.99,
  "compareAtPrice": 39.99,  // optional, for sale items
  "category": "flags|buntings",
  "subcategory": "optional subcategory",
  "images": ["url1", "url2", "url3"],
  "inStock": true,
  "featured": true,
  "tags": ["tag1", "tag2"]
}`}
            </pre>
          </div>
        </div>
      </div>

      {(isAddingNew || editingProduct) && (
        <ProductModal
          product={editingProduct}
          onClose={() => {
            setIsAddingNew(false);
            setEditingProduct(null);
          }}
          onSave={() => {
            setProducts(getAllProducts());
            setIsAddingNew(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}

function ProductModal({
  product,
  onClose,
  onSave,
}: {
  product: Product | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState<{
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    price: number;
    compareAtPrice: number;
    category: string;
    subcategory: string;
    images: string;
    sizes: string;
    inStock: boolean;
    featured: boolean;
    tags: string;
  }>({
    name: product?.name || "",
    slug: product?.slug || "",
    description: product?.description || "",
    longDescription: product?.longDescription || "",
    price: product?.price || 0,
    compareAtPrice: product?.compareAtPrice || 0,
    category: product?.category || "flags",
    subcategory: product?.subcategory || "",
    images: product?.images.join(", ") || "",
    sizes: product?.sizes?.join(", ") || "",
    inStock: product?.inStock ?? true,
    featured: product?.featured ?? false,
    tags: product?.tags.join(", ") || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product data saved:", formData);
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-silver-200">
          <h2 className="text-xl font-montserrat font-bold text-navy">
            {product ? "Edit Product" : "Add New Product"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Compare At Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.compareAtPrice}
                onChange={(e) => setFormData({ ...formData, compareAtPrice: parseFloat(e.target.value) })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="input-field"
              >
                <option value="flags">Nation Flags</option>
                <option value="buntings">Bunting Strings</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Subcategory</label>
              <input
                type="text"
                value={formData.subcategory}
                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="input-field resize-none"
                rows={2}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">Long Description</label>
              <textarea
                value={formData.longDescription}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                className="input-field resize-none"
                rows={3}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-navy mb-2">
                Images (comma-separated URLs)
              </label>
              <input
                type="text"
                value={formData.images}
                onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Sizes (comma-separated)</label>
              <input
                type="text"
                value={formData.sizes}
                onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                className="input-field"
                placeholder="S, M, L, XL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="input-field"
              />
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.inStock}
                  onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                  className="w-4 h-4 rounded border-silver-400 text-navy focus:ring-navy"
                />
                <span className="text-navy">In Stock</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 rounded border-silver-400 text-navy focus:ring-navy"
                />
                <span className="text-navy">Featured</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-silver-200">
            <button type="button" onClick={onClose} className="btn-outline flex-1">
              Cancel
            </button>
            <button type="submit" className="btn-primary flex-1">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
