import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth) {}

  onSubmit() {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Éxito en el inicio de sesión, puedes redirigir al usuario o realizar otras acciones aquí.
        console.log('Inicio de sesión exitoso', userCredential);
      })
      .catch((error) => {
        // Maneja los errores de inicio de sesión aquí.
        console.error('Error en el inicio de sesión', error);
      });
  }
}