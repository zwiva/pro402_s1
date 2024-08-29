const data = {
    rut: "",
    nombres: "",
    apellidos: "",
    direccion: "",
    ciudad: "",
    telefono: "",
    email: "",
    fechaDeNacimiento: "",
    estadoCivil: "",
    comentario: ""
}

const usuariosRegistrados = [
    {
        rut: "8.765.432-1",
        nombres: "Carlos",
        apellidos: "Pérez González",
        direccion: "Avenida Las Condes 1234",
        ciudad: "Santiago",
        telefono: "987654321",
        email: "carlos.perez@example.com",
        fechaDeNacimiento: "1990-05-14",
        estadoCivil: "Soltero",
        comentario: "Interesado en recibir más información sobre productos."
    },
    {
        rut: "9.876.543-2",
        nombres: "María",
        apellidos: "López Fernández",
        direccion: "Calle Los Aromos 567",
        ciudad: "Valparaíso",
        telefono: "912345678",
        email: "maria.lopez@example.com",
        fechaDeNacimiento: "1985-11-22",
        estadoCivil: "Casada",
        comentario: "Requiere información adicional sobre servicios."
    },
    {
        rut: "7.654.321-0",
        nombres: "Jorge",
        apellidos: "Martínez Rojas",
        direccion: "Pasaje Las Flores 890",
        ciudad: "Concepción",
        telefono: "934567891",
        email: "jorge.martinez@example.com",
        fechaDeNacimiento: "1978-03-10",
        estadoCivil: "Divorciado",
        comentario: "Quiere saber más sobre descuentos."
    },
    {
        rut: "6.543.210-9",
        nombres: "Ana",
        apellidos: "Ramírez Soto",
        direccion: "Avenida La Marina 345",
        ciudad: "Viña del Mar",
        telefono: "987123456",
        email: "ana.ramirez@example.com",
        fechaDeNacimiento: "1995-07-30",
        estadoCivil: "Viuda",
        comentario: "Solicita información sobre envíos internacionales."
    },
    {
        rut: "5.432.109-8",
        nombres: "Ricardo",
        apellidos: "Fuentes Hidalgo",
        direccion: "Calle Independencia 456",
        ciudad: "Antofagasta",
        telefono: "921345678",
        email: "ricardo.fuentes@example.com",
        fechaDeNacimiento: "1988-12-05",
        estadoCivil: "Soltero",
        comentario: "Pregunta por promociones en servicios."
    }
];

function validarRut() {
    const rut = document.getElementById("rut").value;
    const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
    const errorRut = document.getElementById("errorRut");

    if (!rutRegex.test(rut)) {
        errorRut.innerHTML = "RUT inválido. Ejemplo: 12.345.678-9";
        document.getElementById("rut").classList.add("invalid");
        document.getElementById("rut").classList.remove("valid");
    } else {
        errorRut.innerHTML = "";
        document.getElementById("rut").classList.remove("invalid");
        document.getElementById("rut").classList.add("valid");
    }
    data.rut = rut;
}

function validarCampoTexto(id, errorId, detalle) {
    const campo = document.getElementById(id).value;
    const errorCampo = document.getElementById(errorId);

    if (campo === "") {
        errorCampo.innerHTML = detalle;
        document.getElementById(id).classList.add("invalid");
        document.getElementById(id).classList.remove("valid");
    } else {
        errorCampo.innerHTML = "";
        document.getElementById(id).classList.remove("invalid");
        document.getElementById(id).classList.add("valid");
    }

    switch (id) {
        case 'nombre':
            console.log('caso nombre');
            data.nombres = campo;
            break;
        case 'apellido':
            console.log('caso apellido');
            data.apellidos = campo;
            break;
        case 'direccion':
            console.log('caso direccion');
            data.direccion = campo;
            break;
        case 'ciudad':
            console.log('caso ciudad');
            data.ciudad = campo;
            break;
        default:
            break;
    }
}

function validarTelefono() {
    const telefono = document.getElementById("telefono").value;
    const errorTelefono = document.getElementById("errorTelefono");

    if (telefono === "" || isNaN(telefono) || telefono.length < 8) {
        errorTelefono.innerHTML = "Teléfono inválido. Debe tener al menos 8 dígitos.";
        document.getElementById("telefono").classList.add("invalid");
        document.getElementById("telefono").classList.remove("valid");
    } else {
        errorTelefono.innerHTML = "";
        document.getElementById("telefono").classList.remove("invalid");
        document.getElementById("telefono").classList.add("valid");
    }
    data.telefono = telefono;
}

function validarEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorEmail = document.getElementById("errorEmail");

    if (!emailRegex.test(email)) {
        errorEmail.innerHTML = "Correo electrónico inválido.";
        document.getElementById("email").classList.add("invalid");
        document.getElementById("email").classList.remove("valid");
    } else {
        errorEmail.innerHTML = "";
        document.getElementById("email").classList.remove("invalid");
        document.getElementById("email").classList.add("valid");
    }
    data.email = email;
}

function validarFechaNacimiento() {
    const fecha = document.getElementById("fechaNacimiento").value;
    const errorFecha = document.getElementById("errorFechaNacimiento");
    const fechaActual = new Date();
    const fechaIngresada = new Date(fecha);

    if (fecha === "" || fechaIngresada >= fechaActual) {
        errorFecha.innerHTML = "Fecha de nacimiento inválida.";
        document.getElementById("fechaNacimiento").classList.add("invalid");
        document.getElementById("fechaNacimiento").classList.remove("valid");
    } else {
        errorFecha.innerHTML = "";
        document.getElementById("fechaNacimiento").classList.remove("invalid");
        document.getElementById("fechaNacimiento").classList.add("valid");
    }
    data.fechaDeNacimiento = fecha;
}

function validarEstadoCivil() {
    const estadoCivil = document.getElementById("estadoCivil").value;
    const errorEstadoCivil = document.getElementById("errorEstadoCivil");

    if (estadoCivil === "") {
        errorEstadoCivil.innerHTML = "Por favor, seleccione su estado civil.";
        document.getElementById("estadoCivil").classList.add("invalid");
        document.getElementById("estadoCivil").classList.remove("valid");
    } else {
        errorEstadoCivil.innerHTML = "";
        document.getElementById("estadoCivil").classList.remove("invalid");
        document.getElementById("estadoCivil").classList.add("valid");
    }
    data.estadoCivil = estadoCivil;
}

function registrarFicha() {
    console.log('antes de enviar');
    
    // falta validar que uno o todos los campos esten vacios
    // el de comentarios puede estar vacio, pero todos los demas deben tener info
    
    console.log('la data', data);

    // valida por rut que usuario no este duplicado:
    const existente = usuariosRegistrados.filter(usuario => usuario.rut === data.rut);
    console.log('existente', existente);

    if (existente.length) {
        console.log('USUARIO YA ESTA REGISTRADO');
    } else {
        usuariosRegistrados.push(data);
        console.log('usuario nuevo agregado');
    }

}

