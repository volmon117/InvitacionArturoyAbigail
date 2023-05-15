import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import { Box, Dialog, DialogTitle } from "@mui/material";
import { MenuItem } from "@mui/material";
import style from "../RSVP/Confirmation.module.css";
import background from "../../Images/imagen4.jpeg";

const Rsvp = () => {
	const [data, setData] = useState({
		name: "",
		people: "",
		phone: "",
		assistence: "",
		alergies: ""
	});
	const { name, people, phone, alergies, assistence } = data;

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
		setTimeout(handleSubmit(),200)
	};
	
	const handleClickOpen = () => {
		setOpen(true);
		setTimeout(handleClose, 2000);
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://v1.nocodeapi.com/volmon117/google_sheets/CDGgypSipMsYCxiB?tabId=hoja1",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify([[name, people, phone, alergies, assistence]]),
				}
			);
			await response.json();
			setData({ assistence: "", name: "", people: "", phone: "", alergies: "" });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div class="form">
			<Box
				id="Confirmacion"
				sx={{
					backgroundImage: `linear-gradient(to right, rgba(140, 140, 140, 0.4), rgba(140, 140, 140, 0.4)),url(${background})`,
					padding: "250px 0 250px 0",
					backgroundPosition: "center",
				}}
				>
				<Typography variant="h2" style={{ color: "#f5e8e0" }}>RSVP</Typography>
				<Typography variant="h3" style={{ color: "#f5e8e0" }}>
					¡Queremos compartir este momento tan esperado contigo!
				</Typography>
				<Typography variant="h4" style={{ color: "#f5e8e0" }}>
					Por favor ayúdanos confirmando tú asistencia.
				</Typography>
				<Typography variant="h3" style={{ color: "#f5e8e0" }}>- No niños -</Typography>
				<br />
				<form noValidate autoComplete="on" onSubmit={handleSubmit}>
					<TextField
						id="name"
						name="name"
						label="Nombre"
						variant="standard"
						size="small"
						value={data.name}
						InputLabelProps={{ className: style.label }}
						style={{
							marginRight: "10px",
							marginBottom: "10px",
							width: "20%",
							filter: "#f5e8e0",
						}}
						onChange={(e) => {
							setData({ ...data, name: e.target.value });
						}}
						/>
					<TextField
						id="people"
						name="people"
						label="Numero de personas"
						variant="standard"
						size="small"
						select
						style={{ width: "20%" }}
						value={data.people}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, people: e.target.value });
						}}
						>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
					</TextField>
					<br />
					<TextField
						id="phone"
						name="phone"
						label="Teléfono"
						variant="standard"
						size="small"
						value={data.phone}
						style={{ marginRight: "10px", width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, phone: e.target.value });
						}}
						/>
					<TextField
						id="alergies"
						name="alergies"
						label="Alergias"
						variant="standard"
						size="small"
						value={data.alergies}
						style={{ marginRight: "10px", width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, alergies: e.target.value });
						}}
						/>
					<br/>
					<TextField
						id="asistencia"
						name="assistence"
						label="Asistirán"
						variant="standard"
						size="small"
						select
						value={data.assistence}
						style={{ width: "20%" }}
						InputLabelProps={{ className: style.label }}
						onChange={(e) => {
							setData({ ...data, assistence: e.target.value });
						}}
					>
						<MenuItem value={1}>Si</MenuItem>
						<MenuItem value={0}>No</MenuItem>
					</TextField>
					<br />
					<br />
					<Button
						variant="text"
						style={{ backgroundColor: "#fbf6f3", color: "black" }}
						onClick={handleClickOpen}
					>
						Confirmar asistencia
					</Button>
					<br />
				</form>
				<br />
				<br />
				<br />
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle
					variant="h3"
					style={{ backgroundColor: "#fbf6f3", color: "black" }}
				>
					Gracias por tu confirmacion
				</DialogTitle>
			</Dialog>
		</div>
	);
};

export default Rsvp;
