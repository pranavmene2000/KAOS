import { useMutation, gql } from "@apollo/client";
import { FieldArray, Form, Formik } from "formik";
import React from "react";

const CREATE_ACCOUNT = gql`
	mutation CreateAccount($name: String!, $ifscs: [String!]!) {
		create_account(name: $name, ifscs: $ifscs)
	}
`;

const AccountForm = () => {
	const [CreateAccount, { data, error, loading }] = useMutation(CREATE_ACCOUNT);
	console.log(data);

	return (
		<React.Fragment>
			<Formik
				initialValues={{ name: "", ifscs: [""] }}
				onSubmit={({ name, ifscs }, helpers) => {
					console.log({ name, ifscs });
					helpers.resetForm();
					CreateAccount({
						variables: {
							name,
							ifscs,
						},
					});
				}}
			>
				{({ values, handleChange, handleSubmit }) => (
					<Form onSubmit={handleSubmit} className='form'>
						<div className='name_input_wrapper'>
							<label htmlFor='name'>Name</label>
							<input
								onChange={handleChange}
								value={values.name}
								placeholder='Enter your Name'
								type='text'
								name='name'
							/>
						</div>
						<FieldArray
							className='IFSC_input_wrapper'
							name='ifscs'
							render={(arrayHelpers) => (
								<div>
									{values.ifscs && values.ifscs.length > 0 && (
										<label htmlFor='IFSC'>IFSC Codes</label>
									)}
									{values.ifscs && values.ifscs.length > 0
										? values.ifscs.map((code, index) => (
												<div className='IFSC_input_wrapper' key={index}>
													<div className='IFSC_input_div'>
														<input
															onChange={handleChange}
															value={values.ifscs[index]}
															placeholder='Enter IFSC Code'
															type='text'
															name={`ifscs.${index}`}
														/>
														<div
															onClick={() => arrayHelpers.remove(index)}
															type='button'
														>
															<svg
																width='12'
																height='12'
																viewBox='0 0 12 12'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	d='M1.75735 1.75736L5.99999 6M5.99999 6L10.2426 10.2426M5.99999 6L10.2426 1.75736M5.99999 6L1.75735 10.2426'
																	stroke='#FAFAFC'
																	strokeWidth='2'
																	strokeLinecap='round'
																	strokeLinejoin='round'
																/>
															</svg>
														</div>
													</div>
												</div>
										  ))
										: null}

									<button
										onClick={() => arrayHelpers.push("")}
										type='button'
										className='add_IFSC_code'
									>
										Add IFSC
									</button>
									<button className='submit_button' type='submit'>
										Submit
									</button>
								</div>
							)}
						/>
					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
};

export default AccountForm;
