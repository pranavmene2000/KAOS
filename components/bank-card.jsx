import React from "react";

function bankCard({ bank }) {
	return (
		<div className='submission_card'>
			<div className='submission_card_left'>
				<h3>
					{bank["meta"]["city"].charAt(0).toUpperCase() +
						bank["meta"]["branch"].slice(1)}
				</h3>
				<p>{bank["meta"]["branch"]}</p>
			</div>
			<div className='submission_card_right'>
				<h1 className='text-center'>
					{bank["meta"]["weather"]["current"]["temperature"]}
					<sup> °</sup>
				</h1>
				<p>
					H: {bank["meta"]["weather"]["tomorrow"]["max"]}
					<sup> °</sup> | L: {bank["meta"]["weather"]["tomorrow"]["min"]}
					<sup> °</sup>
				</p>
			</div>
		</div>
	);
}

export default bankCard;
