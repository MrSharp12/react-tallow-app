import React from 'react';
import Title from '../Title';
import mereIMG from '../../images/mere.jpg';

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-5 my-5">
                        <img 
                        src={mereIMG} 
                        className="img-fluid img-thumbnail" 
                        alt="about"
                        style={{ background: "var(--darkGrey", transform: "rotate(90deg)"}} 
                        />
                        
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about" center />
                    <p className="text-lead text-muted my-3">Meredith is the best! Meredith is the best! Meredith is the best! Meredith is the best!</p>
            <p className="text-lead text-muted my-3">Meredith is the best! Meredith is the best! Meredith is the best! Meredith is the best!</p>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
};

export default Info;