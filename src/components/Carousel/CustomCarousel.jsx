import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/imgs/banner-100-ano-renovamos-imagen-desktop.jpg';
import banner2 from '../../assets/imgs/banner-100-anos-desktop.jpg';
import banner3 from '../../assets/imgs/banner-renovamos-imagen-desktop.jpg';

const CustomCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={banner1} alt="Banner 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={banner2} alt="Banner 2" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={banner3} alt="Banner 3" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;
