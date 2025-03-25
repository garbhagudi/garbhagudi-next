import React from 'react';
import { Chrono } from 'react-chrono';

const IvfProcess = () => {
  const data = [
    {
      title: 'Ovarian Stimulation',
      cardTitle: 'Ovarian Stimulation',
      cardSubtitle:
        'Ovarian stimulation occurs with the administration of hormone medications (ovulation drugs) that stimulate the ovaries to produce multiple eggs. Sometimes called enhanced follicular recruitment or controlled ovarian stimulation.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403673/Misc/Tablets_ovavsk.webp',
        },
      },
    },
    {
      title: 'Oocyte Retrieval',
      cardTitle: 'Transvaginal Oocyte Retrieval',
      cardSubtitle:
        'Eggs are removed from your ovaries during a process called oocyte retrieval. It is one of the procedures involved in in vitro fertilisation (IVF). The vagina is typically used during the operation. For the process, you will be asleep. After being removed from the ovaries, eggs can be fertilised in a laboratory.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403672/Misc/Egg-retrival_uj0bjt.webp',
        },
      },
    },
    {
      title: 'Egg & Sperm Preparation',
      cardTitle: 'Egg & Sperm Preparation',
      cardSubtitle:
        "MWithin five hours of the egg retrieval, the lab will add your partner's healthy sperm sample to the eggs. The embryologist may decide to employ an intracytoplasmic sperm injection (ICSI) treatment to guarantee fertilisation occurs if the sperm quality is abnormal.",
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403672/Misc/SA_ui5a9k.webp',
        },
      },
    },
    {
      title: 'Egg Fertilitzation',
      cardTitle: 'Egg Fertilitzation',
      cardSubtitle:
        'Experts inspect the eggs once they are in the lab to assess their quality and maturity. After being removed from the incubator and placed into a particular culture medium, mature eggs are fertilised with sperm a few hours later.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403672/Misc/Inject_i47tte.webp',
        },
      },
    },
    {
      title: 'Embryo Culture',
      cardTitle: 'Embryo Culture for 2-6 Days',
      cardSubtitle:
        'IVF requires embryo cultivation, which is a critical step. It describes the procedure in which partner or donor sperm is mixed with the extracted eggs from the ovaries in an artificial medium to produce a fertilised egg.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403672/Misc/Eggs_o1leeg.webp',
        },
      },
    },
    {
      title: 'Embryo Transfer',
      cardTitle: 'Embryo Transfer',
      cardSubtitle:
        'Since embryo transfer is a straightforward procedure, sedation or anaesthesia are seldom used. The embryo or embryos are introduced into the uterus through the cervix using a long, thin catheter that is filled with the agreed-upon number of embryos and a tiny amount of fluid.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403672/Misc/Egg-Transfer_qcmxos.webp',
        },
      },
    },
    {
      title: 'Pregnancy',
      cardTitle: 'Pregnancy',
      cardSubtitle:
        'For a pregnancy to begin, the embryo must then attach itself to the wall of her womb or uterus.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1670403672/Misc/Preg-Test_mhdbyg.webp',
        },
      },
    },
  ];
  return (
    <div className='mx-auto'>
      <div>
        <h2 className='py-10 text-center font-heading text-3xl font-bold lg:py-16 lg:text-4xl'>
          Understanding In-Vitro Fertilization (IVF)
        </h2>
        <div className='mx-auto max-w-7xl'>
          <Chrono
            items={data}
            mode='HORIZONTAL'
            classNames={{
              title: 'text-center font-content',
              cardTitle: 'font-heading text-center mx-auto',
              card: 'max-w-xl w-full mx-auto object-fit object-center aspect-square rounded-lg shadow-lg overflow-hidden',
            }}
            theme={{
              primary: '#ea4b6a',
              secondary: 'transparent',
              cardBgColor: '#fce6ea',
              cardForeColor: 'violet',
              titleColor: 'ea4b6a',
              titleColorActive: '#612a7b',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IvfProcess;
