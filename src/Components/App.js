import '../Stylesheets/App.css';
import React from 'react';
import { getDataApi } from '../Services/getDataApi';
import CharacterList from './CharacterList';
import Filter from './Filter';
import Header from './Header';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: [],
      name: '',
    };
    this.handleInputData = this.handleInputData.bind(this);
  }

  componentDidMount() {
    getDataApi().then((data) => {
      console.log(data);

      this.setState({
        charactersList: data,
      });
    });
  }

  handleInputData(data) {
    this.setState({
      [data.name]: data.value,
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Filter
          handleInputData={this.handleInputData}
          value={this.state.inputText}
        />
        <CharacterList
          charactersList={this.state.charactersList}
          inputText={this.state.name}
        />
        {/* <CharacterDetail charactersList={this.state.charactersList} /> */}
      </div>
    );
  }
}

export default App;
