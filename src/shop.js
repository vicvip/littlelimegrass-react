import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"

import { Appbar } from "./appbar";
import axios from 'axios';
import Cookies from 'js-cookie';
import { CircularProgress, CardActionArea } from '@material-ui/core';
import { user } from './stitchUser';

const useStyles = makeStyles(theme => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: 'none',
		backgroundColor: theme.palette.background.paper,
		borderRadius: 0
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
		paddingLeft: 0
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	carouselContainer: {
		maxHeight: 500
	},
	carouselImage: {
		width: '100%',
		height: 450, //minus some height for the container margin
		objectFit: 'cover',
		objectPosition: '20% 10px'
	},
	loading: {
		marginTop: '2%',
		marginLeft: '50%',
		marginRight: '50%'
	},
	link: {
		textDecoration: 'none',
		color: 'black'
	}
}));

export function Shop() {
	const classes = useStyles();
	const [response, setResponse] = useState(null);

	useEffect(() => {
		async function fetchProducts() {
			const accessToken = await user();
			const resp = await axios({
				url: 'https://realm.mongodb.com/api/client/v2.0/app/littlelimegrass-kczsz/graphql',
				method: 'post',
				headers: {
					'Authorization': `Bearer ${accessToken}`
				},
				data: {
					query: `
						query {
							products {
								_id
								imageUrl
								price
								productId
								description
								stock
								material
								color
							}
						}
					`
				}
			});
			setResponse(resp);
		}

		fetchProducts();
	}, [])

	return (
		<React.Fragment>
			{/* <CssBaseline /> */}
			<Appbar />
			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Shop
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Insert small description if necessary.
						</Typography>
					</Container>
				</div>
				<div className={classes.heroButtons}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Typography variant="h5" align="center" color="textSecondary" paragraph>
								Sort by 
							</Typography>
						</Grid>
						<Grid item>
							<Button variant="contained" color="primary">
								Everything
							</Button>
						</Grid>
						<Grid item>
							<Button variant="outlined" color="primary">
								Price: Low to High
							</Button>
						</Grid>
						<Grid item>
							<Button variant="outlined" color="primary">
								Price: High to Low
							</Button>
						</Grid>
					</Grid>
				</div>
				{response ? 
				<Container className={classes.cardGrid} maxWidth="xl">
					<Grid
						container
						direction="row"
						justify="flex-start"
						alignItems="flex-start"
						spacing={3}
					>
						{response.data.data.products.map(card => (
							<Grid item key={card.productId} xs={12} md={4}>
								<Card className={classes.card}>
									<CardActionArea>
										<Link to={`/shop/${card.productId}`} className={classes.link}>
											<CardMedia
												className={classes.cardMedia}
												image={card.imageUrl}
												title={card.description}
											/>
											<CardContent className={classes.cardContent}>
												<Typography>
													{card.description}
												</Typography>
												<Typography gutterBottom variant="h5" component="h2">
													{`AU$${Number(card.price).toFixed(2)}`}
												</Typography>
											</CardContent>
										</Link>
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container> :
				<CircularProgress color="secondary" className={classes.loading}/>}
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
				</Typography>
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}