import { ISavePersonAction, IValidatePersonAction } from "./types";

export const SAVE_PERSON = 'SAVE_PERSON';
export const VALIDATE_PERSON = 'VALIDATE_PERSON';

export function savePerson(attribute: string, value: string): ISavePersonAction {
  return {
    type: SAVE_PERSON,
    attribute,
    value,
  }
}

export function validatePerson(attribute: string): IValidatePersonAction {
  return {
    type: VALIDATE_PERSON,
    attribute
  }
}
