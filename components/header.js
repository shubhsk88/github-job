import React from "react";
import Input from "./input";

const header = ({ bg_image }) => {
  return (
    <>
      <div className='pb-2'>
        <h1>
          <span className='font-bold'>Github</span> Jobs
        </h1>
      </div>
      <div className={`${bg_image} flex just justify-start items-center`}>
        <Input />
      </div>
    </>
  );
};

export default header;
