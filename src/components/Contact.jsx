import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formMessage, setFormMessage] = useState({ text: '', color: 'red' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setFormMessage({ text: 'All fields are required!', color: 'red' });
            return;
        }
        if (!validateEmail(email)) {
            setFormMessage({ text: 'Please enter a valid email address!', color: 'red' });
            return;
        }

        // Simulate success
        setFormMessage({ text: 'Message sent successfully!', color: 'green' });
        
        // Here you would actually send the form data
        // e.g., using fetch() to an API endpoint
        
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setFormMessage({ text: '', color: 'red' });
        }, 2000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                {/* ... (Your social links HTML) ... */}
                <div className="social-links">
                    <h2>Connect with me</h2>
                    {/* ... (Your icon links) ... */}
                </div>

                <div className="contact-form-container">
                    <h2>Contact Me</h2>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                        {formMessage.text && (
                            <p id="form-message" style={{ color: formMessage.color, display: 'block' }}>
                                {formMessage.text}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;