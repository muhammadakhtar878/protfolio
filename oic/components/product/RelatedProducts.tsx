import { ProductCard } from './ProductCard'
import { Product, products } from '@/lib/data/mock-data'

interface RelatedProductsProps {
  currentProduct: Product
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const relatedProducts = products
    .filter(p => 
      p.id !== currentProduct.id && 
      (p.category === currentProduct.category || p.brand === currentProduct.brand)
    )
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}