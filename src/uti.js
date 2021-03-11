//FUNCIONES ÚTILES 

//Función para comprobar el registro mediante regex
const checkError = (datosCheck) => {
    console.log('Hemos entrado');

    for(let field in datosCheck){

        switch (field) {
            case 'nombre':
                // eslint-disable-next-line
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(datosCheck[field])){
                    return 'El nombre introducido sólo puede contener letras';
                }
            break;

            case 'email':
                // eslint-disable-next-line
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field]) ){
                    return 'El email introducido no es correcto';
                }
                
            break;
            
            case 'password':
                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(datosCheck[field])){
                    return 'La contraseña debe contener 8 caracteres, mayúscula, minúscula, número y algún caracter especial';
                }
                
            break;
            
            default:
                console.log('Los datos que has introducido no son los corectos');
            break;
        }
    }
};
export default checkError;








