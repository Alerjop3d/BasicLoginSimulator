
const Users = []

function UserRegistration() {
    let NewUser = prompt("Ingrese un nombre de usuario para registrarse:");
    let IsHere = Users.includes(NewUser);
    if (IsHere == false){
        let edad = parseInt(prompt("¿Cuantos años tiene?"));
        if (edad >= 18) {
            Users.push(NewUser);
            alert("Usted ha sido registrado(a) exitosamente, bienvenido " + NewUser + "!");
            MonthAverage();
        }else{
            bandera = false;
            alert("No tiene edad suficiente para registrarte, vuelva cuando cumpla los 18.");
        }
    }else{
        alert('Este nombre ya se encuentra en uso, intente con otro nombre.');
        UserRegistration();
    }   
}


function LoginAndRegistration() {
    let username = prompt("Ingrese su nombre de usuario:");
    username = username.toLowerCase();
    const find = Users.indexOf(username);
    if (find !== -1) {
        alert("¡Bienvenido(a) " + username + "!");
        MonthAverage();
    } else {
        Register = confirm("Usuario no registrado,¿Desea registrarse?");
        if (Register == true){
            UserRegistration();
        } else if (Register == false) {
            bandera = false;
        }
    }
}

const Amounts = [];
function MonthAverage() {

    let Week1 = parseFloat(prompt("$primera semana"));
    let Week2 = parseFloat(prompt("$segunda semana"));
    let Week3 = parseFloat(prompt("$ tercera semana"));
    let Week4 = parseFloat(prompt("$ cuarta semana"));
    Amounts.push(Week1);
    Amounts.push(Week2);
    Amounts.push(Week3);
    Amounts.push(Week4);

    let suma = 0;
    for (let i = 0; i < Amounts.length; i++) {
        suma += Amounts[i]; 
    }

    alert("El promedio fue: " + suma/Amounts.length);
}

let bandera = true;
while (bandera) {
    let options = ["1  Entrar","2  Registrarse", "3  Salir"];
    const NewLineArray = options.join("\n");
    let select = prompt(NewLineArray) ;

    switch (select) {

        case "1":
            LoginAndRegistration();
            break;

        case "2":
            UserRegistration();
            break;

        case "3":
            bandera = false;
            alert("Nos vemos pronto.");
            break;

        default:
            alert("Opción inválida, intente nuevamente.");
            break;
    }
}


