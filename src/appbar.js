/* eslint-disable no-mixed-spaces-and-tabs */
//import React from "react"
// import { BrowserRouter as Route, Link } from "react-router-dom"

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import { makeStyles } from '@material-ui/core/styles';
// //import logo from './asset/placeholder-logo.png'
import logo from './asset/logo-no-bg.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
// import { Grid, Typography, Avatar } from "@material-ui/core";

// const useStyles = makeStyles(theme => ({
// 	icon: {
// 		//marginRight: theme.spacing(2),
// 		fontSize: 'xx-large',
// 		margin: theme.spacing(1, 1.5),
// 	},
// 	appBar: {
// 		//borderBottom: `1px solid ${theme.palette.divider}`,
// 		bottom: 'auto',
// 		top: 0,
// 		//borderBottom: `1px solid ${theme.palette.grey[300]}`,
// 		paddingTop: '0%',
// 		paddingBottom: '0%',
// 		//backgroundColor:'#36a9c4',
// 		position: 'absolute',
// 	},
// 	toolbar: {
// 		flexWrap: 'wrap',
// 	},
// 	link: {
// 		margin: theme.spacing(1, 1.5),
// 		textDecoration: 'none',
// 		//fontWeight: 700,
// 		fontSize: 25,
// 		color: 'black',
// 		fontFamily: 'cursive'
// 	},
// 	dockLeft: {
// 		textAlign: 'left',
// 		// display: 'contents'
// 		display: '-webkit-inline-box'
// 	},
// 	dockCenter: {
// 		textAlign: 'center'
// 	},
// 	dockRight: {
// 		textAlign: 'right',
// 		display: 'contents'
// 	},
// 	logo: {
// 		maxWidth: '100px',
// 		maxHeight: '40px'
// 	}
// }));

// export function Appbar(){
// 	const classes = useStyles();

// 	return(
// 		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
// 			<Toolbar className={classes.toolbar}>
// 				<Grid
// 					container
// 					direction="row"
// 					justify="space-between"
// 					alignItems="center"
					
// 				>
// 					<Grid item xs className={classes.dockLeft}>
// 						{/* <img src={logo} alt="logo" className={classes.logo}/> */}
// 						<Avatar alt="LittleLimeGrass Logo" src={logo} />
// 						<Link variant="button" to="/" className={classes.link}>
// 							LittleLimeGrass
// 						</Link>
// 					</Grid>
// 					<Grid item xs className={classes.dockRight}>
// 						<Link variant="button" to="/" className={classes.link}>
// 							Home
// 						</Link>
// 						<Link variant="button" to="/products/" className={classes.link}>
// 							Products
// 						</Link>
// 						<Link variant="button" to="/contact-us/" className={classes.link}>
// 							Contact Us
// 						</Link>
// 						<InstagramIcon className={classes.icon} />
// 						<FacebookIcon className={classes.icon} />
// 					</Grid>
// 				</Grid>
					
// 			</Toolbar>
// 		</AppBar>)
// }

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Route, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
        Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

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
		width: theme.spacing(10),
		height: theme.spacing(10),
	}
}));

export function Appbar(){
	const classes = useStyles();

	return (
	// <CssBaseline />
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
				<ShoppingBasketIcon className={classes.icon}/>
			</Toolbar>
		</AppBar>)
			
}