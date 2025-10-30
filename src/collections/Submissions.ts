import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  access: {
    read: () => true,
    create: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [
    { name: 'email', type: 'email', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    { name: 'select', type: 'text', required: true },
  ],
}
