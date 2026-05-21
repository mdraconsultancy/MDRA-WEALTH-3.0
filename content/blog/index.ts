import { BlogPost } from './types';
import sip from './sip-power-of-compounding';
import mutualFunds from './mutual-funds-beginners-guide';
import retirement from './retirement-planning-at-30';
import insurance from './term-vs-endowment-insurance';
import elss from './elss-tax-saving-funds';
import flexiCap from './flexi-cap-long-term-wealth';
import habits from './financial-habits-wealthy-families';
import goalBased from './goal-based-investing';

export const allPosts: BlogPost[] = [
  sip,
  mutualFunds,
  retirement,
  insurance,
  elss,
  flexiCap,
  habits,
  goalBased,
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, count = 2): BlogPost[] {
  return allPosts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, count);
}

export { BlogPost };
