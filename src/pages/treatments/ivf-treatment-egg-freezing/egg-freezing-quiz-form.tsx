import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const genderOptions = ['male', 'female'];
const statusOptions = ['single', 'married', 'committed'];
const yesOrNoOptions = ['yes', 'no'];

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  className: string;
  selectedChecked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface FormInputProps {
  id: string;
  type: string;
  name: string;
  selectedChecked?: boolean;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  placeholder?: string;
}

const FormInput = ({
  id,
  type,
  name,
  selectedChecked,
  value,
  onChange,
  className,
  placeholder,
}: FormInputProps): JSX.Element => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      checked={selectedChecked}
      placeholder={placeholder || ''}
      value={value}
      onChange={onChange}
      className={className}
      onWheel={(event) => (event.target as HTMLInputElement).blur()}
    />
  );
};

const RadioButton = ({
  id,
  name,
  value,
  label,
  className,
  selectedChecked,
  onChange,
}: RadioButtonProps): JSX.Element => {
  return (
    <div className='input-radio flex items-center gap-2 px-2 py-1.5'>
      <label htmlFor={id} className='flex items-center gap-2'>
        <FormInput
          id={id}
          type={'radio'}
          name={name}
          value={value}
          selectedChecked={selectedChecked}
          onChange={onChange}
          className={`radio-oval ${className} h-4 w-4`}
        />
        <span className='cursor-pointer capitalize'>{label}</span>
      </label>
    </div>
  );
};

export default function FertilityForm() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const inchesRegex = /^(?:[0-9]|1[0-1])$/;

  const [BMIval, setBMIVal] = useState('');
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState({ range: 0, isSubmited: false });
  const [formData, setFormData] = useState<{
    gender: string;
    status: string;
    children: string;
    pregnancy: string;
    thyroid: string;
    diabetes: string;
    blood: string;
    number: string;
    name: string;
    email: string;
    abortions: string;
    smoke: string;
    alcohol: string;
    sleeping: string;
    drugs: string;
    age: number | string;
    weight: number | string;
    feet: number | string;
    inches: number | string;
  }>({
    gender: '',
    age: '',
    feet: '',
    inches: '',
    weight: '',
    abortions: '',
    alcohol: '',
    blood: '',
    children: '',
    diabetes: '',
    drugs: '',
    pregnancy: '',
    sleeping: '',
    smoke: '',
    status: '',
    thyroid: '',
    email: '',
    name: '',
    number: '',
  });

  useEffect(() => {
    if ((formData.feet || formData.inches) && formData.weight) {
      const { feet, weight, inches } = formData;
      const num = Number(feet) || 0;
      const heightInInches = num * 12 + Number(inches); // Total height in inches
      const heightInMeters = heightInInches * 0.0254; // Convert height to meters
      // Calculate BMI
      const bmi = Number(weight) / (heightInMeters * heightInMeters);
      setBMIVal(bmi.toFixed(2));
    } else {
      setBMIVal('');
    }
  }, [formData]);

  interface FormChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { name: keyof typeof formData; value: string };
  }

  const handleFormChange = (event: FormChangeEvent) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMailsToUserApi = async (mail: string, htmlBodyContent: string) => {
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_EMAIL_API_KEY,
        },
        body: JSON.stringify({
          sender: { email: 'vivek.singh@witarist.in' },
          to: [{ email: mail }],
          subject: 'Egg Freezing Quiz Results',
          htmlContent: htmlBodyContent,
        }),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendMail = async (range: number) => {
    const getMessage = () => {
      if (range <= 20) {
        return `<span class="low-risk">Low Risk:</span> Fertility health appears stable. Routine check-ups recommended, but no immediate concerns.`;
      } else if (range >= 41) {
        return `<span class="high-risk">High Risk:</span> Significant factors indicate that egg freezing may be beneficial for future planning. Consulting with a fertility expert could provide additional insights.`;
      } else {
        return `<span class="moderate-risk">Moderate Risk:</span> Certain factors suggest considering fertility preservation or lifestyle adjustments.`;
      }
    };

    const htmlBodyContent = `
      <style>
        .text-container {
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        .score-text {
          font-size: 1.875rem;
          font-weight: bold;
          padding: 20px;
          max-width: 600px;
          margin: auto;
          text-align: center;

        }
        .result-text {
          font-size: 1.125rem;
          color: #555;
          text-align: center;

        }
        .low-risk {
          color: #2d6a4f;
          font-weight: bold;
          ext-align: center;

        }
        .moderate-risk {
          color: #ffb703;
          font-weight: bold;
          text-align: center;

        }
        .high-risk {
          color: #d90429;
          font-weight: bold;
          text-align: center;

        }
        h1 {
          color: #D9576C;
          font-size: 24px;
          border-bottom: 2px solid #D9576C;
          padding-bottom: 8px;
          margin-top: 20px;
        }
        .info-section {
          margin-bottom: 10px;
          text-transform: capitalize;

        }
          .email-section {
            margin-bottom: 10px;
          }
        .info-section span {
          font-weight: bold;
        }
      </style>
      <div class="text-container">
        <div class="score-text">The total scoring range of quiz is <strong>${range}</strong></div>
        <div class="result-text">${getMessage()}</div>

        <h1>Basic Information</h1>
        <div class="info-section">1. Name: <span>${formData.name}</span></div>
        <div class="email-section">2. Email: <span>${formData.email}</span></div>
        <div class="info-section">3. Mobile: <span>${formData.number}</span></div>
        <div class="info-section">4. Gender: <span>${formData.gender}</span></div>
        <div class="info-section">5. Age: <span>${formData.age}</span></div>
        <div class="info-section">6. Weight: <span>${formData.weight} KG</span></div>
        <div class="info-section">7. Height: <span>${formData.feet} Feet ${formData.inches} inches</span></div>

        <h1>BMI Calculation</h1>
        <div class="info-section">1. BMI value: <span>${BMIval}</span></div>

        <h1>Marital & Family Status</h1>
        <div class="info-section">1. Marital Status: <span>${formData.status}</span></div>
        <div class="info-section">2. If married, do you currently have children: <span>${formData.children}</span></div>
        <div class="info-section">3. Are you actively planning for pregnancy: <span>${formData.pregnancy}</span></div>

        <h1>Medical History</h1>
        <div class="info-section">1. Do you have a history of thyroid-related issues: <span>${formData.thyroid}</span></div>
        <div class="info-section">2. Are you diagnosed with diabetes or high blood sugar: <span>${formData.diabetes}</span></div>
        <div class="info-section">3. Do you have a history of high blood pressure (BP): <span>${formData.blood}</span></div>
        <div class="info-section">4. Have you experienced any pregnancy terminations or abortions?: <span>${formData.abortions}</span></div>

        <h1>Lifestyle Factors</h1>
        <div class="info-section">1. Do you smoke: <span>${formData.smoke}</span></div>
        <div class="info-section">2. Do you consume alcohol regularly: <span>${formData.alcohol}</span></div>
        <div class="info-section">3. Do you experience frequent insomnia or have trouble sleeping: <span>${formData.sleeping}</span></div>
        <div class="info-section">4. Have you used recreational drugs such as marijuana/weed: <span>${formData.drugs}</span></div>
      </div>`;

    const mailsToSend = ['shruthireddy@garbhagudi.com', 'hemanth@garbhagudi.com'];
    mailsToSend.forEach(async (ele) => {
      await sendMailsToUserApi(ele, htmlBodyContent);
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !emailRegex.test(formData.email) ||
      (formData.inches && !inchesRegex.test(formData.inches.toString()))
    ) {
      setError(true);
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    let val = 0;

    const age = Number(formData.age);
    const bmi = BMIval && Number(BMIval);

    // Age-based scoring
    if (age > 0) {
      val += age >= 35 ? 10 : age >= 30 ? 5 : 0;
    }

    // BMI-based scoring
    if (bmi > 0) {
      val += bmi >= 30 ? 10 : bmi < 18.5 || (bmi >= 25 && bmi <= 29.9) ? 5 : 0;
    }

    // Conditions that add 5 to val if true
    const conditions = [
      formData.status === 'single' || (formData.status === 'married' && formData.children === 'no'),
      formData.pregnancy === 'no',
      formData.abortions === 'yes',
      formData.alcohol === 'yes',
      formData.blood === 'yes',
      formData.diabetes === 'yes',
      formData.drugs === 'yes',
      formData.sleeping === 'yes',
      formData.smoke === 'yes',
      formData.thyroid === 'yes',
    ];

    conditions.forEach((condition) => {
      if (condition) val += 5;
    });

    setSubmit({ range: val, isSubmited: true });
    await sendMail(val);
  };

  return (
    <>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Egg Freezing Quiz | Know Your Options | GarbhaGudi IVF</title>
        <meta name='title' content={'Egg Freezing Quiz | Know Your Options | GarbhaGudi IVF'} />
        <meta
          name='description'
          content='Take our Egg Freezing Quiz to assess your fertility options! Learn about IVF treatment and egg preservation. Take the first step toward parenthood!
'
        />
        <meta property='og:title' content="Egg Freezing Quiz – Find Out If It's Right for You" />
        <meta
          name='og:description'
          content='Take this quick quiz to see if egg freezing is the right option for your fertility goals. Get personalized insights in minutes!'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:type' content='article' />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content={'Egg Freezing Quiz | Know Your Options | GarbhaGudi IVF'}
        />
        <meta
          name='twitter:description'
          content='Take our Egg Freezing Quiz to assess your fertility options! Learn about IVF treatment and egg preservation. Take the first step toward parenthood!
'
        />
      </Head>
      <div>
        {submit.isSubmited ? (
          <div className='flex min-h-screen items-center justify-center bg-[#FCFAF7]'>
            <Image
              src={
                'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568598/eggFreezing/z3jyuyfnzutxoup7yx27.webp'
              }
              alt='timer_icon'
              width={100}
              height={100}
              className='absolute left-0 top-0 h-screen w-screen object-fill'
              loading='lazy'
            />
            <div className='absolute z-20 text-center font-nunito-Sans'>
              <div className='text-2xl font-bold text-[#1D1D1D] md:text-4xl'>
                You just came closer to your goal!
              </div>
              <p className='mt-4 text-base font-semibold text-[#1D1D1D] opacity-90 md:text-lg'>
                Thanks for taking the quiz and the result of quiz is <strong>{submit.range}</strong>
                .
              </p>
              <p className='mx-auto mt-4 w-10/12 text-center text-base text-[#6C6C6C] md:w-3/4 md:text-lg'>
                {submit.range <= 20 ? (
                  <span className='flex flex-col gap-2'>
                    <span className='mx-auto w-11/12'>
                      Great news! Your fertility health looks stable 🌱 But why leave it to chance?
                      Take the next step to understand your fertility better—an AMH test offers a
                      clear picture. Secure peace of mind with one simple test!
                    </span>
                    <span>
                      <span className='font-bold'>Low Risk:</span> Fertility health appears stable.
                      Routine check-ups recommended, but no immediate concerns.
                    </span>
                  </span>
                ) : submit.range >= 41 ? (
                  <span className='flex flex-col gap-2'>
                    <span className='mx-auto w-11/12'>
                      Your future family goals are worth planning for! 🌟 With a few key factors
                      affecting your fertility, egg freezing might be a valuable option. An AMH test
                      and a chat with a fertility expert can give you clarity and control over your
                      next steps. Embrace the future on your terms!
                    </span>
                    <span>
                      <span className='font-bold'>High Risk:</span> Significant factors indicate
                      that egg freezing may be beneficial for future planning. Consulting with a
                      fertility expert could provide additional insights.
                    </span>
                  </span>
                ) : (
                  <span className='flex flex-col gap-2'>
                    <span className='mx-auto w-11/12'>
                      You're on the right track, but a little insight can go a long way! 🌸 Certain
                      factors suggest exploring fertility preservation or small lifestyle tweaks. An
                      AMH test can help you understand your fertility health better—empower your
                      future with knowledge!
                    </span>
                    <span>
                      <span className='font-bold'>Moderate Risk:</span> Certain factors suggest
                      considering fertility preservation or lifestyle adjustments.
                    </span>
                  </span>
                )}
              </p>
            </div>
          </div>
        ) : (
          <div className='flex min-h-screen w-full flex-col items-center justify-center rounded-md bg-[#FCFAF7] p-6 md:p-10'>
            <div className='mx-auto font-nunito-Sans lg:w-3/5'>
              <div className='my-4 flex flex-col items-center text-center md:my-8'>
                <h1 className='text-2xl font-bold text-[#1D1D1D] md:text-4xl'>
                  Tell us more about yourself
                </h1>
                <p className='mt-2 w-10/12 text-center text-lg text-[#6C6C6C]'>
                  You now know what we do & We thank you for trusting us. Tell us more about you and
                  be friends!
                </p>
              </div>
              <div className='flex flex-col justify-center gap-5'>
                <div className='py-2 text-center text-xl font-bold md:py-5 md:text-2xl'>
                  Basic Information
                </div>
                <div className='mx-5 grid grid-cols-1 items-center justify-evenly gap-3 md:mx-14 md:grid-cols-2 md:gap-6'>
                  <div className='text-lg'>1. What is your name?</div>
                  <div className='flex flex-col gap-1'>
                    <FormInput
                      id='1'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleFormChange}
                      className={`rounded-md border ${error && !formData.name ? 'border-red-600' : 'border-gray-300'} p-2 focus:outline-none focus:ring-2 focus:ring-rose-400`}
                    />
                    {error && !formData.name && (
                      <div className='text-rose-700'>This field is required</div>
                    )}
                  </div>

                  <div className='text-lg'>2. What is your Email?</div>
                  <div className='flex flex-col gap-1'>
                    <FormInput
                      id='1'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleFormChange}
                      className={`rounded-md border ${error && !emailRegex.test(formData.email) ? 'border-red-600' : 'border-gray-300'} p-2 focus:outline-none focus:ring-2 focus:ring-rose-400`}
                    />
                    {error && !emailRegex.test(formData.email) && (
                      <div className='text-rose-700'>Please enter a valid email address</div>
                    )}
                  </div>

                  <div className='text-lg'>3. What is your Mobile Number?</div>
                  <div className='flex flex-col'>
                    <FormInput
                      id='1'
                      type='number'
                      name='number'
                      value={formData.number}
                      onChange={handleFormChange}
                      className={`rounded-md border ${
                        error && formData.number.length !== 10
                          ? 'border-red-600'
                          : 'border-gray-300'
                      } p-2 focus:outline-none focus:ring-2 focus:ring-rose-400`}
                    />
                    {error && formData.number.length !== 10 && (
                      <div className='text-rose-700'>
                        Please enter a valid 10 digit mobile number
                      </div>
                    )}
                  </div>

                  <div className='text-lg'>4. Are you male or female?</div>
                  <div className='flex'>
                    {genderOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`gender${index}`}
                        name={'gender'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.gender === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>

                  <div className='text-lg'>5. What is your age?</div>
                  <div className='flex flex-col'>
                    <FormInput
                      id='1'
                      type='number'
                      name='age'
                      value={formData.age}
                      onChange={handleFormChange}
                      className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-rose-400'
                    />
                  </div>

                  <div className='text-lg'>6. Please enter your weight.</div>
                  <div className='flex flex-col'>
                    <FormInput
                      id='1'
                      type='number'
                      name='weight'
                      placeholder={'Enter in KG'}
                      value={formData.weight}
                      onChange={handleFormChange}
                      className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-rose-400'
                    />
                  </div>

                  <div className='text-lg'>7. Please enter your height.</div>
                  <div className='flex flex-col'>
                    <div className='flex flex-row gap-3'>
                      <FormInput
                        id='1'
                        type='number'
                        name='feet'
                        placeholder={'Enter in Feet'}
                        value={formData.feet}
                        onChange={handleFormChange}
                        className='w-1/2 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-rose-400'
                      />
                      <FormInput
                        id='2'
                        type='number'
                        name='inches'
                        placeholder={'Enter in Inches'}
                        value={formData.inches}
                        onChange={handleFormChange}
                        className={`w-1/2 rounded-md border ${
                          error && formData.inches && !inchesRegex.test(formData.inches.toString())
                            ? 'border-red-600'
                            : 'border-gray-300'
                        } p-2 focus:outline-none focus:ring-2 focus:ring-rose-400`}
                      />
                    </div>
                    {error && formData.inches && !inchesRegex.test(formData.inches.toString()) && (
                      <div>Please enter a value between 0 to 11</div>
                    )}
                  </div>
                </div>
              </div>

              {BMIval && (
                <div className='pb-3 pt-10 md:pb-10'>
                  <div className='mx-3 py-3 text-center text-xl font-bold md:mx-0 md:py-5 md:text-2xl'>
                    BMI Calculation
                  </div>
                  <div className='grid grid-cols-1 items-center gap-6'>
                    <div className='text-center text-lg'>
                      Based on your height and weight, your Body Mass Index (BMI) is {BMIval}
                    </div>
                  </div>
                </div>
              )}

              <div className='py-7'>
                <div className='py-3 text-center text-xl font-bold md:py-5 md:text-2xl'>
                  Marital & Family Status
                </div>
                <div className='mx-5 grid grid-cols-1 items-center justify-evenly gap-3 md:mx-10 md:grid-cols-2 md:gap-6'>
                  <div className='text-lg'>1. Are you currently?</div>
                  <div className='flex space-x-4'>
                    {statusOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`status${index}`}
                        name={'status'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.status === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>

                  <div className='text-lg'>2. If married, do you currently have children?</div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`children${index}`}
                        name={'children'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.children === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>
                  <div className='text-lg'>3. Are you actively planning for pregnancy?</div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`pregnancy${index}`}
                        name={'pregnancy'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.pregnancy === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className='pb-7'>
                <div className='py-3 text-center text-xl font-bold md:py-7 md:text-2xl'>
                  Medical History
                </div>
                <div className='mx-5 grid grid-cols-1 items-center justify-evenly gap-3 md:mx-10 md:grid-cols-2 md:gap-6'>
                  <div className='text-lg'>1. Do you have a history of thyroid-related issues?</div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`thyroid${index}`}
                        name={'thyroid'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.thyroid === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>

                  <div className='text-lg'>
                    2. Are you diagnosed with diabetes or high blood sugar?
                  </div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`diabetes${index}`}
                        name={'diabetes'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.diabetes === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>
                  <div className='text-lg'>
                    3. Do you have a history of high blood pressure (BP)?
                  </div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        id={`blood${index}`}
                        key={index}
                        name={'blood'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.blood === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>

                  <div className='text-lg'>
                    4. Have you experienced any pregnancy terminations or abortions?
                  </div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        id={`abortions${index}`}
                        key={index}
                        name={'abortions'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.abortions === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className='pb-7'>
                <div className='py-3 text-center text-xl font-bold md:py-7 md:text-2xl'>
                  Lifestyle Factors
                </div>
                <div className='mx-5 grid grid-cols-1 items-center justify-evenly gap-3 md:mx-10 md:grid-cols-2 md:gap-6'>
                  <div className='text-lg'>1. Do you smoke?</div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        id={`smoke${index}`}
                        key={index}
                        name={'smoke'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.smoke === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>

                  <div className='text-lg'>2. Do you consume alcohol regularly?</div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`alcohol${index}`}
                        name={'alcohol'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.alcohol === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>
                  <div className='text-lg'>
                    3 Do you experience frequent insomnia or have trouble sleeping?
                  </div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`sleeping${index}`}
                        name={'sleeping'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.sleeping === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>

                  <div className='text-lg'>
                    4. Have you used recreational drugs such as marijuana/weed?
                  </div>
                  <div className='flex space-x-4'>
                    {yesOrNoOptions.map((ele, index) => (
                      <RadioButton
                        key={index}
                        id={`drugs${index}`}
                        name={'drugs'}
                        label={ele}
                        value={ele}
                        selectedChecked={formData.drugs === ele ? true : false}
                        onChange={handleFormChange}
                        className='custom-radio'
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className='my-6 flex justify-center'>
                <button
                  className='rounded-lg bg-[#ea4b6a] px-10 py-2 font-bold text-white hover:bg-[#ee6f88] focus:outline-none'
                  title='Submit quiz'
                  onClick={handleSubmit}
                >
                  Submit quiz
                </button>
              </div>
            </div>
          </div>
        )}

        <style>{`
    /* Custom radio button style */
input[type="radio"].custom-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  outline: none;
  position: relative;
  cursor: pointer;
}

input[type="radio"].custom-radio:checked {
  border-color: #FF656F; /* Change border color when selected */
}

input[type="radio"].custom-radio:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FF656F; /* Inner circle color */
  transform: translate(-50%, -50%); /* Center the inner circle */
}


/* Hide spinner in Chrome, Safari, and newer Edge */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide spinner in Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* Optional: Additional styling for the input */
input[type="number"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}





`}</style>
      </div>
    </>
  );
}
