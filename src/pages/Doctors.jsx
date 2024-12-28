import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors, loading } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Services</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Hair Treatment' ? navigate('/doctors') : navigate('/doctors/Hair Treatment')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Hair Treatment' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Hair Treatment</p>
          <p onClick={() => speciality === 'Hairstyles' ? navigate('/doctors') : navigate('/doctors/Hairstyles')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Hairstyles' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Hairstyles</p>
          <p onClick={() => speciality === 'Moroccan bath' ? navigate('/doctors') : navigate('/doctors/Moroccan bath')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Moroccan bath' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Moroccan bath</p>
          <p onClick={() => speciality === 'Facial' ? navigate('/doctors') : navigate('/doctors/Facial')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Facial' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Facial</p>
          <p onClick={() => speciality === 'Waxing' ? navigate('/doctors') : navigate('/doctors/Waxing')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Waxing' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Waxing</p>
          <p onClick={() => speciality === 'Massage' ? navigate('/doctors') : navigate('/doctors/Massage')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Massage' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Massage</p>
          <p onClick={() => speciality === 'Manicure & Pedicure' ? navigate('/doctors') : navigate('/doctors/Manicure & Pedicure')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Manicure & Pedicure' ? 'bg-[#E2E5FF] text-black' : ''}`}>Manicure & Pedicure</p>
          <p onClick={() => speciality === 'Additional Services' ? navigate('/doctors') : navigate('/doctors/Additional Services')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Additional Services' ? 'bg-[#E2E5FF] text-black' : ''}`}>Additional Services</p>
          <p onClick={() => speciality === 'Makeup' ? navigate('/doctors') : navigate('/doctors/Makeup')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Makeup' ? 'bg-[#E2E5FF] text-black' : ''}`}>Makeup</p>
          <p onClick={() => speciality === 'Packages' ? navigate('/doctors') : navigate('/doctors/Packages')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Packages' ? 'bg-[#E2E5FF] text-black' : ''}`}>Packages</p>

        </div>
        <>
          { loading ? (<div className='w-full flex justify-center'>
                        <h5 className='text-center mt-10'>
                          <BarLoader color="#5f6FFF"/>
                        </h5>
                      </div>
          ) 
          : 
          ( 
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))} 
          </div>
          )}
        </>
      </div>
    </div>
  )
}

export default Doctors