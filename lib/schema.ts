import {
  pgTable,
  uuid,
  varchar,
  integer,
  bigint,
  timestamp,
} from 'drizzle-orm/pg-core';

export const clientSubmissions = pgTable('client_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  age: integer('age').notNull(),
  contactNumber: varchar('contact_number', { length: 15 }).notNull(),
  email: varchar('email', { length: 150 }),
  financialGoal: varchar('financial_goal', { length: 100 }).notNull(),
  monthlyInvestment: integer('monthly_investment').notNull(),
  investmentDuration: integer('investment_duration').notNull(),
  riskProfile: varchar('risk_profile', { length: 20 }).notNull(),
  fundCategory: varchar('fund_category', { length: 30 }).notNull(),
  projectedValue: bigint('projected_value', { mode: 'number' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type ClientSubmission = typeof clientSubmissions.$inferSelect;
export type NewClientSubmission = typeof clientSubmissions.$inferInsert;
