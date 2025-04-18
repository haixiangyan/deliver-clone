import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '4un3vpay',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-04-15',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// 处理跨域问题
// sanity cors add http://localhost:3000

export default client;
