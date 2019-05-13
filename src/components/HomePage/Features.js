import React, { Component } from 'react';
import styled from 'styled-components';
import { FaMortarPestle, FaPlusSquare, FaLeaf } from 'react-icons/fa';

export default class Features extends Component {
    state = {
        features: [
            {
                id: 1,
                icon: <FaMortarPestle />,
                title: 'hand crafted',
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quos, accusamus.'
            },
            {
                id: 2,
                icon: <FaLeaf />,
                title: 'all natural',
                text: 'The finest ingredients, 100% grass fed cows.'
            },
            {
                id: 3,
                icon: <FaPlusSquare />,
                title: 'medicinal',
                text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quos, accusamus.'
            }
        ]
    };

    render() {
        return (
            <FeaturesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.features.map(item => {
                            return (
                                <div
                                    className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                                    key={item.id}>
                                    <div className="service-icon">
                                        {item.icon}
                                    </div>
                                    <div className="mt-3 text-capitalize">
                                        {item.title}
                                    </div>
                                    <div className="mt-3">
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </FeaturesWrapper>
        )
    }
}

const FeaturesWrapper = styled.section`
background: rgba(95, 183, 234, 0.5);
.service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
}
p {
    color: var(--darkGrey);
}
`;