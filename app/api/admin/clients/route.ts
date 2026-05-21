import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { clientSubmissions } from '@/lib/schema';
import { desc } from 'drizzle-orm';

// TODO: For production scale, replace this simple password gate
// with NextAuth.js or Clerk for proper authentication.

export async function GET(request: NextRequest) {
  const password = request.headers.get('x-admin-password');

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const clients = await db
      .select()
      .from(clientSubmissions)
      .orderBy(desc(clientSubmissions.createdAt));

    return NextResponse.json({ clients });
  } catch (err) {
    console.error('Error fetching clients:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
