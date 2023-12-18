import { Component } from '@angular/core';

interface Comida {
  titulo: string;
  descripcion: string;
  img: string;
  precio: number;
}

interface CarritoItem {
  item: Comida;
  cantidad: number;
}

@Component({
  selector: 'app-pagina-food-store',
  templateUrl: './pagina-food-store.component.html',
  styleUrls: ['./pagina-food-store.component.css']
})
export class PaginaFoodStoreComponent {
  comidas: Comida[] = [
      {
        titulo: 'Croquetas de Jamón',
        descripcion: 'Sumérgete en la perfección culinaria con nuestras Croquetas de Jamón Ibérico: crujientes por fuera, cremosas por dentro. Un deleite que fusiona la tradición con una inigualable exquisitez, ofreciendo una experiencia única en cada bocado.',
        img: 'https://elpasajeconil.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-16-at-18.25.35-2.jpeg',
        precio: 13
      },
      {
  
        titulo: 'Pez Espada',
        descripcion: 'Sumérgete en la frescura del océano con nuestros filetes de pez espada, resaltando su jugosidad y firmeza que realzan el sabor único del mar. Una experiencia culinaria que combina frescura y salud, deleitando tus sentidos con cada bocado.',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/7f/03/87/racion-de-pez-espada.jpg',
        precio: 24.75
      },
      {
        titulo: 'Taki taki de salmón',
        descripcion: 'Disfruta de la exquisita fusión de nuestro "Taki Taki de Salmón", donde la frescura del salmón se encuentra con la vibrante salsa Taki Taki. Un festín sensorial que no solo es delicioso, sino también una opción saludable para cautivar tu paladar.',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/14/c6/6a/tataki-de-atun-rojo-salvaje.jpg',
        precio:18.5
      },
      {
        titulo: 'Secreto Iberico',
        descripcion: 'Descubre el misterioso encanto de nuestro Secreto Ibérico, una obra maestra culinaria donde la exquisitez se encuentra en cada secreto guardado. Una experiencia gastronómica que deleitará tus sentidos y dejará una impresión inolvidable.',
        img: 'https://elpasajeconil.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-16-at-18.25.36-2-1.jpeg',
        precio:18.5
      },
    ];

  carrito: {[titulo: string]: CarritoItem} = {};
  precioTotal: number = 0;

  agregarAlCarrito(item: Comida) {
    if (this.carrito[item.titulo]) {
      this.carrito[item.titulo].cantidad++;
    } else {
      this.carrito[item.titulo] = { item, cantidad: 1 };
    }
    this.calcularPrecioTotal();
  }

  quitarDelCarrito(titulo: string) {
    if (this.carrito[titulo].cantidad > 1) {
      this.carrito[titulo].cantidad--;
    } else {
      delete this.carrito[titulo];
    }
    this.calcularPrecioTotal();
  }

  calcularPrecioTotal() {
    this.precioTotal = Object.values(this.carrito).reduce((total, carritoItem) => {
      return total + (carritoItem.item.precio * carritoItem.cantidad);
    }, 0);
  }
}

