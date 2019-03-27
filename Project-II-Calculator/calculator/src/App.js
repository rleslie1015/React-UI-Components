import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import OperatorButton from "./components/ButtonComponents/OperatorButton";
const App = () => {
  return (
    
    <div>
      <CalculatorDisplay text="735713" />
      <ActionButton text="clear"/>
      <div>
    <NumberButton text="7"/>
      <NumberButton text="8"/>
      <NumberButton text="9"/>
      </div>
      <div>
    <NumberButton text="4"/>
      <NumberButton text="5"/>
      <NumberButton text="6"/>
      </div>
      <div>

<NumberButton text="1"/>
      <NumberButton text="2"/>
      <NumberButton text="3"/>
      </div>

      <ActionButton buttonStyle="actionButton" text="0"/>
      <OperatorButton buttonStyle="operatorButton" text="/" />
      <OperatorButton buttonStyle="operatorButton" text="*" />
      <OperatorButton buttonStyle="operatorButton" text="-" />
      <OperatorButton buttonStyle="operatorButton" text="+" />
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
