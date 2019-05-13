import React from 'react';
import Title from '../Title';
const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us" />
                    <form
                        className="mt-5"
                        action="https://formspree.io/tallowbalmindy@gmail.com"
                        method="POST">
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Your Name Here"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="YourEmail@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Message Title"
                            />
                        </div>

                        <div className="form">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="10"
                                placeholder="Type Message Here"></textarea>
                        </div>

                        <div className="form-group mt-3">
                            <input
                                type="submit"
                                value="send"
                                className="form-control bg-primary text-white" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;