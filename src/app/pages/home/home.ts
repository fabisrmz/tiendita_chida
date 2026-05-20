import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="container">

      <nav class="navbar">
        <h1 class="logo">Lupita Ramirez</h1>

        <ul class="menu">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Acerca</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <section class="hero">

        <div class="content">
          <h2>Bienvenido a Lupidy</h2>

          <p>
            Una aplicación moderna diseñada para ayudarte.
          </p>

          <button>Comenzar</button>
        </div>

        <div class="image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="Inicio"
          />
        </div>

      </section>

    </div>
  `,
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
