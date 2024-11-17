import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="src/assets/imgs/carousel/banner-100-ano-renovamos-imagen-desktop.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="src/assets/imgs/carousel/banner-100-anos-desktop.webp" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="src/assets/imgs/carousel/banner-renovamos-imagen-desktop.webp" alt="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;
