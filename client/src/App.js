
import { Box, makeStyles } from '@material-ui/core';


import Header from './components/header';
import InfoHeader from './components/InfoHeader.jsx';
import Articles from './components/Articles';

const useStyles = makeStyles({
  container: {
    marginTop: 110,
    width : '60%',
    margin : '0 auto'
    
  }
})


function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles/>
      </Box>
    </Box>
  );
}

export default App;
