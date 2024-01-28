import React from 'react';

export default function Footer(){
    return(
        <div className='container-fluid' style={{ backgroundColor: "#DAF4ED" }}>
                    <div className='row p-5'>
                        <div className='col-md-3'>
                            <h3>Company</h3><br></br>
                            <p>Health Article</p>
                            <p>All Medicines</p>
                            <p>Need Help</p>
                            <p>FAQ</p>
                        </div>
                        <div className='col-md-3'>
                        <h3>Social</h3><br></br>
                        <div className='display-flex'>
                        <i className="bi bi-facebook fa-2x"></i>
                        <i className="bi bi-youtube fa-2x ms-2"></i>
                        <i className="bi bi-linkedin fa-2x ms-2"></i>
                        </div><br></br>
                        <p>Legal</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        </div>
                        <div className='col-md-3'>
                            <h3>Download Truemeds</h3><br></br>
                            <b>Manage your health with ease Download Truemeds today!</b>
                            <p>Get easy access to medicine refills, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p>
                            <i class="bi bi-google-play"></i>
                        </div>
                        <div className='col-md-3'>
                            <h3>Contact Us</h3><br></br>
                            <p>Our customer representative team is available 7 days a week from 9 am - 9 pm.</p><br></br>
                            <p>support@truemeds.in    08069808861</p>
                        </div>
                    </div>
                    <div className='row display-flex ms-4'>
                    <p><i class="bi bi-c-circle-fill"></i>2024 - Truemeds | All rights reserved     Our Payment Partners</p>
                    </div>
                </div>
    )
}