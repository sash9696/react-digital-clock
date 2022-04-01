import React, { useEffect, useState } from "react";

function App() {
	const [date, setDate] = useState(new Date())


	function refreshOneSec(){
		setDate(new Date())
	}
	useEffect(()=>{
		let timerId = setInterval(refreshOneSec, 1000)

		return function cleanup(){
			clearInterval(timerId)
		}
	}, [])
	

	return (
		<div className="app">
			<h1>{date.toLocaleTimeString()}</h1>
			
			
		</div>
	);
}

export default App;
