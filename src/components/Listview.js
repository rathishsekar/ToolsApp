import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CountryGridView from './CountryGridView.js';
import CountryListView from './CountryListView.js';

function Listview() {
  const noCountryError = [{ name: 'no country available' }, { flag: '' }];
  const [countries, setCountries] = useState(noCountryError);
  const [view, setView] = useState('list');

  var path = 'https://countriesnow.space/api/v0.1/countries/flag/unicode';
  useEffect(() => {
    axios.get(path).then(
      (response) => {
        setCountries(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const selectionChangeHandler = (event) => {
    setView(event.target.value);
  };

  return (
    <div className="App">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select View</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select View"
          onChange={selectionChangeHandler}
        >
          <MenuItem value={'list'}>list</MenuItem>
          <MenuItem value={'grid'}>grid</MenuItem>
        </Select>
      </FormControl>
      {view == 'list' ? (
        <CountryListView data={countries} />
      ) : (
        <CountryGridView data={countries} />
      )}
    </div>
  );
}

export default Listview;
