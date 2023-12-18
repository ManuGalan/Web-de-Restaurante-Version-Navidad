import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {

  cambiarFotoPerfil(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fotoCirculo = document.getElementById('fotoCirculo');
        if (fotoCirculo) {
          fotoCirculo.style.backgroundImage = `url(${e.target.result})`;
          fotoCirculo.style.backgroundSize = 'cover';
          fotoCirculo.style.backgroundPosition = 'center';
        }
      };
      reader.readAsDataURL(file);
    }
  }

  nombreUsuario: string = ''; 

  cambiarNombre(nuevoNombre: string): void {
    this.nombreUsuario = nuevoNombre; 
  }

  descripcionUsuario: string = '';

  cambiarDescripcion(nuevaDescripcion: string): void {
    this.descripcionUsuario = nuevaDescripcion; 
  }
}
