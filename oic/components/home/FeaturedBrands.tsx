import { brands } from '@/lib/data/mock-data'
import { Card, CardContent } from '@/components/ui/card'

export function FeaturedBrands() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Brands</h2>
        <p className="text-muted-foreground">Trusted brands for quality products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <Card key={brand.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold">{brand.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}