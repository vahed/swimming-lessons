import React, { useState } from 'react';
import "./carousel.css";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        id: 1,
        src: require("../images/swim23.jpg"),
        altText: 'Slide 1',
        caption: 'Choose The Class Which is Suitable For You'
    },
    {
        id: 2,
        src: require("../images/swim30.jpg"),
        altText: 'Slide 2',
        caption: 'Choose The Class Which is Suitable For You'
    },
    {
        id: 3,
        src: require("../images/swim31.jpg"),
        altText: 'Slide 3',
        caption: 'Choose The Class Which is Suitable For You'
    }
];

const ImageCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img className="image-responsive" src={item.src} alt={item.altText} />
                <CarouselCaption className="font_0" captionText={item.altText} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
                      max-width: 100%;
                      height: auto;
                      background: black;
                    }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default ImageCarousel;