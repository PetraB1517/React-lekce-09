import React, {useEffect, useState} from "react";
//import './style.css';



const WorldTime = () => {
	const [dateTime, setDateTime]=useState("");
	const [timeZone, setTimeZone]=useState(`Europe/Prague`);

	const handleTimezoneChange = (event) =>{
		setTimeZone(event.target.value);
		changeTimeZone();
	};

	const changeTimeZone = () =>{
		fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`)
		.then(response=>response.json())
		.then(data =>setDateTime(data.datetime))
	}

	useEffect(() => {
		changeTimeZone()},
		[timeZone]
	)

	return (
		<div>
			<h1>WorldTime</h1>
			<p> Aktualni cas je {dateTime} </p>
			<select onChange={(event) => handleTimezoneChange(event)} value={timeZone}>
				<option value="America/New_York">New York</option>
				<option value="Europe/London">Londýn</option>
				<option value="Europe/Moscow">Moskva</option>
				<option value="Europe/Prague">Praha</option>
				<option value="Asia/Hong_Kong">Hong Kong</option>
				<option value="Asia/Jerusalem">Jeruzalém</option>
			</select>
		</div>
		
			
		    
	)
}

  export default WorldTime;
