
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    container :{
        background : "#f44336",
        color : '#FFFFFF',
        height :50,
        display : 'flex',
        alignItems : 'center',
        [theme.breakpoints.down('md')]:{
            display :'none'
        }

    },
    text:{
        fontSize :14,
        marginLeft :50,
        fontWeight :300
    },
    playstore:{
        height :34,
        '&:last-child' : {
            margin :'0 50px 0 20px'
        }
    }
}))

const InfoHeader = () => {
    const classes = useStyles();

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return(
        <Box className = {classes.container}>
            <Typography className = {classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</Typography>
            <Box style= {{marginLeft:'auto'}}>
                <img src = {appleStore} alt = "apple" className = {classes.playstore}/>
                <img src = {googleStore} alt = "apple" className = {classes.playstore}/>
            </Box>
        </Box>
    );
}

export default InfoHeader;