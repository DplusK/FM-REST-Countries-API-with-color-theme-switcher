export const state = () => ({
    leads: [],
    filteredLeads: [],
    lead: {},
    filter: {
        search: '',
        status: 'all',
        order: 'createdAt'
    }
})