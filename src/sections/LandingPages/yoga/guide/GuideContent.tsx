import { useScrollSpy } from './useScrollSpy';
import { SECTIONS, TABS } from './data';
import Hero from './Hero';
import StickyTabs from './StickyTabs';
import SectionHeader from './SectionHeader';
import PoseCard from './PoseCard';
import NutritionGuide from './NutritionGuide';

const GuideContent = () => {
  const { activeTab, scrollToSection, sectionRefs } = useScrollSpy(TABS.map((t) => t.id));

  return (
    <div className='bg-white dark:bg-gray-900'>
      <Hero onStart={() => scrollToSection('standing')} />

      <StickyTabs tabs={TABS} activeTab={activeTab} onSelect={scrollToSection} />

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
              <SectionHeader section={section} />

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
            <NutritionGuide />
          </section>
        </div>
      </div>
    </div>
  );
};

export default GuideContent;
