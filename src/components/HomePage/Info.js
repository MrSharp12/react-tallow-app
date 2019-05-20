import React from 'react';
import Title from '../Title';
import aboutIMG from '../../images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img 
                        src={aboutIMG} 
                        className="img-fluid img-thumbnail" 
                        alt="about image"
                        style={{ background: "var(--darkGrey"}} 
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