import { HeroCarousel } from '@/components/home/HeroCarousel'
import { CategoriesGrid } from '@/components/home/CategoriesGrid'
import { FlashDeals } from '@/components/home/FlashDeals'
import { FeaturedBrands } from '@/components/home/FeaturedBrands'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { IslamicTouch } from '@/components/home/IslamicTouch'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroCarousel />
      <div className="container mx-auto px-4">
        <CategoriesGrid />
        <FlashDeals />
        <FeaturedProducts />
        <FeaturedBrands />
        <IslamicTouch />
      </div>
    </div>
  )
}