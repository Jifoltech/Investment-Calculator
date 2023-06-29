import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [userInput, updateUserInput] = useState({});

  const calculateHandler = (
    currentSavings,
    yearlyContribution,
    expectedReturn,
    duration
  ) => {
    updateUserInput({
      ...userInput,
      "current-savings": parseFloat(currentSavings),
      "yearly-contribution": parseFloat(yearlyContribution),
      "expected-return": parseFloat(expectedReturn),
      duration: parseFloat(duration),
    });
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)

    for (let i = 0; i < duration; i++) {
      const yearlyInterest =
        parseFloat(currentSavings) * (parseFloat(expectedReturn) / 100);

      currentSavings +=
        parseFloat(yearlyInterest) + parseFloat(yearlyContribution);

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: parseFloat(yearlyContribution),
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {Object.keys(userInput).length === 0 && (
        <p style={{ textAlign: "center" }}>no investment calculated yet</p>
      )}
      {Object.keys(userInput).length > 0 && (
        <Table
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
