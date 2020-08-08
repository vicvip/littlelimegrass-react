import React, { useState, useEffect } from "react"
import { Appbar } from "./appbar"
import { Typography, makeStyles, Container, Grid, Card, CardMedia, CardActionArea, CardContent, CardActions, Button, CircularProgress, Select, MenuItem, InputLabel, Box } from "@material-ui/core"
import { Paper } from '@material-ui/core';
import { user } from "./stitchUser";
import Axios from "axios";
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	cardGrid: {
		flexGrow: 1,
		paddingTop: '5%'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	card: {
		height: '100%',
		//display: 'flex',
		//flexDirection: 'column',
		boxShadow: 'none',
		backgroundColor: theme.palette.background.paper,
		borderRadius: 0
	},
	cardMedia: {
		//paddingTop: '56.25%', // 16:9
	},
	imageItem: {
		width: '100%',
		height: '100%'
	},
	loading: {
		marginTop: '2%',
		marginLeft: '50%',
		marginRight: '50%'
	},
	productDetailItem: {
		width: '100%',
	},
	productDetailBasket: {
		textTransform: 'capitalize',
		fontSize: 'x-large',
		width: '100%'
	},
	productDetailQuantity: {
		paddingTop: '10% !important'
	},
	productDetailGrid: {
		padding: '0 10% 0 10%',
		width: '100%'
	}
}));

export function Product(ctx) {
	const classes = useStyles();
	console.log(ctx.match.params.product)
	const [response, setResponse] = useState(null);
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	useEffect(() => {
		async function fetchProduct() {
			const accessToken = await user();
			const resp = await Axios({
				url: 'https://realm.mongodb.com/api/client/v2.0/app/littlelimegrass-kczsz/graphql',
				method: 'post',
				headers: {
					'Authorization': `Bearer ${accessToken}`
				},
				data: {
					query: `
						query {
							product(query: {productId: "${ctx.match.params.product}"}) {
							_id
								color
								description
								imageList
								imageUrl
								material
								price
								productId
								stock
							}
						}
					`
				}
			});
			setResponse(resp);
		}

		fetchProduct();
	}, [])

	console.log(response)

	return (
		<React.Fragment>
			<Appbar />
			{response ? <Container className={classes.cardGrid} maxWidth={false}>
				<Grid container 
				direction="row"
				justify="center"
				alignItems="flex-start"
				spacing={3}>
					<Grid item xs={2} md={1}>
						<Grid
						container
						direction="column"
						justify="flex-start"
						alignItems="flex-start"
						spacing={1}
						>
							{response.data.data.product.imageList.map(image => (
								<Grid item key={image}>
									<Paper variant="outlined" >
										<img className={classes.imageItem} src={image} />
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={9} md={5}>
						<Paper variant="outlined" >
							<img className={classes.imageItem} src={response.data.data.product.imageUrl} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={5}>
						<Grid
							container
							direction="column"
							justify="flex-start"
							alignItems="stretch"
							spacing={1}
							className={classes.productDetailGrid}
						>
							<Grid item xs={12}>
								<Typography variant="h4" align="center" color="textPrimary" paragraph className={classes.productDetailItem}>
									{response.data.data.product.description}
								</Typography>
							</Grid>
							<Grid item xs={12} className={classes.productDetailQuantity}>
								<InputLabel id="demo-simple-select-label">Quantity</InputLabel>
								<Select className={classes.productDetailItem}
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={age}
									onChange={handleChange}
								>
									{[...Array(20).keys()].map(i => (
										i === 0 ? '' : <MenuItem key={i} value={i}>{i}</MenuItem>
									))}
								</Select>
							</Grid>
							<Grid item xs={12} className={classes.productDetailQuantity}>
								<Grid container justify="space-between">
									<Grid item>
										<Typography variant="h4" align="center" color="textPrimary" paragraph className={classes.productDetailItem}>
											{`AU$${Number(response.data.data.product.price).toFixed(2)}`}
										</Typography>
									</Grid>
									<Grid item>
										<Typography variant="h5" align="center" color="textPrimary" paragraph className={classes.productDetailItem}>
											<CheckIcon /> In Stock
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<Button
									variant="contained"
									color="primary"
									className={classes.productDetailBasket}
									size="large"
									startIcon={<AddIcon />}
								>
									Add to Basket
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container> : 
			<CircularProgress color="secondary" className={classes.loading}/>}
			
		</React.Fragment>
	)
}