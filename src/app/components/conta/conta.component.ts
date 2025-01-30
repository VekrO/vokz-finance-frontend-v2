import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseCrudComponent } from '../../bases/base-crud.component';
import { IFormControlField } from '../../interfaces/custom-form-control.interface';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-conta',
  imports: [ReactiveFormsModule],
  providers: [ContaService],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent extends BaseCrudComponent<Conta> implements OnInit {
  
  public override fields: IFormControlField[] = [
    {
      field: 'id',
      defaultValue: 0
    },
    {
      field: 'nome',
      defaultValue: null,
      validators: [Validators.required]
    },
    {
      field: 'inativo',
      defaultValue: false
    },
    {
      field: 'urlLogo',
      defaultValue: null,
    },
    {
      field: 'idUsuario',
      defaultValue: 5,
      validators: [Validators.required]
    }
  ];

  constructor(private contaService: ContaService) {
    super(contaService);
  }

  ngOnInit(): void {
    this.configureForm();
  }

}
