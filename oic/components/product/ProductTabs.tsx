import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { Product } from '@/lib/data/mock-data'

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  const mockReviews = [
    {
      id: '1',
      author: 'Ahmad Hassan',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent quality Quran. The translation is very clear and the binding is beautiful.',
      verified: true
    },
    {
      id: '2',
      author: 'Fatima Ali',
      rating: 4,
      date: '2024-01-10',
      comment: 'Good product, fast shipping. Recommended for Islamic studies.',
      verified: true
    }
  ]

  const mockQA = [
    {
      id: '1',
      question: 'Is this product halal certified?',
      answer: 'Yes, all our products are verified and halal certified by recognized Islamic authorities.',
      date: '2024-01-12'
    },
    {
      id: '2',
      question: 'What is the shipping time?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping is available for faster delivery.',
      date: '2024-01-08'
    }
  ]

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
        <TabsTrigger value="qa">Q&A</TabsTrigger>
      </TabsList>
      
      <TabsContent value="description">
        <Card>
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="mb-4">{product.description}</p>
              
              <h4 className="text-lg font-semibold mb-3">Specifications</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-3 mt-6">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-muted px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="reviews">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <div className="flex items-center space-x-2">
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
                  <span className="font-medium">{product.rating} out of 5</span>
                </div>
              </div>

              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.author}</span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="qa">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Questions & Answers</h3>
              
              <div className="space-y-4">
                {mockQA.map((qa) => (
                  <div key={qa.id} className="border-b pb-4 last:border-b-0">
                    <div className="mb-2">
                      <span className="font-medium text-sm">Q: </span>
                      <span>{qa.question}</span>
                    </div>
                    <div className="mb-2">
                      <span className="font-medium text-sm">A: </span>
                      <span className="text-muted-foreground">{qa.answer}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{qa.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}