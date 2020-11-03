import React from "react";

const ContactUsForm = () => {
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

    const _handleSubmit = (e) => {
        e.preventDefault();
        let errCount = 0;
        Object.keys(formFields).map((field, i) => {
            errCount = _validateForm(field, formFields[field]) ? errCount + 1 : errCount;
        });
        if (errCount === 0) {
            console.log('eeeeeeeeeeeeeeeee', formFields);
        }
    };
};