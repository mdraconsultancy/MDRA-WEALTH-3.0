import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { clientSubmissions } from '@/lib/schema';

const bodySchema = z.object({
  name: z.string().min(2).max(100),
  age: z.number().int().min(18).max(80),
  contactNumber: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email().optional().or(z.literal('')),
  financialGoal: z.string().min(1).max(100),
  monthlyInvestment: z.number().int().min(500),
  investmentDuration: z.number().int().min(1),
  riskProfile: z.enum(['conservative', 'moderate', 'aggressive']),
  fundCategory: z.string().min(1).max(30),
  projectedValue: z.number().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bodySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid input', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await db.insert(clientSubmissions).values({
      name: data.name,
      age: data.age,
      contactNumber: data.contactNumber,
      email: data.email || null,
      financialGoal: data.financialGoal,
      monthlyInvestment: data.monthlyInvestment,
      investmentDuration: data.investmentDuration,
      riskProfile: data.riskProfile,
      fundCategory: data.fundCategory,
      projectedValue: data.projectedValue ?? null,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error saving planner submission:', err);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
