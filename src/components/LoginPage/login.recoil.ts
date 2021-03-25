import React from 'react';
import { atom, selector } from 'recoil';
import { IUserNoPassword } from '../../../services/crud-server/src/models/user';

export const userState = atom({
  key: 'User',
  default: {} as IUserNoPassword,
});
