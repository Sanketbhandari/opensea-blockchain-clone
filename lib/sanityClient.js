import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'uogq0pmj',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk8RZErIFXuZPo29wGlY8s7OvCn62sywCKro85osFVUipJrJvPecSaNHCFgDHhj3zXXPTsLrZG5zfxPqrPUIQ5FrFdc1A1sqIWY7KVrZgmK1HKU9TV1ciRXIaCyfjT6SEQZbByMsyBFCc4KgpM7D70jNKUjbjYxcvkEkMRKbcPmFqif4jveU',
  useCdn: false,
})
