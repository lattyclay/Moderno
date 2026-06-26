import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SaleBanner() {
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16"> {/* Restored to full alignment width */}
      <div 
        className="rounded-xl px-8 md:px-16 py-16 flex items-center overflow-hidden relative min-h-[380px] bg-cover bg-center shadow-sm"
        style={{ backgroundImage: `url('/images/salesbanner/sales-banner.jpg')` }}
      >
        
        {/* Semi-transparent dark overlay to keep text extremely sharp and legible */}
        <div className="absolute inset-0 bg-stone-900/35 z-0" />

        {/* Text and action controls */}
        <div className="z-10 max-w-sm md:max-w-md text-white drop-shadow-md">
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-amber-200 font-semibold mb-2 md:mb-3">
            Mid-Season Promotion
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Up to 30% Off
          </h2>
          <p className="text-xs md:text-sm text-stone-100 mb-6 md:mb-8 leading-relaxed">
            Elevate your spaces with premium collections, crafted with timeless style.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-white text-stone-900 text-[10px] md:text-xs tracking-widest font-semibold px-6 py-3 flex items-center gap-2 hover:bg-[#8B6C42] hover:text-white transition-all duration-300 shadow-sm"
          >
            SHOP THE SALE <ArrowRight size={14} />
          </button>
        </div>

        {/* Decorative background visual ambient accent */}
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      </div>
    </section>
  )
}
