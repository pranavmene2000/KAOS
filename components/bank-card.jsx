import React from "react";
import { capiptalizeFirstLetter } from "../utils";

function bankCard({ bank }) {
	return (
		<div className='submission_card'>
			<div className='submission_card_left'>
				<h3>{capiptalizeFirstLetter(bank?.meta?.city)}</h3>
				<p>{capiptalizeFirstLetter(bank?.meta?.branch)}</p>
			</div>
			<div className='submission_card_right'>
				<h1 className='text-center'>
					{bank?.meta?.weather?.current?.temperature}
					<sup>°</sup>
				</h1>
				<p>
					H: {bank?.meta?.weather?.tomorrow?.max}
					<sup>°</sup> | L: {bank?.meta?.weather?.tomorrow?.min}
					<sup>°</sup>
				</p>
			</div>
		</div>
	);
}

export default bankCard;
