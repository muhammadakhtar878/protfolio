'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/product/ProductCard'
import { flashDeals } from '@/lib/data/mock-data'

export function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12">
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Timer className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-red-700">Flash Deals</h2>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                Limited Time
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Ends in:</span>
              <div className="flex space-x-1">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-red-600 text-white px-2 py-1 rounded text-sm font-mono">
                    {value.toString().padStart(2, '0')}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((product) => (
              <ProductCard key={product.id} product={product} showDiscount />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/deals">View All Flash Deals</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}