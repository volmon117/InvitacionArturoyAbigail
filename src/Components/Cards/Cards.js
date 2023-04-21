import { Typography, CardMedia, CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActionArea, createTheme, ThemeProvider } from "@material-ui/core";
import "../../App.css";
import { Box } from "@mui/material";
import imagen from "../../Images/bellago.webp";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const Cards = () => {
	const handleClick = () => {
		window.open(
			"https://www.google.com/travel/hotels/s/4ah5gSReZn9nVNVN6"
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box id="ubicacion">
				<Grid
					container
					p={6}
					justifyContent="center"
					alignItems="center"
					className={Grid}
					sx={{ pt: 6 }}
				>
					<Grid item xs={12} sm={9} p={2}>
						<Card>
							<CardActionArea onClick={handleClick}>
								<CardMedia
									component="img"
									image={imagen}
									alt="Hotel Bellago"
								/>
								<CardContent>
									<Typography variant="h5">Hotel Bellago</Typography>
									<Typography variant="body3">
										20 de Noviembre 1646, El Raicero, 47800 Ocotlán, Jal.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	);
};

export default Cards;
