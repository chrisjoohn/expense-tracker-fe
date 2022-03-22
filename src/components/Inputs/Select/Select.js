import { useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.select``;

const Option = styled.option``;

const Select = (props) => {
  const [inputPlaceholder, setInputPlaceHolder] = useState("");
  const { options, onChange, placeholder } = props;

  const changeHandler = (e) => {
    const value = e.target.value;
    setInputPlaceHolder(value);
  };

  return (
    <StyledSelect onChange={changeHandler}>
      <Option>{placeholder || "" + inputPlaceholder}</Option>
      {options &&
        options.map(({ value, placeholder }) => {
          return <Option value={value}>{placeholder}</Option>;
        })}
    </StyledSelect>
  );
};

export default Select;
