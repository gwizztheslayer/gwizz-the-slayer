export default {
  name: 'arsenal',
  type: 'document',
  title: 'The Arsenal (Merch)',
  fields: [
    { name: 'title', type: 'string', title: 'Item Name' },
    { name: 'slug', type: 'slug', title: 'URL Slug', options: { source: 'title' } },
    { name: 'category', type: 'string', title: 'Category', options: { list: ['Physical Supply', 'Digital Asset'] } },
    { name: 'priceUsd', type: 'number', title: 'Price (USD)' },
    { name: 'priceEth', type: 'number', title: 'Price (ETH)' },
    { name: 'image', type: 'image', title: 'Product Image', options: { hotspot: true } },
    { name: 'paypalLink', type: 'url', title: 'PayPal Direct Payment Link' },
    { name: 'stripeLink', type: 'url', title: 'Stripe Direct Payment Link' },
  ]
}
