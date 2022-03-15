import React from "react";

const AccountFeed = () => {
	console.log(accnts);
	return (
		<div className='form'>
			{accnts &&
				accnts.map((acc, index) => {
					return (
						<div className='submission' key={index}>
							<div className='submission_user'>
								<div className='submission_user_wrapper'>
									<div className='submission_user_avater_container'>
										<span>JD</span>
									</div>
								</div>
								<p>{acc["name"]}</p>
							</div>
							<div className='submission_cards'>
								{acc &&
									acc.accns?.map((a, index) => {
										return (
											<div key={index} className='submission_card'>
												<div className='submission_card_left'>
													<h3>City One</h3>
													<p>Clean Kisses</p>
												</div>
												<div className='submission_card_right'>
													<h1>
														24<sup> °</sup>
													</h1>
													<p>
														H: 27<sup> °</sup> | L: 21<sup> °</sup>
													</p>
												</div>
											</div>
										);
									})}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default AccountFeed;

const accounts = [
	{
		id: 26,
		name: "Jon Doe",
		banks: [
			{
				ifsc: "2a2ade3c-6bd2-424f-8f6c-66c1fc833974",
				meta: {
					name: "Pena",
					branch: "Susanne",
					city: "ZILLANET",
					weather: {
						current: {
							temperature: 33,
							comment: "susannepena@zillanet.com",
						},
						tomorrow: {
							min: 9,
							max: 19,
						},
					},
				},
			},
			{
				ifsc: "75108e18-7230-41ef-b728-d7643668c7d4",
				meta: {
					name: "Jones",
					branch: "Jensen",
					city: "STROZEN",
					weather: {
						current: {
							temperature: 36,
							comment: "jensenjones@strozen.com",
						},
						tomorrow: {
							min: 10,
							max: 33,
						},
					},
				},
			},
			{
				ifsc: "954c53b1-7e65-4435-9bde-87801c13955e",
				meta: {
					name: "Vargas",
					branch: "Lucile",
					city: "NEWCUBE",
					weather: {
						current: {
							temperature: 39,
							comment: "lucilevargas@newcube.com",
						},
						tomorrow: {
							min: 10,
							max: 29,
						},
					},
				},
			},
		],
	},
	{
		id: 26,
		name: "Jon Doe",
		banks: [
			{
				ifsc: "8dedd8a7-6204-430b-8e7a-b5137dc4075a",
				meta: {
					name: "Decker",
					branch: "Nettie",
					city: "COMCUBINE",
					weather: {
						current: {
							temperature: 22,
							comment: "nettiedecker@comcubine.com",
						},
						tomorrow: {
							min: 6,
							max: 39,
						},
					},
				},
			},
			{
				ifsc: "3737947b-f1fe-4448-8259-2319a5407b53",
				meta: {
					name: "Skinner",
					branch: "Stark",
					city: "FRANSCENE",
					weather: {
						current: {
							temperature: 28,
							comment: "starkskinner@franscene.com",
						},
						tomorrow: {
							min: 7,
							max: 33,
						},
					},
				},
			},
			{
				ifsc: "be7c7be8-db1b-4231-81f5-9636c500c566",
				meta: {
					name: "Mason",
					branch: "Patty",
					city: "ORBIFLEX",
					weather: {
						current: {
							temperature: 36,
							comment: "pattymason@orbiflex.com",
						},
						tomorrow: {
							min: 6,
							max: 29,
						},
					},
				},
			},
		],
	},
	{
		id: 221,
		name: "Jon Doe",
		banks: [
			{
				ifsc: "99c6d71e-8929-4dcd-b614-19a1cd732ffd",
				meta: {
					name: "Lloyd",
					branch: "Jodie",
					city: "NAMEBOX",
					weather: {
						current: {
							temperature: 37,
							comment: "jodielloyd@namebox.com",
						},
						tomorrow: {
							min: 10,
							max: 29,
						},
					},
				},
			},
			{
				ifsc: "40e0fcee-3797-4441-a701-c53c10555223",
				meta: {
					name: "Martinez",
					branch: "April",
					city: "RUGSTARS",
					weather: {
						current: {
							temperature: 30,
							comment: "aprilmartinez@rugstars.com",
						},
						tomorrow: {
							min: 6,
							max: 40,
						},
					},
				},
			},
			{
				ifsc: "57850f66-dcdc-460e-9752-d2d7fee28e47",
				meta: {
					name: "Finley",
					branch: "Bradley",
					city: "MEDIOT",
					weather: {
						current: {
							temperature: 29,
							comment: "bradleyfinley@mediot.com",
						},
						tomorrow: {
							min: 9,
							max: 16,
						},
					},
				},
			},
		],
	},
	{
		id: 335,
		name: "Doe John",
		banks: [
			{
				ifsc: "28b874a7-5a4c-4038-b014-a9abcbb50753",
				meta: {
					name: "Hamilton",
					branch: "Noel",
					city: "TOYLETRY",
					weather: {
						current: {
							temperature: 33,
							comment: "noelhamilton@toyletry.com",
						},
						tomorrow: {
							min: 7,
							max: 20,
						},
					},
				},
			},
			{
				ifsc: "241c6990-0793-4034-a721-72fe49827f74",
				meta: {
					name: "Bowman",
					branch: "Pickett",
					city: "EARBANG",
					weather: {
						current: {
							temperature: 23,
							comment: "pickettbowman@earbang.com",
						},
						tomorrow: {
							min: 10,
							max: 22,
						},
					},
				},
			},
			{
				ifsc: "6c21b996-5c59-4ed5-8a6e-60a2999c5808",
				meta: {
					name: "Greer",
					branch: "Bartlett",
					city: "LYRICHORD",
					weather: {
						current: {
							temperature: 40,
							comment: "bartlettgreer@lyrichord.com",
						},
						tomorrow: {
							min: 5,
							max: 17,
						},
					},
				},
			},
		],
	},
	{
		id: 421,
		name: "Doe John",
		banks: [
			{
				ifsc: "988ef95d-630d-4f76-ad55-16d352287728",
				meta: {
					name: "Crawford",
					branch: "Terrell",
					city: "ACCUPRINT",
					weather: {
						current: {
							temperature: 20,
							comment: "terrellcrawford@accuprint.com",
						},
						tomorrow: {
							min: 6,
							max: 23,
						},
					},
				},
			},
			{
				ifsc: "c6f9ab6f-6e1f-44a6-ab42-804dbf782408",
				meta: {
					name: "Mccormick",
					branch: "Kent",
					city: "LUNCHPOD",
					weather: {
						current: {
							temperature: 38,
							comment: "kentmccormick@lunchpod.com",
						},
						tomorrow: {
							min: 9,
							max: 25,
						},
					},
				},
			},
			{
				ifsc: "1d95a655-6cc4-4b3b-93f0-ffda019b6054",
				meta: {
					name: "Sears",
					branch: "Mable",
					city: "ETERNIS",
					weather: {
						current: {
							temperature: 36,
							comment: "mablesears@eternis.com",
						},
						tomorrow: {
							min: 5,
							max: 23,
						},
					},
				},
			},
		],
	},
	{
		id: 532,
		name: "Jow Alieie",
		banks: [
			{
				ifsc: "b18ff638-0c67-41e2-b819-c6fb00799128",
				meta: {
					name: "Patton",
					branch: "Jenny",
					city: "BULLJUICE",
					weather: {
						current: {
							temperature: 32,
							comment: "jennypatton@bulljuice.com",
						},
						tomorrow: {
							min: 7,
							max: 15,
						},
					},
				},
			},
			{
				ifsc: "d237ebe7-3b9e-474d-8d18-40093c230897",
				meta: {
					name: "Pugh",
					branch: "Leach",
					city: "PAWNAGRA",
					weather: {
						current: {
							temperature: 35,
							comment: "leachpugh@pawnagra.com",
						},
						tomorrow: {
							min: 7,
							max: 21,
						},
					},
				},
			},
			{
				ifsc: "4daa6c88-0ddb-4257-b8d9-4a401d7940ce",
				meta: {
					name: "Garcia",
					branch: "Bradshaw",
					city: "PRIMORDIA",
					weather: {
						current: {
							temperature: 39,
							comment: "bradshawgarcia@primordia.com",
						},
						tomorrow: {
							min: 9,
							max: 24,
						},
					},
				},
			},
		],
	},
	{
		id: 628,
		name: "Doe John",
		banks: [
			{
				ifsc: "0a1e68b2-4d97-4b88-b56e-2920a60542b6",
				meta: {
					name: "Peters",
					branch: "Haynes",
					city: "CAPSCREEN",
					weather: {
						current: {
							temperature: 37,
							comment: "haynespeters@capscreen.com",
						},
						tomorrow: {
							min: 8,
							max: 25,
						},
					},
				},
			},
			{
				ifsc: "89e1e4dd-6435-4afb-8748-1ebae8507010",
				meta: {
					name: "Chase",
					branch: "Mccray",
					city: "RODEOCEAN",
					weather: {
						current: {
							temperature: 31,
							comment: "mccraychase@rodeocean.com",
						},
						tomorrow: {
							min: 7,
							max: 36,
						},
					},
				},
			},
			{
				ifsc: "0eb426bc-40d0-4630-8082-17d0dede82ed",
				meta: {
					name: "Atkinson",
					branch: "Barr",
					city: "ROTODYNE",
					weather: {
						current: {
							temperature: 36,
							comment: "barratkinson@rotodyne.com",
						},
						tomorrow: {
							min: 5,
							max: 18,
						},
					},
				},
			},
		],
	},
];

const accnts = [];
const newAccounts = accounts.map((acc, index) => {
	const isAccntFound = accnts.find((a) => a["name"] === acc["name"]);
	console.log(isAccntFound);
	if (!isAccntFound) {
		accnts.push({
			name: acc["name"],
			accns: [acc],
		});
	} else {
		isAccntFound["accns"] = [...isAccntFound["accns"], acc];
		return isAccntFound;
	}
});
