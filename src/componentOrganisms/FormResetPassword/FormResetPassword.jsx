import React, { useState, useRef, useCallback } from 'react'
import { stopUndefined } from 'utils'

// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Form,
} from 'reactstrap'
// core components
import { Exports } from 'componentnCompounds'

const {
	FinalForm,
	ButtonSubmitPropedRound,
	FinalTextEmailPropedForgotPassword,
	FINAL_TEXT_EMAIL,
	Link,
} = stopUndefined(Exports)

const FormResetPassword = props => {
	const [sent, setSent] = useState(false)
	const [email, setEmail] = useState('')
	const submitButton = useRef(null)

	const onSuccessfulSubmission = useCallback(() => {
		setSent(true)
	}, [])

	const onEmailChange = useCallback(e => {
		setEmail(e.target.value)
	}, [])

	const { linkSignIn, onSubmit } = props

	return (
		<Card className='card-login'>
			<FinalForm
				initialValues={{
					[FINAL_TEXT_EMAIL]: '',
				}}
				onSubmit={onSubmit}
				onSuccessfulSubmission={onSuccessfulSubmission}
			>
				{({ submitError, handleSubmit, submitting }) => {
					return (
						<Form action='' className='form' method=''>
							<CardHeader>
								<CardImg alt='...' src={require('assets/img/shape.png')} />
								<CardTitle tag='h4'>Reset Password</CardTitle>
							</CardHeader>
							{sent ? (
								<CardBody>
									<h4 className='description text-center'>
										Check your{' '}
										<a
											href={'https://' + email}
											target='_blank'
											rel='noopener noreferrer'
											className='link footer-link text-warning font-weight-bold'
										>
											<strong>email</strong>
										</a>{' '}
										for a link to reset your password. If it doesn’t appear
										within a few minutes, check your spam folder.
									</h4>
								</CardBody>
							) : (
								<>
									<CardBody>
										<h4 className='description text-center'>
											Enter email address to reset password
										</h4>
										<FinalTextEmailPropedForgotPassword
											submitRef={submitButton}
											onChange={onEmailChange}
										/>
									</CardBody>
									<CardFooter className='text-center'>
										{submitError && !submitting && `Error: ${submitError}`}
										<ButtonSubmitPropedRound
											submitRef={submitButton}
											block
											color='warning'
											submitting={submitting}
											onClick={handleSubmit}
											size='lg'
										>
											{submitting ? 'Requesting reset' : '	Request Reset'}
										</ButtonSubmitPropedRound>
									</CardFooter>
								</>
							)}
							<div className='pull-left ml-3 mb-3'>
								<h6>
									<Link className='link footer-link' to={linkSignIn}>
										Back to Sign in
									</Link>
								</h6>
							</div>
							<div className='pull-right mr-3 mb-3'>
								<h6>
									<a
										className='link footer-link'
										href='#pablo'
										onClick={e => e.preventDefault()}
									>
										Need Help?
									</a>
								</h6>
							</div>
						</Form>
					)
				}}
			</FinalForm>
		</Card>
	)
}

export { FormResetPassword, FINAL_TEXT_EMAIL }
