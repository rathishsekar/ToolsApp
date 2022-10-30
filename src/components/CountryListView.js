import { List, ListItem, ListItemText } from '@material-ui/core';
function CountryListView(props) {
  return (
    <div>
      <List>
        {props.data.map((item) => (
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

export default CountryListView;
