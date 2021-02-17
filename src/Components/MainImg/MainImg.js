import React from 'react';
import MainImg from '../../Assest/MainImg.png'

const MainImage = () => {
    return (
        <div className='col-12 home_container text-center'>
            <div className='logo'>
               <img src={MainImg} className="mainImg" alt="MainImg" />
            </div>   

        </div>
    );
}

export default MainImage;