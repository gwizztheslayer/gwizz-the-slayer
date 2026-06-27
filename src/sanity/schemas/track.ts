export default {
  name: 'track',
  type: 'document',
  title: 'Discography (Music)',
  fields: [
    { name: 'title', type: 'string', title: 'Track/Album Title' },
    { name: 'coverArt', type: 'image', title: 'Cover Art', options: { hotspot: true } },
    { name: 'audioFile', type: 'file', title: 'Audio File (MP3/WAV)', description: 'Upload for the Vault Player' },
    { name: 'spotifyUrl', type: 'url', title: 'Spotify Link' },
    { name: 'appleMusicUrl', type: 'url', title: 'Apple Music Link' },
    { name: 'paypalLink', type: 'url', title: 'PayPal Link (If selling direct)' },
  ]
}
