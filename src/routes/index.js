import { withLastLocation } from 'react-router-last-location'
import { onSignedInRouting } from './onSignedInRouting'

import { Router } from './Router'

import { setLastRoute, removeLastRoute, goLastRoute } from './getSetLastRoute'

import { toIndexIfPublic } from './routes'

import {
	history,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
	ROUTE_PAGE_NOTIFICATIONS,
	ROUTE_PAGE_JOIN,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_SENSHI,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	ROUTE_PAGE_CHECKOUT,
} from './constants'

export {
	Router,
	history,
	withLastLocation,
	onSignedInRouting,
	setLastRoute,
	removeLastRoute,
	goLastRoute,
	toIndexIfPublic,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_404,
	ROUTE_PAGE_NOTIFICATIONS,
	ROUTE_PAGE_JOIN,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_SENSHI,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	ROUTE_PAGE_CHECKOUT,
}
