export default {
  name: 'comic',
  type: 'document',
  title: "Knysna's Saviour (Comics)",
  fields: [
    { name: 'issueNumber', type: 'number', title: 'Issue Number' },
    { name: 'title', type: 'string', title: 'Issue Title' },
    { name: 'cover', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'pdfFile', type: 'file', title: 'Comic PDF File' },
  ]
}
