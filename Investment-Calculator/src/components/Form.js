import React, { useState } from "react";

const Form = (props) => {
  const [currentSavings, updateCurrentSavings] = useState(1000);
  const [yearlyContribution, updateYearlyContribution] = useState(100);
  const [expectedReturn, updateExpectedReturn] = useState(7);
  const [duration, updateDuration] = useState(5);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    props.onCalculate(
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration
    );
  };

  const resetHandler = (e) => {
    e.preventDefault();
    updateCurrentSavings(1000);
    updateYearlyContribution(100);
    updateExpectedReturn(7);
    updateDuration(5);
  };

  const currentSavingsHandler = (e) => {
    updateCurrentSavings(e.target.value);
  };

  const yearlyContributionHandler = (e) => {
    updateYearlyContribution(e.target.value);
  };

  const expectedReturnHandler = (e) => {
    updateExpectedReturn(e.target.value);
  };

  const durationHandler = (e) => {
    updateDuration(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={currentSavingsHandler}
            value={currentSavings}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={yearlyContributionHandler}
            value={yearlyContribution}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={expectedReturnHandler}
            value={expectedReturn}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={durationHandler}
            value={duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
