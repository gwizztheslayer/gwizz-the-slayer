import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: 'wcx01w97',
  dataset: 'production',
  title: 'G-WIZZ SERVER',
  plugins: [structureTool()],
  schema: schema,
});
