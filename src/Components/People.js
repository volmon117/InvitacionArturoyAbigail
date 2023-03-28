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
		<Box paddingBottom="200px">
			<ThemeProvider theme={theme}>
				<Typography variant="h3">
					Con la bendición de nuestros padrinos
				</Typography>
			</ThemeProvider>
			<br />
			<img src={novia} height={100} width={100} alt="" />
			<br />
			<Typography variant="h4">
				Juana Yañez Olea
				<br />
				&
				<br />
				Alfredo Ponce Olivo
			</Typography>
			<br />
			<img src={novio} height={100} width={100} alt="" />
			<br />
			<Typography variant="h4">
				Maria de Jesús Hernández Méndez
				<br />
				&
				<br />
				Santiago Del Blanco Chávez
			</Typography>
			<br />
		</Box>
	);
};

export default People;
