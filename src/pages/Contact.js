import { React, useState } from 'react';
import Header from '../components/Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Formik, useField } from 'formik';
import * as Yup from "yup";

const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState('+63 935 XXX XXXX');
    const [email, setEmail] = useState('mallarialjayXX@xxxxx.xxx');

    const DisplayPhoneNumber = (event) => {
        setPhoneNumber('+63 945 2063639');
    }

    const DisplayEmail = (event) => {
        setEmail('mallarialjay07@gmail.com');
    }

    const Message = ({label, ...props}) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input> and alse replace ErrorMessage entirely.
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
      };

    return (
        <div className="App Contact">
            <Header />
            <section id="section5" class="bg-primary">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 className="section-heading">Let's Get In Touch!</h2>
                            <p className='contact-p'>
                                Ready to start your new project with me? Then! Give me a call or send me an email and I will get back to you.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <section>
                                <div className="single_contact_info">
                                    <h3>Call Me</h3>
                                    <p><a href="#" onClick={DisplayPhoneNumber}>{phoneNumber}</a></p>
                                </div>

                                <div className="single_contact_info">
                                    <h3>Email Me</h3>
                                    <p><a href="#" onClick={DisplayEmail}>{email}</a></p>
                                </div>

                                <div className="single_contact_info">
                                    <h3>Address</h3>
                                    <p>Region III - Central Luzon, Philippines</p>
                                </div>
                            </section>
                        </Col>
                        <Col lg="9">
                            <div class="disabled_parent">
                                <div className='disabled_whole'> <p className='text-center'>Coming Soon</p> </div>
                                <Formik
                                initialValues={{ email: "" }}
                                onSubmit={async values => {
                                    await new Promise(resolve => setTimeout(resolve, 500));
                                    alert(JSON.stringify(values, null, 2));
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                    .email()
                                    .required("Required")
                                })}
                                >
                                {props => {
                                    const {
                                    values,
                                    touched,
                                    errors,
                                    dirty,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset
                                    } = props;
                                    return (
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <Row>
                                        <Col lg="6">
                                        <label htmlFor="name" style={{ display: "block" }}>
                                        </label>
                                        <input
                                        id="name"
                                        placeholder="Enter your name"
                                        type="text"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.name && touched.name
                                            ? "text-input error"
                                            : "text-input"
                                        }
                                        />
                                        {errors.name && touched.name && (
                                        <div className="input-feedback">{errors.name}</div>
                                        )}

                                        <label htmlFor="email" style={{ display: "block" }}>
                                        </label>
                                        <input
                                        id="email"
                                        placeholder="Enter your email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.email && touched.email
                                            ? "text-input error"
                                            : "text-input"
                                        }
                                        />
                                        {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                        )}

                                        <label htmlFor="subject" style={{ display: "block" }}>
                                        </label>
                                        <input
                                        id="subject"
                                        placeholder="Enter subject"
                                        type="text"
                                        value={values.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.subject && touched.subject
                                            ? "text-input error"
                                            : "text-input"
                                        }
                                        />
                                        {errors.subject && touched.subject && (
                                        <div className="input-feedback">{errors.subject}</div>
                                        )}
                                        </Col>

                                        <Col lg="6" className='last-form'>
                                            <Message
                                                label=""
                                                name="message"
                                                rows="6"
                                                placeholder="Message Texts...."
                                            />

                                            <button type="submit" className="btn-primary" disabled={true}>
                                            Submit
                                            </button>
                                        </Col>
                                        </Row>
                                    </form>
                                    );
                                }}
                                </Formik>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Contact;