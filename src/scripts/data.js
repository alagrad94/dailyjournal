
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor")
            .then(response => response.json())
    },

    postJournalEntry(journalEntryObject) {
        fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntryObject)
        })
    }
};

export default API;