import { TokenModel } from './Shared/Login/LoginModel';
import { useState } from 'react';

export function getToken() {
 
    const tokenString: string | null = localStorage.getItem('token');

    if (!tokenString) {
      return undefined;
    }

    const model: TokenModel = JSON.parse(tokenString);

    // if (model.experationDate < new Date()) {
    //   return undefined;
    // }

    return model.access_token;
 
}

export function getEmail() {
 
  const tokenString: string | null = localStorage.getItem('token');

  if (!tokenString) {
    return undefined;
  }

  const model: TokenModel = JSON.parse(tokenString);

  // if (model.experationDate < new Date()) {
  //   return undefined;
  // }

  return model.email;

}