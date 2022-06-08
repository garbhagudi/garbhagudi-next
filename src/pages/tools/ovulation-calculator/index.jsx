import React, { useState } from "react";
import Calendar from "react-calendar";
import Moment from "react-moment";

const IndexPage = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");

  const date = value;
  const cycleLength = parseInt(cycle);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <div className="container text-center mx-auto">
          <h4 className="pt-8 text-3xl sm:text-4xl font-bold font-heading">
            Ovulation and Pregnancy Due Date Calculator
          </h4>
          <p className="text-sm mt-3 px-2 sm:px-0">
            Menstrual periods are different from woman to woman and month to
            month. Use this calculator to see when you may be ovulating to help
            find your most fertile days.
          </p>
        </div>
      </div>
      <div className="text-center mt-8 text-lg">
        <label htmlFor="cycle" className="">
          How long is your average cycle?{" "}
        </label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className="border rounded-lg w-36 text-center"
        >
          <option value="28">22 Days</option>
          <option value="29">23 Days</option>
          <option value="30">24 Days</option>
          <option value="31">25 Days</option>
          <option value="32">26 Days</option>
          <option value="33">27 Days</option>
          <option value="28">28 Days</option>
          <option value="29">29 Days</option>
          <option value="30">30 Days</option>
          <option value="31">31 Days</option>
          <option value="32">32 Days</option>
          <option value="33">33 Days</option>
          <option value="34">34 Days</option>
          <option value="35">35 Days</option>
          <option value="36">36 Days</option>
          <option value="37">37 Days</option>
          <option value="38">38 Days</option>
          <option value="39">39 Days</option>
          <option value="40">40 Days</option>
          <option value="41">41 Days</option>
          <option value="42">42 Days</option>
          <option value="43">43 Days</option>
          <option value="44">44 Days</option>
          <option value="45">45 Days</option>
        </select>
      </div>
      <div className="pt-8 text-center grid grid-cols-1 md:grid-cols-2">
        <div className="scale-90 lg:scale-100">
          <p className="text-center text-lg">
            Select the first day of your last period
          </p>
          <div className="flex justify-center px-1 sm:px-0">
            <Calendar
              onChange={onChange}
              value={value}
              className="mx-auto mt-4 shadow-2xl rounded-2xl"
            />
          </div>
        </div>
        <div className="text-center flex flex-col items-center justify-center p-2">
          <div className="mx-auto mt-8 p-3 text-center rounded-2xl border text-base shadow-2xl w-96">
            <p>Next Menstrual Cycle :</p>
            <div className="font-bold">
              <Moment format="DD MMMM YYYY" add={{ days: cycleLength + 0 }}>
                {date}
              </Moment>
            </div>
          </div>
          <div className="mx-auto mt-3 p-3 text-center rounded-2xl border text-base shadow-2xl w-96">
            <p>Fertile Window</p>
            <div className="font-bold">
              <Moment format="DD MMMM YYYY" add={{ days: cycleLength - 17 }}>
                {date}
              </Moment>{" "}
              -{" "}
              <Moment format="DD MMMM YYYY" add={{ days: cycleLength - 13 }}>
                {date}
              </Moment>
            </div>
          </div>
          <div className="mx-auto mt-3 p-3 text-center rounded-2xl border text-base shadow-2xl w-96">
            <p> Approximate Ovulation :</p>
            <div className="font-bold">
              <Moment format="DD MMMM YYYY" add={{ days: cycleLength - 14 }}>
                {date}
              </Moment>
            </div>
          </div>
          <div className="mx-auto mt-3 p-3 text-center rounded-2xl border text-base shadow-2xl w-96">
            <p> Approximate Pregnancy Test Day :</p>
            <div className="font-bold">
              <Moment format="DD MMMM YYYY" add={{ days: cycleLength + 1 }}>
                {date}
              </Moment>
            </div>
          </div>
          <div className="mx-auto mt-3 p-3 text-center rounded-2xl border text-base shadow-2xl w-96">
            <p>
              {" "}
              If conceived within this timeframe, the estimated due date :{" "}
            </p>
            <div className="font-bold">
              {cycleLength !== 28 && (
                <Moment
                  format="DD MMMM YYYY"
                  add={{ days: cycleLength - 28 + 280 }}
                >
                  {date}
                </Moment>
              )}
              {cycleLength === 28 && (
                <Moment
                  format="DD MMMM YYYY"
                  add={{ days: cycleLength - cycleLength + 280 }}
                >
                  {date}
                </Moment>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-0 text-center mt-5 mb-3 text-xs">
        Only your physician can accurately determine your due date or the date
        of your conception based on his/her knowledge of your complete medical
        condition.
      </div>
    </div>
  );
};

export default IndexPage;
