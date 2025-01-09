import React from 'react'

const CountriesCard = ({data,id}) => {  
  return (
    <div className='CountriesCard' key={id}>
        <img src={data?.flag} alt="flag" className="countryFlag" />
        <div className='CountriesCard_Title'>
            <p className='CountriesCard_Title_Name'>{data?.name}</p>
            <p className='CountriesCard_Title_Region'>{data?.region}</p>
        </div>
    </div>
  )
}
export default CountriesCard