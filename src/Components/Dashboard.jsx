import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='border-top border-bottom py-2 my-3'>
        <h1 className='text-center'>Account Summary</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
        <Link to='/shipment' className='child card p-3 border d-flex align-items-center custom-card-shadow neon-card'>
          <i className='fas fa-truck fa-3x me-3 neon-icon'></i>
          <h3 className='mb-0 neon-text'>Total Shipments</h3>
        </Link>
        <div className='child card p-3 border d-flex align-items-center custom-card-shadow neon-card'>
          <i className='fas fa-person-half-dress fa-3x me-3 neon-icon'></i>
          <h3 className='mb-0 neon-text'>Delivered</h3>
        </div>
        <div className='child card p-3 border d-flex align-items-center custom-card-shadow neon-card'>
          <i className='fas fa-arrow-rotate-left fa-3x me-3 neon-icon'></i>
          <h3 className='mb-0 neon-text'>Returns</h3>
        </div>
        <div className='child card p-3 border d-flex align-items-center custom-card-shadow neon-card'>
          <i className='far fa-address-card fa-3x me-3 neon-icon'></i>
          <h3 className='mb-0 neon-text'>NCI</h3>
        </div>
        <div className='child card p-3 border d-flex align-items-center custom-card-shadow neon-card'>
          <i className='fas fa-book fa-3x me-3 neon-icon'></i>
          <h3 className='mb-0 neon-text'>Total COD (Rs)</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
