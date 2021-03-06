const formValidation = {

    validateForm () {

        // let alertsArray = [];

        if (formValidation.validateDate() && formValidation.validateConcepts() && formValidation.validateEntry() && formValidation.validateMood() && formValidation.validateInstructor()) {
            return true;
        } else {
            // alert("Date field must be filled out");
            return false;
        }
    },

    validateDate () {
        let dateValidation = document.forms["entryForm"]["journalDate"].value;

        if (dateValidation === "") {
            alert("Date field must be filled out");
            return false;
        } else {
            return true;
        }
    },

    validateConcepts () {
        let conceptsValidation = document.forms["entryForm"]["conceptsCovered"].value;
        let conceptsLength = conceptsValidation.length;

        if (conceptsValidation === "") {
            alert("Concepts field must be filled out");
            return false;
        } else if (conceptsLength > 100) {
            alert("Concepts field must be filled out");
            return false;
        } else {
            return true;
        }
    },

    validateEntry () {
        let entryValidation = document.forms["entryForm"]["journalEntry"].value;
        let pottyMouthWords = new RegExp([/\b(\w*shit\w*)\b|\b(\w*fuck\w*)\b|\b(\w*piss\w*)\b|(hell)|\b(\w*damn\w*)\b/], "i");

            console.log(entryValidation)
            console.log(pottyMouthWords)

        if (entryValidation === "") {
            alert("Entry field must be filled out");
            return false;
        } else if (pottyMouthWords.test(entryValidation)) {
            alert("Potty mouth");
            return false;
        } else {
            return true;
        }
    },

    validateMood () {
        let moodValidation = document.forms["entryForm"]["moodForTheDay"].value;
        if (moodValidation === "") {
            alert("Mood field must be filled out");
            return false;
        } else {
            return true;
        }
    },

    validateInstructor() {
        let instructorValidation = document.forms["entryForm"]["instructor"].value;
        if (instructorValidation === "") {
            alert("Instructor field must be filled out");
            return false;
        } else {
            return true;
        }
    }
}

export default formValidation;