import React, { useState } from "react";

const districts = [
	{ name: "District 1", value: 1 },
	{ name: "District 2", value: 2 },
	{ name: "District 3", value: 3 },
	{ name: "District 4", value: 4 },
	{ name: "District 5", value: 5 },
	{ name: "District 6", value: 6 },
	{ name: "District 7", value: 7 },
];

function Dropdowns(props) {
	const handleOptionChange = (event) => {
		props.setSelectedOption(event.target.value);
	};

	return (
		<div className="Dropdowns" id="drpdwns">
			<h1>Crime Detection and Prediction</h1>
			<div className="dropdown" id="drpdwn">
				{/* <label htmlFor="options" id="lbl">
					Select an option:
				</label> */}
				<h2>Select District</h2>
				<select
					id="options"
					value={props.selectedOption}
					onChange={handleOptionChange}
				>
					{districts.map((e) => {
						return (
							<option key={e.value} value={e.value}>
								{e.name}
							</option>
						);
					})}
					{/* <option value="Option 1">District 1</option>
					<option value="Option 2">District 2</option>
					<option value="Option 3">District 3</option>
					<option value="Option 4">District 4</option>
					<option value="Option 5">District 5</option> */}
				</select>
			</div>
			{/* <div className="comments" id='comment'>
        <label htmlFor="comment" id='cmt'>Leave a comment:</label>
        <textarea id='txt-area' value={comment} onChange={handleCommentChange}></textarea>
      </div> */}
		</div>
	);
}

export default Dropdowns;
