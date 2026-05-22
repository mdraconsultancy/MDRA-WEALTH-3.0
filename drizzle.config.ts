import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // HARDCODED FOR TESTING ONLY - REMOVE AFTERWARD
    url: "postgresql://neondb_owner:npg_axcR0z5bepqt@ep-tiny-brook-apbl1id6-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
