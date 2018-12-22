const eventListeners = {

    handleRecordEntryButton () {

        let entryDate = document.getElementById("journalDate").value;
        let entryConcepts = document.getElementById("conceptsCovered").value;
        let entryText = document.getElementById("journalEntry").value;
        let entryMood = document.querySelector("[name = 'mood']").value;

        let journalEntryObject = {
            "date": `${entryDate}`,
            "concept": `${entryConcepts}`,
            "entry": `${entryText}`,
            "mood": `${entryMood}`
        }

        if (formValidation.validateForm()) {
            API.postJournalEntry(journalEntryObject);
        } else {
            return;
        }
        location.reload(true);

    },

    filterOnRadioButton () {

        let entryLog = document.getElementById("entryLog");
        while (entryLog.firstChild) {
            entryLog.removeChild(entryLog.firstChild);
        }

        let mood = event.target.value
        API.getJournalEntries().then(parsedEntries => {

            const filteredEntries = parsedEntries.filter(entryItem => entryItem.mood === mood)
            filteredEntries.forEach(entry => {

                let entryHTML = entryComponent.makeJournalEntryComponent(entry);
                renderEntries.renderJournalEntries(entryHTML);
            })
        });
    }
}