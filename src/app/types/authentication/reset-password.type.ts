import { TLogin } from "./login.type";

export type TResetPassword = {
    token: string;
  } & TLogin;