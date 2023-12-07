export default (data)=>{
    let errors = {}
    if(!data.email.includes('@')){
        errors.e2 = 'El email debe incluir un @'
    }
    
    if (!data.email){
        errors.e1 = 'Debe ingresar un email'
    }
    
    if (data.email.length >35){
        errors.e3 = 'Menos de 35 caracteres'
    }
    
    if(!/\d/.test(data.password) ){
        errors.p1 = "Al menos debe tener un numero"
    }
    
    if(data.password.length < 6 || data.password.length > 10 ){
        errors.p2 = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;
    };

    
    