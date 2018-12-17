const eventListeners = {

    handleRecordEntryButton () {

        let entryDate = document.getElementById("journalDate").value;
        let entryConcepts = document.getElementById("conceptsCovered").value;
        let entryText = document.getElementById("journalEntry").value;
        let entryMood = document.getElementById("moodForTheDay").value;

        let journalEntryObject = {
            "date": `${entryDate}`,
            "concept": `${entryConcepts}`,
            "entry": `${entryText}`,
            "mood": `${entryMood}`
        }
        console.log(journalEntryObject)

        if (formValidation.validateForm()) {
            API.postJournalEntry(journalEntryObject);
        } else {
            return;
        }
        location.reload(true);

    }
}