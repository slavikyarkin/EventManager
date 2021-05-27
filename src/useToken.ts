import { TokenModel } from './Shared/Login/LoginModel';
import { useState } from 'react';

export default function getToken() {
 
    const tokenString: string | null = sessionStorage.getItem('token');

    if (!tokenString) {
      return undefined;
    }

    const model: TokenModel = JSON.parse(tokenString);

    if (model.experationDate < new Date()) {
      return undefined;
    }

    return model.token
 
}