import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import {
  decreaseValue,
  increaseValue,
  resetValue,
  setInitialValue,
} from "../../redux/Count/countSlice";
import Recipes from "../Recipes/Recipes";
import SuperBtn from "../SuperBtn/SuperBtn";

const NewComponents = ({ children }) => {
  const [input, setInput] = useState("");
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(setInitialValue(+input));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const increaseCount = () => {
    dispatch(increaseValue());
  };

  const decreaseCount = () => {
    dispatch(decreaseValue());
  };
  const resetBtn = () => {
    dispatch(resetValue());
  };

  const someFoo = () => {
    console.log("someFoo");
  };

  if (count === null) {
    return (
      <div>
        <form onSubmit={handleForm}>
          <label>
            enter initial value
            <input type="number" value={input} onChange={handleChange}></input>
          </label>
          <button type="submit"> ok</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
        {children}
        <div>
          <span>{count}</span>
        </div>
        <SuperBtn
          onClick={resetBtn}
          title="reset"
          type="button"
          styles={{ backgroundColor: "red" }}
        />
        <SuperBtn
          handleClick={someFoo}
          title="open"
          type="button"
          styles={{ backgroundColor: "green" }}
        />
        <Recipes />
      </div>
    );
  }
};

export default NewComponents;
