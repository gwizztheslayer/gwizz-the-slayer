export default {
  name: 'service',
  type: 'document',
  title: 'Label Services',
  fields: [
    { name: 'title', type: 'string', title: 'Service Name (e.g. Beat Production, Mixing)' },
    { name: 'description', type: 'text', title: 'Service Description' },
    { name: 'price', type: 'string', title: 'Starting Price (e.g. $150 / R2500)' },
    { name: 'bookingLink', type: 'url', title: 'Booking/Contact Link (Calendly or Mailto)' }
  ]
}
