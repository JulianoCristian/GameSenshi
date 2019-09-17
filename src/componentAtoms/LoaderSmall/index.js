import React from 'react'
import {
	LoaderSmall,
	LABEL_SMALL_STATE_IS_LOADING,
} from 'componentAtoms/LoaderSmall/LoaderSmall'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNING_IN } from 'state'

const LoaderSmallPropedIndexNavbar = props => {
	return <LoaderSmall body='...Signing In' {...props} />
}

const mapStoreUserStateToProp = {
	[LABEL_SMALL_STATE_IS_LOADING]: STORE_USER_STATE_SIGNING_IN,
}

const LoaderSmallPropedIndexNavbarStoreUser = StateContainer(
	LoaderSmallPropedIndexNavbar,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

export { LoaderSmallPropedIndexNavbarStoreUser }