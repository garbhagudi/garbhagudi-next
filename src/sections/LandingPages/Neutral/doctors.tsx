import React from "react";
import DoctorLayout from "components/doctorsLayout";
import Carousel from "react-multi-carousel";

const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FertilityExperts = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  return (
    <div>
      <div className="max-w-7xl mx-auto py-10 lg:py-16">
        <h1 className="text-2xl lg:text-3xl font-heading font-bold text-center pb-10 lg:pb-16">
          Our Fertility Experts
        </h1>
        <Carousel responsive={responsive2} ssr={true} infinite={true}>
          {doctors.map((items) => (
            <DoctorLayout
              index={items.id}
              key={items.id}
              imageComponent={
                <ImageComponent
                  name={items.name}
                  image={items.image}
                  qualification={items.qualification}
                  designation={items.designation}
                />
              }
              activeIndex={activeIndex}
              docpic={items.image}
              name={items.name}
              bio={items.bio}
              setActiveIndex={setActiveIndex}
            ></DoctorLayout>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FertilityExperts;

const ImageComponent = ({ name, image, qualification, designation }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={image}
        alt={name}
        className="h-36 w-36 md:h-44 md:w-44 rounded-full"
      />
      <div className="text-center">
        <div className="text-xl font-heading font-bold mt-4">{name}</div>
        <div className="text-xs font-content mt-2">{qualification}</div>
        <div className="text-sm font-content mt-2 mb-4">{designation}</div>
      </div>
    </div>
  );
};

const doctors = [
  {
    id: "2",
    name: "Dr Chaithra S.K",
    designation: "Assistant Medical Director",
    qualification: "MBBS, MS – OBG, FRM",
    location: "KalyanNagar, Marathahalli",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Chithra-SK_orc3cx.webp",
    bio: (
      <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
        <p className="mb-4 text-gray-800 prose">
          <div className="text-md text-brandDark mt-3 font-qs">
            <p>
              Dr Chaithra S.K is a well known Fertility Specialist with more
              than 11 years of experience in the field. She completed her MBBS,
              MS (OBG) from RGUHS in 2013 and a fellowship in Reproductive
              Medicine and Endoscopy the same year. She practices Obstetrics,
              Gynaecology, Infertility, and Endoscopy in Bangalore with
              high-level skills and knowledge in IVF. She has an almost
              commitment, care, and empathy towards patients. She has amazing
              success rates in IUI and IVF with great skills and knowledge in
              Obstetrics and Gynaecology.
            </p>
          </div>
          <div className="text-md text-brandDark mt-3 font-qs">
            <p>
              Dr Chaithra S.K. is a well known, highly skilled and thorough
              professional in the field of Reproductive Medicine and Fertility
              Endoscopy. She is also a qualified Obstetrician and Gynecologist
              with a special interest in infertility which is passionate about.
              She has a total of 11 years of experience with expertise in IVF,
              ICSI, IUI and fertility-enhancing endoscopic procedures. She is
              known among her patients and peers for her skills, patience,
              ethics, knowledge, attention to detail, patient safety, and high
              success rates. She understands the individual care and attention
              patients require and is dedicated to the same.
            </p>
          </div>
          <p></p>
        </p>
      </div>
    ),
  },
  {
    id: "3",
    name: "Dr Maheshwari",
    designation: "Assistant Medical Director",
    qualification: "MBBS, MS-OBG, FRM",
    location: "HanumanthaNagar",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Maheshwari-new_rryrnt.webp",
    bio: (
      <div>
        <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
          <p className="mb-4 text-gray-800 prose">
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Maheshwari is a senior fertility consultant associated with
                GarbhaGudi. Owing to her great desire to specialize further, she
                completed her fellowship in reproductive medicine. She is
                recognized for her expertise in advanced infertility treatments
                and is known for achieving high success rates in IVF, IUI
                pregnancies, and other such ART procedures. She is a skilled
                professional, is completely passionate about her job, and aims
                to provide the best treatment for her patients. She is currently
                the Assistant Medical Director of GarbhaGudi.
              </p>
            </div>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    name: "Dr Chinmayie R",
    designation: "Assistant Medical Director",
    qualification: "MBBS,MS – OBG, FRM",
    location: "Jayanagar",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Chinmaey_kz6etc.webp",
    bio: (
      <div>
        <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
          <p className="mb-4 text-gray-800 prose">
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Chinmayie is a fertility expert with eight years of
                experience in gynaecology and infertility. She holds a
                Fellowship in Reproductive Medicine from RGUHS and has also been
                active in the world of academia. In addition to her clinical
                experience, Dr Chinmayie has a compassionate and caring nature.
                She practices at GarbhaGudi and is recognized for performing
                Intra-Uterine Insemination (IUI), in In-Vitro Fertilization
                (IVF), and other such ART techniques. Her mission is to provide
                the highest medical care to all her patients. She is currently
                the assistant medical director of GGIRHR.
              </p>
            </div>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "5",
    name: "Dr Priyanka Rani",
    designation: "Fertility Specialist",
    qualification: "MBBS, DNB, FRM",
    location: "ElectronicCity",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/Prianka-Rani_cllnrd.webp",
    bio: (
      <div>
        <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
          <p className="mb-4 text-gray-800 prose">
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Priyanka Rani is a fertility specialist with years of
                experience in gynaecology and obstetrics. She worked as a Senior
                Resident at St. John’s Medical College and holds a Rajiv Gandhi
                University of Health Sciences fellowship. She is well-versed in
                ART procedures like IVF, IUI, etc. Dr Priyanka is eager to
                commit herself to her patients, providing them much assurance,
                which puts them at ease during their treatment. Her skills as a
                fertility specialist made her a valued member of the team at
                GarbhaGudi IVF Center.
              </p>
            </div>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "7",
    name: "Dr Anitha Manoj",
    designation: "Fertility Specialist",
    qualification: "MBBS, MS (OBG), FMAS, FRM",
    location: "HanumanthaNagar",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/anitha_oambb3.webp",
    bio: (
      <div>
        <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
          <p className="mb-4 text-gray-800 prose">
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Anita has over a decade of experience as a gynaecologist. She
                specializes in infertility and holds a fellowship in
                reproductive medicine from Rajiv Gandhi University of Health
                Sciences. She regularly keeps herself updated with current
                medical knowledge & practices. Dr Anita’s prime motto is to
                ensure safe medical care for patients. She is one of the best
                fertility experts in Bangalore, and practices at GarbhaGudi IVF
                Centre, Bangalore. She is a member of FOGSI and the Indian
                Medical Association (IMA).
              </p>
            </div>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "6",
    name: "Dr Subha L",
    designation: "Fertility Specialist",
    qualification: "MBBS, MS(OBG), DNB, FRM",
    location: "ElectronicCity",
    image: "https://media.graphassets.com/xHvgevKDT4aNPxoPBWaK",
    bio: (
      <div>
        <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
          <p className="mb-4 text-gray-800 prose">
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr. Shubha L is a fertility specialist with 5 years of
                experience in obstetrics and gynecology. She completed her MBBS
                at JJMMC, davangere and MS from father muller medical college,
                Mangalore. She worked as a senior registrar at St Martha’s
                hospital and Owing to her great desire to specialize further,
                she completed her fellowship in reproductive medicine from Craft
                hospital, Kerala. She is a skilled professional, is completely
                passionate about her job, and aims to provide the best treatment
                for her patients. She is well-versed in ART procedures like IVF,
                IUI, etc. Dr. Shubha l is known for the comfort and confidence
                she elicits in her patients, and she believes in performing
                fertility treatments with a scientific approach & in an ethical
                manner. She also offers to counsel for infertility treatment
                with dedication toward her patients. Her skills as a fertility
                specialist made her a valued member of the team at GarbhaGudi
                IVF Center.
              </p>
            </div>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "11",
    name: "Dr Srinivas B.V",
    designation: "Andrologist and Urologist",
    qualification: "MBBS, MS, DNB Urology, FAMH",
    location: "HanumanthaNagar, KalyanNagar, Jayanagar, ElectronicCity",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1657178113/garbhagudi-ivf/doctors/06_gq0pxk.webp",
    bio: (
      <div>
        <div className="w-full lg:w-9/12 px-4 mx-auto flex justify-start">
          <p className="mb-4 text-gray-800 prose">
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Srinivas is a renowned and experienced Andrologist rendering
                his service in Garbhagudi IVF centre as Senior Consultant
                Andrologist and Urologist. He was awarded as the best budding
                Andrologist in India during the National Award ceremony
                conducted by Economic times in the year 2019, he was also
                awarded as the best budding Andrologist in South India as well
                during the same event.
              </p>
            </div>
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Srinivas completed his MBBS from the prestigious BANGALORE
                MEDICAL COLLEGE. Later on, finished his postgraduate MS (General
                Surgery) from ST. JOHN’S MEDICAL COLLEGE, BANGALORE. He
                completed his super-speciality course DNB (Urology)- NATIONAL
                BOARD OF EXAMINATION, NEW DELHI from NU Hospitals, Bangalore.
                His pursuit for enhanced learning made him continue the further
                course on FAMH( Fellowship in Andrology and Men’s Health) from
                Rajiv Gandhi University Of health sciences. He is the first in
                Asia to have a university certified course in Andrology and
                men’s health.
              </p>
            </div>
            <div className="text-md text-brandDark mt-3 font-qs">
              <p>
                Dr Srinivas is presently practising at various IVF and fertility
                centres in Bangalore. He has also published many articles in
                international journals. His depth of involvement in research is
                evident with his journal published in the International Journal
                of Infertility and Fetal Medicine which studied the effect of
                mobile phone radiation on semen parameters. His original article
                on Hypogonadism and Varicocele was published in the
                International Journal of Endocrinology and was appreciated
                worldwide and was even included in American Urology Association
                guidelines. To his credit, Dr Srinivas has won a lot of prizes
                at various national and state conferences and CMEs. He is also
                credited with being an author of 3 chapters of the standard
                Fertility Textbook. He has given several TV interviews on
                reproductive health and fertility issues.
              </p>
            </div>
          </p>
        </div>
      </div>
    ),
  },
];
