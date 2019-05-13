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
        label='Name:'
        value={props.person.name}
        updateAttribute={(e: any) => props.updatePerson('name', e.target.value)}
        attributeValidator={() => props.validatePerson('name')}
      />
      <FormInput
        label='Last Name:'
        value={props.person.lastName}
        updateAttribute={(e: any) => props.updatePerson('lastName', e.target.value)}
        attributeValidator={() => props.validatePerson('lastName')}
      />
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  person: state.person
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

