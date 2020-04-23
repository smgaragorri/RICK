import '../Stylesheets/App.scss';
import React from 'react';
import { getDataApi } from '../Services/getDataApi';
import { Route, Switch } from 'react-router-dom';
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
    this.renderCharacter = this.renderCharacter.bind(this);
    this.renderCharacterList = this.renderCharacterList.bind(this);
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

  renderCharacter(props) {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = this.state.charactersList.find(
      (character) => character.id === characterId
    );
    return <CharacterDetail character={foundCharacter} />;
  }

  renderCharacterList() {
    console.log(this.state);

    return (
      <>
        <Filter
          handleInputData={this.handleInputData}
          value={this.state.name}
        />
        <CharacterList
          charactersList={this.state.charactersList}
          inputText={this.state.name}
        />
      </>
    );
  }

  render() {
    return (
      <div className='App'>
        <main>
          <Header />
          <Switch>
            <Route path='/character/:id' render={this.renderCharacter} />
            <Route path='/' render={this.renderCharacterList} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
