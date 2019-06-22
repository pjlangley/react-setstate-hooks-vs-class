import React, { useEffect, useState } from 'react';
import './App.css';

class FormClassStyle extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { query: '' };
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (query.length > 2 && query !== prevState.query) {
      fetch('https://jsonplaceholder.typicode.com/users');
    }
  }

  onChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <form>
        <legend>Form Class Style</legend>
        <input type="text" placeholder="Search a city..." onChange={this.onChange} value={this.state.query} />
      </form>
    );
  }
}

const FormHookStyle = () => {
  const [ query, setQuery ] = useState('');

  const onChange = e => setQuery(e.target.value);

  useEffect(() => {
    if (query.length > 2) {
      fetch('https://jsonplaceholder.typicode.com/users');
    }
  }, [query]);

  return (
    <form>
      <legend>Form Hooks Style</legend>
      <input type="text" placeholder="Search a city..." onChange={onChange} value={query} />
    </form>
  );
};

export default FormHookStyle;
export { FormClassStyle };
