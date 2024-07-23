import React, { useState } from 'react';
import { ReactComponent as Image } from '../../asset/Images/img1.svg';
import style from './style.module.css';
import { SocialSection } from './social';
import emailjs from 'emailjs-com';

export const ContactBody = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch((err) => {
          console.log('FAILED...', err);
          alert('Failed to send the message. Please try again.');
        });
      };

    return (
        <main>
            <div className={style.container}>
                <div className={style.containerbox}>
                    <Image className={style.image} />
                    <div className={style.formcontainerbox}>
                        <div className={style.formcontainer}>
                            <div className={style.headingbox}>
                                <p>Contact</p>
                                <h1>Let's get in touch</h1>
                            </div>
                            <div className={style.formbox}>
                                <form className={style.formfield} onSubmit={handleSubmit}>
                                    <label>
                                        <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange} required />
                                    </label>
                                    <label>

                                        <input type="email" name="email" value={formData.email} placeholder='Email' onChange={handleChange} required />
                                    </label>
                                    <label>

                                        <textarea name="message" value={formData.message} placeholder='Message' onChange={handleChange} required></textarea>
                                    </label>
                                    <button className={style.button} type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <SocialSection />
                    </div>
                </div>
            </div>
        </main>
    );
};

