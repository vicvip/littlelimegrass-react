import React from "react"
import { Appbar } from "./appbar"
import { Typography, makeStyles, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@material-ui/core"
import { Paper } from '@material-ui/core';

import carousel1 from './asset/placeholder-carousel1.jpg'
import carousel2 from './asset/placeholder-carousel2.jpg'
import carousel3 from './asset/placeholder-carousel3.jpg'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(theme => ({
	content: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	carouselContainer: {
		maxHeight: 500
	},
	carouselImage: {
		width: '100%',
		height: 450, //minus some height for the container margin
		objectFit: 'cover',
		objectPosition: '20% 10px'
	}
}));

export function Home() {
	const classes = useStyles()
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const cards1 = [
		{
			productCategory: "birthday",
			label: "Birthday Card",
			links: "",
			image: ""
		},
		{
			productCategory: "farewell",
			label: "Farewell Card",
			links: "",
			image: ""
		},
		{
			productCategory: "birthday",
			label: "Birthday",
			links: "",
			image: ""
		},
		{
			productCategory: "birthday",
			label: "Birthday",
			links: "",
			image: ""
		},
	]

	let items = [
		{
			name: "Random Name #1",
			description: "Probably the most random thing you have ever seen!",
			image: carousel1
		},
		{
			name: "Random Name #2",
			description: "Hello World!",
			image: carousel2
		},
		{
			name: '',
			description: '',
			image: carousel3
		}
	]

	return (
		<React.Fragment>
			<Appbar />
			<div className={classes.content}>
				<Container maxWidth="xl" className={classes.carouselContainer}>
					{/* TODO: Extract to componenent */}
					{/* <Carousel animation="slide" autoPlay={true}>
						{items.map(item => {
							return (<Paper key={item}>
								<img src={item.image} alt="carousel" className={classes.carouselImage} />
							</Paper>)
						})}
					</Carousel> */}
				</Container>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Paper Plane
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" paragraph>
						Some short motto or phrase that captures the audience. Start shopping now!
					</Typography>
				</Container>
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map(card => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>

		</React.Fragment>
	)
}