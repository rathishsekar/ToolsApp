import { Grid, Paper } from '@material-ui/core';
function CountryGridView(props) {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.name}>
            <Paper>
              {item.name} {item.unicodeFlag}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CountryGridView;
