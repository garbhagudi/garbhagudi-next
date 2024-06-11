import React from 'react';

const GuidelineList = ({ category, guidelines }) => (
  <div className='font-lexend space-y-4 pb-4'>
    <h2 className='font-bold'>{category}</h2>
    <ul className='space-y-2 list-disc ml-5'>
      {guidelines.map((guideline) => (
        <li key={guideline.id}>{guideline.point}</li>
      ))}
    </ul>
  </div>
);

const SocialPostsGuide = () => {
  return (
    <div className='px-3'>
      <h2 className='font-heading text-2xl font-bold'>
        Social Media Posts - Guidelines
      </h2>
      <p className='mt-4 font-lexend'>
        You're welcome to use the GarbhaGudi's name, logo and icon as long as
        you adhere to the logo and icon use guidelines mentioned below.
      </p>
      <div className='py-10'>
        {Object.entries(guidelinesData).map(([category, guidelines]) => (
          <GuidelineList
            key={category}
            category={category}
            guidelines={guidelines}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialPostsGuide;

const guidelinesData = {
  'Consistent Branding': [
    {
      id: 1,
      point:
        "Ensure that the posts align with GarbhaGudi's brand guidelines, including the use of official colors, fonts, and visual elements.",
    },
    {
      id: 2,
      point:
        'Maintain a consistent tone and style across all posts to reinforce brand identity.',
    },
  ],

  'High-Quality Imagery': [
    {
      id: 3,
      point:
        'Use high-resolution images that are clear and visually appealing.',
    },
    {
      id: 4,
      point:
        'Images should be relevant to the content of the post and should reflect the values and services of GarbhaGudi.',
    },
  ],

  'Clear Call to Action (CTA)': [
    {
      id: 7,
      point:
        'Include a clear and compelling call to action in each post, guiding followers on what to do next (e.g., visit the website, book an appointment, etc.).',
    },
  ],

  'Variety in Content': [
    {
      id: 8,
      point:
        'Diversify the content to include a mix of promotional posts, informative content, success stories, and behind-the-scenes glimpses to keep the audience engaged.',
    },
  ],

  Accessibility: [
    {
      id: 9,
      point:
        'Ensure that the text on images is easily readable with a suitable font size and contrast.',
    },
    {
      id: 10,
      point:
        'Use alt text for images to make content accessible for individuals with visual impairments.',
    },
  ],

  'Compliance with Platform Guidelines': [
    {
      id: 11,
      point:
        'Adhere to the specific guidelines of each social media platform regarding image sizes, text limits, and other specifications.',
    },
  ],

  'Review and Approval Process': [
    {
      id: 13,
      point:
        "Follow the review process to ensure that all posts align with the brand's values and messaging before they are published.",
    },
  ],

  'Legal and Ethical Considerations': [
    {
      id: 16,
      point:
        'Content creators must respect copyright laws and obtain permission for the use of any third-party content.',
    },
    {
      id: 17,
      point:
        "Avoid engaging in controversial topics that may negatively impact the brand's reputation.",
    },
  ],
};
