import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './imageSlider.css'

function ImageSlider() {
    const url = [
        {
            url: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1716451684044.jpeg",
            alt: "rare-beauty-poster"
        },
        {
            url: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1717174339796.jpeg",
            alt: "Bobbi-brown-poster"
        },
        {
            url: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1716988916945.jpeg",
            alt: "Estee-Lauder-poster"
        },
        {
            url: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/theme/pictures/free/resize-w:1180/theme-image-1717431292616.jpeg",
            alt: "Kylee-Lipkit-poster"
        },
    ];

    return (
        <div id="image_slider_container">
            <Slide>
                {url.map((image, index) => (
                    <div className='each-slide' key={index}>
                        <div className='wrapper'>
                            <img src={image.url} alt={image.alt} />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export { ImageSlider }

