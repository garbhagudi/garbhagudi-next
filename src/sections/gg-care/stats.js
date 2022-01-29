const Stats = () => {
  return (
    <div className="bg-brandPink3">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-heading">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-white sm:mt-4 font-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              Pepperoni
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              100%
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              Delivery
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              24/7
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white font-content">
              Calories
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white font-heading">
              100k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
