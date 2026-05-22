import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Force Drizzle to read your Next.js environment file
dotenv.config({ path: '.env.local' });

export default defineConfig({
  schema: './lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // Make sure this says postgresql
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
