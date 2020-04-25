import '../Stylesheets/App.scss';
import React from 'react';
import { getDataApi } from '../Services/getDataApi';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Filter from './Filter';
import Header from './Header';
import CharacterNotExist from './CharacterNotExist';
import CharacterDetail from './CharacterDetail';
import Loader from './Loader';

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
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    getDataApi().then((data) => {
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
    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else if (this.state.charactersList.length <= 0) {
      return <Loader />;
    } else
      return (
        <CharacterNotExist message={'El personaje que buscas no existe.'} />
      );
  }

  onSubmit(ev) {
    ev.preventDefault();
  }

  renderCharacterList() {
    return this.state.charactersList.length === 0 ? (
      <Loader />
    ) : (
      <>
        <Filter
          handleInputData={this.handleInputData}
          value={this.state.name}
          onSubmit={this.onSubmit}
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
