import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik'
import { Link } from "wouter";
import useUser from "hooks/useUser";

export default function Register({ setRegistered, isFromModal = false, user = '' }) {

    const { register } = useUser()

    return <div className="d-flex justify-content-center">
        <Formik
            initialValues={{ name: user.name, surname: user.surname, email: user.email, password: '' }}

            validate={values => {
                const errors = {}

                if (!values.name || values.name.charAt(0) === '') {
                    errors.name = 'Name is required ⚠️'
                } else if (values.name.trim() === "") {
                    errors.name = 'Name cant be blank ⚠️'
                }

                if (!values.surname || values.surname.charAt(0) === '') {
                    errors.surname = 'Surname is required ⚠️'
                } else if (values.surname.trim() === "") {
                    errors.surname = 'Surname cant be blank ⚠️'
                }

                if (!values.email) {
                    errors.email = 'Email is required ⚠️';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Email is not valid ⚠️';
                }


                if (!values.password || values.password.charAt(0) === '') {
                    errors.password = 'Password is required ⚠️'
                } else if (values.password.trim() === "") {
                    errors.password = 'Password cant be blank ⚠️'
                }

                return errors

            }}

            onSubmit={(values, { setFieldError, setSubmitting }) => {
                register({ values, setFieldError, setSubmitting, setRegistered })
            }}
        >
            {
                ({ errors, isSubmitting, touched }) =>
                    <Form className="mt-5 register-form">
                        <div className="input-form mb-3">
                            <label className="m-2">Name</label>
                            <Field
                                className={`form-control ${errors.name && touched.name ? 'error-input' : ''}`}
                                name="name"
                                type="text"
                                placeholder="Put here the name"
                            />
                            {errors.name && touched.name ? (
                                <span className="form-error">{errors.name}</span>) : null}
                        </div>
                        <div className="input-form mb-3">
                            <label className="m-2">Surname</label>
                            <Field
                                className={`form-control ${errors.surname && touched.surname ? 'error-input' : ''}`}
                                name="surname"
                                type="text"
                                placeholder="Put here the surname"
                            />
                            {errors.surname && touched.surname ? (
                                <span className="form-error">{errors.surname}</span>) : null}
                        </div>
                        <div className="input-form mb-3">
                            <label className="m-2">Email</label>
                            <Field
                                className={`form-control ${errors.email && touched.email ? 'error-input' : ''}`}
                                name="email"
                                type="text"
                                placeholder="Put here the email"
                            />
                            {errors.email && touched.email ? (
                                <span className="form-error">{errors.email}</span>) : null}
                        </div>
                        {!isFromModal && <div className="input-form mb-3">
                            <label className="m-2">Password</label>
                            <Field
                                className={`form-control ${errors.password && touched.password ? 'error-input' : ''}`}
                                name="password"
                                type="password"
                                placeholder="Put here the password"
                            />
                            {errors.password && touched.password ? (
                                <span className="form-error">{errors.password}</span>) : null}
                        </div>}
                        {errors.wrong && (
                            <span className="form-error">{errors.wrong}</span>)}
                        <Button type="submit" className="mt-3 mb-3 w-100 btn-dark bg-btn" disabled={isSubmitting}>
                            Registrarse
                        </Button>
                        <p className="text-center">Already have an account? <Link to="/login">Log In here...</Link></p>
                    </Form>
            }
        </Formik>
    </div>
}