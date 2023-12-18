import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  imagenes: string[] = [
    "https://elpasajeconil.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-12-at-01.54.33-3-1-1024x682.jpeg",
    "https://elpasajeconil.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-16-at-18.25.36-6-1024x682.jpeg",
    "https://www.lavozdelsur.es/uploads/s1/11/02/53/8/bar-el-pasaje-23.jpeg",
  ];

  indiceImagen: number = 0;

  cambiarImagen(): void {
    const imagen: HTMLImageElement | null = document.getElementById("imagen") as HTMLImageElement | null;

    if (imagen) {
      imagen.src = this.imagenes[this.indiceImagen];
      this.indiceImagen = (this.indiceImagen + 1) % this.imagenes.length;
    }
  }

  restaurarImagen(): void {
    const imagen: HTMLImageElement | null = document.getElementById("imagen") as HTMLImageElement | null;

    if (imagen) {
      imagen.src = "https://www.lavozdelsur.es/uploads/s1/11/02/53/8/bar-el-pasaje-23.jpeg";
    }
  }


  


  

}
