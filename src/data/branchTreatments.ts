/**
 * The treatments listed on every branch page.
 *
 * Both the rendered list and the branch MedicalClinic `availableService`
 * entries come from here, so the page and its schema cannot disagree about
 * which services a branch offers (guide section 5).
 */
export const branchTreatments = [
  {
    id: 1,
    name: 'IVF Treatment',
    desc: "Unlock the doors of parenthood with GarbhaGudi's advanced IVF treatment options and give your dreams of starting a family a new lease of life.",
    link: '/treatments/ivf-treatment-in-bangalore',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75xwg6h0v007pngs2mcusa',
  },
  {
    id: 2,
    name: 'ICSI',
    desc: "Experience the joy of parenthood with GarbhaGudi's IUI treatment, designed to increase your chances of pregnancy in a natural way.",
    link: '/treatments/icsi-treatment-in-bangalore',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75xwgsh0v407pnuirvx6v1',
  },
  {
    id: 3,
    name: 'IUI',
    desc: "Take the first step towards parenthood with GarbhaGudi's state-of-the-art ICSI treatment, which offers a high success rate for couples struggling with infertility.",
    link: '/treatments/iui-treatment-in-bangalore',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75xwhhh0v807pn6j9p68jj',
  },
  {
    id: 4,
    name: 'TESA/PESA',
    desc: "Get the chance to father a child with GarbhaGudi's TESA/PESA treatment, a revolutionary option for men with low sperm count or poor sperm quality.",
    link: '/treatments/pesa-and-tesa',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75y8nfh0x107pnt4cytv4g',
  },
  {
    id: 5,
    name: 'Blastocyst Culture',
    desc: 'Maximize your chances with blastocyst culture treatment, which allows embryos to grow for a longer period before transfer, increasing the chances of implantation.',
    link: '/treatments/ivf-treatment-in-bangalore',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75y8nsh0x507pn2ena7rc5',
  },
  {
    id: 6,
    name: 'Gyanec Treatments',
    desc: "Say goodbye to gynecological problems with GarbhaGudi's comprehensive range of treatments, specially designed to keep you healthy and fertile.",
    link: '/resources/causes/polycystic-ovarian-syndrome-pcos',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75y8ofh0x907pnpm4xtraw',
  },
  {
    id: 7,
    name: 'Natural Conception',
    desc: "Start your journey to parenthood with GarbhaGudi's natural conception program, which helps you understand their fertility and increase their chances of conceiving.",
    link: '/treatments/natural-pregnancy',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75y8p0h0xd07pnzx4wnhdr',
  },
  {
    id: 8,
    name: 'Semen Analysis / CASA',
    desc: "Get a detailed analysis of your semen and understand your fertility status with GarbhaGudi's advanced Semen Analysis/CASA service.",
    link: '/resources/diagnosis/semen-analysis',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75y8plh0xh07pn6z5ixmoe',
  },
];

/** The same list as schema `availableService` entries: name plus canonical URL. */
export const branchServices = branchTreatments.map((treatment) => ({
  name: treatment.name,
  url: treatment.link,
}));
