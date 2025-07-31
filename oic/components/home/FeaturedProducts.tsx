import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/ProductCard'
import { products } from '@/lib/data/mock-data'

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-muted-foreground">Handpicked premium products for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  )
}