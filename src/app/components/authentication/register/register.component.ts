import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationFacade } from '../../../facades/authentication.facade';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  providers: [AuthenticationFacade],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private facade: AuthenticationFacade, private router: Router) { }

  public form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
    //senhaConfirme: new FormControl('', Validators.required)
  });

  submit() {
    this.facade.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log('ERRO: ', err);
      }
    });
  }

}
