var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, urlImagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImagen = urlImagen;
    }
    return Usuario;
}());
function cambiarImagen() {
    var carlos = new Usuario('Carlos', 'Ayala', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/300px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg');
    console.log('Usuario:', carlos);
    var etiquetaImagen = document.getElementById('imagen');
    etiquetaImagen.src = carlos.urlImagen;
}
function cambiarColorTabla() {
    //const colorTabla: any = document.getElementById('tablita').style.borderColor = "yellow";
    var colorTabla = document.getElementById('tablita');
    colorTabla.className = colorTabla.class + ' borde-azul';
}
