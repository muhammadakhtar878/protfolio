'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { FilterSidebar } from '@/components/product/FilterSidebar'
import { ProductGrid } from '@/components/product/ProductGrid'
import { ProductSort } from '@/components/product/ProductSort'
import { products } from '@/lib/data/mock-data'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('latest')

  useEffect(() => {
    let filtered = [...products]

    // Apply category filter
    const category = searchParams.get('category')
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase().includes(category.toLowerCase()))
    }

    // Apply search query
    const query = searchParams.get('q')
    if (query) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'popularity':
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
      default:
        // Latest (default order)
        break
    }

    setFilteredProducts(filtered)
  }, [searchParams, sortBy])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <ProductSort value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <FilterSidebar />
        </div>
        
        <div className="lg:col-span-3">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}