// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import { makeStyles } from '@material-ui/core/styles';
// //import logo from './asset/placeholder-logo.png'
import logo from './asset/logo-no-bg.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { Grid, Typography, Avatar } from "@material-ui/core";

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Route, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
	overrides: {
		MuiToolbar: {
			gutters: {
				[defaultTheme.breakpoints.down('xl')]: {
					paddingLeft: '100px',
					paddingRight: '100px',
				},
				[defaultTheme.breakpoints.down('lg')]: {
					paddingLeft: '50px',
					paddingRight: '50px',
				},
				[defaultTheme.breakpoints.down('md')]: {
					paddingLeft: '10px',
					paddingRight: '10px',
				},

			},
		},
	}
});

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	appBar: {
		backgroundColor: "#f7f0eb"
		// borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
		height: 80
	},
	toolbarTitle: {
		flexGrow: 1,
		fontFamily: 'cursive',
	},
	link: {
		margin: theme.spacing(1, 1.5),
		textDecoration: 'none',
		//fontWeight: 700,
		//fontSize: 25,
		color: 'black',
		fontFamily: 'cursive',
		textTransform: 'none'
	},
	icon: {
		//marginRight: theme.spacing(2),
		fontSize: 'xx-large',
		margin: theme.spacing(1, 1.5),
	},
	large: {
		width: theme.spacing(8),
		height: theme.spacing(8),
	}
}));

export function Appbar() {
	const classes = useStyles();

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Avatar alt="LittleLimeGrass Logo" src={logo} className={classes.large} />
					<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
						LittleLimegrass
					</Typography>
					<nav>
						<Link variant="button" color="textPrimary" to="/" className={classes.link}>
							Home
						</Link>
						<Link variant="button" color="textPrimary" to="/shop/" className={classes.link}>
							Shop
						</Link>
						<Link variant="button" color="textPrimary" to="/contact-us/" className={classes.link}>
							Contact Us
						</Link>
					</nav>
					<InstagramIcon className={classes.icon} />
					<FacebookIcon className={classes.icon} />
					<SearchIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						|
					</Typography>
					<ShoppingBasketIcon className={classes.icon} />
				</Toolbar>
			</AppBar>
		</MuiThemeProvider>)
}