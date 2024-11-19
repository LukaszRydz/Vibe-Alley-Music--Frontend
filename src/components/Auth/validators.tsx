export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const passwordValidator = (password: string) => {
    if (password.length < 8) return 'Password must be at least 8 characters long'
    if (password.length > 16) return 'Password must be at most 16 characters long'
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter'
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter'
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number'
    if (!/[^a-zA-Z0-9]/.test(password)) return 'Password must contain at least one special character'

    return ''
}

export const emailValidator_withError = (email: string) => {
    if (!emailValidator(email)) return 'Invalid email address'
    return ''
}

export const cityValidator = (city: string) => {
    if (city.length < 2) return 'City name must be at least 2 characters long'
    if (city.length > 50) return 'City name must be at most 50 characters long'
    return ''
}

export const streetValidator = (street: string) => {
    if (street.length < 2) return 'Street name must be at least 2 characters long'
    if (street.length > 50) return 'Street name must be at most 50 characters long'
    return ''
}

export const postalCodeValidator = (postalCode: string) => {
    const re = /^[0-9]{2}-[0-9]{3}$/;
    if (!re.test(postalCode)) return 'Invalid postal code'
    return ''
}

export const phoneValidator = (phone: string) => {
    const re = /^[0-9]{9}$/;
    if (!re.test(phone)) return 'Invalid phone number'
    return ''
}

export const nameValidator = (name: string) => {
    if (name.length < 2) return 'Name must be at least 2 characters long'
    if (name.length > 50) return 'Name must be at most 50 characters long'
    return ''
}