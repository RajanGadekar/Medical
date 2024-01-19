import React from 'react';
import './App.css';
import Carousel from "react-multi-carousel";
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
                {/* <div className='row d-flex justify-content-center'>
                    <div className='w-75 center mt-5 mb-2 rounded p-2 border border-primary'>
                        <img className='ms-5' style={{ width: '328px' }} src={process.env.PUBLIC_URL + "/img/doc.jpg"}></img>
                        <img className='w-50 ms-5' src={process.env.PUBLIC_URL + "/img/doct.png"}></img>
                    </div>
                    <p className='text-center'><a href='#'><b>View Example</b></a> to compare and understand</p>
                </div>
                <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators m-0">
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner p-3">
                        <div class="carousel-item active">
                            <div class="card-wrapper container-sm d-flex  justify-content-around">
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/dwebbanner1.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around">
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/dwebbanner3.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/dwebbanner2.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around">
                                <div class="col-md-6 m-3">
                                    <img src="https://assets.truemeds.in/Images/dwebbanner2.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/dwebbanner3.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around">
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/tr:orig-true/mobikwik-500cashback.jpg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                                <div class="col-md-6 m-3 ">
                                    <img src="https://assets.truemeds.in/Images/dwebbanner3.jpeg?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-724" class="card-img-top" alt="..."></img>
                                </div>
                            </div>
                        </div>
                        
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> */}
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
                    <div className="card-wrapper container-sm  m-3 d-flex  justify-content-around">
                        <div class="card rounded p-3">
                        <h3>Some quick example text</h3>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title andSome quick example text to build on the card title and make up the bulk of the card's make up the bulk of the card's content.</p><br></br>Read More
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
export default Home;