export const contactsListSelector = state => {
	if (!state.contacts.filter) {
		return state.contacts.contacts.items
	}
	return state.contacts.contacts.items.filter((item) => item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
	)
}
export const contactsLoading = state => state.contacts.contacts.isLoading

export const contactsFilterSelector = (state) => state.contacts.filter

export const contactsError = state => state.contacts.contacts.error