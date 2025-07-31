import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Shield, Heart } from 'lucide-react'

export function IslamicTouch() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Why Choose OIC Markeït?</h2>
        <p className="text-muted-foreground">Your trusted Islamic marketplace</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center islamic-pattern">
          <CardContent className="p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Halal Certified</h3>
            <p className="text-muted-foreground mb-4">
              All our products are verified and certified halal by recognized Islamic authorities.
            </p>
            <Badge className="bg-green-100 text-green-700">
              Certified
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center islamic-pattern">
          <CardContent className="p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-muted-foreground mb-4">
              We source only the finest products from trusted suppliers worldwide.
            </p>
            <Badge className="bg-amber-100 text-amber-700">
              Premium
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center islamic-pattern">
          <CardContent className="p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community First</h3>
            <p className="text-muted-foreground mb-4">
              Supporting Muslim businesses and giving back to the ummah worldwide.
            </p>
            <Badge className="bg-red-100 text-red-700">
              Community
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}