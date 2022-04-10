import React from 'react'
import {Carousel} from 'react-bootstrap';
import '../App.css'

type Props = {}

const Slide = (props: Props) => {
    return (
        <>
            <div className="slide">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tmluxury.vn/wp-content/uploads/banner-thoi-trang-nam-tm-luxury.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Slide