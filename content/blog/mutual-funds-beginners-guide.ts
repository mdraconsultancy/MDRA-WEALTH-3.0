import { BlogPost } from './types';

const post: BlogPost = {
  slug: 'mutual-funds-beginners-guide',
  title: "Mutual Funds 101: A Beginner's Guide for Indian Investors",
  excerpt: 'New to mutual funds? This complete guide explains what they are, how they work, and why they beat FDs for building long-term wealth in India.',
  category: 'Mutual Funds',
  readTime: '6 min read',
  publishedAt: '2024-11-08',
  author: 'Kushal Pal',
  content: `
<h2>What Is a Mutual Fund?</h2>
<p>A mutual fund is a pool of money collected from thousands of investors, managed by a professional fund manager, and invested across a diversified basket of stocks, bonds, or other securities. When you invest ₹1,000 in a mutual fund, that amount is combined with contributions from thousands of other investors and deployed as a large, well-diversified portfolio.</p>

<p>You receive "units" of the fund proportional to your investment. The value of each unit, called the Net Asset Value (NAV), changes daily based on the market performance of the underlying securities.</p>

<h2>Types of Mutual Funds in India</h2>

<h3>1. Equity Funds</h3>
<p>These invest primarily in stocks. They carry higher risk but have historically delivered the best long-term returns (12–18% per annum over 10+ years). Subtypes include:</p>
<ul>
  <li><strong>Large Cap Funds:</strong> Invest in top 100 companies by market capitalisation. Relatively stable, 10–12% average returns.</li>
  <li><strong>Mid Cap Funds:</strong> Invest in companies ranked 101–250. Higher growth potential, moderate volatility, 13–15% average returns.</li>
  <li><strong>Small Cap Funds:</strong> Invest in smaller companies. Highest growth potential and highest risk, 15–18% average returns.</li>
  <li><strong>Flexi Cap Funds:</strong> Fund manager can invest across any market cap. Flexible and well-suited for long-term wealth creation.</li>
  <li><strong>Index Funds:</strong> Passively track indices like Nifty 50 or Sensex. Very low cost, predictable performance matching the index.</li>
</ul>

<h3>2. Debt Funds</h3>
<p>These invest in bonds, government securities, and fixed-income instruments. They offer lower returns (6–9%) but are much more stable than equity funds. Best for short to medium-term goals (1–5 years) or for conservative investors.</p>

<h3>3. Hybrid Funds</h3>
<p>A mix of equity and debt in varying proportions. They balance growth with stability, making them ideal for moderate-risk investors. Aggressive Hybrid Funds typically have 65–80% equity exposure.</p>

<h2>How NAV Works</h2>
<p>NAV (Net Asset Value) is the per-unit price of a mutual fund. It is calculated at the end of each business day:</p>
<p><strong>NAV = (Total Assets of Fund - Liabilities) / Number of Units Outstanding</strong></p>
<p>When you invest ₹10,000 in a fund with NAV of ₹50, you get 200 units. If NAV rises to ₹65, your investment is worth ₹13,000. The NAV itself is not important — what matters is the percentage change in NAV over your holding period.</p>

<h2>Mutual Funds vs Fixed Deposits: A Real Comparison</h2>

<table>
  <thead>
    <tr><th>Feature</th><th>Fixed Deposit</th><th>Mutual Fund (Equity)</th></tr>
  </thead>
  <tbody>
    <tr><td>Average Return</td><td>6–7% p.a.</td><td>12–15% p.a. (long term)</td></tr>
    <tr><td>Tax on Returns</td><td>Taxed at income slab</td><td>10% LTCG (after 1 year)</td></tr>
    <tr><td>Inflation Protection</td><td>Barely keeps up</td><td>Well above inflation</td></tr>
    <tr><td>Liquidity</td><td>Lock-in with penalty</td><td>Redeem anytime (most funds)</td></tr>
    <tr><td>Risk</td><td>Very Low</td><td>Medium to High</td></tr>
  </tbody>
</table>

<p>Over 10 years, ₹1 lakh in an FD at 7% becomes ₹1.97 lakh. The same ₹1 lakh in an equity mutual fund at 12% becomes ₹3.10 lakh — 57% more wealth.</p>

<h2>How to Start Investing in Mutual Funds</h2>
<ol>
  <li><strong>Complete Your KYC:</strong> One-time verification using Aadhaar and PAN. Can be done online in minutes.</li>
  <li><strong>Choose a Fund:</strong> Based on your goals, risk profile, and investment horizon.</li>
  <li><strong>Start a SIP or Lump Sum:</strong> SIPs can begin with as little as ₹100–₹500/month.</li>
  <li><strong>Stay Patient:</strong> Mutual funds reward patience. The longer you stay invested, the more compounding works in your favour.</li>
</ol>

<h2>Common Myths About Mutual Funds</h2>
<p><strong>Myth: "Mutual funds are only for the rich."</strong> — You can start with ₹500/month. SIP makes investing accessible to everyone.</p>
<p><strong>Myth: "You need to know the stock market."</strong> — Fund managers handle all investment decisions. You just need to choose the right category.</p>
<p><strong>Myth: "Low NAV means cheap fund."</strong> — NAV tells you nothing about whether a fund is cheap or expensive. What matters is the quality of the portfolio and the fund manager's track record.</p>

<h2>The Role of an AMFI-Registered Distributor</h2>
<p>While you can invest directly, working with a registered mutual fund distributor like MDRA Wealth (ARN-353826) helps you navigate fund selection, portfolio construction, and regular reviews — ensuring your investments are always aligned with your evolving goals.</p>
  `,
};

export default post;
