import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { clientSubmissions } from '@/lib/schema';
import { desc } from 'drizzle-orm';

// This forces Next.js to render this route dynamically per request, 
// resolving the DYNAMIC_SERVER_USAGE build error caused by reading headers.
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // 1. Security Check: Verify the password sent from your frontend
    const providedPassword = request.headers.get('x-admin-password');
    const actualPassword = process.env.ADMIN_PASSWORD;

    // If the passwords don't match (or aren't set), deny access
    if (!actualPassword || providedPassword !== actualPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Fetch all clients from Neon, sorted newest to oldest
    const clients = await db
      .select()
      .from(clientSubmissions)
      .orderBy(desc(clientSubmissions.createdAt));

    // 3. Send the data back to your React table
    return NextResponse.json({ clients }, { status: 200 });

  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
