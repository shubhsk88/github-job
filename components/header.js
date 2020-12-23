import React from "react";
import Input from "./input";
import { BsBriefcase } from "react-icons/bs";

const header = () => {
  return (
    <>
      <header className="my-12 text-3xl primary-color">
        <h1>
          <span className="font-bold">Github</span> Jobs
        </h1>
      </header>
      <div className="background">
        <Input
          classValue="w-4/5 p-2 h-4/5"
          space="w-3/5"
          icon={<BsBriefcase />}
          placeholder="Title, companies, expertise or benefits"
        >
          <button className="bg-blue-600 text-white px-6 py-2 rounded appearance-none">
            Search
          </button>
        </Input>
      </div>
    </>
  );
};

export default header;
