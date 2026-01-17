import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashbord() {
    const navigate = useNavigate();
    const isvalid = false;
    const goToProduct = () => {
         isvalid ? navigate('/product') : alert('not valid');
    }

  return (
    <div>
      <h1>Dashbord</h1>
      {/* <button onClick={() => navigate('/product')}>nextpage</button> */}
      <button onClick={goToProduct}>nextpage</button>
    </div>
  )
}

export default Dashbord
