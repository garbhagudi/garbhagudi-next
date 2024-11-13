import React, { useEffect, useState } from 'react';

import BackgroundImage from '../../../assets/fertility-quiz/background1.png';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import BookAnAppointment from 'sections/fertility/bookAnAppointment';

const genderOptions = ['male', 'female'];
const statusOptions = ['single', 'married', 'committed'];
const yesOrNoOptions = ['yes', 'no'];

const FormInput = ({
  id,
  type,
  name,
  selectedChecked,
  value,
  onChange,
  className,
  placeholder,
}: any): JSX.Element => {
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
      onWheel={(event: any) => event.target.blur()}
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
}: any): JSX.Element => {
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
        <span className='capitalize'>{label}</span>
      </label>
    </div>
  );
};

export default function FertilityForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [BMIval, setBMIVal] = useState('');
  const [submit, setSubmit] = useState<any>({ range: 0, isSubmited: false });
  const [formData, setFormData] = useState<{
    gender: string;
    status: string;
    children: string;
    pregnancy: string;
    thyroid: string;
    diabetes: string;
    blood: string;
    abortions: string;
    smoke: string;
    alcohol: string;
    sleeping: string;
    drugs: string;
    age: number | string;
    weight: number | string;
    height: number | string;
  }>({
    gender: '',
    age: '',
    height: '',
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
  });

  useEffect(() => {
    if (formData.height && formData.weight) {
      const { height, weight } = formData;
      const heightInMeters = Number(height) / 100; // Convert cm to meters
      const calculatedBMI = Number(weight) / (heightInMeters * heightInMeters);
      setBMIVal(calculatedBMI.toFixed(2)); // Set BMI with 2 decimal points
    } else {
      setBMIVal('');
    }
  }, [formData]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
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
      formData.status === 'single' ||
        (formData.status === 'married' && formData.children === 'no'),
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
  };

  return (
    <div>
      {submit.isSubmited ? (
        <div className='flex min-h-screen items-center justify-center bg-[#FCFAF7]'>
          <img
            src={BackgroundImage.src}
            alt='timer_icon'
            className='absolute left-0 top-0 h-screen w-screen object-fill'
          />
          <div className='absolute left-[20%] top-[40%] text-center font-nunito-Sans'>
            <div className='text-4xl font-bold text-[#1D1D1D]'>
              Wohoo! You just came closer to your goal!
            </div>
            <p className='mt-4 text-lg text-[#6C6C6C]'>
              Thanks for taking the quiz and the result of quiz is{' '}
              {submit.range}.
            </p>
            <p className='mx-auto mt-4 w-3/4 text-center text-lg text-[#6C6C6C]'>
              {submit.range < 20 ? (
                <span>
                  <span className='font-bold'>Low Risk:</span> Fertility health
                  appears stable. Routine check-ups recommended, but no
                  immediate concerns.
                </span>
              ) : submit.range > 41 ? (
                <span>
                  <span className='font-bold'>High Risk:</span> Significant
                  factors indicate that egg freezing may be beneficial for
                  future planning. Consulting with a fertility expert could
                  provide additional insights.
                </span>
              ) : (
                <span>
                  <span className='font-bold'>Moderate Risk:</span> Certain
                  factors suggest considering fertility preservation or
                  lifestyle adjustments.
                </span>
              )}
            </p>
            <div className='mt-5 flex flex-wrap items-center justify-center gap-4 text-base font-semibold'>
              <Link
                href='https://api.whatsapp.com/send/?phone=916383697088&text=Hi.'
                className='w-full rounded-[10px] border-2 border-white bg-[#49C958] px-4 py-2 font-content text-white hover:bg-green-400 focus:outline-none focus:ring active:bg-green-300 sm:w-auto'
              >
                <span className='flex items-center justify-center gap-2'>
                  <BsWhatsapp
                    size={22}
                    className='text-white dark:text-green-500'
                  />{' '}
                  Drop us a "Hi" here
                </span>
              </Link>

              <div
                className=' cursor-pointer hover:text-white-400 w-full scroll-smooth rounded-[10px] bg-[#DD6F6F] px-4 py-2 font-content text-white shadow focus:outline-none focus:ring active:text-white dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
                onClick={() => setIsOpen(true)}
              >
                Book an Appointment
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex min-h-screen w-full flex-col items-center justify-center rounded-md bg-[#FCFAF7] p-6 md:p-10'>
          <div className='mx-auto w-3/5 font-nunito-Sans'>
            <div className='my-8 flex flex-col items-center text-center'>
              <h1 className='text-4xl font-bold text-[#1D1D1D]'>
                Tell us more about yourself
              </h1>
              <p className='mt-2 w-10/12 text-center text-lg text-[#6C6C6C]'>
                You now know what we do & We thank you for trusting us. Tell us
                more about you and be friends!
              </p>
            </div>
            <div className='flex flex-col justify-center gap-5'>
              <div className='py-5 text-center text-2xl font-bold'>
                Basic Information
              </div>
              <div className='mx-14 grid grid-cols-1 items-center justify-evenly gap-6 md:grid-cols-2'>
                <div className='text-lg'>1. Are you male or female?</div>
                <div className='flex'>
                  {genderOptions.map((ele) => (
                    <RadioButton
                      id={ele}
                      name={'gender'}
                      label={ele}
                      value={ele}
                      selectedChecked={formData.gender === ele ? true : false}
                      onChange={handleFormChange}
                      className='custom-radio'
                    />
                  ))}
                </div>

                <div className='text-lg'>2. What is your age?</div>
                <div className='flex'>
                  <FormInput
                    id='1'
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleFormChange}
                    className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-rose-400'
                  />
                </div>

                <div className='text-lg'>3. Please enter your weight.</div>
                <div className='flex'>
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

                <div className='text-lg'>4. Please enter your height.</div>
                <div className='flex'>
                  <FormInput
                    id='1'
                    type='number'
                    name='height'
                    placeholder={'Enter in CM'}
                    value={formData.height}
                    onChange={handleFormChange}
                    className='rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-rose-400'
                  />
                </div>
              </div>
            </div>

            {BMIval && (
              <div className='py-10'>
                <div className='py-5 text-center text-2xl font-bold'>
                  BMI Calculation
                </div>
                <div className='grid grid-cols-1 items-center gap-6'>
                  <div className='text-center text-lg'>
                    Based on your height and weight, your Body Mass Index (BMI)
                    is {BMIval}
                  </div>
                </div>
              </div>
            )}

            <div className='py-7'>
              <div className='py-5 text-center text-2xl font-bold'>
                Marital & Family Status
              </div>
              <div className='mx-14 grid grid-cols-1 items-center gap-6 md:grid-cols-2'>
                <div className='text-lg'>1. Are you currently?</div>
                <div className='flex space-x-4'>
                  {statusOptions.map((ele) => (
                    <RadioButton
                      id={ele}
                      name={'status'}
                      label={ele}
                      value={ele}
                      selectedChecked={formData.status === ele ? true : false}
                      onChange={handleFormChange}
                      className='custom-radio'
                    />
                  ))}
                </div>

                <div className='text-lg'>
                  2. If married, do you currently have children?
                </div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
                      name={'children'}
                      label={ele}
                      value={ele}
                      selectedChecked={formData.children === ele ? true : false}
                      onChange={handleFormChange}
                      className='custom-radio'
                    />
                  ))}
                </div>
                <div className='text-lg'>
                  3. Are you actively planning for pregnancy?
                </div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
                      name={'pregnancy'}
                      label={ele}
                      value={ele}
                      selectedChecked={
                        formData.pregnancy === ele ? true : false
                      }
                      onChange={handleFormChange}
                      className='custom-radio'
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className='pb-7'>
              <div className='py-7 text-center text-2xl font-bold'>
                Medical History
              </div>
              <div className='mx-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2'>
                <div className='text-lg'>
                  1. Do you have a history of thyroid-related issues?
                </div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
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
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
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
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
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
                  4. Have you experienced any pregnancy terminations or
                  abortions?
                </div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
                      name={'abortions'}
                      label={ele}
                      value={ele}
                      selectedChecked={
                        formData.abortions === ele ? true : false
                      }
                      onChange={handleFormChange}
                      className='custom-radio'
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className='pb-7'>
              <div className='py-7 text-center text-2xl font-bold'>
                Lifestyle Factors
              </div>
              <div className='mx-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2'>
                <div className='text-lg'>1. Do you smoke?</div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
                      name={'smoke'}
                      label={ele}
                      value={ele}
                      selectedChecked={formData.smoke === ele ? true : false}
                      onChange={handleFormChange}
                      className='custom-radio'
                    />
                  ))}
                </div>

                <div className='text-lg'>
                  2. Do you consume alcohol regularly?
                </div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
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
                  3 Do you experience frequent insomnia or have trouble
                  sleeping?
                </div>
                <div className='flex space-x-4'>
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
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
                  {yesOrNoOptions.map((ele) => (
                    <RadioButton
                      id={ele}
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

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <BookAnAppointment />
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
  );
}
