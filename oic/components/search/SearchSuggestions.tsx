'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, TrendingUp } from 'lucide-react'
import { products, categories } from '@/lib/data/mock-data'

interface SearchSuggestionsProps {
  query: string
  onClose: () => void
}

export function SearchSuggestions({ query, onClose }: SearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<any[]>([])

  useEffect(() => {
    if (query.length > 0) {
      const productMatches = products
        .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 3)
        .map(p => ({ ...p, type: 'product' }))

      const categoryMatches = categories
        .filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 2)
        .map(c => ({ ...c, type: 'category' }))

      setSuggestions([...productMatches, ...categoryMatches])
    }
  }, [query])

  const trendingSearches = [
    'Quran with translation',
    'Prayer mat',
    'Hijab collection',
    'Halal dates',
    'Islamic art'
  ]

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1">
      <div className="p-4">
        {query.length > 0 ? (
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-3">
              Search Results
            </h4>
            {suggestions.length > 0 ? (
              <div className="space-y-2">
                {suggestions.map((item, index) => (
                  <Link
                    key={index}
                    href={item.type === 'product' ? `/products/${item.id}` : `/products?category=${item.id}`}
                    className="flex items-center space-x-3 p-2 hover:bg-muted rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{item.type === 'product' ? item.title : item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.type === 'product' ? `$${item.price}` : `${item.productCount} products`}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">No results found</p>
            )}
          </div>
        ) : (
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Trending Searches
            </h4>
            <div className="space-y-2">
              {trendingSearches.map((search, index) => (
                <Link
                  key={index}
                  href={`/products?q=${encodeURIComponent(search)}`}
                  className="flex items-center space-x-3 p-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span>{search}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}