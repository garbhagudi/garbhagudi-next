import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PoseCard = {
  id: string;
  sanskrit: string;
  english: string;
  image: string;
  description: string;
  indications: string[];
  contraindications: string[];
};

type GuideSection = {
  id: string;
  label: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  subtitle: string;
  poses: PoseCard[];
};

type NutritionRow = {
  name: string;
  sources: string;
  benefits: string;
  indications: string;
  contraindications: string;
};

/* ─── Data ─── */

const SECTIONS: GuideSection[] = [
  {
    id: 'standing',
    label: 'Standing Sequence',
    accentColor: '#4f46e5',
    badgeBg: '#eef2ff',
    badgeText: '#3730a3',
    subtitle: 'Physical & Emotional Wellness',
    poses: [
      {
        id: 'tadasana',
        sanskrit: 'Tadasana',
        english: 'Mountain Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/6f/Tadasana_Yoga-Asana_Nina-Mel.jpg',
        description:
          'A foundational standing posture that promotes proper spinal alignment and body awareness. Regular practice strengthens the legs, corrects posture, and cultivates a deep sense of groundedness.',
        indications: ['Poor posture', 'Flat feet', 'Chronic fatigue', 'Lack of body awareness', 'Anxiety'],
        contraindications: ['Headache', 'Insomnia', 'Low blood pressure'],
      },
      {
        id: 'vrikshasana',
        sanskrit: 'Vrikshasana',
        english: 'Tree Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Vriksasana_Yoga-Asana_Nina-Mel.jpg',
        description:
          'A single-leg balancing posture that sharpens concentration and cultivates inner stability. Strengthens the ankles and knees, opens the hips, and develops coordination.',
        indications: ['Poor balance', 'Anxiety', 'Sciatica', 'Hip tightness', 'Flat feet'],
        contraindications: ['Headache', 'Insomnia', 'Low blood pressure'],
      },
      {
        id: 'katichakrasana',
        sanskrit: 'Katichakrasana',
        english: 'Standing Spinal Twist',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Saman_hasta_katichakrasana.jpg/960px-Saman_hasta_katichakrasana.jpg',
        description:
          'A gentle rotational movement that releases tension along the spine and massages the abdominal organs. Improves lateral flexibility, aids digestion, and relieves shoulder stiffness.',
        indications: ['Back stiffness', 'Constipation', 'Shoulder tension', 'Sluggish digestion'],
        contraindications: ['Hernia', 'Severe back pain', 'Pregnancy (2nd/3rd trimester)'],
      },
      {
        id: 'virabhadrasana',
        sanskrit: 'Virabhadrasana',
        english: 'Warrior Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Virabhadrasana_II_-_Warrior_II_Pose.jpg/960px-Virabhadrasana_II_-_Warrior_II_Pose.jpg',
        description:
          'A powerful posture that builds leg strength, opens the chest, and cultivates determination. Improves stamina, instils confidence, and stretches the hip flexors deeply.',
        indications: ['Weak legs', 'Stiff hips', 'Lack of confidence', 'Frozen shoulder', 'Sciatica'],
        contraindications: ['High blood pressure', 'Heart problems', 'Knee injuries'],
      },
      {
        id: 'viparita-virabhadrasana',
        sanskrit: 'Viparita Virabhadrasana',
        english: 'Reverse Warrior',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/5/58/Reverse_warrior_pose_%28white_background%29.jpg',
        description:
          'An energising lateral extension that stretches the entire side body and opens the heart. Strengthens the legs while expanding the intercostal muscles and improving breath capacity.',
        indications: ['Side body tightness', 'Respiratory issues', 'Emotional tension', 'Fatigue'],
        contraindications: ['High blood pressure', 'Neck problems', 'Knee injuries'],
      },
      {
        id: 'adho-mukha-svanasana',
        sanskrit: 'Adho Mukha Svanasana',
        english: 'Downward-Facing Dog',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Adho_mukha_shvanasana.jpg',
        description:
          'A full-body rejuvenating semi-inversion that simultaneously strengthens and stretches. Calms the nervous system, reduces fatigue, and lengthens the hamstrings and calves.',
        indications: ['Fatigue', 'Back pain', 'Mild depression', 'Sciatica', 'Headache'],
        contraindications: ['Carpal tunnel syndrome', 'Late pregnancy', 'Diarrhea', 'Advanced hypertension'],
      },
      {
        id: 'ashwa-sanchalanasana',
        sanskrit: 'Ashwa Sanchalanasana',
        english: 'Equestrian Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/ASHWA_SANCHALANASANA.jpg/960px-ASHWA_SANCHALANASANA.jpg',
        description:
          'A deep hip flexor and groin stretch that prepares the body for backbends and forward folds. Improves balance and stimulates the digestive organs.',
        indications: ['Tight hip flexors', 'Sciatica', 'Constipation', 'Indigestion', 'Reproductive health'],
        contraindications: ['Knee injuries', 'Severe back pain', 'Heart conditions'],
      },
      {
        id: 'shashankasana',
        sanskrit: 'Shashankasana',
        english: 'Hare Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Hatha_yoga_child_pose.jpg/960px-Hatha_yoga_child_pose.jpg',
        description:
          'A deeply calming forward fold that decompresses the spine and activates the parasympathetic nervous system. Promotes emotional release and adrenal recovery.',
        indications: ['Stress', 'Anger management', 'Back pain', 'Digestive problems', 'Adrenal fatigue'],
        contraindications: ['High blood pressure (inversion stage)', 'Knee problems', 'Pregnancy'],
      },
    ],
  },
  {
    id: 'sitting',
    label: 'Sitting Asanas',
    accentColor: '#7c3aed',
    badgeBg: '#f5f3ff',
    badgeText: '#4c1d95',
    subtitle: 'Wisdom & Inner Awareness',
    poses: [
      {
        id: 'dandasana',
        sanskrit: 'Dandasana',
        english: 'Staff Pose',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Dandasana_yoga_posture.jpg',
        description:
          'The foundational seated posture that establishes proper spinal alignment. Engages deep core muscles and corrects rounded shoulders for sustained seated practice.',
        indications: ['Poor posture', 'Weak back muscles', 'Fatigue', 'Rounded shoulders'],
        contraindications: ['Wrist injury', 'Acute lower back injury'],
      },
      {
        id: 'paschimottanasana',
        sanskrit: 'Paschimottanasana',
        english: 'Seated Forward Bend',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/66/Paschimotanasana_Yoga-Asana_Nina-Mel.jpg',
        description:
          'A profound forward fold stretching the entire posterior chain. Calms an agitated mind, stimulates the liver and kidneys, and relieves stress and anxiety.',
        indications: ['Stress', 'Mild depression', 'Digestive disorders', 'Insomnia', 'Menstrual discomfort'],
        contraindications: ['Asthma', 'Diarrhea', 'Acute back injury', 'Pregnancy'],
      },
      {
        id: 'purvottanasana',
        sanskrit: 'Purvottanasana',
        english: 'Upward Plank Pose',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Purvottanasana.jpg',
        description:
          'A heart-opening counter-posture to forward folds that builds arm, wrist, and leg strength. Stretches the chest and shoulders, counteracting prolonged sitting.',
        indications: ['Fatigue', 'Mild depression', 'Weak arms', 'Shoulder stiffness'],
        contraindications: ['Wrist injury', 'Neck problems', 'Carpal tunnel syndrome'],
      },
      {
        id: 'vakrasana',
        sanskrit: 'Vakrasana',
        english: 'Twisted Seated Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ardha_Matsyendrasana_-_Half_Lord_of_the_Fishes_Pose.jpg/960px-Ardha_Matsyendrasana_-_Half_Lord_of_the_Fishes_Pose.jpg',
        description:
          'A gentle seated spinal twist that massages abdominal organs and improves spinal rotation. Stimulates digestion and is traditionally used for diabetes management.',
        indications: ['Constipation', 'Digestive issues', 'Diabetes management', 'Back stiffness'],
        contraindications: ['Peptic ulcer', 'Herniated disc', 'Pregnancy'],
      },
      {
        id: 'baddha-konasana',
        sanskrit: 'Baddha Konasana',
        english: 'Butterfly Pose',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Baddha_konasana.jpg',
        description:
          'A hip-opening posture stretching inner thighs and groins. Valued for reproductive health, hormonal regulation, and preparing the body for conception and childbirth.',
        indications: ['Menstrual discomfort', 'Urinary disorders', 'Flat feet', 'Infertility support', 'Pregnancy fatigue'],
        contraindications: ['Groin or knee injury (use blanket support under knees)'],
      },
    ],
  },
  {
    id: 'prone',
    label: 'Prone Asanas',
    accentColor: '#ea580c',
    badgeBg: '#fff7ed',
    badgeText: '#7c2d12',
    subtitle: 'Heart Opening & Courage',
    poses: [
      {
        id: 'bhujangasana',
        sanskrit: 'Bhujangasana',
        english: 'Cobra Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bhujangasana_Yoga-Asana_Nina-Mel.jpg/960px-Bhujangasana_Yoga-Asana_Nina-Mel.jpg',
        description:
          'A gentle backbend that strengthens spinal musculature and opens the heart. Stimulates abdominal organs, relieves stress, and alleviates menstrual irregularities.',
        indications: ['Back pain', 'Fatigue', 'Mild depression', 'Asthma', 'Irregular menstruation'],
        contraindications: ['Acute back injury', 'Carpal tunnel syndrome', 'Headache', 'Pregnancy'],
      },
      {
        id: 'makarasana',
        sanskrit: 'Makarasana',
        english: 'Crocodile Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Crocodile_pose.JPG/960px-Crocodile_pose.JPG',
        description:
          'A deeply restorative prone posture that allows the spine to fully decompress. Especially effective for chronic back conditions and hypertension.',
        indications: ['Back pain', 'Sciatica', 'Slip disc', 'Hypertension', 'Chronic fatigue'],
        contraindications: ['Pregnancy (2nd and 3rd trimester)'],
      },
    ],
  },
  {
    id: 'supine',
    label: 'Supine Asanas',
    accentColor: '#16a34a',
    badgeBg: '#f0fdf4',
    badgeText: '#14532d',
    subtitle: 'Relaxation & Peace',
    poses: [
      {
        id: 'pavanamuktasana',
        sanskrit: 'Pavanamuktasana',
        english: 'Wind-Relieving Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/A_style_of_pavanamuktasana_1.JPG/960px-A_style_of_pavanamuktasana_1.JPG',
        description:
          'A gentle abdominal compression releasing trapped intestinal gas and stimulating peristalsis. Also stretches the lower back and sacrum.',
        indications: ['Flatulence', 'Constipation', 'Acidity', 'Lower back pain', 'Bloating'],
        contraindications: ['Hernia', 'Hypertension', 'Neck injury', 'Pregnancy'],
      },
      {
        id: 'setu-bandhasana',
        sanskrit: 'Setu Bandhasana',
        english: 'Bridge Pose',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Setubandhasana_oblique_view.JPG/960px-Setubandhasana_oblique_view.JPG',
        description:
          'A supported backbend strengthening the posterior chain while opening the chest. Reduces anxiety, activates glutes and hamstrings, and prevents osteoporosis.',
        indications: ['Backache', 'Osteoporosis prevention', 'Anxiety', 'Fatigue', 'Mild depression'],
        contraindications: ['Neck injury (use support)', 'Knee problems'],
      },
      {
        id: 'jathara-parivartanasana',
        sanskrit: 'Jathara Parivartanasana',
        english: 'Abdominal Twist',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Waist_Rotating_Pose.jpg/960px-Waist_Rotating_Pose.jpg',
        description:
          'A supine spinal twist detoxifying abdominal organs and releasing lower back tension. Gentler than seated twists due to gravitational assistance.',
        indications: ['Back stiffness', 'Constipation', 'Digestive disorders', 'Hip tightness', 'Stress'],
        contraindications: ['Pregnancy', 'Spinal disc problems', 'Hip replacement'],
      },
    ],
  },
  {
    id: 'pranayama',
    label: 'Pranayama',
    accentColor: '#0d9488',
    badgeBg: '#f0fdfa',
    badgeText: '#134e4a',
    subtitle: 'Breath Mastery & Vital Energy',
    poses: [
      {
        id: 'anuloma-viloma',
        sanskrit: 'Anuloma Viloma',
        english: 'Alternate Nostril Breathing',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/03/Yoga_Padmasana_Lotus_Posture.jpg',
        description:
          'A nadi-shodhana technique purifying energy channels and harmonising both brain hemispheres. Reduces cortisol, balances the autonomic nervous system, and improves cardiovascular function.',
        indications: ['Stress and anxiety', 'Hypertension', 'Insomnia', 'Irregular breathing', 'PCOS / hormonal imbalance', 'Mild depression'],
        contraindications: ['Nasal congestion or cold', 'Extreme fatigue', 'Fever'],
      },
      {
        id: 'bhramari',
        sanskrit: 'Bhramari Pranayama',
        english: 'Humming Bee Breath',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Padmasana_feminino.jpg',
        description:
          'A calming resonance technique where humming exhalation generates vibration that directly stimulates the vagus nerve. Rapidly lowers blood pressure and mental agitation.',
        indications: ['Anxiety and panic', 'Anger management', 'Insomnia', 'Hypertension', 'Migraine', 'Thyroid disorders'],
        contraindications: ['Ear infection', 'Severe nasal congestion', 'Pregnancy (if uncomfortable)'],
      },
    ],
  },
];

const VITAMINS: NutritionRow[] = [
  {
    name: 'Vitamin A',
    sources: 'Carrot, Sweet potato, Mango, Spinach, Liver',
    benefits: 'Vision health, immune function, skin integrity, cell growth',
    indications: 'Night blindness, dry skin, frequent infections, poor wound healing',
    contraindications: 'Toxic in excess; avoid high-dose supplements during pregnancy',
  },
  {
    name: 'Vitamin B Complex',
    sources: 'Whole grains, Legumes, Nuts, Leafy greens, Dairy, Eggs',
    benefits: 'Energy metabolism, nervous system function, red blood cell production',
    indications: 'Fatigue, anaemia, nerve disorders, depression, mouth ulcers',
    contraindications: 'Rare; high-dose B6 can cause peripheral neuropathy',
  },
  {
    name: 'Vitamin C',
    sources: 'Amla, Citrus fruits, Bell peppers, Guava, Broccoli',
    benefits: 'Antioxidant, collagen synthesis, enhances iron absorption',
    indications: 'Scurvy, poor wound healing, low immunity, iron-deficiency anaemia',
    contraindications: 'Kidney stones in high doses; caution with kidney disease',
  },
  {
    name: 'Vitamin D',
    sources: 'Sunlight, Fortified milk, Egg yolk, Mushrooms, Fatty fish',
    benefits: 'Bone mineralisation, immune modulation, hormone regulation, mood',
    indications: 'Osteoporosis, rickets, infertility, low immunity, seasonal depression',
    contraindications: 'Toxicity with excess supplementation; monitor serum levels',
  },
  {
    name: 'Vitamin E',
    sources: 'Nuts, Seeds, Wheat germ, Leafy greens, Sunflower oil, Avocado',
    benefits: 'Antioxidant protection, reproductive health, skin integrity',
    indications: 'Infertility, oxidative stress, premature ageing, cardiovascular risk',
    contraindications: 'Thins blood; caution with anticoagulant medications',
  },
  {
    name: 'Vitamin K',
    sources: 'Dark leafy greens, Fermented foods, Natto, Liver',
    benefits: 'Blood clotting, bone metabolism, arterial calcification prevention',
    indications: 'Excessive bleeding, osteoporosis, arterial stiffness',
    contraindications: 'Interacts with blood thinners (warfarin); monitor INR',
  },
];

const MINERALS: NutritionRow[] = [
  {
    name: 'Calcium',
    sources: 'Dairy, Ragi, Sesame seeds, Almonds, Drumstick leaves',
    benefits: 'Bone density, muscle contraction, nerve transmission, blood clotting',
    indications: 'Osteoporosis, muscle cramps, dental problems, premenstrual syndrome',
    contraindications: 'Excess may cause kidney stones; balance with magnesium and Vitamin D',
  },
  {
    name: 'Iron',
    sources: 'Lentils, Spinach, Jaggery, Lean red meat, Fortified cereals',
    benefits: 'Oxygen transport, energy production, cognitive function',
    indications: 'Iron-deficiency anaemia, fatigue, poor concentration, breathlessness',
    contraindications: 'Avoid with tea or coffee; excess causes constipation',
  },
  {
    name: 'Magnesium',
    sources: 'Banana, Dark chocolate, Pumpkin seeds, Whole grains, Legumes',
    benefits: 'Muscle relaxation, sleep quality, stress regulation, glucose control',
    indications: 'Muscle cramps, insomnia, anxiety, PMS, constipation, migraines',
    contraindications: 'Laxative effect in excess; caution with kidney disease',
  },
  {
    name: 'Potassium',
    sources: 'Banana, Sweet potato, Coconut water, Avocado, Beans, Tomato',
    benefits: 'Fluid balance, blood pressure regulation, heart function',
    indications: 'Hypertension, muscle weakness, irregular heartbeat, cramps',
    contraindications: 'Excess is dangerous in kidney disease (hyperkalaemia)',
  },
  {
    name: 'Zinc',
    sources: 'Pumpkin seeds, Lean meat, Legumes, Nuts, Whole grains',
    benefits: 'Immune defence, wound healing, reproductive health, enzyme function',
    indications: 'Infertility, delayed wound healing, poor immunity, hair loss, acne',
    contraindications: 'Excess inhibits copper absorption; do not exceed upper intake level',
  },
  {
    name: 'Sodium',
    sources: 'Rock salt, Sea vegetables, Dairy, Whole foods',
    benefits: 'Fluid balance, nerve impulse transmission, muscle contraction',
    indications: 'Hyponatraemia, exercise-induced dehydration',
    contraindications: 'Excess causes hypertension, fluid retention, cardiovascular risk',
  },
];

const FOOD_GROUPS: NutritionRow[] = [
  {
    name: 'Green Vegetables',
    sources: 'Spinach, Kale, Broccoli, Peas, French beans, Methi',
    benefits: 'Iron, folate, calcium, Vitamin K, antioxidants, chlorophyll',
    indications: 'Anaemia, bone health, immune support, detoxification',
    contraindications: 'Thyroid conditions — limit raw cruciferous; cook to reduce goitrogens',
  },
  {
    name: 'Root Vegetables',
    sources: 'Carrot, Beetroot, Sweet potato, Turnip, Radish, Yam',
    benefits: 'Beta-carotene, dietary fibre, complex carbohydrates, minerals',
    indications: 'Digestive health, eye health, sustained energy, skin health',
    contraindications: 'High glycaemic index if overcooked; moderation for diabetics',
  },
  {
    name: 'Sweet Fruits',
    sources: 'Mango, Banana, Chikoo, Dates, Grapes, Fig',
    benefits: 'Quick natural energy, fibre, potassium, antioxidants',
    indications: 'Fatigue, constipation, low energy, athletic recovery, anaemia',
    contraindications: 'Diabetes — consume in moderation; pair with protein',
  },
  {
    name: 'Citrus Fruits',
    sources: 'Lemon, Orange, Amla, Grapefruit, Kiwi, Lime',
    benefits: 'Exceptional Vitamin C, antioxidants, immune modulation',
    indications: 'Low immunity, iron-deficiency anaemia, skin health, inflammation',
    contraindications: 'Acidity and GERD — avoid on empty stomach; grapefruit interacts with medications',
  },
  {
    name: 'Hydrating Vegetables',
    sources: 'Cucumber, Zucchini, Celery, Lauki, Lettuce, Tomato',
    benefits: 'High water content, electrolytes, low calorie, diuretic',
    indications: 'Dehydration, UTI prevention, weight management, summer heat',
    contraindications: 'Minimal; IBS — limit cucumber and tomato seeds',
  },
  {
    name: 'Dry Fruits & Seeds',
    sources: 'Almonds, Walnuts, Flaxseeds, Chia seeds, Cashews',
    benefits: 'Omega-3 fats, plant protein, Vitamin E, zinc, magnesium',
    indications: 'Heart health, brain function, hormonal balance, skin and hair',
    contraindications: 'Calorie-dense — limit to a small handful daily; tree-nut allergy',
  },
];

const TABS = [
  ...SECTIONS.map((s) => ({ id: s.id, label: s.label })),
  { id: 'nutrition', label: 'Nutrition Guide' },
];

/* ─── Component ─── */

const GuideContent = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrollingRef = useRef(false);

  const scrollToSection = useCallback((id: string) => {
    setActiveTab(id);
    isScrollingRef.current = true;
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const sections = TABS.map((t) => sectionRefs.current[t.id]).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveTab(visible.target.id.replace('guide-', ''));
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900'>
      {/* ── Hero ── */}
      <div className='relative overflow-hidden bg-gradient-to-br from-gg-50 via-white to-gg-50 px-4 py-14 text-center dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 sm:py-20'>
        {/* decorative blobs */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gg-200/40 blur-3xl dark:bg-gg-700/20'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-700/10'
        />

        <div className='relative mx-auto max-w-3xl'>
          <span className='inline-block rounded-full bg-gg-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gg-700 shadow-sm dark:bg-gg-900 dark:text-gg-300'>
            International Yoga Day 2025
          </span>
          <h1 className='font-heading mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl'>
            Yoga for Wellness, Wisdom &amp;{' '}
            <span className='bg-gradient-to-r from-gg-500 to-gg-700 bg-clip-text text-transparent dark:from-gg-300 dark:to-gg-500'>
              World Peace
            </span>
          </h1>
          <p className='font-content mx-auto mt-5 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg'>
            A curated guide to therapeutic asanas, pranayama, and nutritional essentials — designed to
            support fertility, hormonal balance, and whole-body wellbeing.
          </p>

          {/* stat chips */}
          <div className='mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4'>
            {[
              { value: '20+', label: 'Asanas & Pranayama' },
              { value: '5', label: 'Practice Categories' },
              { value: '17', label: 'Vitamins, Minerals & Foods' },
            ].map((stat) => (
              <div
                key={stat.label}
                className='rounded-xl border border-gg-100 bg-white/70 px-4 py-2 backdrop-blur dark:border-gray-700 dark:bg-gray-800/70'
              >
                <p className='font-heading text-lg font-bold text-gg-600 dark:text-gg-300 sm:text-xl'>
                  {stat.value}
                </p>
                <p className='font-content text-[11px] text-gray-500 dark:text-gray-400 sm:text-xs'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
            <Link
              href='/yoga'
              className='w-full rounded-lg border-2 border-gg-500 px-6 py-2.5 text-sm font-semibold text-gg-600 transition-colors hover:bg-gg-50 dark:border-gg-400 dark:text-gg-400 sm:w-auto'
            >
              ← Back to Yoga Programme
            </Link>
            <button
              type='button'
              onClick={() => scrollToSection('standing')}
              className='w-full rounded-lg bg-gg-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-gg-600 hover:shadow-lg sm:w-auto'
            >
              Start Guide ↓
            </button>
          </div>
        </div>
      </div>

      {/* ── Sticky tabs ── */}
      <nav
        className='sticky top-36 z-40 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:top-[90px]'
        aria-label='Guide sections'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <ul className='flex gap-1 overflow-x-auto py-2'>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id} className='shrink-0'>
                  <button
                    type='button'
                    onClick={() => scrollToSection(tab.id)}
                    className={[
                      'whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm',
                      isActive
                        ? 'bg-gg-500 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                    ].join(' ')}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── Main content ── */}
      <div className='mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24'>
        <div className='space-y-14'>
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={`guide-${section.id}`}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className='scroll-mt-[180px]'
            >
              {/* Section heading */}
              <div
                className='mb-6 flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 dark:border-gray-700 dark:bg-gray-800/50 sm:p-5'
                style={{ borderLeft: `5px solid ${section.accentColor}` }}
              >
                <span
                  className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white shadow-sm sm:h-12 sm:w-12'
                  style={{ backgroundColor: section.accentColor }}
                  aria-hidden='true'
                >
                  {section.poses.length}
                </span>
                <div>
                  <h2 className='font-heading text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-3xl'>
                    {section.label}
                  </h2>
                  <span
                    className='mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold sm:px-3'
                    style={{ backgroundColor: section.badgeBg, color: section.badgeText }}
                  >
                    {section.subtitle}
                  </span>
                </div>
              </div>

              {/* Cards grid */}
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3'>
                {section.poses.map((pose) => (
                  <PoseCard key={pose.id} pose={pose} accentColor={section.accentColor} />
                ))}
              </div>
            </section>
          ))}

          {/* Nutrition section */}
          <section
            id='guide-nutrition'
            ref={(el) => {
              sectionRefs.current['nutrition'] = el;
            }}
            className='scroll-mt-[180px]'
          >
            <div className='mb-6 flex items-center gap-3'>
              <div className='h-8 w-1 rounded-full bg-amber-500 sm:h-10 sm:w-1.5' />
              <div>
                <h2 className='font-heading text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-3xl'>
                  Nutrition Guide
                </h2>
                <span className='mt-1 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 sm:px-3'>
                  Food as Medicine
                </span>
              </div>
            </div>

            <div className='space-y-10'>
              <NutritionSection title='Vitamins' firstColLabel='Vitamin' rows={VITAMINS} />
              <NutritionSection title='Minerals' firstColLabel='Mineral' rows={MINERALS} />
              <NutritionSection title='Food Groups' firstColLabel='Food Type' rows={FOOD_GROUPS} />
            </div>

            <div className='mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900 dark:text-amber-200'>
              <strong>Disclaimer:</strong> This nutritional information is for general wellness
              education only. It is not a substitute for personalised advice from a qualified
              healthcare professional.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

/* ─── Pose card ─── */

const PoseCard = ({ pose, accentColor }: { pose: PoseCard; accentColor: string }) => (
  <div className='group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800'>
    {/* image with name overlay */}
    <div className='relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-700'>
      <Image
        src={pose.image}
        alt={`${pose.sanskrit} — ${pose.english}`}
        fill
        sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'
        className='object-cover transition-transform duration-500 group-hover:scale-110'
        loading='lazy'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 p-4'>
        <h3 className='font-heading text-lg font-bold leading-tight text-white drop-shadow-sm sm:text-xl'>
          {pose.sanskrit}
        </h3>
        <p className='font-content text-xs font-medium text-white/90 sm:text-sm'>{pose.english}</p>
      </div>
    </div>
    {/* colour stripe */}
    <div className='h-1.5 w-full' style={{ backgroundColor: accentColor }} />
    <div className='flex flex-1 flex-col p-4 sm:p-5'>
      <p className='font-content mb-4 text-xs leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm'>
        {pose.description}
      </p>

      <div className='mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2'>
        {/* Indications */}
        <div className='rounded-lg bg-green-50 p-3 dark:bg-green-900'>
          <p className='mb-1.5 text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-300'>
            Indications
          </p>
          <ul className='space-y-1'>
            {pose.indications.map((item) => (
              <li key={item} className='flex items-start gap-1 text-xs text-green-800 dark:text-green-200'>
                <span className='mt-0.5 shrink-0 font-bold'>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contraindications */}
        <div className='rounded-lg bg-red-50 p-3 dark:bg-red-900'>
          <p className='mb-1.5 text-xs font-bold uppercase tracking-wide text-red-700 dark:text-red-300'>
            Caution
          </p>
          <ul className='space-y-1'>
            {pose.contraindications.map((item) => (
              <li key={item} className='flex items-start gap-1 text-xs text-red-800 dark:text-red-200'>
                <span className='mt-0.5 shrink-0 font-bold'>⚠</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Nutrition section: table on desktop, cards on mobile ─── */

const NutritionSection = ({
  title,
  firstColLabel,
  rows,
}: {
  title: string;
  firstColLabel: string;
  rows: NutritionRow[];
}) => (
  <div>
    <h3 className='font-heading mb-4 text-lg font-bold text-gray-900 dark:text-white sm:text-xl'>
      {title}
    </h3>

    {/* Desktop table */}
    <div className='hidden overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 sm:block'>
      <div className='overflow-x-auto'>
        <table className='font-content min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700'>
          <thead>
            <tr className='bg-gray-50 dark:bg-gray-800'>
              {[firstColLabel, 'Food Sources', 'Benefits', 'Indications', 'Cautions'].map((col) => (
                <th
                  key={col}
                  className='px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400'
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-900'>
            {rows.map((row) => (
              <tr key={row.name} className='hover:bg-gray-50 dark:hover:bg-gray-800'>
                <td className='px-4 py-3 font-semibold text-gray-900 dark:text-white'>{row.name}</td>
                <td className='px-4 py-3 text-gray-600 dark:text-gray-300'>{row.sources}</td>
                <td className='px-4 py-3 text-gray-600 dark:text-gray-300'>{row.benefits}</td>
                <td className='px-4 py-3 text-green-700 dark:text-green-400'>{row.indications}</td>
                <td className='px-4 py-3 text-red-600 dark:text-red-400'>{row.contraindications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Mobile cards */}
    <div className='space-y-3 sm:hidden'>
      {rows.map((row) => (
        <div
          key={row.name}
          className='rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800'
        >
          <p className='font-heading mb-3 text-sm font-bold text-gray-900 dark:text-white'>
            {row.name}
          </p>
          <div className='space-y-2'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-gray-400'>Sources</p>
              <p className='font-content text-xs text-gray-700 dark:text-gray-300'>{row.sources}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-gray-400'>Benefits</p>
              <p className='font-content text-xs text-gray-700 dark:text-gray-300'>{row.benefits}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-green-600'>Indications</p>
              <p className='font-content text-xs text-green-700 dark:text-green-400'>{row.indications}</p>
            </div>
            <div>
              <p className='text-xs font-semibold uppercase tracking-wide text-red-500'>Cautions</p>
              <p className='font-content text-xs text-red-600 dark:text-red-400'>{row.contraindications}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GuideContent;
