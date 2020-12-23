import { IoEarthSharp } from "react-icons/io5";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useMemo } from 'react';
const Card = ({ job }) => {
  const { type, company_logo, company, title, created_at, location } = job;
  // const { image, company, role, fullTime, city, lastUpdated } = props;
  const fullTime = type === "Full Time";
  const dateInWords = useMemo(() => formatDistanceToNow(new Date(created_at)), [
    created_at,
  ]);
  return (
    <div className="p-4 rounded-lg shadow bg-white flex">
      <div className="mr-8">
        <img src={company_logo} className="object-contain w-32 h-32 rounded" />
      </div>
      <div className="flex-1 flex flex-col">
        <div>{company}</div>
        <div>{title}</div>

        <div className="flex justify-around  my-8 ">
          {fullTime ? (
            <div className="flex px-2 justify-center items-center rounded  text-blue-900 border border-blue-900">
              Full Time
            </div>
          ) : null}
          <div className="flex text-gray-400  justify-end flex-1">
            <div className="flex items-center">
              <IoEarthSharp />
              <div className="mx-2">{location}</div>
            </div>
            <div className="flex items-center">
              <AiOutlineClockCircle />
              <div className="mx-2">{dateInWords}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
