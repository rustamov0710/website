import React from 'react'
import { ProductType } from '../../interfaces'
import Card from '../Card/Card'

const ShopDeals = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('failed to fetch')
  const products: ProductType[] = await res.json()

  return (
<section className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Shop Deals</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default ShopDeals
