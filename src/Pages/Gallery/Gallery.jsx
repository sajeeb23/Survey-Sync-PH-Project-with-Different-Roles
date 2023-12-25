
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageGallery = () => {
    const images = [

        { src: 'https://i.ibb.co/KsdqDw7/326248215-746290413238042-3729013200048524231-n.jpg', alt: 'img2' },
        { src: 'https://i.ibb.co/XV29B1c/318751873-681726213579329-4491605391084508427-n.jpg', alt: 'img3' },
        { src: 'https://i.ibb.co/8bVQN3H/249134328-1523788684628086-3893466285272287559-n.jpg', alt: 'img4' },
        { src: 'https://i.ibb.co/MSFZZP7/319844389-588274376635134-6084722113514521099-n.jpg', alt: 'img5' },
        { src: 'https://i.ibb.co/Prdzrmp/271725482-1578266615846959-888529536845375843-n.jpg', alt: 'img6' },
        { src: 'https://i.ibb.co/WKvj1Fk/238913976-1472398259767129-390462444925198137-n.jpg', alt: 'img7' },
        { src: 'https://i.ibb.co/hZ4CPkT/238757302-1472395096434112-332340883877947353-n.jpg', alt: 'img8' },
        { src: 'https://i.ibb.co/YySPwqC/674003b2-962d-4b02-988f-bc1e3945a29f.png', alt: 'img1' },
        { src: 'https://i.ibb.co/cTsRhvC/162502302-1374529766220646-7887868068137442997-n.jpg', alt: 'img9' },
        { src: 'https://i.ibb.co/xf2Czf0/af66b30d-606c-49b9-b7c0-890d248eef03.jpg', alt: 'img10' },
    ];

    return (
        <div className='pt-28'>
            
            <h1 className="text-4xl text-center font-semibold">Image Gallery</h1>
            <hr className='my-10 mx-40 opacity-50' />
            <Carousel>
                {images.map((image, index) => (
                    <div className='w-2/4 item-center mx-auto' key={index}>
                        <img src={image.src} className="w-48 h-2/6" alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageGallery;
