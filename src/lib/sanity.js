import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '48tlul12',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-21',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
} 