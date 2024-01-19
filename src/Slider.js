// import React, { Component } from 'react';
// import ReactCardCarousel from 'react-card-carousel';

// export default function MyCarousel() {
//     return (
//         <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
//             <div style={{
//                 height: '200px',
//                 width: '200px',
//                 paddingTop: '80px',
//                 textAlign: 'center',
//                 background: '#52C0F5',
//                 color: '#FFF',
//                 fontSize: '12px',
//                 textTransform: 'uppercase',
//                 borderRadius: '10px'
//             }}>
//                 First Card
//             </div>
//             <div style={{
//                 height: '200px',
//                 width: '200px',
//                 paddingTop: '80px',
//                 textAlign: 'center',
//                 background: '#52C0F5',
//                 color: '#FFF',
//                 fontSize: '12px',
//                 textTransform: 'uppercase',
//                 borderRadius: '10px'
//             }}>
//                 Second Card
//             </div>
//             <div style={{
//                 height: '200px',
//                 width: '200px',
//                 paddingTop: '80px',
//                 textAlign: 'center',
//                 background: '#52C0F5',
//                 color: '#FFF',
//                 fontSize: '12px',
//                 textTransform: 'uppercase',
//                 borderRadius: '10px'
//             }}>
//                 Third Card
//             </div>
//             <div style={{
//                 height: '200px',
//                 width: '200px',
//                 paddingTop: '80px',
//                 textAlign: 'center',
//                 background: '#52C0F5',
//                 color: '#FFF',
//                 fontSize: '12px',
//                 textTransform: 'uppercase',
//                 borderRadius: '10px'
//             }}>
//                 Fourth Card
//             </div>
//             <div style={{height: '200px',width: '200px',paddingTop: '80px',textAlign: 'center',background: '#52C0F5',color: '#FFF',fontSize: '12px',
//                 textTransform: 'uppercase',
//                 borderRadius: '10px'
//             }}>
//                 Fifth Card
//             </div>
//         </ReactCardCarousel>
//     );
// }
// comment

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MyCarousel() {

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
    return (
        <div>
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
    )
}