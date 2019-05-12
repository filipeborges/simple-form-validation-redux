import { IPerson } from "../store/person/types";

function validateName(name: string) {
  return name.length >= 2
}

function validateLastName(lastName: string) {
  return lastName.length >= 2
}

interface IValidators {
  [attribute: string]: typeof validateLastName | typeof validateName
}

const validators: IValidators = {
  name: validateName,
  lastName: validateLastName,
}

export function isPersonAttributeValid(attribute: string, person: IPerson) {
  const validator = validators[attribute]
  return validator ? validator(person[attribute] as string) : true
}