/**
 * SMILE STUDIO CLINIC CONFIGURATION
 * ──────────────────────────────────
 * Smile Studio — Holistic Dental Wellness in Los Angeles
 *
 * Completely different clinic: different name, branding, contact,
 * services, doctors, testimonials, FAQ, and gallery content.
 */

export const clinicConfig = {

  // ══════════════════════════════════════
  //  CORE IDENTITY
  // ══════════════════════════════════════
  name: 'Smile Studio',
  tagline: 'Holistic Dental Wellness',
  logoText: 'SmileStudio',
  brandDescription:
    'A boutique dental wellness studio blending holistic care with cutting-edge aesthetics in the heart of Los Angeles.',

  // ══════════════════════════════════════
  //  CONTACT DETAILS
  // ══════════════════════════════════════
  contact: {
    phone: '+1 (310) 555-8900',
    phoneRaw: '+13105558900',
    email: 'hello@smilestudio.la',
    address: {
      street: '456 Sunset Blvd, Suite 200',
      city: 'Los Angeles, CA 90028, USA',
    },
    hours: {
      weekdays: 'Mon – Fri: 8:00 AM – 6:00 PM',
      saturday: 'Saturday: 10:00 AM – 4:00 PM',
      emergency: '24/7 Emergency Hotline',
    },
    whatsappUrl:
      'https://wa.me/13105558900?text=Hi%20Smile%20Studio%2C%20I%20would%20like%20to%20schedule%20a%20visit',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.0!2d-118.3287!3d34.0928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
  },

  // ══════════════════════════════════════
  //  SEO & URLs
  // ══════════════════════════════════════
  seo: {
    metadataBase: 'https://smile-studio.vercel.app',
    siteUrl: 'https://smilestudio.la',
    defaultDescription:
      'Boutique holistic dental wellness combining artistry, technology, and gentle care in Los Angeles.',
  },

  // ══════════════════════════════════════
  //  GEO
  // ══════════════════════════════════════
  geo: {
    latitude: 34.0928,
    longitude: -118.3287,
  },

  // ══════════════════════════════════════
  //  IMAGES
  // ══════════════════════════════════════
  images: {
    heroBg: '/images/hero-bg.png',
    teamPhoto: '/images/team.png',
    beforeAfter: {
      before: '/images/before.png',
      after: '/images/after.png',
    },
    trustAvatars: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=100&h=100',
      'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=100&h=100',
    ],
  },

  // ══════════════════════════════════════
  //  HERO SECTION
  // ══════════════════════════════════════
  hero: {
    title: 'Your Smile, Reimagined',
    subtitle:
      'Where holistic wellness meets modern aesthetic dentistry. We craft radiant, healthy smiles in a calming, spa-inspired environment.',
    ctaPrimary: { text: 'Schedule Visit', href: '#appointment' },
    ctaSecondary: { text: 'Our Treatments', href: '#services' },
    rating: '4.8/5 Rating',
    stats: [
      { number: 10, suffix: '+', label: 'Years in LA' },
      { number: 8, suffix: 'K+', label: 'Smiles Crafted' },
      { number: 12, suffix: '+', label: 'Specialists' },
      { number: 99, suffix: '%', label: 'Would Refer' },
    ],
  },

  // ══════════════════════════════════════
  //  WHY CHOOSE US / ABOUT
  // ══════════════════════════════════════
  about: {
    heading: 'Wellness-First',
    headingAccent: 'Dentistry.',
    description:
      'Our holistic approach treats the whole patient — not just the tooth. Experience dentistry that nurtures your body, mind, and smile.',
    yearsBadge: {
      number: '10',
      suffix: '+',
      label: 'Years of',
      sublabel: 'Wellness',
    },
    features: [
      {
        iconKey: 'hand-heart',
        title: 'Holistic Approach',
        description:
          'Bio-compatible materials and mercury-free treatments for whole-body wellness.',
      },
      {
        iconKey: 'eye',
        title: 'Aesthetic Mastery',
        description:
          'Award-winning cosmetic dentists with an eye for natural beauty.',
      },
      {
        iconKey: 'smile',
        title: 'Spa-Like Comfort',
        description:
          'Aromatherapy, noise-canceling headphones, and weighted blankets in every suite.',
      },
      {
        iconKey: 'zap',
        title: 'Laser Precision',
        description:
          'All-laser procedures for faster healing and minimal discomfort.',
      },
    ],
  },

  // ══════════════════════════════════════
  //  NAVIGATION
  // ══════════════════════════════════════
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  footerQuickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Book Visit', href: '/contact' },
  ],

  // ══════════════════════════════════════
  //  SERVICES
  // ══════════════════════════════════════
  services: [
    {
      id: 'holistic-checkup',
      slug: 'holistic-checkup',
      iconKey: 'stethoscope',
      image: '/images/services/general_dentistry_v2.png',
      altText: 'Holistic dental wellness checkup in a serene LA studio.',
      title: 'Holistic Wellness Checkup',
      shortDescription:
        'Comprehensive oral health assessment with bio-compatible diagnostics and whole-body wellness screening.',
      description:
        'Our holistic checkup goes beyond teeth. We assess your oral microbiome, evaluate jaw alignment, and screen for systemic connections between oral and overall health.',
      longDescription: [
        'At Smile Studio, a checkup is a full wellness experience. We assess your oral health in the context of your overall well-being, using bio-compatible diagnostic tools.',
        'Our practitioners look for early signs of systemic conditions that manifest in the mouth, including nutritional deficiencies and stress-related disorders.',
        'You leave with a personalized wellness roadmap — not just a dental plan — that addresses your unique health profile.',
      ],
      isHighlighted: false,
      tags: ['Holistic', 'Wellness'],
      benefits: [
        'Whole-body oral health assessment',
        'Bio-compatible, mercury-free approach',
        'Nutritional and lifestyle guidance',
        'Early systemic disease detection',
        'Personalized wellness roadmap',
      ],
      procedure: [
        { step: '1', title: 'Wellness Interview', description: 'Understanding your full health history, diet, and lifestyle.' },
        { step: '2', title: 'Digital Assessment', description: 'Low-radiation imaging and oral microbiome analysis.' },
        { step: '3', title: 'Gentle Cleaning', description: 'Ultrasonic scaling with natural, fluoride-free polish.' },
        { step: '4', title: 'Wellness Plan', description: 'A personalized roadmap integrating oral and overall health.' },
      ],
      highlights: {
        duration: '60-75 Minutes',
        painLevel: 'None',
        recovery: 'Immediate',
        frequency: 'Every 6 Months',
      },
      faqs: [
        { question: 'What makes a holistic checkup different?', answer: 'We look at the connection between oral health and your entire body, using bio-compatible materials and protocols.' },
        { question: 'Do you use fluoride?', answer: 'We offer fluoride-free alternatives for patients who prefer a natural approach, while still ensuring effective protection.' },
        { question: 'Is this covered by insurance?', answer: 'Yes, our holistic checkup is billed as a comprehensive dental exam and is covered by most insurance plans.' },
      ],
      relatedTreatments: ['smile-makeover', 'laser-gum-therapy'],
    },
    {
      id: 'smile-makeover',
      slug: 'smile-makeover',
      iconKey: 'sparkles',
      image: '/images/services/cosmetic_dentistry_v2.png',
      altText: 'Stunning smile makeover transformation at Smile Studio LA.',
      title: 'Signature Smile Makeover',
      shortDescription:
        'Complete aesthetic transformation combining veneers, whitening, and facial harmony design.',
      description:
        'Our Signature Smile Makeover is LA\'s most sought-after cosmetic dental experience. We combine digital smile design with artisan porcelain work for Hollywood-worthy results.',
      longDescription: [
        'Your smile makeover begins with a 3D digital consultation where you can preview your new smile before we start any work.',
        'Our master ceramists hand-craft each veneer to match your desired look — from subtle natural enhancement to full red-carpet transformation.',
        'We consider your facial proportions, skin tone, and personal style to create a smile that is uniquely and authentically you.',
      ],
      isHighlighted: true,
      tags: ['Hollywood Smile', 'Veneers'],
      benefits: [
        'Complete aesthetic transformation',
        'Digital smile preview before treatment',
        'Hand-crafted artisan porcelain',
        'Facial harmony integration',
        'Natural, undetectable results',
      ],
      procedure: [
        { step: '1', title: 'Digital Smile Design', description: '3D preview of your future smile with adjustable parameters.' },
        { step: '2', title: 'Wax-Up & Try-In', description: 'Physical mock-up so you can test-drive your new smile.' },
        { step: '3', title: 'Artisan Fabrication', description: 'Master ceramists hand-craft your porcelain restorations.' },
        { step: '4', title: 'Reveal Day', description: 'Final bonding and polish for your red-carpet-ready smile.' },
      ],
      highlights: {
        duration: '2-3 Visits',
        painLevel: 'Minimal',
        recovery: '24-48 Hours',
        lifespan: '15-20+ Years',
      },
      faqs: [
        { question: 'How long does a full smile makeover take?', answer: 'Typically 2-3 visits over 3-4 weeks — from initial design to final reveal day.' },
        { question: 'Will it look natural?', answer: 'Our artisan approach ensures results that are indistinguishable from natural teeth. We avoid the "chiclet" look at all costs.' },
        { question: 'What is the investment?', answer: 'We provide a detailed quote during your consultation. Flexible financing options are available.' },
      ],
      relatedTreatments: ['teeth-whitening-la', 'clear-aligners'],
    },
    {
      id: 'clear-aligners',
      slug: 'clear-aligners',
      iconKey: 'activity',
      image: '/images/services/orthodontics_invisalign.png',
      altText: 'Invisible clear aligners for perfect teeth alignment.',
      title: 'Clear Aligner Therapy',
      shortDescription:
        'Invisible orthodontic correction with AI-driven treatment planning for faster, more predictable results.',
      description:
        'Our clear aligner program uses AI-enhanced treatment planning for faster results and fewer adjustments. Straighten your smile without anyone knowing.',
      longDescription: [
        'We leverage AI-driven orthodontic planning to optimize your treatment timeline and predict results with unprecedented accuracy.',
        'Each set of aligners is precision-manufactured using medical-grade materials that are BPA-free and virtually invisible.',
        'Average treatment time with our accelerated protocol is 30% faster than traditional clear aligner programs.',
      ],
      isHighlighted: false,
      tags: ['Invisible', 'AI-Driven', 'Accelerated'],
      benefits: [
        'Virtually invisible treatment',
        'AI-optimized for faster results',
        '30% shorter average treatment time',
        'Removable for eating and brushing',
        'Comfortable BPA-free materials',
      ],
      procedure: [
        { step: '1', title: 'AI Scan & Plan', description: 'Digital scanning with AI-powered treatment simulation.' },
        { step: '2', title: 'Custom Manufacturing', description: 'Precision aligners fabricated for each treatment phase.' },
        { step: '3', title: 'Accelerated Protocol', description: 'Optional vibration device to speed tooth movement.' },
        { step: '4', title: 'Retention', description: 'Custom retainers to maintain your perfect alignment.' },
      ],
      highlights: {
        duration: '4-14 Months',
        painLevel: 'Mild initial pressure',
        recovery: 'Immediate',
        visits: 'Every 8-10 Weeks',
      },
      faqs: [
        { question: 'How is this different from regular Invisalign?', answer: 'Our AI-enhanced planning and accelerated protocols achieve results up to 30% faster than standard programs.' },
        { question: 'Can I eat normally?', answer: 'Yes! Simply remove your aligners for meals and pop them back in afterward.' },
        { question: 'How often do I visit?', answer: 'Check-ins are every 8-10 weeks, significantly less than traditional orthodontics.' },
      ],
      relatedTreatments: ['smile-makeover', 'holistic-checkup'],
    },
    {
      id: 'whitening-la',
      slug: 'teeth-whitening-la',
      iconKey: 'heart-pulse',
      image: '/images/services/teeth_whitening_v5.png',
      altText: 'Luxury teeth whitening experience in a spa-like dental suite.',
      title: 'Luxury Whitening',
      shortDescription:
        'Spa-inspired professional whitening with aromatherapy and LED acceleration for a luminous smile.',
      description:
        'Our Luxury Whitening experience combines clinical-grade whitening with a spa atmosphere. Relax with aromatherapy while advanced LED technology brightens your smile up to 10 shades.',
      longDescription: [
        'This is not your average whitening appointment. Recline in our spa suite with aromatherapy diffusers, weighted blankets, and curated playlists.',
        'Our custom whitening gel is formulated with sensitivity-blocking agents so you can enjoy brilliant results without discomfort.',
        'Results are visible immediately — most patients leave 6-10 shades brighter in a single 75-minute session.',
      ],
      isHighlighted: true,
      tags: ['Spa Experience', 'Instant Results', 'Sensitivity-Free'],
      benefits: [
        'Up to 10 shades whiter in one visit',
        'Zero-sensitivity formula',
        'Spa-like relaxation experience',
        'LED-accelerated technology',
        'Take-home maintenance kit included',
      ],
      procedure: [
        { step: '1', title: 'Shade Mapping', description: 'Digital shade analysis and goal setting.' },
        { step: '2', title: 'Spa Preparation', description: 'Aromatherapy setup, lip balm, and comfort positioning.' },
        { step: '3', title: 'Whitening Cycles', description: 'Three 15-minute cycles with our premium gel and LED.' },
        { step: '4', title: 'Reveal & Care Kit', description: 'Final result reveal and take-home maintenance kit.' },
      ],
      highlights: {
        duration: '75 Minutes',
        painLevel: 'Zero Sensitivity',
        recovery: 'Immediate',
        results: 'Up to 10 shades whiter',
      },
      faqs: [
        { question: 'Will I have sensitivity after?', answer: 'Our formula includes built-in desensitizers. Most patients experience zero sensitivity.' },
        { question: 'How long do results last?', answer: 'With the included take-home kit, results can last 1-2 years with minimal touch-ups.' },
        { question: 'Can I combine this with other treatments?', answer: 'Whitening is often the first step in a Smile Makeover and pairs beautifully with veneers.' },
      ],
      relatedTreatments: ['smile-makeover', 'holistic-checkup'],
    },
    {
      id: 'implants-la',
      slug: 'premium-implants',
      iconKey: 'shield-plus',
      image: '/images/services/dental_implants.png',
      altText: 'Premium dental implant with zirconia crown in a modern setting.',
      title: 'Premium Dental Implants',
      shortDescription:
        'Guided implant surgery with same-day temporaries and zirconia restorations for lasting results.',
      description:
        'Our premium implant program uses fully guided surgical protocols and same-day temporary crowns so you never leave without a smile.',
      longDescription: [
        'We use 3D-guided surgical templates for sub-millimeter precision in implant placement, ensuring optimal aesthetics and function.',
        'Same-day temporary crowns mean you walk out with a complete smile — no gaps, no waiting months for a tooth.',
        'Our zirconia-based final restorations are the strongest and most natural-looking available, designed to last a lifetime.',
      ],
      isHighlighted: false,
      tags: ['Same-Day Smile', 'Guided Surgery', 'Zirconia'],
      benefits: [
        'Same-day temporary crown placement',
        '3D-guided surgical precision',
        'Premium zirconia restorations',
        'Lifetime durability with proper care',
        'Minimal post-operative discomfort',
      ],
      procedure: [
        { step: '1', title: '3D Planning', description: 'CBCT scan and virtual surgical guide fabrication.' },
        { step: '2', title: 'Guided Placement', description: 'Minimally invasive implant placement with surgical template.' },
        { step: '3', title: 'Same-Day Temp', description: 'Immediate temporary crown so you leave with a smile.' },
        { step: '4', title: 'Final Restoration', description: 'Custom zirconia crown bonded after healing is complete.' },
      ],
      highlights: {
        duration: 'Same-Day Temp + Healing',
        painLevel: 'Mild',
        recovery: '3-5 Days',
        lifespan: 'Lifetime',
      },
      faqs: [
        { question: 'Do I leave with a tooth the same day?', answer: 'Yes! We place a temporary crown immediately so you are never without a tooth.' },
        { question: 'What is zirconia?', answer: 'Zirconia is the strongest ceramic material available for dental crowns — combining durability with natural aesthetics.' },
        { question: 'How long does total treatment take?', answer: 'You get a temporary same-day. The final zirconia crown is placed 3-4 months later after full healing.' },
      ],
      relatedTreatments: ['smile-makeover', 'holistic-checkup'],
    },
    {
      id: 'laser-gum',
      slug: 'laser-gum-therapy',
      iconKey: 'zap',
      image: '/images/services/emergency_care.png',
      altText: 'Advanced laser gum therapy for gentle periodontal treatment.',
      title: 'Laser Gum Therapy',
      shortDescription:
        'Scalpel-free, suture-free gum treatment using advanced diode laser technology for rapid healing.',
      description:
        'Say goodbye to traditional gum surgery. Our LANAP-certified laser therapy treats gum disease without cutting or stitches, with dramatically faster recovery.',
      longDescription: [
        'Traditional gum surgery involves cutting and suturing. Our laser protocol eliminates both — treating periodontal disease with light energy for a gentler experience.',
        'The laser selectively targets diseased tissue while preserving healthy gum, promoting natural regeneration and bone growth.',
        'Most patients return to normal activities the same day with minimal discomfort. Results are clinically proven and long-lasting.',
      ],
      isHighlighted: false,
      tags: ['No Cutting', 'Same-Day Recovery', 'LANAP'],
      benefits: [
        'No scalpels or sutures',
        'Same-day recovery',
        'Stimulates bone regeneration',
        'Minimal bleeding and discomfort',
        'Clinically proven long-term results',
      ],
      procedure: [
        { step: '1', title: 'Periodontal Evaluation', description: 'Comprehensive gum health assessment with probing and imaging.' },
        { step: '2', title: 'Laser Treatment', description: 'Targeted laser therapy to remove diseased tissue.' },
        { step: '3', title: 'Deep Cleaning', description: 'Ultrasonic removal of calculus from root surfaces.' },
        { step: '4', title: 'Tissue Reattachment', description: 'Laser seals the pocket, promoting natural healing.' },
      ],
      highlights: {
        duration: '1-2 Hours',
        painLevel: 'Minimal',
        recovery: 'Same Day',
        successRate: '98%+',
      },
      faqs: [
        { question: 'Is laser gum therapy painful?', answer: 'Most patients report minimal discomfort — significantly less than traditional gum surgery.' },
        { question: 'How many sessions are needed?', answer: 'Typically 1-2 sessions depending on the severity of gum disease.' },
        { question: 'Is it covered by insurance?', answer: 'Many insurance plans cover laser gum therapy. We will verify your coverage before treatment.' },
      ],
      relatedTreatments: ['holistic-checkup', 'premium-implants'],
    },
    {
      id: 'kids-dental',
      slug: 'kids-dental-wellness',
      iconKey: 'baby',
      image: '/images/services/pediatric_dentistry.png',
      altText: 'Happy child enjoying a fun dental visit at Smile Studio.',
      title: 'Kids Dental Wellness',
      shortDescription:
        'Fun, fear-free dental experiences for children with a focus on prevention and positive habits.',
      description:
        'Our kid-friendly dental program makes visits exciting with gamified education, reward systems, and a team specially trained in pediatric behavioral techniques.',
      longDescription: [
        'At Smile Studio, we believe dental visits should be adventures, not anxieties. Our kid zone features interactive screens and fun rewards.',
        'Every visit includes age-appropriate education through games and activities that teach proper brushing, flossing, and healthy eating.',
        'Our pediatric team is trained in behavior guidance techniques that make even the most anxious children feel safe and empowered.',
      ],
      isHighlighted: false,
      tags: ['Fun & Friendly', 'Gamified', 'Preventive'],
      benefits: [
        'Gamified dental education',
        'Anxiety-free environment',
        'Reward-based motivation system',
        'Early orthodontic screening',
        'Parent coaching on home care',
      ],
      procedure: [
        { step: '1', title: 'Welcome Tour', description: 'Fun orientation to our kid zone and dental tools.' },
        { step: '2', title: 'Gentle Exam', description: 'Quick and comfortable check of teeth and gums.' },
        { step: '3', title: 'Happy Cleaning', description: 'Flavored polish and gentle scaling for a sparkling smile.' },
        { step: '4', title: 'Reward & Education', description: 'Prizes, brushing games, and tips for parents.' },
      ],
      highlights: {
        duration: '30-40 Minutes',
        painLevel: 'None',
        recovery: 'Immediate',
        frequency: 'Every 6 Months',
      },
      faqs: [
        { question: 'At what age should my child first visit?', answer: 'We recommend the first visit by age 1 or when the first tooth appears.' },
        { question: 'How do you handle anxious children?', answer: 'Our team uses positive reinforcement, tell-show-do techniques, and a fun environment to keep kids calm.' },
        { question: 'Do you offer sealants?', answer: 'Yes! Dental sealants are one of our top preventive recommendations for children.' },
      ],
      relatedTreatments: ['holistic-checkup', 'clear-aligners'],
    },
    {
      id: 'root-canal-la',
      slug: 'painless-root-canal',
      iconKey: 'microscope',
      image: '/images/services/root_canal_therapy.png',
      altText: 'Modern microscopic root canal therapy with sedation options.',
      title: 'Painless Root Canal',
      shortDescription:
        'Anxiety-free endodontic therapy with sedation options and same-day crown placement.',
      description:
        'Our root canal experience is so comfortable, patients often fall asleep during the procedure. Advanced microscopes and rotary instruments ensure precision and speed.',
      longDescription: [
        'We have redefined root canal therapy. With sedation options ranging from nitrous to oral sedation, your comfort is guaranteed.',
        'Our endodontists use surgical operating microscopes for 25x magnification, ensuring no canal is missed and treatment is thorough.',
        'Same-day crowns are available so you can complete treatment in a single visit — no temporary crowns or return appointments needed.',
      ],
      isHighlighted: false,
      tags: ['Sedation Available', 'Same-Day Crown', 'Microscopic'],
      benefits: [
        'Multiple sedation options available',
        'Microscopic precision (25x magnification)',
        'Same-day permanent crown option',
        'Single-visit completion',
        'Over 99% success rate',
      ],
      procedure: [
        { step: '1', title: 'Comfort Setup', description: 'Sedation administration and complete numbing protocol.' },
        { step: '2', title: 'Microscopic Access', description: 'Precision canal identification under 25x magnification.' },
        { step: '3', title: 'Cleaning & Shaping', description: 'Rotary instruments clean and shape canals in minutes.' },
        { step: '4', title: 'Seal & Crown', description: 'Permanent seal and optional same-day milled crown.' },
      ],
      highlights: {
        duration: '60-90 Minutes',
        painLevel: 'None (with sedation)',
        recovery: '24 Hours',
        successRate: '99%+',
      },
      faqs: [
        { question: 'Will I feel anything?', answer: 'With our sedation protocols, most patients feel nothing and some even sleep through the procedure.' },
        { question: 'Can I get the crown the same day?', answer: 'Yes, we offer same-day milled crowns so you can finish everything in one appointment.' },
        { question: 'How long is recovery?', answer: 'Most patients are back to normal within 24 hours with mild over-the-counter pain management.' },
      ],
      relatedTreatments: ['holistic-checkup', 'premium-implants'],
    },
  ],

  // ══════════════════════════════════════
  //  ALL SERVICES LIST
  // ══════════════════════════════════════
  allServicesList: [
    { label: 'Holistic Wellness Checkup', href: '/services/holistic-checkup' },
    { label: 'Signature Smile Makeover', href: '/services/smile-makeover' },
    { label: 'Clear Aligner Therapy', href: '/services/clear-aligners' },
    { label: 'Luxury Whitening', href: '/services/teeth-whitening-la' },
    { label: 'Premium Dental Implants', href: '/services/premium-implants' },
    { label: 'Laser Gum Therapy', href: '/services/laser-gum-therapy' },
    { label: 'Kids Dental Wellness', href: '/services/kids-dental-wellness' },
    { label: 'Painless Root Canal', href: '/services/painless-root-canal' },
  ],

  // ══════════════════════════════════════
  //  TESTIMONIALS
  // ══════════════════════════════════════
  testimonials: [
    {
      name: 'Jessica L.',
      initials: 'J',
      avatar: 'women/55.jpg',
      role: 'Local Guide · 28 reviews',
      timeAgo: '1 week ago',
      text: "I'm lowkey obsessed with Smile Studio. Got my veneers done here and they look SO natural. Dr. Chen is literally an artist. The whole vibe is like a luxury spa, not a dentist office. 10/10.",
      rating: 5,
    },
    {
      name: 'Brandon K.',
      initials: 'B',
      avatar: 'men/36.jpg',
      role: '14 reviews',
      timeAgo: '2 weeks ago',
      text: "Best dental experience of my life. The aromatherapy during my whitening session was next level. Left with teeth 8 shades whiter and zero sensitivity. Already booked my wife.",
      rating: 5,
    },
    {
      name: 'Priya M.',
      initials: 'P',
      avatar: 'women/42.jpg',
      role: 'Local Guide · 51 reviews',
      timeAgo: '5 days ago',
      text: "I was terrified of root canals. They gave me sedation and I literally woke up when it was done. Plus same-day crown! One visit, no temp crown, no coming back. Revolutionary.",
      rating: 5,
    },
    {
      name: 'Tyler R.',
      initials: 'T',
      avatar: 'men/28.jpg',
      role: '3 reviews',
      timeAgo: '1 month ago',
      text: "Got the clear aligners. They used some AI thing to plan my treatment and my teeth are moving way faster than friends who did regular Invisalign. Plus way fewer appointments. Win-win.",
      rating: 5,
    },
    {
      name: 'Amanda D.',
      initials: 'A',
      avatar: 'women/71.jpg',
      role: '7 reviews',
      timeAgo: '3 weeks ago',
      text: "I came from out of state specifically for Dr. Park's implant work. The guided surgery was incredible — temp same day, minimal pain. Flying back for the final crown next month. Worth every mile.",
      rating: 5,
    },
    {
      name: 'Carlos V.',
      initials: 'C',
      avatar: 'men/52.jpg',
      role: 'Local Guide · 33 reviews',
      timeAgo: '2 months ago',
      text: "The holistic approach sold me. No mercury fillings, organic products, and they actually talked to me about nutrition and how it affects my teeth. Never going back to a regular dentist.",
      rating: 5,
    },
    {
      name: 'Nina S.',
      initials: 'N',
      avatar: 'women/38.jpg',
      role: '9 reviews',
      timeAgo: '6 weeks ago',
      text: "Brought my 4-year-old for her first cleaning. The kid zone has games and rewards — she actually ASKED to go back next time. The pediatric team is magic. Thank you guys!",
      rating: 5,
    },
    {
      name: 'Derek W.',
      initials: 'D',
      avatar: 'men/65.jpg',
      role: '2 reviews',
      timeAgo: '3 months ago',
      text: "Had gum surgery scheduled at another place and a friend told me about the laser option here. No cutting, no stitches. I was back at work the same afternoon. Game changer.",
      rating: 4,
    },
    {
      name: 'Mia Z.',
      initials: 'M',
      avatar: 'women/25.jpg',
      role: 'Local Guide · 67 reviews',
      timeAgo: '1 month ago',
      text: "The smile makeover process was unreal. They showed me a 3D preview of my smile before starting. The final result? Even better than the preview. Crying happy tears every time I look in the mirror.",
      rating: 5,
    },
    {
      name: 'Jason H.',
      initials: 'J',
      avatar: 'men/41.jpg',
      role: '11 reviews',
      timeAgo: '4 months ago',
      text: "Weighted blankets during my cleaning? Noise-canceling headphones? This place gets it. I actually fell asleep during my appointment. That's never happened. Five stars forever.",
      rating: 5,
    },
    {
      name: 'Rachel P.',
      initials: 'R',
      avatar: 'women/15.jpg',
      role: '5 reviews',
      timeAgo: '5 months ago',
      text: "Smile Studio is the future of dentistry. Period. Everything is digital, everything is gentle, and the results are gorgeous. My smile makeover boosted my confidence more than anything else in my life.",
      rating: 5,
    },
    {
      name: 'Kevin T.',
      initials: 'K',
      avatar: 'men/73.jpg',
      role: 'Local Guide · 22 reviews',
      timeAgo: '7 months ago',
      text: "Fair pricing, transparent about everything, no upselling. They actually told me I DIDN'T need one of the procedures I asked about. That kind of honesty is rare. Loyal patient for life.",
      rating: 5,
    },
  ],

  // ══════════════════════════════════════
  //  FAQ
  // ══════════════════════════════════════
  faq: {
    heading: 'Frequently Asked',
    headingAccent: 'Questions.',
    subtitle:
      'Everything you need to know about our holistic approach, spa-like experience, and cutting-edge treatments.',
    items: [
      {
        question: 'What makes Smile Studio different from a regular dentist?',
        answer:
          'We take a holistic, wellness-first approach to dentistry. That means bio-compatible materials, spa-like comfort amenities, and treatment plans that consider your whole-body health — not just your teeth.',
      },
      {
        question: 'Do you offer sedation for anxious patients?',
        answer:
          'Absolutely. We offer nitrous oxide (laughing gas), oral sedation, and for certain procedures, IV sedation. Our goal is for you to feel completely relaxed and comfortable during every visit.',
      },
      {
        question: 'How much does a Smile Makeover cost?',
        answer:
          'Every smile is unique, so pricing varies based on the treatments involved. We provide a transparent, itemized quote during your consultation and offer flexible financing with 0% interest plans.',
      },
      {
        question: 'Are your materials really mercury-free and bio-compatible?',
        answer:
          'Yes, 100%. We exclusively use bio-compatible, BPA-free, and mercury-free materials. We can also safely remove and replace old mercury amalgam fillings.',
      },
      {
        question: 'Do you accept dental insurance?',
        answer:
          'Yes, we work with all major PPO dental insurance plans. Our team handles all the paperwork and will maximize your benefits. We also offer a membership plan for uninsured patients.',
      },
    ],
  },

  // ══════════════════════════════════════
  //  BEFORE/AFTER GALLERY
  // ══════════════════════════════════════
  gallery: [
    {
      id: 1,
      category: 'Smile Makeover',
      highlight:
        'Full smile transformation with porcelain veneers. Natural, luminous finish designed in our digital lab.',
      beforeSrc: '/images/before.png',
      afterSrc: '/images/after.png',
      href: '/services/smile-makeover',
    },
    {
      id: 2,
      category: 'Premium Implant Restoration',
      highlight:
        'Guided implant placement with same-day temporary. Full function and aesthetics restored in one visit.',
      beforeSrc: '/images/before.png',
      afterSrc: '/images/after.png',
      href: '/services/premium-implants',
    },
    {
      id: 3,
      category: 'Clear Aligner Journey',
      highlight:
        'AI-accelerated alignment correcting severe crowding in just 9 months. Invisible treatment, visible results.',
      beforeSrc: '/images/before.png',
      afterSrc: '/images/after.png',
      href: '/services/clear-aligners',
    },
  ],

  // ══════════════════════════════════════
  //  BOOKING
  // ══════════════════════════════════════
  booking: {
    heading: 'Book Your',
    headingAccent: 'Wellness Visit.',
    subtitle:
      'Begin your holistic dental journey. Our concierge team will confirm your appointment within 4 hours.',
    sidebarHeading: 'Concierge Booking.',
    sidebarSubtitle:
      'Choose your preferred time and let us curate your experience.',
    timeSlots: [
      '08:00 AM – 09:00 AM',
      '09:00 AM – 10:00 AM',
      '10:00 AM – 11:00 AM',
      '01:00 PM – 02:00 PM',
      '02:00 PM – 03:00 PM',
      '04:00 PM – 05:00 PM',
    ],
  },

  // ══════════════════════════════════════
  //  SOCIAL LINKS
  // ══════════════════════════════════════
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  },

  // ══════════════════════════════════════
  //  FOOTER
  // ══════════════════════════════════════
  footer: {
    ctaHeading: 'Ready to Begin Your Wellness Journey?',
    ctaDescription:
      'Join our community of patients who have transformed not just their smiles, but their entire approach to dental health.',
  },

  // ══════════════════════════════════════
  //  PAGE METADATA
  // ══════════════════════════════════════
  pages: {
    home: {
      title: 'Holistic Dental Wellness in Los Angeles',
      description:
        'Boutique dental wellness combining holistic care, spa-like comfort, and cutting-edge aesthetics. Book your visit today.',
    },
    services: {
      title: 'Holistic & Cosmetic Dental Services in LA',
      description:
        'Explore our wellness-first dental services including Smile Makeovers, Clear Aligners, Laser Therapy, and more.',
      pageHeader: {
        title: 'Our Treatments',
        description:
          'Wellness-first dental care designed to nurture your body, mind, and smile.',
      },
    },
    about: {
      title: 'About Smile Studio | Holistic Dentist LA',
      description:
        'Discover why Smile Studio is LA\'s premier holistic dental wellness destination. Bio-compatible care meets luxury comfort.',
      pageHeader: {
        title: 'About Smile Studio',
        description:
          'Where holistic wellness meets modern aesthetic dentistry.',
      },
    },
    testimonials: {
      title: 'Patient Reviews | Smile Studio LA',
      description:
        'Read authentic reviews from our Smile Studio family. See why patients are choosing holistic dental wellness.',
      pageHeader: {
        title: 'Patient Stories',
        description:
          'Real patients, real transformations, real smiles.',
      },
    },
    gallery: {
      title: 'Smile Gallery | Before & After Results LA',
      description:
        'See stunning before and after transformations from Smile Studio. Real patients, verified results.',
      pageHeader: {
        title: 'Smile Gallery',
        description:
          'Artistry meets science. See the transformations that changed lives.',
      },
    },
    contact: {
      title: 'Contact Smile Studio | Book Your Visit LA',
      description:
        'Get in touch with Smile Studio to schedule your holistic dental wellness visit in Los Angeles.',
      pageHeader: {
        title: 'Get in Touch',
        description:
          "We'd love to hear from you. Schedule your wellness visit or ask us anything.",
      },
    },
  },
};
