import React from 'react';
import './Ganre.css'
import img8 from '../../assets/img/image 8.svg'
import img1 from '../../assets/img/image 8 (1).svg'
import img2 from '../../assets/img/image 8 (2).svg'
import img3 from '../../assets/img/image 8 (3).svg'
import img4 from '../../assets/img/image 8 (4).svg'
import img5 from '../../assets/img/image 8 (5).svg'
const Pages = () => {
    return (
        <div className='container'>
            <div className='hero-3'>
                <div className='texts-1'>
                    <h1>Genres</h1>
                    <p className='p-1'>View all</p>
                </div>
                <div className='blocks'>
                    <div className='block'>
                        <img src={img8} alt=""/>
                        <p>Sci-Fi</p>
                    </div>
                    <div className='block'>
                        <img src={img1} alt=""/>
                        <p>For kids</p>
                    </div>
                    <div className='block'>
                        <img src={img2} alt=""/>
                        <p>Psychology</p>
                    </div>
                    <div className='block'>
                        <img src={img3} alt=""/>
                        <p>Romantic</p>
                    </div>
                    <div className='block'>
                        <img src={img4} alt=""/>
                        <p>Detective</p>
                    </div>
                    <div className='block'>
                        <img src={img5} alt=""/>
                        <p>Finance</p>
                    </div>
                </div>
            </div>
        </div>
    );};
export default Pages;
