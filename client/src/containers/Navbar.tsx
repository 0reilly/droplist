import React from 'react'
import { useHistory } from "react-router-dom"
const Navbar = () => {
  let history = useHistory()
  const postJob = () => {
    history.push(`/post`)
  };
  return (
    <div className="row justify-content-end">
      <div className="col-3 mt-2"><h4 className="text-center">good WLB</h4></div>
      <div className="col-5 mt-2">
        <button onClick={ () => postJob() } className="btn" style={{background: '#b9b9b9'}}>Post a Job</button>
      </div>
    </div>
  )
}

export default Navbar
