import { IoEarthSharp } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
const Card = () => {
  // const { image, company, role, fullTime, city, lastUpdated } = props;
  const fullTime = "hjhj";
  return (
    <div className="p-4 rounded-lg shadow bg-white flex">
      <div className="mr-8">
        <img
          src="https://images.unsplash.com/photo-1608483558820-9bb655559c0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
          className="object-contain w-32 h-32 rounded"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div>{"company"}</div>
        <div>{"role"}</div>

        <div className="flex justify-around  my-8 ">
          {fullTime ? (
            <div className="flex px-2 justify-center items-center rounded  text-blue-900 border border-blue-900">
              Full Time
            </div>
          ) : null}
          <div className="flex text-gray-400  justify-end flex-1">
            <div className="flex items-center">
              <IoEarthSharp />
              <div className="mx-2">{"city"}</div>
            </div>
            <div className="flex items-center">
              <AiOutlineClockCircle />
              <div className="mx-2">{"lastUpdated"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
