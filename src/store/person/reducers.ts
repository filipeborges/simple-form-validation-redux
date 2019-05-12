import { IPerson, IPersonAction, ISavePersonAction, IValidatePersonAction } from "./types";
import { SAVE_PERSON, VALIDATE_PERSON } from "./actions";
import { isPersonAttributeValid } from "../../utils/validatePerson";

const INITIAL_STATE: IPerson = {
  name: '',
  lastName: '',
  errors: {
    name: false,
    lastName: false,
  }
}

export function personReducer(state = INITIAL_STATE, action: IPersonAction): IPerson {
  switch (action.type) {
    case SAVE_PERSON:
      const personAction = action as ISavePersonAction
      return {
        ...state,
        [personAction.attribute]: personAction.value,
      }
    case VALIDATE_PERSON:
      const validateAction = action as IValidatePersonAction
      return {
        ...state,
        errors: {
          ...state.errors,
          [validateAction.attribute]: !isPersonAttributeValid(validateAction.attribute, state)
        }
      }
    default:
      return state;
  }
}
