import React from 'react';
import {
  useHistory
} from 'react-router-dom';

const HomeNav = () => {
  let history = useHistory();
  const goHome = () => {
    history.push(`/`)
  };

  return (
    <div className="row justify-content-end">
      <div className="col-2 mt-2"><h4 className="text-center">Post a Job</h4></div>
      <div className="col-5 mt-2">
        <button onClick={ () => goHome() } className="btn" style={{background: '#b9b9b9'}}>Back</button>
      </div>
    </div>
  );
};

export default HomeNav;
