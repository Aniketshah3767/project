import React, { useContext, useState, useEffect } from "react"; // Added useEffect
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]); // used to view doctors by their speciality
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate(); // Added navigate function

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]); // Added useEffect dependencies

  return (
    <div>
      <p className="text-gray-600">Browse through the Doctors Speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600 ">
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-[#E0E0E0] rounded transition-all cursor-pointer ${speciality === "General Physician" ? "bg-[#E8EAF6] text-[#000000]" : ""}`}>General physician</p>
          
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-[#E0E0E0] rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-[#E8EAF6] text-[#000000]" : ""}`}>Gynecologist</p>
          
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-[#E0E0E0] rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-[#E8EAF6] text-[#000000]" : ""}`}>Dermatologist</p>
          
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-[#E0E0E0] rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-[#E8EAF6] text-[#000000]" : ""}`}>Pediatricians</p>
          
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-[#E0E0E0] rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-[#E8EAF6] text-[#000000]" : ""}`}>Neurologist</p>
          
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94px] sm:w-auto pl-3 py-1.5 pr-16 border border-[#E0E0E0] rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-[#E8EAF6] text-[#000000]" : ""}`}>Gastroenterologist</p>
        </div>                                  

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-200"
            >
              <img className="bg-[#e4e4e7]" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-[#4CAF50]">
                  <p className="w-2 h-2 bg-online rounded-full "></p>
                  <p>Avaliable</p>
                </div>
                <p className="text-[#212121] text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-[#212121] text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
