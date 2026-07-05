// Shared content + constants for the standalone /bangladesh landing page.
// Plain data only (no JSX) so this stays a `.ts` module.

export const ENQUIRY_LINK = '/contact/enquiry?pageVisit=/bangladesh';

export const heroKpis = [
  { val: '65–73%', lbl: 'IVF Success Rate' },
  { val: '15,000+', lbl: 'Babies Born' },
  { val: '3–4 hrs', lbl: 'Dhaka to Bangalore' },
  { val: '0% EMI', lbl: 'Finance Options' },
];

export const whyItems = [
  {
    icon: '🏆',
    h: 'Proven Success Rates',
    p: '65–73% IVF success rate, driven by advanced Blastocyst culture and skilled embryology. Over 15,000 babies born.',
  },
  {
    icon: '💊',
    h: 'No Compromise on Quality',
    p: 'International-grade medications, lab media and equipment — the same quality used in the best clinics worldwide.',
  },
  {
    icon: '🤝',
    h: 'Cultural Familiarity',
    p: 'South Asian cultural understanding, Bengali-speaking staff available, halal-friendly dietary options and religious sensitivity.',
  },
  {
    icon: '📋',
    h: 'Personalised Treatment Plans',
    p: 'Every couple is different. Your plan is crafted around your specific diagnosis — never a one-size-fits-all protocol.',
  },
];

export const costRows = [
  { country: '🇺🇸 United States', price: '$18,000+' },
  { country: '🇸🇬 Singapore', price: '$15,000+' },
  { country: '🇹🇭 Thailand', price: '$8,000+' },
  { country: '🇧🇩 Bangladesh (limited)', price: 'Variable / Limited' },
];

export const steps = [
  {
    n: '1',
    title: 'Free Video Consultation',
    desc: 'Consult a fertility specialist online from Dhaka. Share reports and receive an initial assessment.',
  },
  {
    n: '2',
    title: 'Visa & Travel Planning',
    desc: "We assist with India's e-Medical Visa, invitation letters, and travel coordination to Bangalore.",
  },
  {
    n: '3',
    title: 'Arrive & Assess',
    desc: 'Detailed diagnostics in the first 1–2 days to finalize your personalised fertility treatment plan.',
  },
  {
    n: '4',
    title: 'Treatment Cycle',
    desc: 'Begin IVF, ICSI, or the recommended protocol with full medical and emotional support throughout.',
  },
  {
    n: '5',
    title: 'Home with Good News',
    desc: 'Pregnancy confirmed, return to Bangladesh. We coordinate with your local doctor for ongoing care.',
  },
];

export const treatments = [
  {
    icon: '🧬',
    name: 'IVF – In Vitro Fertilisation',
    desc: 'Flagship treatment with 65–73% success rate. Advanced stimulation protocols and world-class embryology lab.',
    link: 'Most Recommended →',
  },
  {
    icon: '🔬',
    name: 'ICSI',
    desc: 'For male factor infertility — precise injection of sperm directly into the egg for optimal fertilisation.',
    link: 'High Success →',
  },
  {
    icon: '💉',
    name: 'IUI – Intrauterine Insemination',
    desc: 'Minimally invasive first-line treatment. Often the right starting point for many couples.',
    link: 'Low Intervention →',
  },
  {
    icon: '❄️',
    name: 'Embryo Freezing & FET',
    desc: 'Preserve embryos from one stimulation cycle for multiple future transfer attempts.',
    link: 'Future Planning →',
  },
  {
    icon: '🥚',
    name: 'Egg Donation Program',
    desc: 'Ethically screened egg donation with full counselling for donors and recipients.',
    link: 'Screened Donors →',
  },
  {
    icon: '👨',
    name: 'Male Fertility & Andrology',
    desc: 'Semen analysis, TESA, PESA, surgical sperm retrieval for complete male infertility workup and treatment.',
    link: 'Male Specialists →',
  },
];

export const services = [
  {
    icon: '📋',
    name: 'Medical Visa Support',
    desc: "Full guidance on India's e-Medical Visa application. We provide the invitation letters and documentation you need.",
  },
  {
    icon: '🏨',
    name: 'GarbhaGriha Accommodation',
    desc: 'Comfortable, affordable stay close to the clinic. Focus on your treatment, not on finding a hotel.',
  },
  {
    icon: '🚌',
    name: 'Airport & Clinic Transfers',
    desc: 'Arranged pickup from Kempegowda Airport and transport between accommodation and clinic throughout your stay.',
  },
  {
    icon: '💬',
    name: 'Bengali-Friendly Support',
    desc: 'Staff familiar with Bengali culture and language. Feel heard and understood throughout your treatment.',
  },
  {
    icon: '💰',
    name: '0% Interest EMI Plans',
    desc: 'Interest-free financing options to ensure financial constraints never stop you from starting your family.',
  },
  {
    icon: '🌐',
    name: 'Online Pre-Consultation',
    desc: 'Full video consultation from Bangladesh before your travel. Arrive knowing exactly what to expect.',
  },
];

export const doctors = [
  {
    av: 'A',
    name: 'Dr. Asha S Vijay',
    spec: 'Founder & Medical Director · Gynaecologist & Fertility Specialist',
    bio: ' 20+ years of experience in obstetrics, gynaecology and infertility. Responsible for over 15,000 successful pregnancies. Founder of GarbhaGudi IVF Centre in 2011.',
  },
  {
    av: 'E',
    name: 'Senior Embryology Department',
    spec: 'Advanced ART Laboratory Sciences',
    bio: 'Specialists in Blastocyst culture, vitrification, ICSI, and advanced embryo grading — the science behind our industry-leading pregnancy rates.',
  },
  {
    av: 'C',
    name: 'Counselling & Wellness Team',
    spec: 'Psychological & Emotional Support',
    bio: 'Trained counsellors provide emotional support, yoga, pranayama, and mind-body programs to improve treatment outcomes and patient experience.',
  },
  {
    av: 'M',
    name: 'Andrology Department',
    spec: 'Male Fertility Specialists',
    bio: 'Comprehensive male fertility diagnosis and treatment including advanced semen analysis, TESA, PESA, and surgical sperm retrieval.',
  },
];

export const testimonials = [
  {
    av: 'RI',
    name: 'Rehana & Imran',
    loc: '🇧🇩 Dhaka, Bangladesh',
    quote:
      '"After three years of trying and no success in Dhaka, we came to GarbhaGudi. The team treated us like family. Our daughter was born 8 months ago and we are forever grateful. The costs were so much less than we expected."',
  },
  {
    av: 'NK',
    name: 'Nasrin & Karim',
    loc: '🇧🇩 Chittagong, Bangladesh',
    quote:
      '"The visa process was simple with their guidance. We stayed at GarbhaGriha and everything was arranged. Dr. Asha\'s team explained everything clearly. We now have twin boys and could not be more joyful."',
  },
  {
    av: 'SF',
    name: 'Samira & Farhan',
    loc: '🇧🇩 Sylhet, Bangladesh',
    quote:
      '"I was nervous about traveling to India for treatment, but the GarbhaGudi international coordinator called me before I even arrived and made me feel completely at ease. Our son is 3 months old now."',
  },
  {
    av: 'TR',
    name: 'Tahmina & Rafiq',
    loc: '🇧🇩 Rajshahi, Bangladesh',
    quote:
      '"We tried in Bangkok and Singapore before coming to GarbhaGudi. Same quality, one-third the cost, and we felt more understood here. The success happened on the first cycle. We recommend GarbhaGudi to every Bangladeshi couple."',
  },
];

export const faqs = [
  {
    q: 'Do I need a Medical Visa to travel to India for IVF?',
    a: 'Yes, you will need an e-Medical Visa. GarbhaGudi provides all documentation needed for your application, including the invitation letter from the hospital.',
  },
  {
    q: 'How long will I need to stay in Bangalore?',
    a: 'A typical IVF cycle requires 10–14 days in Bangalore. Some protocols may allow part of monitoring to happen locally before you travel, reducing your stay.',
  },
  {
    q: 'Are there Bengali-speaking staff at GarbhaGudi?',
    a: 'Our international patient support team is familiar with Bengali culture and can communicate comfortably. We ensure you are never left without clear guidance.',
  },
  {
    q: 'Can I have an online consultation before I travel?',
    a: 'Absolutely. We encourage a full video consultation before you commit to traveling. Share your reports in advance and speak directly with our fertility specialist.',
  },
  {
    q: 'What accommodation is available?',
    a: 'GarbhaGriha is our dedicated accommodation facility, located conveniently close to the clinic. We also assist with hotel recommendations for all budgets.',
  },
  {
    q: 'What is the cost of IVF treatment?',
    a: 'Costs depend on your specific treatment plan. Indicatively, a standard IVF cycle at GarbhaGudi starts at approximately ₹1.5–2.5 lakh (USD 2,500–4,000). Contact us for a personalised quote.',
  },
];
