import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';


// Based on MaterialUI example Blog component: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples/blog

const styles = theme => ({
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
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundImage: 'url(https://cdn.studentloanhero.com/wp-content/uploads/community-service-scholarships.jpg)',
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },

});

const sections = [
    {
        title: 'Donation',
    },
    {
        title: 'Services'
    },
    {
        title: 'Booking'
    }
];

const featuredPosts = [
    {
        title: 'Featured local story',
        date: 'Nov 12',
        description:
            'Story about amazing local folks',
    },
    {
        title: 'New President of Best Community Service!',
        date: 'Nov 11',
        description:
            'Theres a new President of your favorite local non-profit!',
    },
];

const posts = [post1, post2, post3];

function Blog(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>
                <Toolbar className={classes.toolbarMain}>
                    <Button size="small">Subscribe to our bulletin!</Button>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Best Community Service Website
                    </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <Button variant="outlined" size="small">
                       Log In
                    </Button>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Button key={section.title} onClick={props.click(section.title)}>
                            <Typography color="inherit" noWrap key={section.title}>
                                {section.title}
                            </Typography>
                        </Button>
                    ))}
                </Toolbar>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Welcome to Best Community Service!
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Your new favorite local resource for community services and programs
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={40} className={classes.cardGrid}>
                        {featuredPosts.map(post => (
                            <Grid item key={post.title} xs={12} md={6}>
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                            title="Image title"
                                        />
                                    </Hidden>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {/* End sub featured posts */}
                    <Grid container spacing={40} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                Community News
                            </Typography>
                            <Divider />
                                <Markdown className={classes.markdown}>
                                    {"## Sample News\n" +
                                    "\n" +
                                    "#### Feb 26, 2019\n" +
                                    "\n" +
                                    "Placeholder text below\n" +
                                    "\n" +
                                    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
                                    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\n" +
                                    "Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n" +
                                    "\n" +
                                    "Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\n" +
                                    "Nullam id dolor id nibh ultricies vehicula ut id elit.\n" +
                                    "\n" +
                                    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
                                    "Aenean lacinia bibendum nulla sed consectetur.\n" +
                                    "mattis consectetur"}
                                </Markdown>
                        </Grid>
                        {/* End main content */}
                        {/* Sidebar */}
                        <Grid item xs={12} md={4}>
                            <Paper elevation={0} className={classes.sidebarAboutBox}>
                                <Typography variant="h6" gutterBottom>
                                    About
                                </Typography>
                                <Typography>
                                    This website is for all your community needs!
                                </Typography>
                            </Paper>
                        </Grid>
                        {/* End sidebar */}
                    </Grid>
                </main>
            </div>
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

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
