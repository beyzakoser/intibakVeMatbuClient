import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
//import { mainListItems } from './listItems';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MyTable from "../components/myTable";
import AcademicianEditPage from "./AcademicianEditPage";
import Copyright from '../components/Copyright'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import LessonEditPage from "./LessonEditPage";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {


    const mainListItems = (
        <div>
            <RouterLink to="/dashboard">
                <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="İntibak Başvuruları" />
                </ListItem>
            </RouterLink>
            <RouterLink to="/dashboard/akademisyenduzenle">
                <ListItem button >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Akademisyen Düzenleme" />
                </ListItem>
            </RouterLink>
            <RouterLink to="/dashboard/dersduzenle">
                <ListItem button>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ders Düzenleme" />
                </ListItem>
            </RouterLink>
            <RouterLink to="/dashboard/dershavuzu">
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ders Havuzu" />
                </ListItem>
            </RouterLink>
        </div>
    );

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
        <Router>
            <div>
            <Switch>
                <Route exact path="/dashboard">
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="absolute" style={{backgroundColor: "#b71540"}} className={clsx(classes.appBar, open && classes.appBarShift)}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    FSMVÜ İntibak, Akademisyen ve Ders Yönetim Sistemi
                                </Typography>
                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <ExitToAppIcon />
                                    </Badge>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                            }}
                            open={open}
                        >
                            <div className={classes.toolbarIcon}>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{mainListItems}</List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Paper>
                                            <MyTable />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Box pt={4}>
                                    <Copyright />
                                </Box>
                            </Container>
                        </main>
                    </div>
                </Route>
                <Route path="/dashboard/basvuruincele">
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="absolute" style={{backgroundColor: "#b71540"}} className={clsx(classes.appBar, open && classes.appBarShift)}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    FSMVÜ İntibak, Akademisyen ve Ders Yönetim Sistemi
                                </Typography>
                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <ExitToAppIcon />
                                    </Badge>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                            }}
                            open={open}
                        >
                            <div className={classes.toolbarIcon}>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{mainListItems}</List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Paper>
                                            <MyTable />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Box pt={4}>
                                    <Copyright />
                                </Box>
                            </Container>
                        </main>
                    </div>
                </Route>
                <Route path="/dashboard/akademisyenduzenle">
                    <AcademicianEditPage/>
                </Route>
                <Route path="/dashboard/dersduzenle">
                    <LessonEditPage/>
                </Route>
                <Route path="/dashboard/dershavuzu">
                    <AcademicianEditPage/>
                </Route>
            </Switch>
            </div>
        </Router>
        )

}