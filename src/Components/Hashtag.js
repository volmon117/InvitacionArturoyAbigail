import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Hashtag = () => {
	return (
		<Box disableGutters justifyContent="center" id="hashtag">
			<Box
				justifyContent="center"
				p={10}
				paddingBottom="250px"
				paddingTop="250px"
				id="hashtag"
				sx={{ display: { xs: "none", md: "flex" } }}
			>
				<Box justifyContent={"center"}>
					<Typography variant="h3">
						Comparte con nosotros todas tus fotogracias del evento
						<br />
					</Typography>
					<Typography variant="h3">
						Agrega tus fotos a este <a href="https://photos.app.goo.gl/Tx96HMCNxx1t9SmG8">album</a>
					</Typography>
					<br />
					<br />
					<br />
				</Box>
			</Box>
			<Box
				justifyContent="center"
				p={2}
				paddingBottom="250px"
				paddingTop="250px"
				id="hashtag"
				sx={{ display: { xs: "flex", md: "none" } }}
			>
				<Box justifyContent={"center"}>
					<Typography variant="h3">
						Comparte con nosotros todas tus fotogracias del evento
					</Typography>
					<Typography variant="h3">
						Agrega tus fotos a este <a href="https://photos.app.goo.gl/Tx96HMCNxx1t9SmG8">album</a>
					</Typography>
					<br />
					<br />
					<br />
				</Box>
			</Box>
		</Box>
	);
};

export default Hashtag;
