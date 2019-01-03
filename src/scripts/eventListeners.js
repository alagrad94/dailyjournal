import API from "./data";
import entryComponent from "./entryComponent";
import formValidation from "./formValidation";
import renderEntries from "./entriesDOM";

const eventListeners = {

    handleRecordEntryButton () {

        let entryDate = $("#journalDate").val();
        let entryConcepts = $("#conceptsCovered").val();
        let entryText = $("#journalEntry").val();
        let entryMood = $("[name = 'mood']").val();
        let entryInstructor = $("#instructor").val();

        let journalEntryObject = {
            "date": `${entryDate}`,
            "concept": `${entryConcepts}`,
            "entry": `${entryText}`,
            "moodId": parseInt(entryMood),
            "instructorId": parseInt(entryInstructor)
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

        let mood = event.target.value.toString();

        API.getJournalEntries().then(parsedEntries => {

            const filteredEntries = parsedEntries.filter(entryItem => entryItem.moodId.toString() === mood)

            filteredEntries.forEach(entry => {

                let entryHTML = entryComponent.makeJournalEntryComponent(entry);
                renderEntries.renderJournalEntries(entryHTML);
            })
        });
    }
}

export default eventListeners;