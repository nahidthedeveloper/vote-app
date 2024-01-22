import * as yup from 'yup'

export const signupSchema = yup
    .object({
        email: yup.string()
            .required('This field is required.')
            .email('Email must be a valid email'),
        student_id: yup.string()
            .required('This field is required.')
            .test('len', 'Student ID must be 11 or 16 digit.', (value) => {
                return value && (value.length === 11 || value.length === 16)
            })
            .typeError('This field is required.'),
        password: yup.string()
            .required('This field is required.')
            .min(8, 'Password must be at least 8 characters')
            .max(32, 'Password must be at most 32 characters'),
        confirm_password: yup.string()
            .required('This field is required.')
            .oneOf([yup.ref('password'), null], 'Password does not match.'),
    })
    .required()