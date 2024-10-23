import React, { useContext } from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctor = () => {

    const navigate = useNavigate();
    const {doctors}  = useContext(AppContext)


  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctor to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply Browse through our extensive List of Trusted dcotors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-200'>
            <img className="bg-[#e4e4e7]" src={item.image} alt="" />
            <div className="p-4 ">
              <div className='flex items-center gap-2 text-sm text-center text-[#4CAF50]'>
                <p className="w-2 h-2 bg-online rounded-full "></p><p  text-online >Avaliable</p>
              </div>
              <p className="text-gray-900 text-lg  font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm ">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className="bg-[#E3F2FD] px-12 py-3 rounded-full mt-10">More</button>
    </div>
  );
};

export default TopDoctor;
