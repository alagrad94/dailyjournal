import eventListeners from "./eventListeners";

const journalEntryForm = {

    createEntryForm () {


        let entryForm = $("#entryForm");

        let dateField = this.createDomElement({
            elementType: "section",
            cssClass: "formElement"
        });

        dateField.appendChild(this.createDomElement({
            elementType: "label",
            content: "Date of Entry",
            attributes: {
                for: "journalDate",
                type: "date",
                required: "",
                name: "journalDate"
            }
        }));

        dateField.appendChild(this.createDomElement({
            elementType: "input",
            attributes: {
                id: "journalDate",
                type: "date",
                required: "",
                name: "journalDate"
            }
        }));

        let conceptsField = this.createDomElement({
            elementType: "section",
            cssClass: "formElement"
        });

        conceptsField.appendChild(this.createDomElement({
            elementType: "label",
            content: "Concepts Covered",
            attributes: {
                for: "conceptsCovered",
            }
        }));

        conceptsField.appendChild(this.createDomElement({
            elementType: "textarea",
            attributes: {
                id: "conceptsCovered",
                cols: "60",
                rows: "1",
                required: "",
                name: "conceptsCovered"
            }
        }));

        let journalEntryField = this.createDomElement({
            elementType: "section",
            cssClass: "formElement"
        });

        journalEntryField.appendChild(this.createDomElement({
            elementType: "label",
            content: "Entry",
            attributes: {
                for: "journalEntry",
            }
        }));

        journalEntryField.appendChild(this.createDomElement({
            elementType: "textarea",
            attributes: {
                id: "journalEntry",
                cols: "60",
                rows: "1",
                required: "",
                name: "journalEntry"
            }
        }));

        let instructorField = this.createDomElement({
            elementType: "section",
            cssClass: "formElement"
            });

        instructorField.appendChild(this.createDomElement({
            elementType: "label",
            content: "Instructor",
            attributes: {
                for: "instructor",
            }
        }));

        let instructorSelect = this.createDomElement({
            elementType: "select",
            content: "Instructor",
            attributes: {
                id: "instructor",
                required: "",
                name: "instructor"
            }
        })
        let options = [[1, "Jisie David"],[2, "Emily Lemmon"],[3, "Leah Hoefling"]]
        for (let i = 0; i < options.length; i++) {
            const option = options[i];

            instructorSelect.appendChild(this.createDomElement({
                elementType: "option",
                content: option[1],
                attributes: {
                    value: option[0]
                }
            }))
        }

        instructorField.appendChild(instructorSelect);


        let moodField = this.createDomElement({
            elementType: "section",
            cssClass: "formElement",
            attributes: {
                id: "moodForTheDay"
            }});

        moodField.appendChild(this.createDomElement({
            elementType: "legend",
            content: "Mood for the Day",
        }))

        let moodDiv = this.createDomElement({
            elementType: "div",
            attributes: {
                id: "moodDiv"
            }});

        let moods = [[1, "OK", "moodChoice3"],[2, "Happy", "moodChoice1"],[3, "Sad", "moodChoice2"]]
        for (let i = 0; i < moods.length; i++) {
            const mood = moods[i];

            if (mood[0]=== 2) {

                moodDiv.appendChild(this.createDomElement({
                    elementType: "input",
                    attributes: {
                        value: mood[0],
                        name: "mood",
                        id: mood[2],
                        type: "radio",
                        checked: ""
                    }
                }))

            } else {
                moodDiv.appendChild(this.createDomElement({
                    elementType: "input",
                    attributes: {
                        value: mood[0],
                        name: "mood",
                        id: mood[2],
                        type: "radio"
                    }
                }))
            }

            moodDiv.appendChild(this.createDomElement({
                elementType: "label",
                content: mood[1],
                attributes: {
                    for: mood[2]
                }
            }))
        }
        moodField.appendChild(moodDiv);

        entryForm.append(dateField);
        entryForm.append(conceptsField);
        entryForm.append(journalEntryField);
        entryForm.append(moodField);
        entryForm.append(instructorField);

        let journalEntryButton = $("#recordEntryButton");
        journalEntryButton.click(eventListeners.handleRecordEntryButton);

        let moodRadioButtons = $("[name = 'mood']");
        moodRadioButtons.click(eventListeners.filterOnRadioButton);
    },

    createDomElement({elementType, content = null, cssClass = '', attributes = {}}) {
        const element = document.createElement(elementType);
        element.textContent = content;

        if (cssClass) {
            element.classList.add(cssClass);
          }

        for (let key in attributes) {
          element.setAttribute(key, attributes[key]);
        }
        return element;
      }
}

export default journalEntryForm;