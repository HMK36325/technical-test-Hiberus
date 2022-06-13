
export function formValidation({ values, isFromRegister = false }) {
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

    if (isFromRegister) {
        if (!values.password || values.password.charAt(0) === '') {
            errors.password = 'Password is required ⚠️'
        } else if (values.password.trim() === "") {
            errors.password = 'Password cant be blank ⚠️'
        }
    }

    return errors

}