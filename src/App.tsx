import React from 'react';
import { connect } from 'react-redux';
import { AppState } from './store/store';
import { savePerson, validatePerson } from './store/person/actions';
import FormInput from './components/FormInput'

const App: React.FC<IFormProps> = (props: IFormProps) => {
  return (
    <div>
      <h1>Person Form</h1>
      <FormInput
        error={props.nameError}
        label='Name:'
        value={props.person.name}
        updateAttribute={(e: any) => props.updatePerson('name', e.target.value)}
        attributeValidator={() => props.validatePerson('name')}
      />
      <FormInput
        error={props.lastNameError}
        label='Last Name:'
        value={props.person.lastName}
        updateAttribute={(e: any) => props.updatePerson('lastName', e.target.value)}
        attributeValidator={() => props.validatePerson('lastName')}
      />
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  person: state.person,
  nameError: state.person.errors.name ? 'Too short name' : undefined,
  lastNameError: state.person.errors.lastName ? 'Too short last name' : undefined,
});

const mapDispatchToProps = {
  updatePerson: savePerson,
  validatePerson
}

type IFormProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(App);

// const mapStateToProps = state => ({});

// // const mapDispatchToProps = dispatch =>
// //   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(src);

