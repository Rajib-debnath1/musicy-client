import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {

    const carouselItems = [
        <div>
            <img src="https://img.freepik.com/free-psd/music-banner-template-theme_23-2148542763.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.2.1371786472.1680197785&semt=ais" alt="Image 1" />
            
        </div>,
        <div>
            <img src="https://img.freepik.com/free-psd/gradient-music-concert-landing-page-template_23-2149959373.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.2.1371786472.1680197785&semt=ais" alt="Image 2" />
        </div>,
        <div>
            <img src="https://img.freepik.com/premium-psd/neon-horizontal-banner-electronic-music-with-female-dj_23-2148979689.jpg?size=626&ext=jpg&uid=R105791437&ga=GA1.2.1371786472.1680197785&semt=ais" alt="Image 3" />
        </div>,
        // Add more items as needed
    ];


    return (
        <>
            <Carousel>
                {carouselItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </Carousel>
        </>
    );
};

export default Banner;