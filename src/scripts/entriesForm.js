const journalEntryForm = {

        createEntryForm () {
            let entryForm = document.getElementById("entryForm");

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

            let moodField = document.createElement("section");
            moodField.classList.add("formElement");
            let moodFieldLabel = document.createElement("label");
            moodFieldLabel.setAttribute("for", "moodForTheDay");
            moodFieldLabel.textContent = "Mood";
            let moodSelect = document.createElement("select");
            moodSelect.setAttribute("id", "moodForTheDay");
            moodSelect.setAttribute("required", "");
            moodSelect.setAttribute("name", "moodForTheDay");
            let moodOption1 = document.createElement("option");
            moodOption1.setAttribute("value", "Happy");
            moodOption1.textContent = "Happy";
            let moodOption2 = document.createElement("option");
            moodOption2.setAttribute("value", "Sad");
            moodOption2.textContent = "Sad";
            let moodOption3 = document.createElement("option");
            moodOption3.setAttribute("value", "Bored");
            moodOption3.textContent = "Bored";
            let moodOption4 = document.createElement("option");
            moodOption4.setAttribute("value", "Anxious");
            moodOption4.textContent = "Anxious";


            moodField.appendChild(moodFieldLabel);
            moodSelect.appendChild(moodOption1);
            moodSelect.appendChild(moodOption2);
            moodSelect.appendChild(moodOption3);
            moodSelect.appendChild(moodOption4);
            moodField.appendChild(moodSelect);


            entryForm.appendChild(dateField);
            entryForm.appendChild(conceptsField);
            entryForm.appendChild(journalEntryField);
            entryForm.appendChild(moodField);

            let journalEntryButton = document.getElementById("recordEntryButton");
            journalEntryButton.addEventListener("click", eventListeners.handleRecordEntryButton);
        }
}

