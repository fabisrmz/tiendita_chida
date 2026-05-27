import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">

      <nav class="navbar">
        <h1 class="logo">Lupita Ramirez</h1>

        <ul class="menu">
          <li><a routerLink="/">Inicio</a></li>

          <li>
            <a routerLink="/products">
              Productos
            </a>
          </li>

          <li><a href="#acerca">Acerca</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <section class="hero">

        <div class="content">

          <h1>CAMBIOS DESDE REMOTO</h1>
          <h2>Bienvenido a Lupis</h2>

          <p>
            Una aplicación moderna diseñada para ayudarte.
          </p>

          <button routerLink="/products">
            Comenzar
          </button>

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
