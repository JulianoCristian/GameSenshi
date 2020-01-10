import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const {
	FormSignInPropedSignIn,
	Section,
	WrapperStoreWrapperPropedLogin,
} = stopUndefined(Exports)

const SignInPage = () => {
	return (
		<WrapperStoreWrapperPropedLogin>
			<Section>
				<div className='squares square1' />
				<div className='squares square2' />
				<div className='squares square3' />
				<div className='squares square4' />
				<div className='squares square5' />
				<div className='squares square6' />
				<div className='page-header-image' />
				<Container>
					<Row>
						<Col className='mx-auto' lg='5' md='8'>
							<FormSignInPropedSignIn />
						</Col>
					</Row>
				</Container>
				<div className='mt-5' />
			</Section>
		</WrapperStoreWrapperPropedLogin>
	)
}

export { SignInPage }
