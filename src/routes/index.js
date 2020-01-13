import { withLastLocation } from 'react-router-last-location'
import { onSignedInRouting } from './onSignedInRouting'

import { setLastRoute, removeLastRoute, goLastRoute } from './getSetLastRoute'

import { ROUTES, REDIRECTS, isLocationPublic } from './routes'

import {
	history,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_FILTER,
	ROUTE_PARAM_UID,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_PROFILE_ID,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PARAM_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_NOTIFICATIONS,
	ROUTE_PAGE_JOIN,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_SENSHI,
	ROUTE_PAGE_CHAT,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY,
	ROUTE_PAGE_CHECKOUT,
} from './constants'

export {
	withLastLocation,
	onSignedInRouting,
	setLastRoute,
	removeLastRoute,
	goLastRoute,
	isLocationPublic,
	ROUTES,
	REDIRECTS,
	history,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_FILTER,
	ROUTE_PARAM_UID,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_PROFILE_ID,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PARAM_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_PAYMENT,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_NOTIFICATIONS,
	ROUTE_PAGE_JOIN,
	ROUTE_PAGE_HELP,
	ROUTE_PAGE_APPOINTMENTS,
	ROUTE_PAGE_SENSHI,
	ROUTE_PAGE_CHAT,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY,
	ROUTE_PAGE_CHECKOUT,
}
