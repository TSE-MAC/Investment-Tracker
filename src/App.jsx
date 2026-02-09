import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Result from "./components/Result.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 7,
    duration: 10,
  });
  const validInput= userInput.duration >=1

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
     { validInput && <Result input={userInput} />}
    </>
  );
}

export default App;
