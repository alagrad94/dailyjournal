import eventListeners from "./eventListeners";

const journalEntryForm = {

        createEntryForm () {


            let entryForm = $("#entryForm");

            let dateField = document.createElement("section");
            dateField.classList.add("formElement");
            let dateInput = document.createElement("input");
            dateInput.setAttribute("id", "journalDate");
            dateInput.setAttribute("type", "date");
            dateInput.setAttribute("required", "");
            dateInput.setAttribute("name", "journalDate");
            let dateLabel = document.createElement("label")
            dateLabel.setAttribute("for", "journalDate");
            dateLabel.textContent = "Date of Entry";

            dateField.appendChild(dateLabel);
            dateField.appendChild(dateInput);

            let conceptsField = document.createElement("section");
            conceptsField.classList.add("formElement");
            let conceptsInput = document.createElement("textarea");
            conceptsInput.setAttribute("id", "conceptsCovered");
            conceptsInput.setAttribute("cols", "60");
            conceptsInput.setAttribute("rows", "1");
            conceptsInput.setAttribute("required", "");
            conceptsInput.setAttribute("name", "conceptsCovered");
            let conceptsLabel = document.createElement("label")
            conceptsLabel.setAttribute("for", "conceptsCovered");
            conceptsLabel.textContent = "Concepts Covered";

            conceptsField.appendChild(conceptsLabel);
            conceptsField.appendChild(conceptsInput);

            let journalEntryField = document.createElement("section");
            journalEntryField.classList.add("formElement");
            let journalEntryInput = document.createElement("textarea");
            journalEntryInput.setAttribute("id", "journalEntry");
            journalEntryInput.setAttribute("cols", "60");
            journalEntryInput.setAttribute("rows", "1");
            journalEntryInput.setAttribute("required", "");
            journalEntryInput.setAttribute("name", "journalEntry");
            let journalEntryLabel = document.createElement("label")
            journalEntryLabel.setAttribute("for", "journalEntry");
            journalEntryLabel.textContent = "Entry"

            journalEntryField.appendChild(journalEntryLabel);
            journalEntryField.appendChild(journalEntryInput);

            let instructorField = document.createElement("section");
            instructorField.classList.add("formElement");
            let instructorFieldLabel = document.createElement("label");
            instructorFieldLabel.setAttribute("for", "instructor");
            instructorFieldLabel.textContent = "Instructor";
            let instructorSelect = document.createElement("select");
            instructorSelect.setAttribute("id", "instructor");
            instructorSelect.setAttribute("required", "");
            instructorSelect.setAttribute("name", "instructor");
            let instructorOption1 = document.createElement("option");
            instructorOption1.setAttribute("value", 1);
            instructorOption1.textContent = "Jisie David";
            let instructorOption2 = document.createElement("option");
            instructorOption2.setAttribute("value", 2);
            instructorOption2.textContent = "Emily Lemmon";
            let instructorOption3 = document.createElement("option");
            instructorOption3.setAttribute("value", 3);
            instructorOption3.textContent = "Leah Hoefling";


            instructorField.appendChild(instructorFieldLabel);
            instructorSelect.appendChild(instructorOption1);
            instructorSelect.appendChild(instructorOption2);
            instructorSelect.appendChild(instructorOption3);
            instructorField.appendChild(instructorSelect);
            entryForm.append(instructorField);

            let moodField = document.createElement("fieldset");
            moodField.classList.add("formElement");
            moodField.setAttribute("id", "moodForTheDay")
            let moodFieldLegend = document.createElement("legend");
            moodFieldLegend.textContent = "Mood for the Day";
            let moodDiv = document.createElement("div");
            moodDiv.setAttribute("id", "moodDiv");

            let moodOption1 = document.createElement("input");
            moodOption1.setAttribute("value", 2);
            moodOption1.setAttribute("name", "mood");
            moodOption1.setAttribute("id", "moodChoice1");
            moodOption1.setAttribute("type", "radio");
            moodOption1.setAttribute("checked", "")
            let moodLabel1 = document.createElement("label");
            moodLabel1.setAttribute("for", "moodChoice1");
            moodLabel1.textContent = "Happy";

            let moodOption2 = document.createElement("input");
            moodOption2.setAttribute("value", 3);
            moodOption2.setAttribute("name", "mood");
            moodOption2.setAttribute("id", "moodChoice2");
            moodOption2.setAttribute("type", "radio");
            let moodLabel2 = document.createElement("label");
            moodLabel2.setAttribute("for", "moodChoice2");
            moodLabel2.textContent = "Sad";

            let moodOption3 = document.createElement("input");
            moodOption3.setAttribute("value", 1);
            moodOption3.setAttribute("name", "mood");
            moodOption3.setAttribute("id", "moodChoice3");
            moodOption3.setAttribute("type", "radio");
            let moodLabel3 = document.createElement("label");
            moodLabel3.setAttribute("for", "moodChoice3");
            moodLabel3.textContent = "Ok";

            moodField.appendChild(moodFieldLegend);
            moodDiv.appendChild(moodOption1);
            moodDiv.appendChild(moodLabel1);
            moodDiv.appendChild(moodOption2);
            moodDiv.appendChild(moodLabel2);
            moodDiv.appendChild(moodOption3);
            moodDiv.appendChild(moodLabel3);
            moodField.appendChild(moodDiv);

            entryForm.append(dateField);
            entryForm.append(conceptsField);
            entryForm.append(journalEntryField);
            entryForm.append(moodField);

            let journalEntryButton = $("#recordEntryButton");
            journalEntryButton.click(eventListeners.handleRecordEntryButton);

            let moodRadioButtons = $("[name = 'mood']");
            moodRadioButtons.click(eventListeners.filterOnRadioButton);
        }
}

export default journalEntryForm;
