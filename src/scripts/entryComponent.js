const entryComponent = {
    makeJournalEntryComponent (entry) {

    let jEDate = entry.date;
    let jEConcept = entry.concept;
    let jEEntry = entry.entry;
    let jEMood = entry.mood;
    
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");

    let entryDiv = document.createElement("div");
    let entryDivText1 = document.createTextNode(`Date: ${jEDate}`)
    let entryDivText2 = document.createTextNode(`Concepts Covered: ${jEConcept}`);
    let entryDivText3 = document.createTextNode(`Journal Entry: ${jEEntry}`);
    let entryDivText4 = document.createTextNode(`Mood: ${jEMood}`);
    
    entryDiv.classList.add("journalEntry");
    entryDiv.appendChild(entryDivText1);
    entryDiv.appendChild(br);
    entryDiv.appendChild(entryDivText2);
    entryDiv.appendChild(br2);
    entryDiv.appendChild(entryDivText3);
    entryDiv.appendChild(br3);
    entryDiv.appendChild(entryDivText4);
    console.log(entryDiv);
    return entryDiv;

    }
};