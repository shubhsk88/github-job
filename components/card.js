import { IoEarthSharp } from 'react-icons/io'
import {AiOutlineClockCircle} from 'react-icons/ai'
const Card = () => {
    const { image, company, role, fullTime, city, lastUpdated } = props;
    return (
        <div className="p-4 rounded-lg shadow-lg">
            <div className="mr-16">
                <img src={image} className="object-contain w-64 h-64 rounded"/>
            </div>
            <div>{company}</div>
            <div>{role}</div>
            <div className="flex justify-around">

            {fullTime?<div className="p-4 text-blue-900 border border-blue-900">Full Time</div>:null}
                <div className="flex justify-around text-gray-400 ">
                    <div>
                        <IoEarthSharp />
                        <div className="mx-2">{city}</div>
                    </div>
                    <div>
                        <AiOutlineClockCircle />
                        <div className="mx-2">{lastUpdated}</div>
                    </div>


                </div>
                    
            </div>
        </div>
    )

}

export default Card;
