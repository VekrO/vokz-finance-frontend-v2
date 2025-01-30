import { FormControl, FormGroup } from "@angular/forms";
import { IFormControlField } from "../interfaces/custom-form-control.interface";
import { IBaseService } from "./base-crud-service.interface";

export class BaseCrudComponent<T> {

    public form: FormGroup = new FormGroup({});
    public fields: IFormControlField[] = [];
    public service: IBaseService;
    
    constructor(service: any) {
        this.service = service;
    }

    configureForm() {
        if(!this.service) {
            throw new Error("Verifique se o serviço está sendo provido para a aplicação!");
        }

        this.createForm();

    }

    populateForm(data: T) {
        if(data) {
            this.form.patchValue(data);
        }
    }

    private createForm() {
        
        if(!this.fields.length) {
            return;
        }

        this.fields.forEach((value: IFormControlField) => {
            this.form.addControl(value.field, new FormControl(value.defaultValue, value.validators));
        });

    }
    
    submit() {
        const id = this.form.controls['id'].value;
        if(!id) {
            this.insert();
        } else {
            this.update();
        }
    }

    private insert() {
        this.service.post(this.form.value).subscribe({
            next: (res) => {
                console.log('FEZ POST: ', res);
                this.populateForm(res);
            },
            error: (err) => {
                console.log('ERRO AO FAZER POST: ', err);
            }
        });
    }

    private update() {
        this.service.put(this.form.value.id, this.form.value).subscribe({
            next: (res) => {
                console.log('FEZ PUT: ', res);
                this.populateForm(res);
            },
            error: (err) => {
                console.log('ERRO AO FAZER PUT: ', err);
            }
        });
    }

}