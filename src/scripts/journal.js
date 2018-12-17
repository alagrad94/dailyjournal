journalEntryForm.createEntryForm();

API.getJournalEntries().then(parsedEntries => {

    parsedEntries.forEach(entry => {

        let entryHTML = entryComponent.makeJournalEntryComponent(entry);
        renderEntries.renderJournalEntries(entryHTML);
    })
});








