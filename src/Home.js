import React from 'react';
import './App.css';
import Carousel from "react-multi-carousel";
import Footer from './Footer';
import "react-multi-carousel/lib/styles.css";

function Home() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    const responsive1 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }
    const responsive2 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div id='one' className='text-center w-100'>
                        <img class='img' src={process.env.PUBLIC_URL + "/img/tab1.svg"}></img>
                        <img class='img1' src={process.env.PUBLIC_URL + "/img/tab.svg"}></img>
                        <h2>Say GoodBye to high medicine prices</h2>
                        <p>Compare prices and save upto 51%</p>
                        <div className="input-group">
                            <div className='se w-25'><button className='btn btn-primary w-100 m-1'>Delivery</button></div>
                            <input type="search" class="form-control rounded shadow" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-primary" data-mdb-ripple-init>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid p-4'>
                <Carousel responsive={responsive}>
                    <div class="card-wrapper container-lg d-flex  justify-content-around">
                        <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="card-wrapper container-lg d-flex  justify-content-around">
                        <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="card-wrapper container-lg d-flex  justify-content-around">
                        <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="card-wrapper container-lg d-flex  justify-content-around">
                        <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="card-wrapper container-lg d-flex  justify-content-around">
                        <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                    </div>
                </Carousel>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    {/* <div className='col-md-6'> */}
                    <div class="col-md-6 card-wrapper container-lg d-flex  justify-content-around">
                        <img src={process.env.PUBLIC_URL + "/img/pop.png"} class="card-img-top" alt="..."></img>
                    </div>
                    {/* </div> */}
                    {/* <div className='col-md-6'> */}
                    <div class="col-md-6 card-wrapper container-lg d-flex  justify-content-around">
                        <img src={process.env.PUBLIC_URL + "/img/pop1.png"} class="card-img-top" alt="..."></img>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className='container-fluid p-5' style={{ backgroundColor: "#DAF4ED" }}>
                <b className='m-3'><h3>Popularly bought items</h3></b>
                <Carousel responsive={responsive1}>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card p-3 box-shadow border-0 shadow-lg rounded">
                            <div style={{ width: "100px", height: "23px", backgroundColor: "green", borderRadius: '0px 40px 40px 0px', float: 'left', marginTop: '20px', textAlign: 'center' }}><b className='text-white'>20%OFF</b></div>
                            <img class="card-img-top m-3" src={process.env.PUBLIC_URL + "/img/UBI.webp"} alt="Card image cap"></img>
                            <p>Name of Tablet1</p>
                            <div class="card-footer d-flex">
                                <p class="card-text">MRP</p><b>$300</b><button className='btn btn-primary float-end m-3 mt-0'>Add</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='container-fluid p-3'>
                <b className='m-3'><h3>Health Articles</h3></b>
                <Carousel responsive={responsive2}>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card rounded-lg">
                            <img class="card-img-top" src="https://truemedsblog.in/wp-content/uploads/2023/12/air-pollution-impact-on-health.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-500" alt="Card image cap"></img>
                            <div class="card-body">
                                <b><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br></br>Read More</b>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card rounded-lg">
                            <img class="card-img-top" src="https://truemedsblog.in/wp-content/uploads/2023/12/air-pollution-impact-on-health.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-500" alt="Card image cap"></img>
                            <div class="card-body">
                                <b><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br></br>Read More</b>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card rounded-lg">
                            <img class="card-img-top" src="https://truemedsblog.in/wp-content/uploads/2023/12/air-pollution-impact-on-health.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-500" alt="Card image cap"></img>
                            <div class="card-body">
                                <b><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br></br>Read More</b>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card rounded-lg">
                            <img class="card-img-top" src="https://truemedsblog.in/wp-content/uploads/2023/12/air-pollution-impact-on-health.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-500" alt="Card image cap"></img>
                            <div class="card-body">
                                <b><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br></br>Read More</b>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card rounded-lg">
                            <img class="card-img-top" src="https://truemedsblog.in/wp-content/uploads/2023/12/air-pollution-impact-on-health.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-500" alt="Card image cap"></img>
                            <div class="card-body">
                                <b><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br></br>Read More</b>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card rounded-lg">
                            <img class="card-img-top" src="https://truemedsblog.in/wp-content/uploads/2023/12/air-pollution-impact-on-health.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-500" alt="Card image cap"></img>
                            <div class="card-body">
                                <b><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br></br>Read More</b>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='container-fluid p-5'>
                <b className='m-3'><h3>What our customers have to say</h3>Customer Testimonials</b>
                <Carousel responsive={responsive2}>
                    <div className="card-wrapper container-sm  m-2 d-flex  justify-content-around">
                        <div class="card rounded p-3">
                            <h3>Some quick example text</h3>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title andSome quick example text to build on the card title and make up the bulk of the card's make up the bulk of the card's content.</p><br></br>Read More
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm  m-2 d-flex  justify-content-around">
                        <div class="card rounded p-3">
                            <h3>Some quick example text</h3>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title andSome quick example text to build on the card title and make up the bulk of the card's make up the bulk of the card's content.</p><br></br>Read More
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm  m-2 d-flex  justify-content-around">
                        <div class="card rounded p-3">
                            <h3>Some quick example text</h3>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title andSome quick example text to build on the card title and make up the bulk of the card's make up the bulk of the card's content.</p><br></br>Read More
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm  m-2 d-flex  justify-content-around">
                        <div class="card rounded p-3">
                            <h3>Some quick example text</h3>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title andSome quick example text to build on the card title and make up the bulk of the card's make up the bulk of the card's content.</p><br></br>Read More
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper container-sm  m-2 d-flex  justify-content-around">
                        <div class="card rounded p-3">
                            <h3>Some quick example text</h3>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title andSome quick example text to build on the card title and make up the bulk of the card's make up the bulk of the card's content.</p><br></br>Read More
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='container-fluid p-5 text-center rounded'  style={{ backgroundColor: "#DAF4ED" }}>
            <h2>FAQs</h2>
                    <div class="accordion p-5 rounded m-3" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Accordion Item #4
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>    
                    </div>
                    <button className='btn btn-light border-primary w-25'><b>View more</b></button>
                </div>

                <div className='container text-center mt-4'>
                    <h3 className='text-primary'>Order medicines online from Truemeds at the best prices.<br></br>An online pharmacy you can trust.</h3>
                    <img src='https://www.truemeds.in/_next/static/media/H1wWeb.354c7e71.svg'></img>
                </div>
                <hr></hr>
                <Footer/>
        </div>
    )
}
export default Home;


