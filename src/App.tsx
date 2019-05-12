import React from 'react';
import { connect } from 'react-redux';
import { AppState } from './store/store';
import { savePerson, validatePerson } from './store/person/actions';

const App: React.FC<IFormProps> = (props: IFormProps) => {
  return (
    <div>
      <h1>Person Form</h1>
      <div>
        <label>Name:</label>
        <input value={props.person.name}
          onChange={(e: any) => props.updatePerson('name', e.target.value)}
          onBlur={() => props.validatePerson('name')}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input value={props.person.lastName}
          onChange={(e: any) => props.updatePerson('lastName', e.target.value)}
          onBlur={() => props.validatePerson('lastName')}
        />
      </div>
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

