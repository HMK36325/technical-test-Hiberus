import React from "react";
import { Field } from "formik";

export default function FormInput({ errors, touched, label, name, type }) {
    return <div className="input-form mb-3">
        <label className="m-2">{label}</label>
        <Field
            className={`form-control ${errors && touched ? 'error-input' : ''}`}
            name={name}
            type={type}
            placeholder={`Put here the ${name}`}
        />
        {errors && touched ? (
            <span className="form-error">{errors}</span>) : null}
    </div>
}