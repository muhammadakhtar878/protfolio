'use client'

import { useState } from 'react'
import { CreditCard, MapPin, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  const orderItems = [
    {
      id: '1',
      title: 'Premium Quran with Translation',
      price: 89.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg'
    },
    {
      id: '2',
      title: 'Elegant Prayer Mat',
      price: 45.99,
      quantity: 2,
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg'
    }
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0
  const tax = subtotal * 0.05
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Tabs value={`step-${step}`} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="step-1" disabled={step !== 1}>
                  <MapPin className="w-4 h-4 mr-2" />
                  Shipping
                </TabsTrigger>
                <TabsTrigger value="step-2" disabled={step !== 2}>
                  <Package className="w-4 h-4 mr-2" />
                  Delivery
                </TabsTrigger>
                <TabsTrigger value="step-3" disabled={step !== 3}>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment
                </TabsTrigger>
              </TabsList>

              <TabsContent value="step-1" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dubai">Dubai</SelectItem>
                            <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                            <SelectItem value="sharjah">Sharjah</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Delivery Notes (Optional)</Label>
                      <Textarea id="notes" placeholder="Any special instructions..." />
                    </div>
                    
                    <Button onClick={() => setStep(2)} className="w-full">
                      Continue to Delivery
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step-2" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Standard Delivery (Free)</h4>
                            <p className="text-sm text-muted-foreground">3-5 business days</p>
                          </div>
                          <span className="font-medium">Free</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Express Delivery</h4>
                            <p className="text-sm text-muted-foreground">1-2 business days</p>
                          </div>
                          <span className="font-medium">$15.00</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Same Day Delivery</h4>
                            <p className="text-sm text-muted-foreground">Within 24 hours</p>
                          </div>
                          <span className="font-medium">$25.00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={() => setStep(3)} className="flex-1">
                        Continue to Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step-3" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" required />
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                        Back
                      </Button>
                      <Button className="flex-1">
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}