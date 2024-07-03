import React from 'react';

const Risks = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='px-3 pb-10 text-gray-800 dark:text-gray-200 lg:px-6'>
          <h2 className='py-10 text-center font-heading text-2xl font-bold lg:text-3xl'>
            Potential Risks of IUI
          </h2>
          <div className='font-content'>
            IUI is generally considered a safe and low-invasive procedure with
            minimal risks. However, there are some risk factors associated with
            the procedure:
          </div>
          <div className='mt-4 px-3 font-content'>
            <ul className='ml-2 list-outside list-disc space-y-3'>
              <li>
                <strong>Multiple Pregnancies:</strong> IUI increases the chance
                of having twins or triplets, which can be associated with risks
                such as preterm labor, low birth weight, and complications
                during delivery.
              </li>
              <li>
                <strong>Ovarian hyperstimulation syndrome (OHSS): </strong> This
                is a rare but serious condition that can occur when ovaries
                become swollen and painful after ovulation induction medication.
              </li>
              <li>
                <strong>Ectopic Pregnancy:</strong> Ectopic pregnancy occurs
                when the fertilized egg implants outside the uterus, and it is a
                serious condition that can be life-threatening.
              </li>
              <li>
                <strong>Infection:</strong> There is a small risk of infection
                associated with the procedure, although this can usually be
                prevented by proper cleaning of the cervix before the procedure.
              </li>
              <li>
                <strong>Allergic reactions to medications:</strong> Some women
                may experience an allergic reaction to the medications used
                during the procedure.
              </li>
            </ul>
            <div className='mt-4 font-content'>
              It's important to note that these risks are rare and can be
              minimized by working with an experienced fertility specialist.
              It's always best to discuss the potential risks and benefits of
              the procedure with your doctor before deciding to undergo IUI.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risks;
