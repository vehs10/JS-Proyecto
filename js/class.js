class Producto {
    constructor(datos) {
        this.id = datos.id;
        this.nombre = datos.nombre;
        this.precio = datos.precio,
            this.moneda = datos.moneda;
        this.cantidad = 1;
    }
    addCantidad() {
        this.cantidad++;
    }
    getTotal() {
        return (this.cantidad * this.precio);
    }
}