import React from 'react';

const Carousel = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide" style={{ height: '100vh' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100vh' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100vh' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100vh' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;
