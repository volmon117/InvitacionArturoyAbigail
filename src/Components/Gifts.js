import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
//import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import dinero from "../Images/dinero.png";
//import bbva from "../Images/bbva.jpeg";

const Gifts = () => {
	return (
		<Box disableGutters justifyContent={"center"} id="Regalos">
			<Typography variant="h3">
				Emprenderemos una aventura juntos,
				<br />
				Por lo que les agradecemos sus regalos sean a través de la cuenta BBVA
				<br />
			</Typography>
			<br />
			<Grid container justifyContent="center" paddingTop={"20px"}>
				<Card>
					<CardActionArea
						onClick={() => {
							navigator.clipboard.writeText("012320012371486666");
						}}
					>
						<br />
						<img src={dinero} height={100} width={100} alt="" />
						{/* <CardMedia component="img" image={bbva} height="100px"></CardMedia> */}
						<CardContent>
							<h5>
								012320012371486666
								<br />
								click para copiar
							</h5>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Box>
	);
};

export default Gifts;
