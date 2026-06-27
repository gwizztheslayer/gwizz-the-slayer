export default {
  name: 'digitalAsset',
  title: 'Digital Asset (Kits / Presets)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Asset Title (e.g., Ceoxcam88 Drum Kit)', type: 'string' },
    { name: 'price', title: 'Price (USD)', type: 'number' },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    { name: 'assetFile', title: 'Digital File (.zip)', type: 'file' }
  ]
}