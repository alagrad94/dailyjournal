
const entryComponent = {

    makeJournalEntryComponent (entry) {

    let jEDate = entry.date;
    let jEConcept = entry.concept;
    let jEEntry = entry.entry;
    let jEMood = entry.mood.label;
    let jEInstructorFN = entry.instructor.firstName;
    let jEInstructorLN = entry.instructor.lastName;
    let jEInstructor = `${jEInstructorFN} ${jEInstructorLN}`;

    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");

    let entryDiv = document.createElement("div");
    let entryDivText1 = document.createTextNode(`Date: ${jEDate}`)
    let entryDivText2 = document.createTextNode(`Concepts Covered: ${jEConcept}`);
    let entryDivText3 = document.createTextNode(`Journal Entry: ${jEEntry}`);
    let entryDivText4 = document.createTextNode(`Mood: ${jEMood}`);
    let entryDivText5 = document.createTextNode(`Instructor: ${jEInstructor}`);

    entryDiv.classList.add("journalEntry");
    entryDiv.appendChild(entryDivText1);
    entryDiv.appendChild(br);
    entryDiv.appendChild(entryDivText2);
    entryDiv.appendChild(br2);
    entryDiv.appendChild(entryDivText3);
    entryDiv.appendChild(br3);
    entryDiv.appendChild(entryDivText4);
    entryDiv.appendChild(br4);
    entryDiv.appendChild(entryDivText5);

    return entryDiv;

    }
};

export default entryComponent;