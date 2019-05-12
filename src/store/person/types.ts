import {
  SAVE_PERSON,
  VALIDATE_PERSON,
} from './actions';

export interface IPerson {
  [attribute: string]: string | { [attribute: string]: boolean };
  name: string;
  lastName: string;
  errors: {
    name: boolean;
    lastName: boolean;
  }
}

export interface ISavePersonAction {
  type: typeof SAVE_PERSON;
  attribute: string;
  value: string;
}

export interface IValidatePersonAction {
  type: typeof VALIDATE_PERSON;
  attribute: string;
}

export type IPersonAction = ISavePersonAction | IValidatePersonAction
