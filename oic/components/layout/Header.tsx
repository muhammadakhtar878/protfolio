'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, Heart, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SearchSuggestions } from '@/components/search/SearchSuggestions'
import { AuthModal } from '@/components/auth/AuthModal'
import { CartDropdown } from '@/components/cart/CartDropdown'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const handleLogin = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>✨ Eid Special Sale - Up to 50% Off!</span>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
                  <Globe className="w-4 h-4 mr-1" />
                  EN / USD
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English / USD</DropdownMenuItem>
                <DropdownMenuItem>العربية / AED</DropdownMenuItem>
                <DropdownMenuItem>Français / EUR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OM</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">OIC Markeït</h1>
              <p className="text-xs text-muted-foreground">Islamic Marketplace</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for Islamic books, prayer items, halal food..."
                className="pl-10 pr-4 py-3 w-full border-2 border-muted focus:border-primary"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSearch(e.target.value.length > 0)
                }}
                onFocus={() => setShowSearch(searchQuery.length > 0)}
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
                Search
              </Button>
            </div>
            {showSearch && (
              <SearchSuggestions
                query={searchQuery}
                onClose={() => setShowSearch(false)}
              />
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="w-5 h-5 mr-1" />
              Wishlist
            </Button>

            <CartDropdown />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5 mr-1" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleLogin('login')}>
                  Sign In
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLogin('register')}>
                  Create Account
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">My Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  <Menu className="w-4 h-4 mr-2" />
                  All Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/products?category=islamic-books">Islamic Books</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=prayer-items">Prayer Items</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=modest-fashion">Modest Fashion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=halal-food">Halal Food</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=islamic-art">Islamic Art</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=electronics">Electronics</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/deals" className="font-medium hover:text-primary transition-colors">
              Flash Deals
            </Link>
            <Link href="/new-arrivals" className="font-medium hover:text-primary transition-colors">
              New Arrivals
            </Link>
            <Link href="/halal-certified" className="font-medium hover:text-primary transition-colors">
              Halal Certified
            </Link>
            <Link href="/eid-collection" className="font-medium hover:text-primary transition-colors text-accent">
              Eid Collection
            </Link>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </header>
  )
}