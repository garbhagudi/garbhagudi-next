import { useState } from 'react';
import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';

const faqs = [
  {
    q: 'IVF சிகிச்சை வலிக்குமா?',
    a: 'IVF சிகிச்சை பெரும்பாலும் வலியற்றது. சில injections சிறிய அசௌகரியம் தரலாம், ஆனால் தாங்கக்கூடிய அளவில்தான் இருக்கும். Egg retrieval procedure mild anesthesia மூலம் செய்யப்படுவதால் வலி இருக்காது.',
  },
  {
    q: 'IVF வெற்றி விகிதம் என்ன?',
    a: 'கர்பகுடியில் IVF வெற்றி விகிதம் 75% க்கும் அதிகம். ஆனால் வெற்றி விகிதம் வயது, AMH அளவு, ஆரோக்கிய நிலை ஆகியவற்றை பொருத்து மாறுபடும். உங்கள் நிலைக்கு ஏற்ற சரியான மதிப்பீட்டிற்கு ஆலோசனை பெறவும்.',
  },
  {
    q: 'எத்தனை நாட்கள் சிகிச்சை எடுக்கும்?',
    a: 'ஒரு IVF cycle சுமார் 4–6 வாரங்கள் ஆகும். இதில் stimulation (10–12 நாட்கள்), egg retrieval, fertilization, embryo transfer என பல கட்டங்கள் உள்ளன. Work அல்லது daily life பெரும்பாலும் தொடரலாம்.',
  },
  {
    q: 'ஆண்களுக்கும் சிகிச்சை தேவையா?',
    a: 'ஆம். கருத்தரிப்பு பிரச்சனைகளில் 40–50% ஆண்களுக்கும் காரணம் இருக்கும். Semen analysis என்ற எளிய பரிசோதனை மூலம் ஆண்களின் நிலையை மதிப்பிட்டு, ICSI போன்ற சிகிச்சைகள் மூலம் தீர்வு காணலாம்.',
  },
  {
    q: 'ஓசூரில் இருந்து எவ்வளவு தூரம்?',
    a: 'கர்பகுடி Hosur மையம் Hosur town center க்கு அருகில் அமைந்துள்ளது. Krishnagiri (35 km), Denkanikottai (22 km), Bagalur (12 km), Shoolagiri (20 km) ஆகிய இடங்களில் இருந்தும் எளிதாக வரலாம்.',
  },
  {
    q: 'முதல் consultation இலவசமா?',
    a: 'ஆம்! முதல் consultation மற்றும் fertility assessment பற்றி WhatsApp அல்லது phone மூலம் தெரிந்து கொள்ளலாம். எங்கள் team உங்களுக்கு விரிவாக அனைத்தையும் விளக்குவார்கள்.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className='py-12 px-5 bg-[#F7F5F3] md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='Your Questions Answered'
        title='அடிக்கடி கேட்கப்படும் கேள்விகள்'
      />
      <div className='max-w-[720px] mx-auto'>
        {faqs.map((faq, i) => (
          <div
            key={faq.q}
            className='bg-white border border-[#7B1B2E]/[0.12] rounded-[10px] mb-2.5 overflow-hidden'
          >
            <button
              className='w-full px-5 py-4 font-semibold text-[15px] text-[#1C1C1E] flex justify-between items-center text-left select-none'
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{faq.q}</span>
              <span
                className={`text-[18px] text-[#7B1B2E] transition-transform duration-200 flex-shrink-0 ml-3 ${
                  open === i ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                open === i ? 'max-h-[400px]' : 'max-h-0'
              }`}
            >
              <p className='px-5 pb-4 text-[14px] text-[#6B6860] leading-[1.75]'>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
