import React from 'react';
import './new.css'
import new1 from '../../assets/img/new1.svg'
import new2 from '../../assets/img/new2.svg'
import new3 from '../../assets/img/new3.svg'
const New = () => {
    return (
        <div className='container'>
            <div className='hero-4'>
                <div className='texts-2'>
                    <h1>New Books</h1>
                </div>
                <div className='books'>
                    <div className='book'>
                        <img src={new1} alt=""/>
                        <h4>The Climate Book: <br/> The Facts and the <br/> Solutions</h4>
                        <p>by Greta Thunberg</p>
                    </div>
                    <div className='book-1'>
                        <img src={new2} alt=""/>
                        <h4>Rest Is Resistance: <br/> A Manifesto</h4>
                        <p>by Tricia Hersey</p>
                    </div>
                    <div className='book-2'>
                        <img src={new3} alt=""/>
                        <h4>A New Name: <br/> Septology VI-VII</h4>
                        <p>by Jon Fosse</p>
                    </div>
                </div>
            </div>
        </div>    );
};
export default New;
