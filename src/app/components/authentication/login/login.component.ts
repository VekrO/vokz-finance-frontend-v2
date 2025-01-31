import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationFacade } from '../../../facades/authentication.facade';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  providers: [AuthenticationFacade, Router],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private facade: AuthenticationFacade, private router: Router) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  })

  submit() {
    this.facade.login(this.form.value).subscribe({
      next: (res) => {
        console.log('RES: ', res);
        this.router.navigate(['dashboard']);
      },
      error: (err) => {
        console.log('ERRO: ', err);
      }
    });
  }

}
