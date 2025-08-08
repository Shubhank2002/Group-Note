import React from 'react'
import './Styles/DashboardStyles.css'

const Dashboard = () => {
  return (
    <div className='container'>
        <div>
            <img src="/Dashboard_image.png" alt="" className='image'/>
        </div>
        <h1 id='heading'>Pocket Notes</h1>
        <p className='para'>Send and receive messages without keeping your phone online. <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        <div className='footer'>
            <div>
                <img src="/Footer_symbol.png" alt="" style={{width:'17px', height:'21px'}}/>
            </div>
            <p>end-to-end encrypted</p>
        </div>
    </div>
  )
}

export default Dashboard
