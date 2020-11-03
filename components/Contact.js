import React from "react";
import { Toast } from 'react-bootstrap';
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";
import api from '../utils/api';

const Contact = () => {
  const [formFields, setFormfields] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [show, setShow] = React.useState(false);

  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp = /^[0-9]{10}$/;

  const isEmpty = (value) => {
    if (value === '' || value === null || value === undefined) {
      return true;
    }
    return value.trim() === '';
  };

  const _validateForm = (field, value) => {
    let hasError = false;
    const isEmptyValue = isEmpty(value);
    if (field === 'name') {
      if (isEmptyValue) {
        hasError = true;
        setErrors((prev) => ({
          ...prev,
          name: 'This field is required',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          name: ''
        }));
      }
    }
    if (field === 'email') {
      if (isEmptyValue || !emailRegExp.test(value)) {
        hasError = true;
        setErrors((prev) => ({
          ...prev,
          email: isEmptyValue ? 'Email is required' : 'Email is invallid',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          email: '',
        }));
      }
    }
    if (field === 'phone') {
      if (isEmptyValue || !phoneRegExp.test(value)) {
        hasError = true;
        setErrors((prev) => ({
          ...prev,
          phone: isEmptyValue ? 'Phone number is required' : 'Phone number is invalid',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          phone: '',
        }));
      }
    }
    if (field === 'subject') {

    }
    if (field === 'message') {

    }
    return hasError;
  };

  const _handleChange = (e) => {
    const {value, name} = e.target;
    setFormfields((prev) => ({
      ...prev,
      [name]: value,
    }));
    _validateForm(name, value);
  };

  const _resetForm = () => {
    setFormfields((prev) => ({
      ...prev,
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }));
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    let errCount = 0;
    Object.keys(formFields).map((field, i) => {
      errCount = _validateForm(field, formFields[field]) ? errCount + 1 : errCount;
    });
    console.log('ere', errCount);
    if (errCount === 0) {
      const reqObj = {
        name: formFields.name.trim(),
        email: formFields.email.trim(),
        phone: formFields.phone.trim(),
        subject: formFields.subject.trim(),
        message: formFields.message.trim(),
      };
      api.post('/api/contactus', reqObj).then((res) => {
        setShow(true);
        _resetForm();
      }).catch((err) => {

      });
    }
  };

  return (
    <section className="contact-one" id="contact">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      {/* <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '200px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        > */}
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <strong className="mr-auto">Success</strong>
            </Toast.Header>
            <Toast.Body>Your message has been sent succesfully</Toast.Body>
          </Toast>
        {/* </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                titleText="Contact Now"
                paraText={`Have Question? Write \n a Message`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name="name" id="name" onChange={_handleChange} value={formFields.name} />
                  {errors.name && errors.name !== '' && (
                    <em style={{color: '#fd632f'}}>{errors.name}</em>
                  )}
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email Address" name="email" id="email" onChange={_handleChange} value={formFields.email} />
                  {errors.email && errors.email !== '' && (
                    <em style={{color: '#fd632f'}}>{errors.email}</em>
                  )}
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" name="subject" id ="subject" onChange={_handleChange} value={formFields.subject} />
                  {errors.subject && errors.subject !== '' && (
                    <em style={{color: '#fd632f'}}>{errors.subject}</em>
                  )}
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Phone Number" name="phone" id="phone" onChange={_handleChange} value={formFields.phone} />
                  {errors.phone && errors.phone !== '' && (
                    <em style={{color: '#fd632f'}}>{errors.phone}</em>
                  )}
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    id="message"
                    onChange={_handleChange}
                    value={formFields.message}
                  ></textarea>
                  {errors.message && errors.message !== '' && (
                    <em style={{color: '#fd632f'}}>{errors.name}</em>
                  )}
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn" onClick={_handleSubmit}>
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <img src={ContactImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
