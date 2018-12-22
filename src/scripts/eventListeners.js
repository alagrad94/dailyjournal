const eventListeners = {

    handleRecordEntryButton () {

        let entryDate = $("#journalDate").val();
        let entryConcepts = $("#conceptsCovered").val();
        let entryText = $("#journalEntry").val();
        let entryMood = $("[name = 'mood']").val();

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

        let entryLog = $("#entryLog");
        entryLog.empty();

        let mood = event.target.value;
        API.getJournalEntries().then(parsedEntries => {

            const filteredEntries = parsedEntries.filter(entryItem => entryItem.mood === mood)
            filteredEntries.forEach(entry => {

                let entryHTML = entryComponent.makeJournalEntryComponent(entry);
                renderEntries.renderJournalEntries(entryHTML);
            })
        });
    }
}