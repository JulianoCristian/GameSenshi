import { onAuthChanged } from './onAuthChanged'
import { getRedirectResult } from './getRedirectResult'
import { auth } from './core'
import {
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
} from './storage'
import {
	docGeneralSettingGet,
	docGeneralSettingSet,
	docGeneralSettingOnSnapshot,
	docNotificationSettingGet,
	docNotificationSettingSet,
} from './fireStored'

// user auth listener
auth().onAuthStateChanged(userAuth => {
	onAuthChanged(userAuth, (next, error) =>
		docGeneralSettingOnSnapshot(
			{ includeMetadataChanges: true },
			{ next, error }
		)
	)
})

// listener to get back sign in token from federated identity provider
getRedirectResult()

export {
	auth,
	docGeneralSettingGet,
	docGeneralSettingSet,
	docNotificationSettingGet,
	docNotificationSettingSet,
	storageUserAvatarGet,
	storageUserAvatarSet,
	storageUserAvatarRemove,
}
