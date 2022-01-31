const Stats = () => {
  return (
    <div className="bg-brandPink3">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-heading">
            Some unsubstantiated claim
          </h2>
          <p className="mt-3 text-xl text-white sm:mt-4 font-content">
            more lies regarding the claim
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-7xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              Couples Helped
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              200K
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              languages
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              20+
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              questions answered
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              1M+
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              available
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              24/7
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
