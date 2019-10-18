import React from 'react'
import { stopUndefined } from 'utils'
//components
import { Exports } from 'componentMolecules'

const { FinalInputText } = stopUndefined(Exports)

const FINAL_TEXT_PASSWORD = 'password'

const FinalTextPassword = props => {
	const { ...restProps } = props
	return (
		<FinalInputText
			type={FINAL_TEXT_PASSWORD}
			name={FINAL_TEXT_PASSWORD}
			placeholder='Password'
			icon='tim-icons icon-lock-circle'
			{...restProps}
		/>
	)
}

export { FinalTextPassword, FINAL_TEXT_PASSWORD }
