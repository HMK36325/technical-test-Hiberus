import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from 'formik'
import FormInput from "components/FormInput";
import { formValidation } from "services/formValidation";
import useUser from "hooks/useUser";

export default function UpdateUserForm({ user, onUpdate }) {
    const { updateUser } = useUser()

    return <div className="d-flex justify-content-center">
        <Formik
            initialValues={{ name: user.name, surname: user.surname, email: user.email }}

            validate={values => formValidation({ values })}

            onSubmit={(values, { setFieldError, setSubmitting }) => {
                updateUser({ user: { id: user.id, name: values.name, surname: values.surname, email: values.email }, setFieldError, setSubmitting, onUpdate })
            }}
        >
            {
                ({ errors, isSubmitting, touched }) =>
                    <Form className="mt-5 register-form">
                        <FormInput errors={errors.name} touched={touched.name} label={'Name'} name={"name"} type={'text'} />
                        <FormInput errors={errors.surname} touched={touched.surname} label={'Surname'} name={"surname"} type={'text'} />
                        <FormInput errors={errors.email} touched={touched.email} label={'Email'} name={"email"} type={'text'} />
                        {errors.wrong && (
                            <span className="form-error">{errors.wrong}</span>)}
                        <Button type="submit" className="mt-3 mb-3 w-100 btn-success" disabled={isSubmitting}>
                            Guardar
                        </Button>
                    </Form>
            }
        </Formik>
    </div >
}