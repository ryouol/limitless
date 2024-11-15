import React, { useState } from 'react';
import '../styles.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message sent:', formData);
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <h2>Roy Luo</h2>
                <p>Email: <a href="mailto:r55luo@uwaterloo.ca">r55luo@uwaterloo.ca</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/ee-royluo/" target="_blank" rel="noopener noreferrer">Roy's LinkedIn</a></p>

                <h2>Jacky Zhao</h2>
                <p>Email: <a href="mailto:pjzhao@stanford.edu">pjzhao@stanford.edu</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jacky-p-zhao/" target="_blank" rel="noopener noreferrer">Jacky's LinkedIn</a></p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message to Us</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="confidential-button">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
