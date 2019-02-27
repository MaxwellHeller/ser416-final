import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddBox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/es/Icon/Icon";
import Modal from "@material-ui/core/es/Modal/Modal";

// Based on MaterialUI example Album component: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples/album

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const cards = [
    {
        name: 'Shakespeare in the Park',
        info: 'Learn how to act in a fun and relaxed environment. At the end of the program members will perform a short play in the park!',
    },
    {
        name: 'Painting Lessons',
        info: 'Paint like Bob Ross!',
    },
    {
        name: 'Public Speaking',
        info: 'Try public speaking!',
    },
    {
        name: '4',
        info: '',
    },
    {
        name: '5',
        info: '',
    },
    {
        name: '6',
        info: '',
    },
    {
        name: '7',
        info: '',
    }
];

function Album(props) {
    const { classes } = props;

    var edit = '';
    var modal = '';


    function modalGen(card){

        if (props.view === 'Employee'){
                edit = <CardActions>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </CardActions>
        }

        modal = <Modal open={true}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                    </Typography>
                    <Typography>
                        {card.info}
                    </Typography>
                </CardContent>
                {edit}
            </Card>
                </Modal>;

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Services Offered
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Look through our catalog below to view and book services!
                        </Typography>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map(card => (
                            <Grid item key={card.name} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {card.info}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={(e) => modalGen(card)}>
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Book
                                        </Button>
                                    </CardActions>
                                </Card>
                                {modal}
                            </Grid>
                        ))}
                        <Grid item key={'plus'} sm={6} md={4} lg={3}>
                            <Button>
                            <AddIcon fontSize={"large"}/>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    SER416 - Final
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Prototype website by Maxwell Heller
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
