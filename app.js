const usuariosRegistrados = [ // dummy data
    {
        rut: '8.765.432-1',
        nombres: 'Carlos',
        apellidos: 'Pérez González',
        direccion: 'Avenida Las Condes 1234',
        ciudad: 'Santiago',
        telefono: '987654321',
        email: 'carlos.perez@example.com',
        fechaDeNacimiento: '1990-05-14',
        estadoCivil: 'Soltero',
        comentario: 'Interesado en recibir más información sobre productos.'
    },
    {
        rut: '9.876.543-2',
        nombres: 'María',
        apellidos: 'López Fernández',
        direccion: 'Calle Los Aromos 567',
        ciudad: 'Valparaíso',
        telefono: '912345678',
        email: 'maria.lopez@example.com',
        fechaDeNacimiento: '1985-11-22',
        estadoCivil: 'Casada',
        comentario: 'Requiere información adicional sobre servicios.'
    },
    {
        rut: '7.654.321-0',
        nombres: 'Jorge',
        apellidos: 'Martínez Rojas',
        direccion: 'Pasaje Las Flores 890',
        ciudad: 'Concepción',
        telefono: '934567891',
        email: 'jorge.martinez@example.com',
        fechaDeNacimiento: '1978-03-10',
        estadoCivil: 'Divorciado',
        comentario: 'Quiere saber más sobre descuentos.'
    },
    {
        rut: '6.543.210-9',
        nombres: 'Ana',
        apellidos: 'Ramírez Soto',
        direccion: 'Avenida La Marina 345',
        ciudad: 'Viña del Mar',
        telefono: '987123456',
        email: 'ana.ramirez@example.com',
        fechaDeNacimiento: '1995-07-30',
        estadoCivil: 'Viuda',
        comentario: 'Solicita información sobre envíos internacionales.'
    },
    {
        rut: '5.432.109-8',
        nombres: 'Ricardo',
        apellidos: 'Fuentes Hidalgo',
        direccion: 'Calle Independencia 456',
        ciudad: 'Antofagasta',
        telefono: '921345678',
        email: 'ricardo.fuentes@example.com',
        fechaDeNacimiento: '1988-12-05',
        estadoCivil: 'Soltero',
        comentario: 'Pregunta por promociones en servicios.'
    }
];

let data = { // esqueleto data
    rut: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    email: '',
    fechaDeNacimiento: '',
    estadoCivil: '',
    comentario: ''
}

const validateData = { // validacion
    rut: false,
    nombres: false,
    apellidos: false,
    direccion: false,
    ciudad: false,
    telefono: false,
    email: false,
    fechaDeNacimiento: false,
    estadoCivil: false,
    comentario: false
}

function validarRut() {
    const rut = document.getElementById('rut').value;
    const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/;
    const errorRut = document.getElementById('errorRut');
    if (!rutRegex.test(rut)) {
        errorRut.innerHTML = 'RUT inválido. Ejemplo: 12.345.678-9';
        document.getElementById('rut').classList.add('invalid');
        document.getElementById('rut').classList.remove('valid');
        document.getElementById('botonenviar').classList.add('btn_inactive');
        document.getElementById('botonenviar').classList.remove('btn_active');
        validateData.rut = false;
    } else {
        errorRut.innerHTML = '';
        document.getElementById('rut').classList.remove('invalid');
        document.getElementById('rut').classList.add('valid');
        data.rut = rut;
        validateData.rut = true;
    }
    validarFormulario();
}

function validarCampoTexto(id, errorId, detalle) {
    const campo = document.getElementById(id).value;
    const errorCampo = document.getElementById(errorId);
    if (campo === '') {
        document.getElementById('botonenviar').classList.add('btn_inactive');
        document.getElementById('botonenviar').classList.remove('btn_active');
        errorCampo.innerHTML = detalle;
        document.getElementById(id).classList.add('invalid');
        document.getElementById(id).classList.remove('valid');
        switch (id) {
            case 'nombre':
                validateData.nombres = false;
                break;
            case 'apellido':
                validateData.apellidos = false;
                break;
            case 'direccion':
                validateData.direccion = false;
                break;
            case 'ciudad':
                validateData.ciudad = false;
                break;
            case 'comentario':
                validateData.comentario = false;
                break;
            default:
                break;
        }
    } else {
        errorCampo.innerHTML = '';
        document.getElementById(id).classList.remove('invalid');
        document.getElementById(id).classList.add('valid');
        switch (id) {
            case 'nombre':
                data.nombres = campo;
                validateData.nombres = true;
                break;
            case 'apellido':
                data.apellidos = campo;
                validateData.apellidos = true;
                break;
            case 'direccion':
                data.direccion = campo;
                validateData.direccion = true;
                break;
            case 'ciudad':
                data.ciudad = campo;
                validateData.ciudad = true;
                break;
            case 'comentario':
                data.comentario = campo;
                validateData.comentario = true;
                break;
            default:
                break;
        }
    }
    validarFormulario();
}

function validarTelefono() {
    const telefono = document.getElementById('telefono').value;
    const errorTelefono = document.getElementById('errorTelefono');

    if (telefono === '' || isNaN(telefono) || telefono.length < 8) {
        errorTelefono.innerHTML = 'Teléfono inválido. Debe tener al menos 8 dígitos.';
        document.getElementById('telefono').classList.add('invalid');
        document.getElementById('telefono').classList.remove('valid');
        document.getElementById('botonenviar').classList.add('btn_inactive');
        document.getElementById('botonenviar').classList.remove('btn_active');
        validateData.telefono = false;
    } else {
        errorTelefono.innerHTML = '';
        document.getElementById('telefono').classList.remove('invalid');
        document.getElementById('telefono').classList.add('valid');
        data.telefono = telefono;
        validateData.telefono = true;
    }
    validarFormulario();
}

function validarEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorEmail = document.getElementById('errorEmail');
    if (!emailRegex.test(email)) {
        errorEmail.innerHTML = 'Correo electrónico inválido.';
        document.getElementById('email').classList.add('invalid');
        document.getElementById('email').classList.remove('valid');
        document.getElementById('botonenviar').classList.add('btn_inactive');
        document.getElementById('botonenviar').classList.remove('btn_active');
        validateData.email = false;
    } else {
        errorEmail.innerHTML = '';
        document.getElementById('email').classList.remove('invalid');
        document.getElementById('email').classList.add('valid');
        data.email = email;
        validateData.email = true;
    }
    validarFormulario();
}

function validarFechaNacimiento() {
    const fecha = document.getElementById('fechaNacimiento').value;
    const errorFecha = document.getElementById('errorFechaNacimiento');
    const fechaActual = new Date();
    const fechaIngresada = new Date(fecha);
    if (fecha === '' || fechaIngresada >= fechaActual) {
        errorFecha.innerHTML = 'Fecha de nacimiento inválida.';
        document.getElementById('fechaNacimiento').classList.add('invalid');
        document.getElementById('fechaNacimiento').classList.remove('valid');
        document.getElementById('botonenviar').classList.add('btn_inactive');
        document.getElementById('botonenviar').classList.remove('btn_active');
        validateData.fechaDeNacimiento = false;
    } else {
        errorFecha.innerHTML = '';
        document.getElementById('fechaNacimiento').classList.remove('invalid');
        document.getElementById('fechaNacimiento').classList.add('valid');
        data.fechaDeNacimiento = fecha;
        validateData.fechaDeNacimiento = true;
    }
    validarFormulario();
}

function validarEstadoCivil() {
    const estadoCivil = document.getElementById('estadoCivil').value;
    const errorEstadoCivil = document.getElementById('errorEstadoCivil');
    if (estadoCivil === '') {
        errorEstadoCivil.innerHTML = 'Por favor, seleccione su estado civil.';
        document.getElementById('estadoCivil').classList.add('invalid');
        document.getElementById('estadoCivil').classList.remove('valid');
        document.getElementById('botonenviar').classList.add('btn_inactive');
        document.getElementById('botonenviar').classList.remove('btn_active');
        validateData.estadoCivil = false;
    } else {
        errorEstadoCivil.innerHTML = '';
        document.getElementById('estadoCivil').classList.remove('invalid');
        document.getElementById('estadoCivil').classList.add('valid');
        data.estadoCivil = estadoCivil;
        validateData.estadoCivil = true;
    }
    validarFormulario();
}

function validarFormulario() {
    for (const d in validateData) {
        if (!validateData[d]) {
            document.getElementById('botonenviar').classList.add('btn_inactive');
            document.getElementById('botonenviar').classList.remove('btn_active');
            return
        }
    }
    document.getElementById('botonenviar').classList.remove('btn_inactive');
    document.getElementById('botonenviar').classList.add('btn_active');
}

function limpiarFormulario() {
    document.getElementById('rut').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('estadoCivil').value = '';
    document.getElementById('comentario').value = '';

    document.getElementById('rut').classList = '';
    document.getElementById('nombre').classList = '';
    document.getElementById('apellido').classList = '';
    document.getElementById('direccion').classList = '';
    document.getElementById('ciudad').classList = '';
    document.getElementById('telefono').classList = '';
    document.getElementById('email').classList = '';
    document.getElementById('fechaNacimiento').classList = '';
    document.getElementById('estadoCivil').classList = '';
    document.getElementById('comentario').classList = '';
    
    data = {
        rut: '',
        nombres: '',
        apellidos: '',
        direccion: '',
        ciudad: '',
        telefono: '',
        email: '',
        fechaDeNacimiento: '',
        estadoCivil: '',
        comentario: ''
    }
}

function mostrarModalExito() {
    document.getElementById('modalExito').classList.remove('noshow_modal');
    document.getElementById('modalExito').classList.add('show_modal');
    setTimeout(() => {
        cierraModalExito();
    }, 3000);
}

function cierraModalExito() {
    document.getElementById('modalExito').classList.remove('show_modal');
    document.getElementById('modalExito').classList.add('noshow_modal');
}

// GUARDAR FICHA
function registrarFicha() {
    for (const d in validateData) {
        if (!validateData[d]) {
            alert('Accion indebida 🧼.')
            return
        }
    }
    // valida por rut que usuario no este duplicado:
    const existente = usuariosRegistrados.filter(usuario => usuario.rut === data.rut);
    if (existente.length) {
        document.getElementById('modalSobre').classList.remove('noshow_modal');
        document.getElementById('modalSobre').classList.add('show_modal');
        return
    }
    usuariosRegistrados.push(data);
    // console.log('usuario nuevo agregado');
    limpiarFormulario();
    mostrarModalExito();
}

function sobreescribirFicha() {
    const existente = usuariosRegistrados.findIndex(usuario => usuario.rut === data.rut);
    usuariosRegistrados.splice(existente, 1);
    usuariosRegistrados.push(data);
    limpiarFormulario();
    document.getElementById('modalSobre').classList.remove('show_modal');
    document.getElementById('modalSobre').classList.add('noshow_modal');
    mostrarModalExito();
}

function cancelaAccionSobreescribir() {
    document.getElementById('modalSobre').classList.remove('show_modal');
    document.getElementById('modalSobre').classList.add('noshow_modal');
}

// BUSCADOR
function removerDiacriticas(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function buscarPersona(dataPersona) {
    const lista = document.getElementById('listaEncontrados');
    lista.innerHTML = '';
    if (!dataPersona) {
        return
    }
    const encontrados = usuariosRegistrados.filter(usuario => removerDiacriticas(usuario.apellidos.toLowerCase()).includes(removerDiacriticas(dataPersona.toLowerCase())));
    // console.log('encontrados', encontrados);
    if (encontrados.length) {
        for (let encontrado of encontrados) {
            lista.innerHTML = lista.innerHTML ?
                `${lista.innerHTML}<li>${encontrado.nombres} ${encontrado.apellidos} - rut: ${encontrado.rut}</li>` :
                `<li>${encontrado.nombres} ${encontrado.apellidos} - rut: ${encontrado.rut}</li>`;
        }
    }
}