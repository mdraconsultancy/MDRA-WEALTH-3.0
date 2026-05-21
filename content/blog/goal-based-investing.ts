import { BlogPost } from './types';

const post: BlogPost = {
  slug: 'goal-based-investing',
  title: 'Goal-Based Investing: Matching Funds to Your Life Milestones',
  excerpt: 'Not all money should be invested the same way. Here\'s a practical framework to match the right mutual funds to each of your life goals.',
  category: 'Wealth',
  readTime: '6 min read',
  publishedAt: '2024-08-12',
  author: 'Kushal Pal',
  content: `
<h2>Why One Portfolio Doesn't Fit All Goals</h2>
<p>Most investors treat their investments as a single pot of money. They buy a few mutual funds, invest regularly, and hope it all works out. While better than not investing, this approach misses a critical insight: different financial goals have different time horizons, and time horizon should drive fund selection — not tips from friends or last year's top performer list.</p>

<p>Goal-based investing is the practice of creating separate "buckets" for each financial goal and selecting investments appropriate for each bucket's time horizon and risk tolerance.</p>

<h2>The Framework: Time Horizon Drives Fund Selection</h2>

<table>
  <thead>
    <tr><th>Time Horizon</th><th>Goal Examples</th><th>Recommended Fund Type</th><th>Expected Returns</th></tr>
  </thead>
  <tbody>
    <tr><td>0–2 years</td><td>Emergency fund, vacation</td><td>Liquid / Ultra Short Duration Debt</td><td>6–7%</td></tr>
    <tr><td>2–5 years</td><td>Car, home renovation, wedding</td><td>Hybrid / Conservative Hybrid</td><td>8–10%</td></tr>
    <tr><td>5–10 years</td><td>Children's education, home down payment</td><td>Large Cap / Flexi Cap Equity</td><td>11–13%</td></tr>
    <tr><td>10+ years</td><td>Retirement, child's higher education</td><td>Mid Cap / Small Cap / Flexi Cap</td><td>13–18%</td></tr>
  </tbody>
</table>

<p>The longer your time horizon, the more equity risk you can take — because you have time to recover from market downturns. For short-term goals, capital preservation matters more than return maximisation.</p>

<h2>Goal 1: Emergency Fund (Ongoing)</h2>
<p>This is not an investment goal — it's a financial safety net. Keep 3–6 months of expenses in a liquid mutual fund or high-yield savings account. Liquid funds invest in very short-term debt instruments and typically return 5–7% with next-day redemption. Never invest emergency funds in equity — markets may be down exactly when you need the money most.</p>

<h2>Goal 2: Children's Education (7–15 Years)</h2>
<p>Education inflation in India runs at 8–10% annually. A postgraduate degree at a private institute that costs ₹15 lakh today will cost ₹32–40 lakh in 10 years. Planning for this goal requires equity exposure to beat education inflation significantly.</p>

<p>Recommended approach: Start a SIP in a Flexi Cap or Large Cap fund for your child's education goal. If the goal is 12+ years away, Mid Cap exposure is appropriate. As you get within 3 years of the goal, systematically shift to Hybrid or Debt funds to protect the corpus.</p>

<h2>Goal 3: Home Purchase Down Payment (3–7 Years)</h2>
<p>If you're planning to buy a home in 3–5 years, you need a mix of growth and capital protection. Aggressive Hybrid funds (65% equity, 35% debt) strike this balance well. For a 5–7 year horizon, a Large Cap fund is appropriate but with a systematic transfer to Hybrid as the date approaches.</p>

<p>Never keep a home down payment target in pure Small Cap or Mid Cap funds — a market crash 6 months before your planned purchase could delay your home buy by years.</p>

<h2>Goal 4: Retirement (10–30 Years)</h2>
<p>Retirement is the longest-horizon goal for most investors. With 20–30 years to compound, this is where you can take maximum equity risk for maximum returns. A combination of:</p>
<ul>
  <li>Flexi Cap fund: 40% allocation</li>
  <li>Mid Cap fund: 30% allocation</li>
  <li>Small Cap fund: 20% allocation</li>
  <li>Index fund (Nifty 50): 10% allocation</li>
</ul>
<p>This aggressive allocation, sustained for 20+ years, has historically delivered 13–16% CAGR, building substantial retirement wealth.</p>

<p>As you cross 50, begin shifting toward a more conservative allocation — increasing Large Cap and Hybrid exposure, reducing Small Cap — to protect your accumulated corpus from a large market correction right before retirement.</p>

<h2>Goal 5: Marriage (3–8 Years)</h2>
<p>Marriage expenses in India can range from ₹5 lakh to ₹50 lakh depending on family expectations. If the goal is 5+ years away, a Hybrid fund or Large Cap SIP works well. For a 3-year horizon, stick to Conservative Hybrid or Short Duration Debt funds.</p>

<h2>The Practical Implementation</h2>
<ol>
  <li><strong>List all your financial goals</strong> with target amounts and timelines.</li>
  <li><strong>Assign a monthly SIP to each goal</strong> in the appropriate fund type.</li>
  <li><strong>Name your folios or SIPs clearly:</strong> "Ananya's College 2035," "Retirement 2048," etc. This prevents emotional redemption.</li>
  <li><strong>Review annually:</strong> Goals change, timelines shift, income grows. Your portfolio should reflect your current reality, not the one from 5 years ago.</li>
</ol>

<h2>The Cost of Not Planning by Goal</h2>
<p>Investors who don't plan by goal tend to make one of two mistakes: they invest everything in equity (too much risk for short-term goals) or everything in FDs (too little return for long-term goals). Both lead to suboptimal outcomes — either panic-selling during a crash or failing to accumulate enough for retirement.</p>

<p>Goal-based investing eliminates these mistakes by design. Each goal has the right fund, the right allocation, and a clear target. When the goal is achieved, the money is there — and the rest of your portfolio is untouched.</p>

<p>At MDRA Wealth, we build goal-based financial plans for clients at every income level. Contact us on WhatsApp to map your goals to the right investments.</p>
  `,
};

export default post;
