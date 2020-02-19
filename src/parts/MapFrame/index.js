import React from 'react';

const MapFrame = ({
    width="100%",
    height=450,
}) => {
    
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.78166664971457!2d37.8559439531341!3d55.73672719501961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aca40dff45545%3A0xa5f79c10728057eb!2z0KDQntCh0KLQkNCa0KE!5e0!3m2!1sru!2sru!4v1570597115605!5m2!1sru!2sru"
            width={width}
            height={height}
            frameborder="0"
            style={{border: 0}}
            allowfullscreen=""
        ></iframe>
    );
};

export default MapFrame;