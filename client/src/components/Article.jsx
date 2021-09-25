import { card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'


    }
})

const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <card>
            <CardContent>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <img src={article.url} alt="image" className={classes.image} />

                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <Typography><b>{article.title}</b></Typography>
                        <Typography>
                        <br/><b>short</b> by {article.author}/ {new Date(article.timestamp).toDateString()}

                        </Typography>
                        <Typography>
                            {article.description}
                        </Typography>
                        <Typography>
                            read more at <a href={article.link} target="_blank">{article.publisher}</a>

                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </card>
    )
}

export default Article;