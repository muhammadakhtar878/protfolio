'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@/lib/data/mock-data'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="space-y-6">
      {/* Product Title & Brand */}
      <div>
        <p className="text-muted-foreground mb-2">{product.brand}</p>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.isHalal && (
          <Badge className="bg-green-500 text-white">Halal Certified</Badge>
        )}
        {product.isEidSpecial && (
          <Badge className="bg-accent text-white">Eid Special</Badge>
        )}
        {product.inStock && (
          <Badge variant="outline" className="text-green-600 border-green-600">
            In Stock
          </Badge>
        )}
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
              <Badge className="bg-red-500 text-white">
                Save {discountPercentage}%
              </Badge>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Price includes VAT. Free shipping on orders over $100.
        </p>
      </div>

      <Separator />

      {/* Quantity & Actions */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="font-medium">Quantity:</label>
          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </Button>
            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button size="lg" className="flex-1">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={isWishlisted ? 'text-red-500 border-red-500' : ''}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
        </div>

        <Button variant="outline" size="lg" className="w-full">
          Buy Now
        </Button>
      </div>

      <Separator />

      {/* Shipping Info */}
      <div className="space-y-4">
        <h3 className="font-semibold">Shipping & Returns</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium">Free Shipping</p>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <RotateCcw className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium">30-Day Returns</p>
              <p className="text-sm text-muted-foreground">Easy returns & exchanges</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-purple-600" />
            <div>
              <p className="font-medium">Authenticity Guarantee</p>
              <p className="text-sm text-muted-foreground">100% authentic products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <Card>
        <CardContent className="p-4">
          <h4 className="font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}