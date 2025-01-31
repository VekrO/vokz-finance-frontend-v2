import { TEmail } from "../email.type";

export type TLogin = {
    senha: string;
  } & TEmail;