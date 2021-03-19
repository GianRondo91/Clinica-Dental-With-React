import moment from 'moment';

//FUNCIONES ÚTILES 
const notEmptyOrWhitespace = (inputValue) => {
    return /^\s*$/.test(inputValue) ? 'Campo vacio' : null;
};

const onlyLetters = (inputValue) => {
    if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputValue)){
        return 'El campo sólo puede contener letras';
    };
};

// const onlyNumbers = (inputValue) => {
//     return /^\d*$/.test(inputValue) ? 'Número invalido' : null;
// };

const isDate = (inputValue) => {
    const date = moment(inputValue);
    return date.isValid() ? null : 'Fecha invalida';
}

const lettersAndNumbers = (inputValue) => {
    return /(\d|\w)/.test(inputValue) ? null : 'Campo vacio';
}

const isPhone = (inputValue) => {
    if(!/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/.test(inputValue)){
        return 'El número introducido no tiene el formato de un número telefonico.'
    }
} 
const isEmail = (inputValue) => {
    // eslint-disable-next-line
    if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(inputValue) ){
        return 'El email introducido no es correcto';
    }
}
//
const isPassword = (inputValue) => {
    if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(inputValue)){
        return 'La contraseña debe contener al menos 8 caracteres, mayúscula, minúscula, números y algún caracter especial.';
    }
}

const isTime = (inputValue) => {
    const date = moment(inputValue, 'HH:mm', true);
    return date.isValid() ? null : 'Hora invalida';
}

const validateField = (inputName, inputValue) => {
    //
    switch (inputName) {
        case 'name':
        case 'surname1':
        case 'reason':
            return onlyLetters(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'surname2':
            return onlyLetters(inputValue);
        // case 'age':
        //     return onlyNumbers(inputValue) && notEmptyOrWhitespace(inputValue);
        case 'birth':
            return isDate(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'address':
            return lettersAndNumbers(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'email':
            return isEmail(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'phone':
            return isPhone(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'password':
            return isPassword(inputValue) || notEmptyOrWhitespace(inputValue);
        case 'gender':
        case 'userType':
            return notEmptyOrWhitespace(inputValue);
        case 'time': 
            return isTime(inputValue);
        default:
            return null;
    }
};

//Devuelve un objeto donde cada propiedad es el campo del formulario y su valor, es su mensaje de error si lo hubiese.
const validateFields = (datosCheck) => {
    let results = {};

    //
    for (let field in datosCheck) {
        //
        results[field] = validateField(field, datosCheck[field]);
    }

    return results;
};

const isValid = (validationResults) =>{

    for (const field in validationResults) {
        const error = validationResults[field];
        if(error){
            return false;
        }
    }

    return true;
}

export {validateField,validateFields, isValid};








