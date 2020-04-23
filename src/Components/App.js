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
    function renderCharacter(props) {
      console.log(props);
      return <CharacterDetail />;
    }

    return (
      <div className='App'>
        <main>
          <Header />
          <Filter
            handleInputData={this.handleInputData}
            value={this.state.inputText}
          />
          <CharacterList
            charactersList={this.state.charactersList}
            inputText={this.state.name}
          />
          <Switch>
            <Route path='/character/:id' render={renderCharacter} />
            {/* <CharacterDetail charactersList={this.state.charactersList} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
