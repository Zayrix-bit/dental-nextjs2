import { 
  Stethoscope, Sparkles, Activity, HeartPulse, ShieldPlus, ClockAlert, 
  Microscope, Users, Smile, CreditCard 
} from 'lucide-react';

export const siteInfo = {
  name: 'DentalCare',
  tagline: 'Premium Dental Care',
  phone: '+1 (555) 123-4567',
  phoneRaw: '+15551234567',
  email: 'info@dentalclinic.com',
  address: {
    street: '123 Dental Street, Medical District',
    city: 'New York, NY 10001, USA',
  },
  hours: {
    weekdays: 'Mon – Fri: 9:00 AM – 7:00 PM',
    saturday: 'Saturday: 9:00 AM – 5:00 PM',
    emergency: '24/7 Emergency Care',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.9878531!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890',
  whatsappUrl:
    'https://wa.me/15551234567?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const heroStats = [
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 10, suffix: 'K+', label: 'Happy Patients' },
  { number: 25, suffix: '+', label: 'Expert Dentists' },
  { number: 98, suffix: '%', label: 'Satisfaction' },
];

export const services = [
  {
    id: 'general',
    slug: 'general-dentistry',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    title: 'General Dentistry',
    shortDescription: 'Maintain perfect oral health with comprehensive exams, cleanings, and proactive preventive care.',
    description: 'Our general dentistry services provide the foundation for a lifetime of optimal oral health. We focus on comprehensive exams, professional cleanings, and early detection of dental issues to prevent future complications. Utilizing state-of-the-art diagnostic technology, we ensure every aspect of your oral health is monitored and maintained.',
    longDescription: [
      "Regular dental check-ups are essential for preventing decay, gum disease, and other oral health issues. Our comprehensive general dentistry services are designed to keep your smile bright and healthy.",
      "During your visit, our experienced team will perform a thorough examination, including digital X-rays if necessary, to assess your oral health. We will also provide a professional cleaning to remove plaque and tartar build-up.",
      "We believe in patient education and will work with you to develop a personalized oral hygiene routine that fits your lifestyle. Our goal is to empower you to take control of your dental health."
    ],
    isHighlighted: false,
    tags: ['Preventive', 'Family Care'],
    benefits: [
      'Early detection of dental issues',
      'Prevention of cavities and gum disease',
      'Fresher breath and a brighter smile',
      'Personalized oral hygiene guidance',
      'Long-term cost savings on dental care'
    ],
    procedure: [
      { step: '1', title: 'Comprehensive Exam', description: 'Thorough evaluation of your teeth, gums, and oral tissues.' },
      { step: '2', title: 'Digital Diagnostics', description: 'Low-radiation X-rays and 3D imaging for precise assessment.' },
      { step: '3', title: 'Professional Cleaning', description: 'Removal of hardened plaque and professional polishing.' },
      { step: '4', title: 'Treatment Plan', description: 'Detailed discussion of findings and personalized recommendations.' }
    ],
    highlights: {
      duration: '45-60 Minutes',
      painLevel: 'None',
      recovery: 'Immediate',
      frequency: 'Every 6 Months'
    },
    faqs: [
      { question: 'How often should I get a dental checkup?', answer: 'We recommend visiting us every 6 months for a routine checkup and professional cleaning to maintain optimal oral health.' },
      { question: 'Do professional cleanings hurt?', answer: 'No, professional cleanings are generally painless. Our hygienists use gentle techniques to ensure your comfort.' },
      { question: 'What if you find a cavity during my exam?', answer: 'If we detect a cavity, we will discuss the best treatment options, which typically involves a simple, tooth-colored filling.' }
    ],
    relatedTreatments: ['teeth-whitening', 'cosmetic-dentistry']
  },
  {
    id: 'cosmetic',
    slug: 'cosmetic-dentistry',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1590664095641-7fa05f689813?q=80&w=2070&auto=format&fit=crop',
    title: 'Cosmetic Dentistry',
    shortDescription: "Transform your smile and boost your confidence with premium veneers, bonding, and total smile makeovers.",
    description: "Our cosmetic dentistry solutions are designed to address imperfections and enhance the natural beauty of your smile. From porcelain veneers to full smile makeovers, we blend art and science to deliver stunning, life-changing results.",
    longDescription: [
      "A beautiful smile can significantly impact your self-esteem and how others perceive you. Our cosmetic dentistry treatments are tailored to your unique facial structure and aesthetic goals.",
      "Whether you're looking to correct chipped, stained, or misaligned teeth, our expert cosmetic dentists utilize the latest materials and techniques to create a flawless, natural-looking smile.",
      "We begin with a comprehensive digital smile design consultation, allowing you to preview your new smile before any treatment begins. We believe in conservative approaches that preserve your natural tooth structure whenever possible."
    ],
    isHighlighted: true,
    tags: ['Smile Design', 'Aesthetic', 'Veneers'],
    benefits: [
      'Dramatically improved appearance',
      'Increased self-confidence',
      'Correction of chips, cracks, and stains',
      'Customized treatments for your unique face',
      'Long-lasting, natural-looking results'
    ],
    procedure: [
      { step: '1', title: 'Smile Consultation', description: 'In-depth discussion of your goals and digital smile analysis.' },
      { step: '2', title: 'Custom Treatment Plan', description: 'Selection of procedures (veneers, bonding, etc.) tailored to you.' },
      { step: '3', title: 'Preparation & Impressions', description: 'Gentle preparation of the teeth and highly accurate digital impressions.' },
      { step: '4', title: 'Final Placement', description: 'Bonding of the final restorations for a flawless, brilliant smile.' }
    ],
    highlights: {
      duration: 'Varies by procedure',
      painLevel: 'Minimal to None',
      recovery: '1-3 Days',
      lifespan: '10-15+ Years (Veneers)'
    },
    faqs: [
      { question: 'Are porcelain veneers permanent?', answer: 'Veneers are considered permanent as a thin layer of enamel is removed to place them. With proper care, they can last 10-15 years or longer.' },
      { question: 'Will cosmetic treatments look natural?', answer: 'Absolutely. We use high-quality, translucent materials that closely mimic the appearance of natural teeth to ensure a seamless blend.' },
      { question: 'Can I combine different cosmetic treatments?', answer: 'Yes, a "Smile Makeover" often combines multiple treatments like whitening, veneers, and bonding to achieve the desired result.' }
    ],
    relatedTreatments: ['teeth-whitening', 'orthodontics-invisalign']
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics-invisalign',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    title: 'Orthodontics & Invisalign',
    shortDescription: 'Achieve perfectly straight teeth with discreet Invisalign and modern alignment solutions.',
    description: 'Straight teeth not only look better but are also easier to keep clean and healthy. Our modern orthodontic solutions, including clear aligners like Invisalign, offer discreet and comfortable ways to achieve a perfectly aligned smile.',
    longDescription: [
      "Misaligned teeth can lead to a variety of dental issues, including increased risk of decay, gum disease, and jaw pain. Our orthodontic treatments address both aesthetic concerns and functional problems.",
      "We specialize in clear aligner therapy, providing a virtually invisible alternative to traditional metal braces. Using advanced 3D imaging, we map out your entire treatment plan from start to finish.",
      "Whether you're a teenager or an adult seeking to improve your smile, our orthodontic solutions are tailored to fit seamlessly into your lifestyle with minimal disruption."
    ],
    isHighlighted: false,
    tags: ['Invisalign', 'Clear Aligners', 'Braces'],
    benefits: [
      'Straighter, more attractive smile',
      'Improved oral hygiene and reduced decay risk',
      'Correction of bite and jaw alignment issues',
      'Discreet treatment with clear aligners',
      'Enhanced long-term dental health'
    ],
    procedure: [
      { step: '1', title: '3D Scanning', description: 'Digital impression of your teeth using intraoral scanners.' },
      { step: '2', title: 'Digital Treatment Plan', description: 'A virtual model showing your teeth moving into their final positions.' },
      { step: '3', title: 'Aligner Fitting', description: 'Receiving your custom aligners and instructions for wear.' },
      { step: '4', title: 'Progress Checks', description: 'Brief appointments every 6-8 weeks to monitor your progress.' }
    ],
    highlights: {
      duration: '6-18 Months typically',
      painLevel: 'Mild discomfort initially',
      recovery: 'Immediate',
      visits: 'Every 6-8 Weeks'
    },
    faqs: [
      { question: 'Is Invisalign really invisible?', answer: 'Invisalign aligners are made of clear medical-grade plastic and are virtually unnoticeable when worn.' },
      { question: 'How many hours a day must I wear aligners?', answer: 'For optimal results, aligners should be worn 20-22 hours a day, removing them only to eat, drink, brush, and floss.' },
      { question: 'Are clear aligners painful?', answer: 'You may experience slight pressure or discomfort for the first few days of each new aligner set, which indicates your teeth are moving.' }
    ],
    relatedTreatments: ['cosmetic-dentistry', 'general-dentistry']
  },
  {
    id: 'whitening',
    slug: 'teeth-whitening',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop',
    title: 'Teeth Whitening',
    shortDescription: 'Unlock a radiant, brilliant smile in just one single visit with our professional-grade whitening treatments.',
    description: 'Professional teeth whitening is one of the fastest and most effective ways to enhance your smile. Our advanced whitening systems safely remove years of stains and discoloration, revealing a significantly whiter, brighter smile.',
    longDescription: [
      "Over time, teeth can become stained from coffee, tea, wine, smoking, and certain foods. Our professional whitening treatments penetrate deep into the enamel to lift stubborn stains that over-the-counter products cannot reach.",
      "We offer both fast-acting in-office whitening for immediate results and custom-fitted take-home kits for your convenience. Our treatments use professional-grade whitening agents that are safe for your enamel.",
      "For patients with sensitive teeth, we adjust the concentration of the whitening gel and incorporate desensitizing agents to ensure a comfortable and pain-free experience."
    ],
    isHighlighted: true,
    tags: ['Instant Results', 'Safe & Painless', 'Zoom'],
    benefits: [
      'Noticeably whiter teeth in one session',
      'Removal of stubborn, deep-set stains',
      'Safe, professional-grade ingredients',
      'Customized treatments for sensitive teeth',
      'Immediate boost in confidence'
    ],
    procedure: [
      { step: '1', title: 'Shade Assessment', description: 'Evaluating your current shade and determining your goal shade.' },
      { step: '2', title: 'Gum Protection', description: 'Applying a protective barrier to your gums and soft tissues.' },
      { step: '3', title: 'Whitening Application', description: 'Applying the professional-grade whitening gel to your teeth.' },
      { step: '4', title: 'Activation', description: 'Using a specialized LED light to accelerate the whitening process (for in-office treatments).' }
    ],
    highlights: {
      duration: '45-90 Minutes (In-Office)',
      painLevel: 'None to Mild Sensitivity',
      recovery: 'Immediate',
      results: 'Up to 8 shades whiter'
    },
    faqs: [
      { question: 'Is teeth whitening safe for my enamel?', answer: 'Yes, our professional whitening treatments are completely safe and formulated to protect your enamel while lifting stains.' },
      { question: 'Will I experience tooth sensitivity?', answer: 'Some patients experience temporary sensitivity. We use special desensitizing gels to minimize any discomfort during and after the procedure.' },
      { question: 'How long do the whitening results last?', answer: 'Results can last anywhere from six months to two years, depending on your diet and oral hygiene habits. Touch-up kits can prolong the effects.' }
    ],
    relatedTreatments: ['cosmetic-dentistry', 'general-dentistry']
  },
  {
    id: 'implants',
    slug: 'dental-implants',
    icon: ShieldPlus,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
    title: 'Dental Implants',
    shortDescription: 'Restore complete function and esthetics permanently with our state-of-the-art implant technology.',
    description: 'Dental implants are the gold standard for replacing missing teeth. Acting as artificial tooth roots, they provide a permanent, stable foundation for lifelike crowns, bridges, or dentures, restoring both the aesthetics and full functionality of your smile.',
    longDescription: [
      "Missing teeth can lead to a host of problems, including difficulty chewing, speech issues, and bone loss in the jaw. Dental implants are the only tooth replacement option that preserves jawbone health by simulating natural bone stimulation.",
      "Our practice utilizes advanced 3D imaging and surgical planning software to ensure precise and minimally invasive implant placement. From single tooth replacements to full arch restorations (All-on-4), we offer comprehensive implant solutions.",
      "Implants look, feel, and function just like natural teeth. With proper care, they are designed to last a lifetime, giving you the freedom to eat, speak, and smile with absolute confidence."
    ],
    isHighlighted: true,
    tags: ['Permanent Solution', 'Advanced Tech', 'All-on-4'],
    benefits: [
      'Permanent replacement for missing teeth',
      'Preserves jawbone density and facial structure',
      'Functions like natural teeth for eating and speaking',
      'No need to alter adjacent healthy teeth',
      'Exceptionally high long-term success rate'
    ],
    procedure: [
      { step: '1', title: '3D Imaging & Planning', description: 'Assessing bone density and precise surgical planning using CBCT scans.' },
      { step: '2', title: 'Implant Placement', description: 'Surgical placement of the titanium implant post into the jawbone.' },
      { step: '3', title: 'Osseointegration', description: 'A healing period (typically 3-6 months) where the bone fuses to the implant.' },
      { step: '4', title: 'Restoration', description: 'Attaching the custom-made, lifelike crown to the fully integrated implant.' }
    ],
    highlights: {
      duration: 'Varies based on healing',
      painLevel: 'Mild to Moderate (during recovery)',
      recovery: '3-7 Days',
      lifespan: 'Lifetime (with proper care)'
    },
    faqs: [
      { question: 'Am I a candidate for dental implants?', answer: 'Most adults with healthy gums and adequate jawbone density are good candidates. We will perform a comprehensive evaluation to determine your suitability.' },
      { question: 'Is the implant procedure painful?', answer: 'The procedure is performed under local anesthesia or sedation, ensuring you are comfortable and pain-free. Post-operative discomfort is usually manageable with over-the-counter medication.' },
      { question: 'Do you offer All-on-4 full arch implants?', answer: 'Yes, we provide full mouth restoration options, including the All-on-4 technique, which can replace an entire arch of teeth in a single day.' }
    ],
    relatedTreatments: ['general-dentistry', 'cosmetic-dentistry']
  },
  {
    id: 'emergency',
    slug: 'emergency-dentistry',
    icon: ClockAlert,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    title: 'Emergency Care',
    shortDescription: 'Experience immediate relief with our 24/7 priority emergency services when you need us most.',
    description: 'Dental emergencies can be stressful and painful. Our team is dedicated to providing prompt, compassionate care to alleviate your pain and comprehensively address the underlying issue as quickly as possible.',
    longDescription: [
      "Whether you've experienced dental trauma, severe toothache, a broken restoration, or sudden swelling, fast professional attention is crucial to saving your tooth and preventing further complications.",
      "Our practice offers priority scheduling and after-hours availability for severe emergencies. We utilize advanced diagnostic tools to quickly identify the source of your pain and formulate an effective treatment plan.",
      "Don't wait if you're experiencing severe dental pain. Contact us immediately for instructions and priority care. We are committed to getting you out of pain and restoring your oral health immediately."
    ],
    isHighlighted: false,
    tags: ['Immediate Relief', '24/7 Access', 'Priority'],
    benefits: [
      'Rapid pain relief and diagnosis',
      'Prevention of severe complications',
      'Priority scheduling for urgent cases',
      'Expert management of dental trauma',
      'Compassionate, anxiety-reducing environment'
    ],
    procedure: [
      { step: '1', title: 'Immediate Contact', description: 'Call our emergency line for priority triaging and instructions.' },
      { step: '2', title: 'Urgent Assessment', description: 'Fast diagnostic X-rays and examination to identify the problem.' },
      { step: '3', title: 'Pain Management', description: 'Administering appropriate anesthesia or medication for immediate relief.' },
      { step: '4', title: 'Definitive Treatment', description: 'Performing the necessary procedure (e.g., extraction, RCT) to resolve the issue.' }
    ],
    highlights: {
      duration: 'Priority Scheduling',
      painLevel: 'Varies',
      recovery: 'Depends on treatment',
      availability: '24/7 Emergency Line'
    },
    faqs: [
      { question: 'What counts as a dental emergency?', answer: 'Severe pain, knocked-out teeth, excessive bleeding, severe swelling, and sudden trauma to the mouth all qualify as dental emergencies requiring immediate attention.' },
      { question: 'What should I do if a tooth gets knocked out?', answer: 'Handle the tooth by the crown (top part), gentle rinse it without scrubbing, and try to place it back in the socket. If not possible, keep it in a glass of milk and get to us immediately.' },
      { question: 'Do you accept walk-in emergencies?', answer: 'While we highly recommend calling ahead so we can prepare for your arrival, we do accept severe walk-in emergencies during business hours.' }
    ],
    relatedTreatments: ['general-dentistry', 'dental-implants']
  }
];

export const ALL_SERVICES = [
  { label: "General Checkup & Cleaning", href: "/services#checkup" },
  { label: "Teeth Whitening", href: "/services#whitening" },
  { label: "Root Canal Treatment (RCT)", href: "/services#rct" },
  { label: "Dental Implants", href: "/services#implants" },
  { label: "Braces / Invisalign", href: "/services#braces" },
  { label: "Veneers & Cosmetic Dentistry", href: "/services#veneers" },
  { label: "Pediatric Dentistry", href: "/services#pediatric" },
  { label: "Tooth Extraction", href: "/services#extraction" },
  { label: "Emergency Dental Care", href: "/services#emergency" },
  { label: "Other", href: "/services#other" }
];

export const features = [
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'State-of-the-art equipment including 3D imaging and laser dentistry.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Board-certified dentists with decades of combined expertise.',
  },
  {
    icon: Smile,
    title: 'Patient Comfort',
    description: 'Spa-like atmosphere with sedation options for anxiety-free visits.',
  },
  {
    icon: CreditCard,
    title: 'Affordable Care',
    description: 'Flexible payment plans and insurance-friendly pricing.',
  },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    initials: 'S',
    role: 'Local Guide · 12 reviews',
    timeAgo: '3 weeks ago',
    text: "So glad I found this place. Dr. Smith is amazing. I was super anxious about getting a root canal but honestly didn't feel a thing. The staff is polite and the clinic is spotless. Highly recommend if you have dental anxiety.",
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    initials: 'J',
    role: '6 reviews',
    timeAgo: 'a month ago',
    text: "Been coming here for about 2 years now. Everything is usually great and they run on time which is huge for me. Only giving 4 stars because parking was a little tricky last visit, but the dental work is top notch.",
    rating: 4,
  },
  {
    name: 'Emily Parker',
    initials: 'E',
    role: 'Local Guide · 34 reviews',
    timeAgo: '2 days ago',
    text: "Brought my 7yo for his first filling and the pediatric dentist here is just wonderful. She explained everything to him so patiently. We left with zero tears 😊 Front desk was also very helpful with our insurance.",
    rating: 5,
  },
  {
    name: 'David W.',
    initials: 'D',
    role: '2 reviews',
    timeAgo: '2 months ago',
    text: "Got my Invisalign through them. Process has been smooth so far. Pricing was transparent upfront with no hidden fees. Solid place.",
    rating: 5,
  },
  {
    name: 'L. Kim',
    initials: 'L',
    role: '1 review',
    timeAgo: '4 months ago',
    text: "Had a dental emergency on a Saturday and they fit me in right away. Saved my tooth! Can't thank the emergency team enough. Very professional.",
    rating: 5,
  },
  {
    name: 'Mike H.',
    initials: 'M',
    role: 'Local Guide · 89 reviews',
    timeAgo: '5 months ago',
    text: "Came in for a regular cleaning and decided to do the professional whitening before my wedding. Incredible results. The hygienist was super gentle too. Best dentist in the area hands down.",
    rating: 5,
  },
  {
    name: 'Robert G.',
    initials: 'R',
    role: 'Local Guide · 45 reviews',
    timeAgo: '1 week ago',
    text: "Dr. Martinez is the best. The clinic is high-tech with TVs on the ceiling while they work on you. Makes the time fly by. I just had a crown done and it was seamless.",
    rating: 5,
  },
  {
    name: 'Aisha T.',
    initials: 'A',
    role: '5 reviews',
    timeAgo: '3 weeks ago',
    text: "Moved to the area recently and needed a new dentist. So happy I chose them! Receptionist was super sweet and billing was straightforward. No surprise charges.",
    rating: 5,
  },
  {
    name: 'Paul C.',
    initials: 'P',
    role: '1 review',
    timeAgo: '1 month ago',
    text: "Good cleaning, very thorough. The hygienist was a little rough with the flossing but my teeth feel amazing now. Office is very clean.",
    rating: 4,
  },
  {
    name: 'J. Evans',
    initials: 'J',
    role: 'Local Guide · 18 reviews',
    timeAgo: '3 months ago',
    text: "I've always hated the dentist until now. They use this numbing gel before the needle and I swear it's magic. 10/10 for patient comfort.",
    rating: 5,
  },
  {
    name: 'Natalie R.',
    initials: 'N',
    role: '4 reviews',
    timeAgo: '6 months ago',
    text: "Got my wisdom teeth out here last Friday. Recovery was way easier than I expected and the doctor even called me the next day to check in. Highly recommend.",
    rating: 5,
  },
  {
    name: 'Marcus B.',
    initials: 'M',
    role: 'Local Guide · 42 reviews',
    timeAgo: '8 months ago',
    text: "Beautiful office, looks like a spa. They gave me a warm towel after my appointment. Plus my teeth look perfectly white after the zoom whitening!",
    rating: 5,
  },
];

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book Appointment', href: '/contact' },
];
