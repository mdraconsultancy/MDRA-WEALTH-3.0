export default function NJWealthSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-white max-w-6xl mx-auto">
      
      {/* Left Side: NJ Wealth Logo */}
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
        {/* Make sure to save the NJ Wealth logo in your public folder and update this src path */}
        <img 
          src="/nj-wealth-logo.png" 
          alt="NJ Wealth Official Logo" 
          className="w-56 md:w-72 h-auto object-contain"
        />
      </div>

      {/* Right Side: Content & Stats */}
      <div className="flex flex-col w-full md:w-2/3 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2b5a] mb-4 tracking-tight">
          Backed by NJ Wealth — India's Trusted Investment Platform
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          As an authorised NJ Wealth partner, MDRA Wealth gives you access to India's largest mutual fund distribution network. Established in 1994, NJ Wealth provides a robust and secure ecosystem for wealth creation. Through our fully digital platform, we proudly offer our comprehensive financial services <strong className="text-[#1b2b5a] font-semibold">PAN India</strong>, bringing expert guidance directly to you, wherever you are located.
        </p>

        {/* Stats Container */}
        <div className="flex flex-wrap gap-4">
          <div className="border border-gray-200 rounded-xl px-6 py-4 flex flex-col items-center justify-center min-w-[150px] shadow-sm bg-white transition-shadow hover:shadow-md">
            <span className="text-xl font-bold text-[#1b2b5a]">₹2.9 Lakh Cr+</span>
            <span className="text-sm text-gray-500 font-medium mt-1 tracking-wide uppercase">AUM</span>
          </div>
          
          <div className="border border-gray-200 rounded-xl px-6 py-4 flex flex-col items-center justify-center min-w-[150px] shadow-sm bg-white transition-shadow hover:shadow-md">
            <span className="text-xl font-bold text-[#1b2b5a]">50,000+</span>
            <span className="text-sm text-gray-500 font-medium mt-1 tracking-wide uppercase">Partners</span>
          </div>
          
          <div className="border border-gray-200 rounded-xl px-6 py-4 flex flex-col items-center justify-center min-w-[150px] shadow-sm bg-white transition-shadow hover:shadow-md">
            <span className="text-xl font-bold text-[#1b2b5a]">45 Lakh+</span>
            <span className="text-sm text-gray-500 font-medium mt-1 tracking-wide uppercase">Investors</span>
          </div>
        </div>
      </div>

    </section>
  );
}
