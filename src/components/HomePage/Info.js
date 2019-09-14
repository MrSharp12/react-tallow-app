import React from 'react';
import Title from '../Title';

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="About" center />
                        <p className="text-lead text-muted my-3">Tallow balm is a unique skincare product made
                                                                 from Simpson Family Farm's beyond organic, 100% grass-fed cows.
                                                                 Used for centuries to nourish and soothe a variety of skin conditions,
                                                                 tallow balm works well on dry chapped skin, rashes, burns, itching, wrinkles,
                                                             acne, eczema, psoriasis, razor burn, and more.</p>
                    </div>
                </div>
            </div>


        </section>
    )
};

export default Info;