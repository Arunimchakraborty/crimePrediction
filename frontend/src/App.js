import React, { useEffect, useState } from "react";
// import React, { useState } from 'react';
import "./App.css";
import "./components/dropdowns.css";
import "./components/Daytime.css";
import Navbar from "./components/Navbar";
import Dropdowns from "./components/Dropdowns";
import Daytime from "./components/Daytime";

import axios from "axios";

const axiosReqHandler = (district, day, hour, setRes) => {
	axios
		.get(`http://127.0.0.1:5000/district/${district}/day/${day}/hour/${hour}`)
		.then(function (response) {
			console.log(response.data);
			setRes(response.data);
		})
		.catch(function (error) {
			console.error(error);
			alert(error);
		});
};

function Result(props) {
	return (
		<div>
			<h2>{`Predicted Crime Rate is : ${props.result}`}</h2>
		</div>
	);
}

function App() {
	const [selectedDay, setSelectedDay] = useState(0);
	const [selectedTime, setSelectedTime] = useState(0);
	const [selectedDistrict, setSelectedDistrict] = useState(0);
	const [res, setRes] = useState(undefined);

	useEffect(() => {
		console.log({ selectedDay, selectedTime });
	}, [selectedDay, selectedTime]);
	return (
		<>
			<Navbar />
			<Dropdowns
				selectedOption={selectedDistrict}
				setSelectedOption={setSelectedDistrict}
			/>{" "}
			{/*District Dropdowns*/}
			<Daytime
				selectedTime={selectedTime}
				setSelectedTime={setSelectedTime}
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				handler={() =>
					axiosReqHandler(selectedDistrict, selectedDay, selectedTime, setRes)
				}
			/>
			<Result result={res} />
		</>
	);
}

export default App;
