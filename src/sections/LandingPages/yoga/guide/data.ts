import type { GuideSection, NutritionRow, Tab } from './types';
import poseImg1 from 'assets/yoga/IMG_9468.jpg';
import poseImg2 from 'assets/yoga/IMG_9495.jpg';
import poseImg3 from 'assets/yoga/IMG_9501.jpg';
import poseImg4 from 'assets/yoga/IMG_9537.jpg';
import poseImg5 from 'assets/yoga/IMG_9556.jpg';
import poseImg6 from 'assets/yoga/IMG_9581.jpg';

export const SECTIONS: GuideSection[] = [
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
        image: poseImg1,
        description:
          'A foundational standing posture that promotes proper spinal alignment and body awareness. Regular practice strengthens the legs, corrects posture, and cultivates a deep sense of groundedness.',
        indications: [
          'Poor posture',
          'Flat feet',
          'Chronic fatigue',
          'Lack of body awareness',
          'Anxiety',
        ],
        contraindications: ['Headache', 'Insomnia', 'Low blood pressure'],
      },
      {
        id: 'vrikshasana',
        sanskrit: 'Vrikshasana',
        english: 'Tree Pose',
        image: poseImg2,
        description:
          'A single-leg balancing posture that sharpens concentration and cultivates inner stability. Strengthens the ankles and knees, opens the hips, and develops coordination.',
        indications: ['Poor balance', 'Anxiety', 'Sciatica', 'Hip tightness', 'Flat feet'],
        contraindications: ['Headache', 'Insomnia', 'Low blood pressure'],
      },
      {
        id: 'katichakrasana',
        sanskrit: 'Katichakrasana',
        english: 'Standing Spinal Twist',
        image: poseImg3,
        description:
          'A gentle rotational movement that releases tension along the spine and massages the abdominal organs. Improves lateral flexibility, aids digestion, and relieves shoulder stiffness.',
        indications: ['Back stiffness', 'Constipation', 'Shoulder tension', 'Sluggish digestion'],
        contraindications: ['Hernia', 'Severe back pain', 'Pregnancy (2nd/3rd trimester)'],
      },
      {
        id: 'virabhadrasana',
        sanskrit: 'Virabhadrasana',
        english: 'Warrior Pose',
        image: poseImg4,
        description:
          'A powerful posture that builds leg strength, opens the chest, and cultivates determination. Improves stamina, instils confidence, and stretches the hip flexors deeply.',
        indications: [
          'Weak legs',
          'Stiff hips',
          'Lack of confidence',
          'Frozen shoulder',
          'Sciatica',
        ],
        contraindications: ['High blood pressure', 'Heart problems', 'Knee injuries'],
      },
      {
        id: 'viparita-virabhadrasana',
        sanskrit: 'Viparita Virabhadrasana',
        english: 'Reverse Warrior',
        image: poseImg5,
        description:
          'An energising lateral extension that stretches the entire side body and opens the heart. Strengthens the legs while expanding the intercostal muscles and improving breath capacity.',
        indications: ['Side body tightness', 'Respiratory issues', 'Emotional tension', 'Fatigue'],
        contraindications: ['High blood pressure', 'Neck problems', 'Knee injuries'],
      },
      {
        id: 'adho-mukha-svanasana',
        sanskrit: 'Adho Mukha Svanasana',
        english: 'Downward-Facing Dog',
        image: poseImg6,
        description:
          'A full-body rejuvenating semi-inversion that simultaneously strengthens and stretches. Calms the nervous system, reduces fatigue, and lengthens the hamstrings and calves.',
        indications: ['Fatigue', 'Back pain', 'Mild depression', 'Sciatica', 'Headache'],
        contraindications: [
          'Carpal tunnel syndrome',
          'Late pregnancy',
          'Diarrhea',
          'Advanced hypertension',
        ],
      },
      {
        id: 'ashwa-sanchalanasana',
        sanskrit: 'Ashwa Sanchalanasana',
        english: 'Equestrian Pose',
        image: poseImg1,
        description:
          'A deep hip flexor and groin stretch that prepares the body for backbends and forward folds. Improves balance and stimulates the digestive organs.',
        indications: [
          'Tight hip flexors',
          'Sciatica',
          'Constipation',
          'Indigestion',
          'Reproductive health',
        ],
        contraindications: ['Knee injuries', 'Severe back pain', 'Heart conditions'],
      },
      {
        id: 'shashankasana',
        sanskrit: 'Shashankasana',
        english: 'Hare Pose',
        image: poseImg2,
        description:
          'A deeply calming forward fold that decompresses the spine and activates the parasympathetic nervous system. Promotes emotional release and adrenal recovery.',
        indications: [
          'Stress',
          'Anger management',
          'Back pain',
          'Digestive problems',
          'Adrenal fatigue',
        ],
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
        image: poseImg3,
        description:
          'The foundational seated posture that establishes proper spinal alignment. Engages deep core muscles and corrects rounded shoulders for sustained seated practice.',
        indications: ['Poor posture', 'Weak back muscles', 'Fatigue', 'Rounded shoulders'],
        contraindications: ['Wrist injury', 'Acute lower back injury'],
      },
      {
        id: 'paschimottanasana',
        sanskrit: 'Paschimottanasana',
        english: 'Seated Forward Bend',
        image: poseImg4,
        description:
          'A profound forward fold stretching the entire posterior chain. Calms an agitated mind, stimulates the liver and kidneys, and relieves stress and anxiety.',
        indications: [
          'Stress',
          'Mild depression',
          'Digestive disorders',
          'Insomnia',
          'Menstrual discomfort',
        ],
        contraindications: ['Asthma', 'Diarrhea', 'Acute back injury', 'Pregnancy'],
      },
      {
        id: 'purvottanasana',
        sanskrit: 'Purvottanasana',
        english: 'Upward Plank Pose',
        image: poseImg5,
        description:
          'A heart-opening counter-posture to forward folds that builds arm, wrist, and leg strength. Stretches the chest and shoulders, counteracting prolonged sitting.',
        indications: ['Fatigue', 'Mild depression', 'Weak arms', 'Shoulder stiffness'],
        contraindications: ['Wrist injury', 'Neck problems', 'Carpal tunnel syndrome'],
      },
      {
        id: 'vakrasana',
        sanskrit: 'Vakrasana',
        english: 'Twisted Seated Pose',
        image: poseImg6,
        description:
          'A gentle seated spinal twist that massages abdominal organs and improves spinal rotation. Stimulates digestion and is traditionally used for diabetes management.',
        indications: ['Constipation', 'Digestive issues', 'Diabetes management', 'Back stiffness'],
        contraindications: ['Peptic ulcer', 'Herniated disc', 'Pregnancy'],
      },
      {
        id: 'baddha-konasana',
        sanskrit: 'Baddha Konasana',
        english: 'Butterfly Pose',
        image: poseImg1,
        description:
          'A hip-opening posture stretching inner thighs and groins. Valued for reproductive health, hormonal regulation, and preparing the body for conception and childbirth.',
        indications: [
          'Menstrual discomfort',
          'Urinary disorders',
          'Flat feet',
          'Infertility support',
          'Pregnancy fatigue',
        ],
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
        image: poseImg2,
        description:
          'A gentle backbend that strengthens spinal musculature and opens the heart. Stimulates abdominal organs, relieves stress, and alleviates menstrual irregularities.',
        indications: [
          'Back pain',
          'Fatigue',
          'Mild depression',
          'Asthma',
          'Irregular menstruation',
        ],
        contraindications: ['Acute back injury', 'Carpal tunnel syndrome', 'Headache', 'Pregnancy'],
      },
      {
        id: 'makarasana',
        sanskrit: 'Makarasana',
        english: 'Crocodile Pose',
        image: poseImg3,
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
        image: poseImg4,
        description:
          'A gentle abdominal compression releasing trapped intestinal gas and stimulating peristalsis. Also stretches the lower back and sacrum.',
        indications: ['Flatulence', 'Constipation', 'Acidity', 'Lower back pain', 'Bloating'],
        contraindications: ['Hernia', 'Hypertension', 'Neck injury', 'Pregnancy'],
      },
      {
        id: 'setu-bandhasana',
        sanskrit: 'Setu Bandhasana',
        english: 'Bridge Pose',
        image: poseImg5,
        description:
          'A supported backbend strengthening the posterior chain while opening the chest. Reduces anxiety, activates glutes and hamstrings, and prevents osteoporosis.',
        indications: [
          'Backache',
          'Osteoporosis prevention',
          'Anxiety',
          'Fatigue',
          'Mild depression',
        ],
        contraindications: ['Neck injury (use support)', 'Knee problems'],
      },
      {
        id: 'jathara-parivartanasana',
        sanskrit: 'Jathara Parivartanasana',
        english: 'Abdominal Twist',
        image: poseImg6,
        description:
          'A supine spinal twist detoxifying abdominal organs and releasing lower back tension. Gentler than seated twists due to gravitational assistance.',
        indications: [
          'Back stiffness',
          'Constipation',
          'Digestive disorders',
          'Hip tightness',
          'Stress',
        ],
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
        image: poseImg1,
        description:
          'A nadi-shodhana technique purifying energy channels and harmonising both brain hemispheres. Reduces cortisol, balances the autonomic nervous system, and improves cardiovascular function.',
        indications: [
          'Stress and anxiety',
          'Hypertension',
          'Insomnia',
          'Irregular breathing',
          'PCOS / hormonal imbalance',
          'Mild depression',
        ],
        contraindications: ['Nasal congestion or cold', 'Extreme fatigue', 'Fever'],
      },
      {
        id: 'bhramari',
        sanskrit: 'Bhramari Pranayama',
        english: 'Humming Bee Breath',
        image: poseImg2,
        description:
          'A calming resonance technique where humming exhalation generates vibration that directly stimulates the vagus nerve. Rapidly lowers blood pressure and mental agitation.',
        indications: [
          'Anxiety and panic',
          'Anger management',
          'Insomnia',
          'Hypertension',
          'Migraine',
          'Thyroid disorders',
        ],
        contraindications: [
          'Ear infection',
          'Severe nasal congestion',
          'Pregnancy (if uncomfortable)',
        ],
      },
    ],
  },
];

export const VITAMINS: NutritionRow[] = [
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

export const MINERALS: NutritionRow[] = [
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

export const FOOD_GROUPS: NutritionRow[] = [
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
    contraindications:
      'Acidity and GERD — avoid on empty stomach; grapefruit interacts with medications',
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

export const TABS: Tab[] = [
  ...SECTIONS.map((s) => ({ id: s.id, label: s.label })),
  { id: 'nutrition', label: 'Nutrition Guide' },
];
