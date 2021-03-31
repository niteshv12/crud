export default function validateInfo(value) {
    let error = {};

    if(!value.name.trim()) {
        errors.name = "Enter a name "
    }

    if(!value.email) {
        error.email = "Enter a Email "
    }else if(!/^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(value.email)) 
    {
        errors.email = "Email address is invalid"
    }

    if(!values.phone) {
        errors.phone = "Enter a Phone No."   
    }else if(values.phone.length < 10) {
        errors.phone = 'phone no. need to be 10 characters';
    }

    if(!value.address) {
        errors.address = "Enter a address"
    }else if(values.address.length < 100)
        errors.address = 'address required';
}