import { List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Listview() {
  const noCountryError = [{ name: 'no country available' }, { flag: '' }];
  const [countries, setCountries] = useState(noCountryError);

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

  console.log('listview');

  return (
    <div className="App">
      <List>
        {countries.map((item) => (
          <ListItem
            key={item.name}
            style={{
              border: '1px solid',
              borderRadius: '3px',
              margin: '1px 5px',
              maxWidth: '400px',
            }}
          >
            <ListItemText key={item.name} primary={item.name} />
            <p>{item.unicodeFlag}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Listview;
