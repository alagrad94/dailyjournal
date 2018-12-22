import API from "./data";
import journalEntryForm from "./entriesForm";
import renderEntries from "./entriesDOM";
import entryComponent from "./entryComponent";

journalEntryForm.createEntryForm();

API.getJournalEntries().then(parsedEntries => {

    parsedEntries.forEach(entry => {

        let entryHTML = entryComponent.makeJournalEntryComponent(entry);
        renderEntries.renderJournalEntries(entryHTML);
    })
})








