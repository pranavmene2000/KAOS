import React from "react";
import BankCard from "./bank-card";
import { getInitials } from "../utils";

function AccountCard({ account }) {
	return (
		<div className='submission' key={account["id"]}>
			<div className='submission_user'>
				<div className='submission_user_wrapper'>
					<div className='submission_user_avater_container'>
						<span>{getInitials(account["name"])}</span>
					</div>
				</div>
				<p>{account["name"]}</p>
			</div>
			<div className='submission_cards'>
				{account?.banks?.map((bank, index) => {
					return <BankCard key={index} bank={bank} />;
				})}
			</div>
		</div>
	);
}

export default AccountCard;
