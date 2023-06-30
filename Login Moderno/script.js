const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    val = [false, false]

    // Evaluando el correo
    if(!(email.value.trim() == "")){  //Por si ingresan puros espacios
        if(email.value.includes("@"))
            {if(email.value.split("@")[0].length  > 1 && email.value.split("@")[1].length > 2)
                val[0] = true;
            else console.log("No tiene lado izquierdo o derecho");}
        else console.log("El campo no tiene @");
    }else console.log("No es campo vacio");
    // Evaluando contraseña
    if( !(email.value.trim() == "") && email.value.length > 4){
        val[1] = true;
    }

    if(val.includes(false))
    alert("Formulario incompleto o invalido");
    else
    alert("Iniciando Sessión");
    
});




