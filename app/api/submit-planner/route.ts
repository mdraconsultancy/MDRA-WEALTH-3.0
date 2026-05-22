import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db'; 
import { clientSubmissions } from '@/lib/schema';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Define the Zod validation schema
const bodySchema = z.object({
  name: z.string().min(2).max(100),
  age: z.number().int().min(18).max(80),
  contactNumber: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
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
    
    // 2. Validate the incoming data
    const parsed = bodySchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid input', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 3. Insert into the Neon database
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

    // 4. Send the Email Notification via Resend
    await resend.emails.send({
      from: 'MDRA Wealth <onboarding@resend.dev>',
      to: 'mdraconsultancy@gmail.com', 
      subject: `New Smart Planner Lead: ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0f172a;">New Smart Planner Submission! 🎉</h2>
          <p style="color: #475569; font-size: 16px;">You just received a new lead from the MDRA Wealth Smart Planner.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.contactNumber}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email || 'Not provided'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Age:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.age}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Goal:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.financialGoal}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>SIP Amount:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">₹${data.monthlyInvestment}/month</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Duration:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.investmentDuration} months</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Risk Profile:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee; text-transform: capitalize;">${data.riskProfile}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Fund Matched:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fundCategory}</td></tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 14px; color: #94a3b8;">
            <a href="https://mdra-wealth-3-0.vercel.app/admin" style="color: #0ea5e9; text-decoration: none;">View in Admin Dashboard &rarr;</a>
          </p>
        </div>
      `
    });

    // 5. Return success response to the frontend
    return NextResponse.json({ success: true, message: 'Lead saved and email sent successfully' }, { status: 200 });

  } catch (err) {
    console.error('Error saving planner submission:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
