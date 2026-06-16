import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { CountUp } from "@/components/CountUp";
import { 
  Menu, X, Sparkles, Heart, Music, Utensils, 
  MapPin, Phone, Mail, Instagram, ChevronLeft, ChevronRight, 
  Calendar, Check, User, Users, Compass, Star
} from "lucide-react";

import heroMandap from "@/assets/hero-mandap.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import servicePhoto from "@/assets/service-photo.jpg";
import galleryMarigold from "@/assets/gallery-marigold.jpg";
import galleryFeast from "@/assets/gallery-feast.jpg";
import galleryJewelry from "@/assets/gallery-jewelry.jpg";
import galleryVenue from "@/assets/gallery-venue.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishera Events — Luxury Indian Wedding & Event Planning" },
      {
        name: "description",
        content:
          "Ishera Events crafts grand luxury Indian weddings, vibrant sangeets, royal haldis, and bespoke celebrations with curated décor, fine dining, and seamless on-ground execution.",
      },
      { property: "og:title", content: "Ishera Events — Luxury Indian Wedding & Event Planning" },
      {
        property: "og:description",
        content:
          "Grand heritage mandaps, marigold-lit haldis, and high-energy Bollywood sangeets — designed and executed with royal elegance.",
      },
      { property: "og:image", content: heroMandap },
      { name: "twitter:image", content: heroMandap },
    ],
  }),
  component: Index,
});

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Rituals", href: "#rituals" },
  { name: "Services", href: "#services" },
  { name: "Themes", href: "#themes" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
];

const rituals = [
  {
    id: "sangeet",
    title: "Sangeet & Mehndi Soirée",
    subtitle: "The Celebration of Rhythm",
    desc: "A night of high-octane dance, live dhol beats, and intricate henna artistry. We design vibrant canopy seating, fairy-lit backdrops, and interactive street-food stations.",
    highlight: "Bespoke swings, custom bars & dhol performers",
    palette: ["#EA580C", "#0D9488", "#F59E0B"], // Saffron, Teal, Marigold
    paletteNames: "Saffron, Teal & Marigold",
  },
  {
    id: "haldi",
    title: "Vibrant Haldi Ceremony",
    subtitle: "The Golden Shower",
    desc: "A playful morning filled with turmeric, laughter, and floral showers. We create marigold-laden setups, brass urlis for the couple, and custom yellow dress-code coordination.",
    highlight: "Brass urli setups, marigold rain & dhol-tasha",
    palette: ["#F59E0B", "#FACC15", "#E11D48"], // Marigold, Mustard, Rose
    paletteNames: "Marigold, Mustard & Rose",
  },
  {
    id: "baraat",
    title: "Royal Baraat & Varmala",
    subtitle: "The Grand Procession",
    desc: "A majestic entry with decorated vintage cars, horses, and pyrotechnics, culminating in a spectacular exchange of fresh floral garlands (Varmala) on a revolving stage.",
    highlight: "Vintage cars, cold pyros & jasmine garlands",
    palette: ["#991B1B", "#D97706", "#FDFCF0"], // Royal Crimson, Ochre, Ivory
    paletteNames: "Royal Crimson, Ochre & Ivory",
  },
  {
    id: "mandap",
    title: "The Sacred Mandap (Pheras)",
    subtitle: "The Eternal Vows",
    desc: "The holy union beneath a grand mandap styled with fresh red roses, white jasmines, and soft ambient lights, designed symmetrically around the sacred fire.",
    highlight: "Floating water mandaps, Vedic chanting & temple decor",
    palette: ["#991B1B", "#B45309", "#FDFCF0"], // Maroon, Gold, Ivory
    paletteNames: "Deep Maroon, Gold & Ivory",
  },
  {
    id: "reception",
    title: "The Grand Reception Gala",
    subtitle: "The Black-Tie Banquet",
    desc: "An evening of royal hospitality, live Sufi fusion bands, and a grand multi-course banquet featuring regional delicacies and modern culinary innovations.",
    highlight: "Cascading chandeliers, live Sufi bands & gourmet feast",
    palette: ["#1C1917", "#B45309", "#F59E0B"], // Charcoal, Gold, Saffron
    paletteNames: "Charcoal, Antique Gold & Saffron",
  },
];

const weddingServices = [
  {
    id: "decor",
    img: serviceWedding,
    icon: Sparkles,
    title: "Thematic Décor & Floral Art",
    desc: "Transforming venues into dreamscapes with hand-threaded jasmines, cascading marigolds, architectural fabric draping, and dramatic lighting design tailored to your chosen theme.",
    bullets: ["Floral installations & mandaps", "Custom stage & furniture layout", "Ambient & architectural lighting"]
  },
  {
    id: "culinary",
    img: galleryFeast,
    icon: Utensils,
    title: "Royal Culinary Curation",
    desc: "A gastronomic journey blending traditional Indian heritage with contemporary global cuisine. From live Lucknowi chaat stalls to sit-down silver thali dinners.",
    bullets: ["Traditional heritage recipes", "Gourmet fusion counters", "Artisanal desserts & mocktail bars"]
  },
  {
    id: "hospitality",
    img: serviceSocial,
    icon: Users,
    title: "Guest Concierge & RSVP",
    desc: "End-to-end management of your guest experience. We coordinate airport pickups in luxury fleets, organize hotel room allocations, design custom welcome hampers, and run a 24/7 helpdesk.",
    bullets: ["RSVP & room block management", "Welcome hampers & stationery", "On-ground transport coordination"]
  },
  {
    id: "entertainment",
    img: servicePhoto,
    icon: Music,
    title: "Cinematic & Entertainment",
    desc: "Curating unforgettable memories with live dhol-tasha, wedding choreographers, Sufi fusion bands, celebrity performances, and comprehensive photo/video storytelling.",
    bullets: ["Sufi bands & DJ lineups", "Sangeet choreography", "Cinematic highlight films & albums"]
  }
];

const themes = [
  {
    name: "Royal Rajputana",
    tagline: "Forts, Palaces & Royal Grandeur",
    desc: "Deep crimson velvets, hand-crafted brass structures, low-seating diwans, and towering marigold pillars. Perfect for historical venues.",
    color: "bg-gradient-to-r from-red-800 to-amber-700",
  },
  {
    name: "Mogra & Jasmine Cloud",
    tagline: "Scented White Elegance",
    desc: "Thousands of hand-woven white jasmine strands hanging from the ceiling, crystal chandeliers, floating candles, and soft peach roses.",
    color: "bg-gradient-to-r from-amber-50 to-orange-100 text-charcoal",
  },
  {
    name: "Varanasi Ghats",
    tagline: "Traditional & Spiritual Vibe",
    desc: "A celebration lit by hundreds of clay diyas, brass temple bells, orange marigolds, and dynamic patterns reflecting the holy ghats of Kashi.",
    color: "bg-gradient-to-r from-amber-500 to-red-600",
  },
  {
    name: "Modern Pastel Dream",
    tagline: "Contemporary Romance",
    desc: "Dusty pink pampas grass, mint green drapes, geometric golden frames, and soft white cherry blossoms. Chic, clean, and elegant.",
    color: "bg-gradient-to-r from-pink-200 to-rose-300 text-charcoal",
  }
];

const stats = [
  { value: 180, suffix: "+", label: "Royal Weddings" },
  { value: 350, suffix: "+", label: "Custom Menus" },
  { value: 450, suffix: "+", label: "Happy Couples" },
  { value: 45, suffix: "+", label: "Heritage Venues" },
];

const philosophy = [
  { n: "01", title: "Cultural Heritage", copy: "We respect and elevate local Indian customs, styling events around specific regional rituals with authentic touches." },
  { n: "02", title: "Complete Coordination", copy: "From vendor negotiations and guest lodging to the final send-off, we hold single-point accountability." },
  { n: "03", title: "Immersive Design", copy: "We design layouts, scent profiles, lighting cues, and audio timelines to build a cohesive world." },
  { n: "04", title: "Stress-Free Celebration", copy: "We build redundancies into everything so you and your family can celebrate without a single phone call." },
];

const testimonials = [
  {
    quote: "The floral decor, glass-mandalas, and overall management were beyond royal. Ishera events executed every ritual with cultural precision and stunning grandeur.",
    name: "Aishwarya & Kabir",
    sub: "Udaipur Palace Wedding",
    location: "Udaipur, Rajasthan",
  },
  {
    quote: "From the spectacular helicopter entry to the 20-course royal Awadhi feast, they transformed our Lucknow wedding into an absolute fairytale. Flawless on-ground coordination!",
    name: "Rohan & Meera",
    sub: "Grand Awadh Lawn Wedding",
    location: "Lucknow, UP",
  },
  {
    quote: "Our Sangeet night felt like a high-production Bollywood concert! The stage design, sound, and choreographers provided by the team were top-notch.",
    name: "Priya & Siddharth",
    sub: "Sangeet & Cocktail Gala",
    location: "New Delhi",
  },
  {
    quote: "They handled guest hospitality for 500+ guests beautifully. Airport transfers, luxury hampers, room arrangements — everything was handled with absolute warmth and efficiency.",
    name: "Dr. Alok Verma",
    sub: "Father of the Bride",
    location: "Kanpur / Delhi",
  },
  {
    quote: "The Haldi decor with floating marigold swings and dhol-tasha troupe created the most vibrant morning. We didn't have to stress about a single detail.",
    name: "Divya & Kabir",
    sub: "Vibrant Haldi Ceremony",
    location: "Lucknow, UP",
  },
];

// Indian Flower Components
function HorizontalMarigolds({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-around items-start overflow-hidden pointer-events-none select-none h-10 ${className}`}>
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center shrink-0 -space-y-0.5 animate-flower-sway" style={{ animationDelay: `${i * 0.15}s` }}>
          {/* Stem/Thread */}
          <div className="w-0.5 h-2 bg-emerald-800/80" />
          {/* Orange Marigold */}
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-sm border border-orange-600/10" />
          
          {/* Alternating hanging Mogra (Jasmine) beads & bells */}
          {i % 4 === 0 && (
            <div className="flex flex-col items-center -space-y-0.5">
              <div className="w-0.5 h-3 bg-emerald-800/80" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-sm" />
              <div className="w-2 h-2 rounded-full bg-ivory border border-gold/40" />
            </div>
          )}
          {i % 4 === 2 && (
            <div className="flex flex-col items-center -space-y-0.5">
              <div className="w-0.5 h-2.5 bg-emerald-800/80" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-50 to-orange-100 shadow-sm border border-gold/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-sm" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-4 text-saffron/70 py-4 select-none">
      <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-gold/40" />
      <svg className="w-6 h-6 text-saffron fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21c0 0-3-4.5-3-7.5 0-2.8 1.3-4.5 3-5 1.7.5 3 2.2 3 5 0 3-3 7.5-3 7.5zm0-16c0 0 1.5 1.5 2 3 1.5-.5 3-.8 4 0-1 1.5-2.5 2-3 2.5 1.5.5 3 1.5 4 3-1.5.5-3 0-4-.5 0 .5-.5 2-1.5 3 1 1 2 2.5 2.5 4-1.5-.5-3-2-3.5-2.5 0 0 0 0 0 0 0 0 0 0 0 0-.5.5-2 2-3.5 2.5.5-1.5 1.5-3 2.5-4-.5.5-1 2-2 2.5-1-.5-1.5-2-1.5-2.5-1 .5-2.5 1-4 .5 1-1.5 2-2.5 3.5-3 0-.5-.5-2-1.5-3 .5-1.5 2-3 2-3z" />
      </svg>
      <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}

// Standalone Design Feature for Indian Weddings: Toran divider banner (no overlaps)
function ToranDivider() {
  return (
    <div className="relative w-full bg-sand/35 border-y border-gold/15 py-12 my-12 overflow-hidden flex flex-col items-center justify-center select-none pointer-events-none">
      {/* Hanging marigold chains across the top */}
      <HorizontalMarigolds className="absolute left-0 right-0 top-0" />
      
      <div className="text-center px-6 max-w-2xl mt-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-saffron font-bold">Auspicious Decor Traditions</span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon mt-2 mb-3">
          The Genda Phool &amp; Jasmine Canopy
        </h3>
        <p className="text-xs sm:text-sm text-charcoal/65 leading-relaxed italic max-w-xl mx-auto font-light">
          "Marigolds represent the warmth of the sun and bring prosperity to the union, while fresh jasmine Mogra strands fill the air with sweet blessings."
        </p>
      </div>

      {/* Hanging marigolds across the bottom flipped vertically */}
      <HorizontalMarigolds className="absolute left-0 right-0 bottom-0 rotate-180" />
    </div>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRitual, setActiveRitual] = useState("sangeet");

  // Mobile testimonial carousel state
  const [mobileTestimonialIndex, setMobileTestimonialIndex] = useState(0);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  // Form submit state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", vision: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", phone: "", date: "", vision: "" });
    }, 6000);
  };

  const handleScrollTestimonials = (direction: "left" | "right") => {
    let nextIndex = direction === "left" 
      ? Math.max(0, mobileTestimonialIndex - 1) 
      : Math.min(testimonials.length - 1, mobileTestimonialIndex + 1);
    
    setMobileTestimonialIndex(nextIndex);
    
    if (testimonialScrollRef.current) {
      const cardWidth = testimonialScrollRef.current.clientWidth;
      testimonialScrollRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal selection:bg-marigold/20 font-sans antialiased overflow-x-hidden relative">

      {/* Premium Glassmorphic Navbar */}
      <nav className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-lg border-b border-gold/15 shadow-sm transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-maroon via-saffron to-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex flex-col group focus:outline-none">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-maroon font-bold uppercase transition-colors duration-300 group-hover:text-saffron">
              ISHERA
            </span>
            <span className="text-[7.5px] sm:text-[9px] tracking-[0.45em] text-gold uppercase -mt-0.5 font-medium transition-colors duration-300 group-hover:text-charcoal">
              EVENTS & WEDDINGS
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold text-charcoal/80 uppercase tracking-[0.25em]">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative py-2 transition-colors duration-300 hover:text-saffron after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="bg-maroon hover:bg-maroon/95 text-ivory px-5 py-3 border border-gold/40 hover:border-gold flex items-center gap-2 transition-all duration-300 shadow-sm"
            >
              <Sparkles className="size-3.5 text-marigold animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.2em]">Inquire Now</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-charcoal hover:text-saffron transition-colors focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-md transition-opacity duration-300">
          <div className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[350px] bg-ivory shadow-2xl p-8 flex flex-col justify-between border-l border-gold/20 animate-in slide-in-from-right duration-300">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-[0.2em] text-maroon font-bold uppercase">ISHERA</span>
                  <span className="text-[7.5px] tracking-[0.4em] text-gold uppercase -mt-1 font-sans">EVENTS & WEDDINGS</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-saffron transition-colors focus:outline-none"
                  aria-label="Close Menu"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-[12px] font-bold text-charcoal/80 uppercase tracking-[0.2em] pt-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-saffron border-b border-gold/10 pb-2 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-gold/15">
              <div className="space-y-3">
                <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">Contact Concierge</p>
                <a href="tel:+918543818567" className="block text-sm font-serif hover:text-saffron transition-colors">+91 85438 18567</a>
                <a href="mailto:info@isheraevents.com" className="block text-sm font-serif hover:text-saffron transition-colors">info@isheraevents.com</a>
              </div>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-maroon text-ivory py-3.5 text-[10px] font-semibold tracking-[0.2em] uppercase border border-gold/40 hover:bg-maroon/90"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Optimised Hero Section (Completely clean - no overlaps) */}
      <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] min-h-[500px] max-h-[720px] bg-charcoal overflow-hidden flex items-center">
        
        <div className="absolute inset-0 bg-maroon mix-blend-multiply opacity-25 z-0" />
        <img
          src={heroMandap}
          alt="Grand Indian wedding mandap with gold lights, marigolds and jasmine garlands"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 scale-105"
        />
        
        {/* Rich gradients for contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/40 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-royal-mandala opacity-[0.03] z-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="max-w-3xl space-y-6 md:space-y-8 text-ivory">
            
            <div className="inline-flex items-center gap-2 bg-maroon/65 backdrop-blur-md px-4 py-2 border border-gold/30 rounded-none shadow-lg">
              <Sparkles className="size-3.5 text-marigold animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-marigold font-bold">
                Luxury Indian Wedding Planners · Lucknow
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-bold text-pretty">
              Weaving <span className="text-marigold italic font-normal">Heritage</span>, Grandeur, &amp; Royal Romance
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-pretty max-w-[62ch] leading-relaxed text-ivory/80 font-light">
              From historic palace pheras under jasmine canopy pathways to high-octane Bollywood sangeets, we design and execute luxury celebrations with absolute cultural authenticity.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="#rituals" 
                className="bg-saffron text-ivory text-center py-4 px-8 border border-saffron rounded-none text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-saffron/90 hover:border-gold transition-all duration-300 shadow-md"
              >
                Explore Rituals
              </a>
              <a 
                href="#contact" 
                className="border border-ivory/50 text-ivory text-center py-4 px-8 rounded-none text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ivory/15 hover:border-ivory transition-all duration-300"
              >
                Inquire Now
              </a>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden md:block bg-ivory/95 backdrop-blur-sm p-4 border border-gold/20 shadow-md z-20">
          <p className="font-serif text-base text-maroon font-bold italic">Lucknow &amp; Beyond</p>
          <p className="text-[8px] uppercase tracking-[0.2em] text-charcoal/50 font-bold mt-0.5">Signature Weddings 2026</p>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-12 border-b border-gold/15 bg-sand/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-maroon font-bold tabular-nums">
                  <CountUp end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Wedding Rituals */}
      <section id="rituals" className="py-20 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <LotusDivider />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon">
              The Chapters of <span className="text-gold italic font-normal">Indian Weddings</span>
            </h2>
            <p className="text-charcoal/60 uppercase text-[9px] sm:text-[10px] tracking-[0.3em] font-semibold">
              From colorful morning rituals to late-night sacred vows
            </p>
          </div>

          {/* Desktop Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {rituals.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRitual(r.id)}
                className={`px-4 py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] border transition-all duration-300 rounded-none ${
                  activeRitual === r.id 
                    ? "bg-maroon text-ivory border-maroon shadow-md"
                    : "bg-sand/40 text-charcoal/70 border-gold/25 hover:border-gold hover:bg-sand"
                }`}
              >
                {r.title.split(" & ")[0]}
              </button>
            ))}
          </div>

          {/* Selected Ritual Content */}
          <div className="bg-sand/35 border border-gold/15 p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden animate-in fade-in duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-mandala opacity-[0.04] pointer-events-none" />
            
            {rituals.map((r) => {
              if (r.id !== activeRitual) return null;
              return (
                <div key={r.id} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                  <div className="md:col-span-7 space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-saffron font-bold block">
                      {r.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-maroon">
                      {r.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed">
                      {r.desc}
                    </p>
                    
                    <div className="pt-2 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-saffron/10 flex items-center justify-center text-saffron mt-0.5 shrink-0">
                          <Check className="size-3" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-charcoal/80">
                          <strong className="text-maroon">Arrangements:</strong> {r.highlight}
                        </p>
                      </div>
                      
                      {/* Curated Color Palettes */}
                      <div className="space-y-2 pt-2">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">Suggested Theme Palette</p>
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            {r.palette.map((c, i) => (
                              <span 
                                key={i} 
                                className="size-4 rounded-full border border-black/10 shadow-sm" 
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-charcoal/60 italic">{r.paletteNames}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side representation */}
                  <div className="md:col-span-5 bg-ivory p-6 border border-gold/15 flex flex-col justify-center text-center space-y-6 relative">
                    <div className="absolute top-3 right-3 text-gold/30">
                      <Sparkles className="size-5" />
                    </div>
                    <p className="text-[9.5px] uppercase tracking-[0.25em] text-gold font-bold">Custom Craftsmanship</p>
                    <h4 className="font-serif text-lg text-maroon font-bold">What We Deliver</h4>
                    <ul className="text-xs text-charcoal/70 space-y-2.5 text-left divide-y divide-gold/10">
                      <li className="pt-2">✓ Bespoke Entrance Archway &amp; Welcome Signage</li>
                      <li className="pt-2">✓ Standard &amp; VVIP Guest Seating Lounges</li>
                      <li className="pt-2">✓ Professional Sound System &amp; Custom Playlist</li>
                      <li className="pt-2">✓ Coordination of Sweets, Flowers &amp; Ritual Needs</li>
                    </ul>
                    <a 
                      href="#contact" 
                      className="bg-saffron text-ivory py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-saffron/90 transition-colors"
                    >
                      Inquire for this Event
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Stand-alone Toran Garland Divider Section */}
      <ToranDivider />

      {/* Signature Services */}
      <section id="services" className="py-20 bg-sand/20 border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
            <LotusDivider />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon">
              Signature <span className="text-gold italic font-normal">Wedding Services</span>
            </h2>
            <p className="text-charcoal/60 uppercase text-[9px] sm:text-[10px] tracking-[0.3em] font-semibold">
              End-to-end management, designed for families who want to be guests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <article key={idx} className="group bg-ivory border border-gold/15 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-maroon/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="size-4 text-saffron shrink-0" />
                        <h3 className="font-serif text-lg font-bold text-maroon group-hover:text-saffron transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs text-charcoal/65 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gold/10">
                      <ul className="space-y-1.5">
                        {service.bullets.map((b, i) => (
                          <li key={i} className="text-[10.5px] text-charcoal/70 flex items-center gap-1.5">
                            <span className="text-gold">✦</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Traditional Decor Themes */}
      <section id="themes" className="py-20 bg-ivory border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
            <LotusDivider />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon">
              Signature <span className="text-gold italic font-normal">Décor Themes</span>
            </h2>
            <p className="text-charcoal/60 uppercase text-[9px] sm:text-[10px] tracking-[0.3em] font-semibold">
              Bespoke visual narratives crafted for our couples
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, i) => (
              <div key={i} className="bg-sand/35 border border-gold/15 p-6 flex flex-col justify-between hover:border-gold transition-all duration-300 shadow-sm relative">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-ivory shadow-sm ${theme.color}`}>
                      0{i+1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-maroon">{theme.name}</h3>
                  </div>
                  <p className="text-[10.5px] font-semibold tracking-wider text-saffron uppercase">{theme.tagline}</p>
                  <p className="text-xs text-charcoal/60 leading-relaxed">{theme.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-charcoal text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-royal-mandala opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
            
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-marigold font-bold block">Our Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Crafting Stress-Free <span className="text-marigold italic font-normal">Royal Celebrations</span>
              </h2>
              <p className="text-sm sm:text-base text-ivory/70 leading-relaxed font-light">
                An Indian wedding is not just an event; it's a multi-day family reunion filled with sentiment, ritual, and celebration. Our philosophy centers on absorbing all logistical friction so you can focus entirely on the emotion of the moment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {philosophy.map((p) => (
                <div key={p.n} className="space-y-3 border-t border-marigold/30 pt-6">
                  <span className="font-serif text-marigold text-2xl italic font-semibold">{p.n}</span>
                  <h4 className="font-serif text-lg font-bold text-ivory">{p.title}</h4>
                  <p className="text-xs text-ivory/60 leading-relaxed">{p.copy}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Gilded Gallery Section */}
      <section id="gallery" className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="space-y-2">
              <LotusDivider />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon">
                Moments Frozen in <span className="text-gold italic font-normal">Gilded Light</span>
              </h2>
              <p className="text-charcoal/60 uppercase text-[9px] tracking-[0.3em] font-semibold">
                Visual archives of our flagship events
              </p>
            </div>
            <a 
              href="#contact" 
              className="text-[10px] uppercase tracking-[0.25em] border-b border-saffron/40 pb-1 text-saffron hover:text-saffron/80 transition-colors font-bold self-start sm:self-auto"
            >
              Request Custom Moodboards
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6">
            <div className="col-span-2 md:col-span-6 relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-auto md:h-full min-h-[350px] group border border-gold/10">
              <img 
                src={galleryMarigold} 
                alt="Marigold garlands hanging at wedding mandap" 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-ivory">
                <p className="text-[9px] uppercase tracking-wider text-marigold font-bold">The Saffron Aura</p>
                <h4 className="font-serif text-lg font-bold">Marigold Garland Droplets</h4>
              </div>
            </div>

            <div className="col-span-2 md:col-span-6 flex flex-col gap-4 sm:gap-6">
              <div className="relative overflow-hidden aspect-[2/1] group border border-gold/10">
                <img 
                  src={galleryFeast} 
                  alt="Royal Indian wedding multi-course feast platter" 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-ivory">
                  <p className="text-[9px] uppercase tracking-wider text-marigold font-bold">Culinary Heritage</p>
                  <h4 className="font-serif text-base font-bold">Fine Dining Awadhi Feast</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="relative overflow-hidden aspect-square group border border-gold/10">
                  <img 
                    src={galleryJewelry} 
                    alt="Indian bride gold jewelry close up" 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 text-ivory">
                    <p className="text-[8px] uppercase tracking-wider text-marigold font-bold">Bridal Trousseau</p>
                    <h4 className="font-serif text-sm font-bold">Choker Gold Detail</h4>
                  </div>
                </div>

                <div className="relative overflow-hidden aspect-square group border border-gold/10">
                  <img 
                    src={galleryVenue} 
                    alt="Palace wedding venue at twilight" 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 text-ivory">
                    <p className="text-[8px] uppercase tracking-wider text-marigold font-bold">Luxury Destinations</p>
                    <h4 className="font-serif text-sm font-bold">Udaipur Palace Twilight</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-sand/35 border-t border-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <LotusDivider />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
              Loved by <span className="text-gold italic font-normal">Our Couples</span>
            </h2>
            <p className="text-charcoal/60 uppercase text-[9px] tracking-[0.3em] font-semibold">
              Heartfelt stories of stress-free celebrations
            </p>
          </div>
        </div>

        {/* DESKTOP MARQUEE SLIDER */}
        <div className="hidden md:block relative w-full overflow-hidden hover-pause-marquee py-4">
          <div className="flex w-max gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx} 
                className="w-[450px] bg-ivory border border-gold/15 p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-gold/60 transition-all duration-300 shrink-0 select-none"
              >
                <div className="flex gap-1 text-marigold text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-3.5 fill-marigold text-marigold" />))}
                </div>
                <blockquote className="font-serif text-[14.5px] leading-relaxed italic text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gold/10 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-maroon uppercase tracking-wider">{t.name}</p>
                    <p className="text-[9px] text-charcoal/40 uppercase tracking-widest mt-0.5">{t.sub}</p>
                  </div>
                  <span className="text-[10px] text-saffron font-medium flex items-center gap-1">
                    <MapPin className="size-3" /> {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="block md:hidden px-4">
          <div className="relative max-w-md mx-auto">
            <div 
              ref={testimonialScrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-6 scroll-smooth"
              onScroll={() => {
                if (testimonialScrollRef.current) {
                  const scrollLeft = testimonialScrollRef.current.scrollLeft;
                  const cardWidth = testimonialScrollRef.current.clientWidth;
                  const idx = Math.round(scrollLeft / cardWidth);
                  if (idx !== mobileTestimonialIndex) setMobileTestimonialIndex(idx);
                }
              }}
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="w-full shrink-0 snap-center bg-ivory border border-gold/15 p-6 flex flex-col justify-between space-y-5 shadow-sm rounded-none"
                >
                  <div className="flex gap-1 text-marigold text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-3.5 fill-marigold text-marigold" />))}
                  </div>
                  <blockquote className="font-serif text-sm leading-relaxed italic text-charcoal/85">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-gold/10 pt-4 flex flex-col gap-2">
                    <div>
                      <p className="text-xs font-bold text-maroon uppercase tracking-wider">{t.name}</p>
                      <p className="text-[9.5px] text-charcoal/40 uppercase tracking-widest mt-0.5">{t.sub}</p>
                    </div>
                    <span className="text-[10px] text-saffron font-medium flex items-center gap-1 self-start">
                      <MapPin className="size-3" /> {t.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-2 px-2">
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => {
                      setMobileTestimonialIndex(idx);
                      if (testimonialScrollRef.current) {
                        const cardWidth = testimonialScrollRef.current.clientWidth;
                        testimonialScrollRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
                      }
                    }}
                    className={`size-2 rounded-full transition-all duration-300 ${
                      mobileTestimonialIndex === idx ? "bg-maroon w-4" : "bg-gold/30"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleScrollTestimonials("left")}
                  disabled={mobileTestimonialIndex === 0}
                  className="size-8 rounded-full border border-gold/25 flex items-center justify-center text-charcoal/80 hover:bg-sand disabled:opacity-35 focus:outline-none"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button 
                  onClick={() => handleScrollTestimonials("right")}
                  disabled={mobileTestimonialIndex === testimonials.length - 1}
                  className="size-8 rounded-full border border-gold/25 flex items-center justify-center text-charcoal/80 hover:bg-sand disabled:opacity-35 focus:outline-none"
                  aria-label="Next Review"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Upgraded Luxury Contact Footer Form */}
      <footer id="contact" className="py-20 bg-ivory border-t border-gold/15 relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <LotusDivider />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-maroon">
                Craft Your <span className="text-gold italic font-normal">Royal Day</span> With Us
              </h2>
              <p className="text-sm text-charcoal/65 leading-relaxed font-light">
                We accept only a limited number of weddings each season to ensure absolute dedicated attention, meticulous details, and personal concierge services for your family.
              </p>
              
              <div className="space-y-6 pt-4 border-t border-gold/15">
                <div className="flex items-center gap-3.5">
                  <div className="size-9 rounded-full bg-sand flex items-center justify-center text-saffron border border-gold/25">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">Call Concierge</p>
                    <a href="tel:+918543818567" className="text-sm font-serif hover:text-saffron transition-colors font-bold">+91 85438 18567</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="size-9 rounded-full bg-sand flex items-center justify-center text-saffron border border-gold/25">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">General Inquiries</p>
                    <a href="mailto:info@isheraevents.com" className="text-sm font-serif hover:text-saffron transition-colors font-bold">info@isheraevents.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="size-9 rounded-full bg-sand flex items-center justify-center text-saffron border border-gold/25">
                    <Instagram className="size-4" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-charcoal/40 font-bold">Visual Portfolios</p>
                    <a href="https://instagram.com/ishera_events" target="_blank" rel="noopener noreferrer" className="text-sm font-serif hover:text-saffron transition-colors font-bold">@ishera_events</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-7 bg-sand/35 p-6 sm:p-10 border border-gold/15 shadow-sm relative overflow-hidden">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-6 animate-in fade-in duration-500">
                  <div className="size-16 rounded-full bg-saffron/10 border border-saffron/30 flex items-center justify-center text-saffron mx-auto">
                    <Check className="size-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-maroon">Celebration Scheduled!</h3>
                  <p className="text-xs text-charcoal/60 max-w-sm mx-auto leading-relaxed">
                    Thank you. Our luxury wedding concierge team will review your date availability and reach out to you on WhatsApp / Phone within 24 hours.
                  </p>
                  <LotusDivider />
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon">Initiate Your Inquiry</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold block">Your Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gold/60" />
                        <input 
                          type="text" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-ivory border border-gold/25 py-3 pl-10 pr-4 focus:outline-none focus:border-maroon text-xs rounded-none transition-colors" 
                          placeholder="Lord/Lady Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 font-bold block">Phone / WhatsApp *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gold/60" />
                        <input 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-ivory border border-gold/25 py-3 pl-10 pr-4 focus:outline-none focus:border-maroon text-xs rounded-none transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-charcoal/50 font-bold block">Event Date / Month</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gold/60" />
                      <input 
                        type="text" 
                        value={formData.date}
                        onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-ivory border border-gold/25 py-3 pl-10 pr-4 focus:outline-none focus:border-maroon text-xs rounded-none transition-colors"
                        placeholder="e.g. November 2026 or DD / MM / YYYY"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-charcoal/50 font-bold block">Describe Your Wedding Vision</label>
                    <textarea 
                      rows={4} 
                      value={formData.vision}
                      onChange={(e) => setFormData(prev => ({ ...prev, vision: e.target.value }))}
                      className="w-full bg-ivory border border-gold/25 p-4 focus:outline-none focus:border-maroon text-xs rounded-none transition-colors resize-none"
                      placeholder="Describe your event styling preferences, guest size, and custom ritual needs..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-maroon text-ivory py-4 border border-gold/40 hover:border-gold text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-maroon/95 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="size-3.5 text-marigold animate-pulse" />
                    <span>Submit Royal Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          <div className="mt-20 pt-8 border-t border-gold/15 flex flex-col sm:flex-row gap-6 justify-between items-center text-[10px] uppercase tracking-[0.25em] text-charcoal/40 font-bold">
            <p>© {new Date().getFullYear()} Ishera Events · Lucknow. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#rituals" className="hover:text-saffron transition-colors">Rituals</a>
              <a href="#services" className="hover:text-saffron transition-colors">Services</a>
              <a href="#themes" className="hover:text-saffron transition-colors">Themes</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
