import type { CollectionConfig } from 'payload'
export const ContactPage: CollectionConfig = {
  slug: 'contactpage',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      label: 'Title',
    },
    {
      name: 'form',
      type: 'relationship',
      label: 'Form',
      relationTo: 'forms',
    },
  ],
}
