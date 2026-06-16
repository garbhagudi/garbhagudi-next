export type Pose = {
  id: string;
  sanskrit: string;
  english: string;
  image: string;
  description: string;
  indications: string[];
  contraindications: string[];
};

export type GuideSection = {
  id: string;
  label: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  subtitle: string;
  poses: Pose[];
};

export type NutritionRow = {
  name: string;
  sources: string;
  benefits: string;
  indications: string;
  contraindications: string;
};

export type Tab = {
  id: string;
  label: string;
};
