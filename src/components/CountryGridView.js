import { Grid, makeStyles, Paper } from '@material-ui/core';
function CountryGridView(props) {
  const classes = makeStyles({
    griditem: {
      padding: '10px',
      margin: '3px',
    },
  });
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.name}>
            <Paper className={classes.griditem}>
              {item.name} {item.unicodeFlag}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CountryGridView;
