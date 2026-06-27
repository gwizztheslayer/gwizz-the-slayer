export default {
  name: 'track',
  title: 'Track',
  type: 'object',
  fields: [
    { 
      name: 'name', 
      title: 'Track Name (e.g., 1. All In A Day)', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'audioFile', 
      title: 'Audio File (.mp3 or .mp3)', 
      type: 'file', 
      options: { accept: 'audio/*' } 
    }
  ]
}