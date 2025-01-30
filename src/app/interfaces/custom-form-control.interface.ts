import { ValidatorFn } from "@angular/forms";

export interface IFormControlField {
    field: string;
    defaultValue: any;
    entry?: [() => any] | null;
    output?: [() => any] | null;
    validators?: ValidatorFn[] | null;
}