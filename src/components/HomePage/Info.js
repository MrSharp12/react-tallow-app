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
                        style={{ background: "var(--darkGrey", display: "inline-block", transform: "rotate(90deg)"}} 
                        />
                        
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="About" center />
                    <p className="text-lead text-muted my-3">Having skin issues most of her life, 
                    Meredith was intrigued to learn that tallow balm could soothe and treat a variety of skin ailments.
                    She had experimented with balm making in the past.
                    When she found out that her friend's son had severe eczema, 
                    she began to design different tallow balm blends to help his skin.</p>
                    <p className="text-lead text-muted my-3">Sharing her product with others, she saw first hand the benefits of tallow based skin products.
                    And now she can't wait to share them with you.</p>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
};

export default Info;