import React from "react";
import Input from "./input";

const header = () => {
  return (
    <>
      <header className='my-12 text-3xl primary-color'>
        <h1>
          <span className='font-bold'>Github</span> Jobs
        </h1>
      </header>
      <div className='background'>
        <Input>
          <button className="bg-blue-600 text-white px-6 py-2 rounded appearance-none">
            Search
          </button>
          </Input>
      </div>
    </>
  );
};

export default header;
