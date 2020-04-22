import '../Stylesheets/App.css';
import React from 'react';
import { getDataApi } from '../Services/getDataApi';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
    };
  }

  componentDidMount() {
    getDataApi().then((data) => {
      this.setState({
        charactersList: data,
      });
    });
  }

  render() {
    return (
      <div className='App'>
        <CharacterList data={this.state.charactersList} />
      </div>
    );
  }
}

export default App;
