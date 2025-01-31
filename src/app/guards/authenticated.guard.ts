import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';


export const authenticatedGuard: CanActivateFn = (route, state) => {
  
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  console.log('authenticationService.expiredToken(): ', authenticationService.expiredToken());

  if(authenticationService.expiredToken()) {
    router.navigate(['authentication/login']);
    return false;
  }

  return true;

};
