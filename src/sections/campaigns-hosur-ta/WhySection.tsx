import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';

const cards: { icon: string; value: string; label: string }[] = [
  { icon: '🏆', value: '15,000+', label: 'வெற்றிக் கதைகள்' },
  { icon: '🔬', value: 'உயர் தொழில்நுட்பம்', label: 'Advanced IVF Lab' },
  { icon: '❤️', value: 'நெறிமுறை சிகிச்சை', label: 'Ethical Treatment' },
  { icon: '👨‍👩‍👧', value: 'தனிப்பட்ட கவனிப்பு', label: 'Personalized Care' },
  { icon: '💳', value: 'EMI வசதி', label: '0% Interest Options' },
  {
    icon: '🗣️',
    value: 'தமிழ், ஆங்கிலம், தெலுங்கு மற்றும் கன்னடத்தில் பேசலாம்',
    label: 'Tamil, English, Telugu & Kannada',
  },
];

export default function WhySection() {
  return (
    <section className='py-12 px-5 md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='Trust &amp; Excellence'
        title='ஏன் ஓசூர் குடும்பங்கள் கர்பகுடியை தேர்வு செய்கின்றன?'
        subtitle='ஒவ்வொரு குடும்பத்திற்கும் தனிப்பட்ட அக்கறையுடன் சிகிச்சை அளிக்கிறோம்'
      />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 max-w-[960px] mx-auto'>
        {cards.map((c) => (
          <div
            key={c.value}
            className='bg-[#F5E6EA] border border-[#7B1B2E]/[0.12] rounded-xl p-5 text-center md:p-6'
          >
            <span className='text-[28px] block mb-3'>{c.icon}</span>
            <strong className='block text-[1.1rem] text-[#7B1B2E] font-bold'>{c.value}</strong>
            <span className='text-[13px] text-[#6B6860] mt-1 block'>{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
