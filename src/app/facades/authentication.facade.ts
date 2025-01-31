import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { TAuthToken } from "../types/authentication/auth-token.type";
import { TLogin } from "../types/authentication/login.type";
import { TRegister } from "../types/authentication/register.type";

@Injectable()
export class AuthenticationFacade {
        
    constructor(private authenticationService: AuthenticationService) {}
    
    login(data: TLogin): Observable<TAuthToken> {
        return this.authenticationService.login(data);
    }

    register(data: TRegister): Observable<void> { 
        return this.authenticationService.register(data);
    }

}