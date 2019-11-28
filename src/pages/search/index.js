import React from 'react';
import styles from './index.module.css';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import themeable from 'react-themeable';
import theme from './themeSuggects.css';
import { Button } from 'react-bootstrap';
import Result from '~p/result'

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : suggestions.filter(item =>
    item.value.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.value;


const renderSuggestion = suggestion => (
<div>
  <div>{'Название ' + suggestion.value + ' '}</div>
  <div>
    {'ИНН ' + suggestion.data.inn + ' '}
    {'Адрес ' + suggestion.data.address.value}
  </div>
</div>
);


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      selectedSuggestion: null          
    };
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
    this.setState({
      selectedSuggestion: this.state.suggestions[suggestionIndex] || null
    })
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    axios({
      method: 'post',
      url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
      headers: {
        "Authorization": "Token 44df28ad313c23fb2945bb37baea5d1bd087b464"
      },
      data: {
        query: value
      }
    })
      .then(res => {
        const results = res.data.suggestions
        this.setState({ suggestions: res.data.suggestions })
      })
      .catch(res => {
        console.log(JSON.stringify(res))
      })
  };


  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []     
    });
  };

  render() {
    const { value, suggestions, selectedSuggestion } = this.state;

    const inputProps = {
      placeholder: 'Введите название в свободной форме',
      value, 
      onChange: this.onChange,
    };

    return (
      <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
      <div>
         <Result data={this.state.selectedSuggestion} saveFunction={this.props.saveFunction}/>                             
      </div>
      </div>
    );
  }
}

export default Search;







