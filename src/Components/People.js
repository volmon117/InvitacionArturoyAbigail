import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Box } from "@mui/material";
import novia from "../Images/novia.webp";
import novio from "../Images/novio.png";

const theme = createTheme({
	typography: {
		fontFamily: "Tangerine",
	},
});

const People = () => {
	return (
		<Box paddingBottom={50} paddingTop={50}>
			<ThemeProvider theme={theme}>
				<Typography variant="h3">
					Con la bendición de nuestros padrinos
				</Typography>
			</ThemeProvider>
			<br />
			<img src={novia} height={100} width={100} alt="" />
			<img src={novio} height={100} width={100} alt="" />
			<br />
			<br />
			<Typography variant="h4" >
				nombre 1
				<br />
				nombre 2
			</Typography>
		</Box>
	);
};

export default People;
