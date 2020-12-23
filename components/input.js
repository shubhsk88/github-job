import React from "react";

const Input = ({
  classValue = "",
  children,
  space = "",
  icon,
  placeholder,
  idName,
}) => {
  
  return (
    <div
      className={`rounded-lg ${space} px-2 shadow-lg  bg-white  focus:border  focus:border-white items-center flex ${"classValue"}`}
    >
      <label className="pl-2" htmlFor={"idName"}>
        {icon}
      </label>
      <input
        type="text"
        className={`${classValue} appearance-none focus:outline-none  focus:border-none`}
        id={"idName"}
        placeholder={placeholder}
      />
      <div className="py-2">{children}</div>
    </div>
  );
};

export default Input;
