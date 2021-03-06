import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from 'formik'
import { Link } from "wouter";
import useUser from "hooks/useUser";
import FormInput from "components/FormInput";
import { formValidation } from "services/formValidation";

export default function Register({ setRegistered }) {

    const { register } = useUser()

    return <div className="d-flex justify-content-center">
        <Formik
            initialValues={{ name: '', surname: '', email: '', password: '' }}

            validate={values => formValidation({ values, isFromRegister: true })}

            onSubmit={(values, { setFieldError, setSubmitting }) => {
                register({ values, setFieldError, setSubmitting, setRegistered })
            }}
        >
            {
                ({ errors, isSubmitting, touched }) =>
                    <Form className="mt-5 register-form">
                        <FormInput errors={errors.name} touched={touched.name} label={'Name'} name={"name"} type={'text'} />
                        <FormInput errors={errors.surname} touched={touched.surname} label={'Surname'} name={"surname"} type={'text'} />
                        <FormInput errors={errors.email} touched={touched.email} label={'Email'} name={"email"} type={'text'} />
                        <FormInput errors={errors.password} touched={touched.password} label={'Password'} name={"password"} type={'password'} />
                        {errors.wrong && (
                            <span className="form-error">{errors.wrong}</span>)}
                        <Button type="submit" className="mt-3 mb-3 w-100 btn-dark" disabled={isSubmitting}>
                            Registrarse
                        </Button>
                        <p className="text-center">Already have an account? <Link to="/login">Log In here...</Link></p>
                    </Form>
            }
        </Formik>
    </div >
}