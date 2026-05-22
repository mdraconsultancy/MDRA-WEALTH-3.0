import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { clientSubmissions } from '@/lib/schema';

export async function POST(request: Request) {
  try {
    // 1. Grab the data sent by your form
    const body = await request.json();
    
    // 2. Connect to Neon
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);

    // 3. Insert the data into your client_submissions table
    await db.insert(clientSubmissions).values({
      name: body.name,
      age: body.age,
      contactNumber: body.contactNumber,
      // If email is empty from the form, send null so it doesn't break
      email: body.email || null, 
      financialGoal: body.financialGoal,
      monthlyInvestment: body.monthlyInvestment,
      investmentDuration: body.investmentDuration,
      riskProfile: body.riskProfile,
      fundCategory: body.fundCategory,
      projectedValue: body.projectedValue,
    });

    return NextResponse.json({ success: true, message: 'Lead saved successfully' });
    
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save to database' }, 
      { status: 500 }
    );
  }
}
