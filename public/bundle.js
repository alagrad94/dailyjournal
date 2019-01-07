(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor").then(response => response.json());
  },

  postJournalEntry(journalEntryObject) {
    fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalEntryObject)
    });
  }

};
var _default = API;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const renderEntries = {
  renderJournalEntries(entryHTML) {
    $("#entryLog").append(entryHTML);
  }

};
var _default = renderEntries;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventListeners = _interopRequireDefault(require("./eventListeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const journalEntryForm = {
  createEntryForm() {
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
        for: "conceptsCovered"
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
        for: "journalEntry"
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
        for: "instructor"
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
    });
    let options = [[1, "Jisie David"], [2, "Emily Lemmon"], [3, "Leah Hoefling"]];

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      instructorSelect.appendChild(this.createDomElement({
        elementType: "option",
        content: option[1],
        attributes: {
          value: option[0]
        }
      }));
    }

    instructorField.appendChild(instructorSelect);
    let moodField = this.createDomElement({
      elementType: "section",
      cssClass: "formElement",
      attributes: {
        id: "moodForTheDay"
      }
    });
    moodField.appendChild(this.createDomElement({
      elementType: "legend",
      content: "Mood for the Day"
    }));
    let moodDiv = this.createDomElement({
      elementType: "div",
      attributes: {
        id: "moodDiv"
      }
    });
    let moods = [[1, "OK", "moodChoice3"], [2, "Happy", "moodChoice1"], [3, "Sad", "moodChoice2"]];

    for (let i = 0; i < moods.length; i++) {
      const mood = moods[i];

      if (mood[0] === 2) {
        moodDiv.appendChild(this.createDomElement({
          elementType: "input",
          attributes: {
            value: mood[0],
            name: "mood",
            id: mood[2],
            type: "radio",
            checked: ""
          }
        }));
      } else {
        moodDiv.appendChild(this.createDomElement({
          elementType: "input",
          attributes: {
            value: mood[0],
            name: "mood",
            id: mood[2],
            type: "radio"
          }
        }));
      }

      moodDiv.appendChild(this.createDomElement({
        elementType: "label",
        content: mood[1],
        attributes: {
          for: mood[2]
        }
      }));
    }

    moodField.appendChild(moodDiv);
    entryForm.append(dateField);
    entryForm.append(conceptsField);
    entryForm.append(journalEntryField);
    entryForm.append(moodField);
    entryForm.append(instructorField);
    let journalEntryButton = $("#recordEntryButton");
    journalEntryButton.click(_eventListeners.default.handleRecordEntryButton);
    let moodRadioButtons = $("[name = 'mood']");
    moodRadioButtons.click(_eventListeners.default.filterOnRadioButton);
  },

  createDomElement({
    elementType,
    content = null,
    cssClass = '',
    attributes = {}
  }) {
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

};
var _default = journalEntryForm;
exports.default = _default;

},{"./eventListeners":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const entryComponent = {
  makeJournalEntryComponent(entry) {
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
    let entryDivText1 = document.createTextNode(`Date: ${jEDate}`);
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
var _default = entryComponent;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("./data"));

var _entryComponent = _interopRequireDefault(require("./entryComponent"));

var _formValidation = _interopRequireDefault(require("./formValidation"));

var _entriesDOM = _interopRequireDefault(require("./entriesDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const eventListeners = {
  handleRecordEntryButton() {
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
    };

    if (_formValidation.default.validateForm()) {
      _data.default.postJournalEntry(journalEntryObject);
    } else {
      return;
    }

    location.reload(true);
  },

  filterOnRadioButton() {
    let entryLog = $("#entryLog");
    entryLog.empty();
    let mood = event.target.value.toString();

    _data.default.getJournalEntries().then(parsedEntries => {
      const filteredEntries = parsedEntries.filter(entryItem => entryItem.moodId.toString() === mood);
      filteredEntries.forEach(entry => {
        let entryHTML = _entryComponent.default.makeJournalEntryComponent(entry);

        _entriesDOM.default.renderJournalEntries(entryHTML);
      });
    });
  }

};
var _default = eventListeners;
exports.default = _default;

},{"./data":1,"./entriesDOM":2,"./entryComponent":4,"./formValidation":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const formValidation = {
  validateForm() {
    // let alertsArray = [];
    if (formValidation.validateDate() && formValidation.validateConcepts() && formValidation.validateEntry() && formValidation.validateMood() && formValidation.validateInstructor()) {
      return true;
    } else {
      // alert("Date field must be filled out");
      return false;
    }
  },

  validateDate() {
    let dateValidation = document.forms["entryForm"]["journalDate"].value;

    if (dateValidation === "") {
      alert("Date field must be filled out");
      return false;
    } else {
      return true;
    }
  },

  validateConcepts() {
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

  validateEntry() {
    let entryValidation = document.forms["entryForm"]["journalEntry"].value;
    let pottyMouthWords = new RegExp([/\b(\w*shit\w*)\b|\b(\w*fuck\w*)\b|\b(\w*piss\w*)\b|(hell)|\b(\w*damn\w*)\b/], "i");
    console.log(entryValidation);
    console.log(pottyMouthWords);

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

  validateMood() {
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

};
var _default = formValidation;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _entriesForm = _interopRequireDefault(require("./entriesForm"));

var _entriesDOM = _interopRequireDefault(require("./entriesDOM"));

var _entryComponent = _interopRequireDefault(require("./entryComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_entriesForm.default.createEntryForm();

_data.default.getJournalEntries().then(parsedEntries => {
  parsedEntries.forEach(entry => {
    let entryHTML = _entryComponent.default.makeJournalEntryComponent(entry);

    _entriesDOM.default.renderJournalEntries(entryHTML);
  });
});

},{"./data":1,"./entriesDOM":2,"./entriesForm":3,"./entryComponent":4}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2VudHJpZXNET00uanMiLCIuLi9zY3JpcHRzL2VudHJpZXNGb3JtLmpzIiwiLi4vc2NyaXB0cy9lbnRyeUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvZXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2Zvcm1WYWxpZGF0aW9uLmpzIiwiLi4vc2NyaXB0cy9qb3VybmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQ0EsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLGlCQUFpQixHQUFJO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLCtEQUFELENBQUwsQ0FDRixJQURFLENBQ0csUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGYsQ0FBUDtBQUVILEdBSk87O0FBTVIsRUFBQSxnQkFBZ0IsQ0FBQyxrQkFBRCxFQUFxQjtBQUNqQyxJQUFBLEtBQUssQ0FBQywrREFBRCxFQUFrRTtBQUN2RSxNQUFBLE1BQU0sRUFBRSxNQUQrRDtBQUV2RSxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRjhEO0FBS3ZFLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsa0JBQWY7QUFMaUUsS0FBbEUsQ0FBTDtBQU9IOztBQWRPLENBQVo7ZUFpQmUsRzs7Ozs7Ozs7OztBQ2xCZixNQUFNLGFBQWEsR0FBRztBQUNsQixFQUFBLG9CQUFvQixDQUFFLFNBQUYsRUFBYTtBQUVqQyxJQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxNQUFmLENBQXNCLFNBQXRCO0FBRUM7O0FBTGlCLENBQXRCO2VBUWUsYTs7Ozs7Ozs7Ozs7QUNSZjs7OztBQUVBLE1BQU0sZ0JBQWdCLEdBQUc7QUFFckIsRUFBQSxlQUFlLEdBQUk7QUFHZixRQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUVBLFFBQUksU0FBUyxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFDbEMsTUFBQSxXQUFXLEVBQUUsU0FEcUI7QUFFbEMsTUFBQSxRQUFRLEVBQUU7QUFGd0IsS0FBdEIsQ0FBaEI7QUFLQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLENBQXNCLEtBQUssZ0JBQUwsQ0FBc0I7QUFDeEMsTUFBQSxXQUFXLEVBQUUsT0FEMkI7QUFFeEMsTUFBQSxPQUFPLEVBQUUsZUFGK0I7QUFHeEMsTUFBQSxVQUFVLEVBQUU7QUFDUixRQUFBLEdBQUcsRUFBRSxhQURHO0FBRVIsUUFBQSxJQUFJLEVBQUUsTUFGRTtBQUdSLFFBQUEsUUFBUSxFQUFFLEVBSEY7QUFJUixRQUFBLElBQUksRUFBRTtBQUpFO0FBSDRCLEtBQXRCLENBQXRCO0FBV0EsSUFBQSxTQUFTLENBQUMsV0FBVixDQUFzQixLQUFLLGdCQUFMLENBQXNCO0FBQ3hDLE1BQUEsV0FBVyxFQUFFLE9BRDJCO0FBRXhDLE1BQUEsVUFBVSxFQUFFO0FBQ1IsUUFBQSxFQUFFLEVBQUUsYUFESTtBQUVSLFFBQUEsSUFBSSxFQUFFLE1BRkU7QUFHUixRQUFBLFFBQVEsRUFBRSxFQUhGO0FBSVIsUUFBQSxJQUFJLEVBQUU7QUFKRTtBQUY0QixLQUF0QixDQUF0QjtBQVVBLFFBQUksYUFBYSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFDdEMsTUFBQSxXQUFXLEVBQUUsU0FEeUI7QUFFdEMsTUFBQSxRQUFRLEVBQUU7QUFGNEIsS0FBdEIsQ0FBcEI7QUFLQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLEtBQUssZ0JBQUwsQ0FBc0I7QUFDNUMsTUFBQSxXQUFXLEVBQUUsT0FEK0I7QUFFNUMsTUFBQSxPQUFPLEVBQUUsa0JBRm1DO0FBRzVDLE1BQUEsVUFBVSxFQUFFO0FBQ1IsUUFBQSxHQUFHLEVBQUU7QUFERztBQUhnQyxLQUF0QixDQUExQjtBQVFBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsS0FBSyxnQkFBTCxDQUFzQjtBQUM1QyxNQUFBLFdBQVcsRUFBRSxVQUQrQjtBQUU1QyxNQUFBLFVBQVUsRUFBRTtBQUNSLFFBQUEsRUFBRSxFQUFFLGlCQURJO0FBRVIsUUFBQSxJQUFJLEVBQUUsSUFGRTtBQUdSLFFBQUEsSUFBSSxFQUFFLEdBSEU7QUFJUixRQUFBLFFBQVEsRUFBRSxFQUpGO0FBS1IsUUFBQSxJQUFJLEVBQUU7QUFMRTtBQUZnQyxLQUF0QixDQUExQjtBQVdBLFFBQUksaUJBQWlCLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUMxQyxNQUFBLFdBQVcsRUFBRSxTQUQ2QjtBQUUxQyxNQUFBLFFBQVEsRUFBRTtBQUZnQyxLQUF0QixDQUF4QjtBQUtBLElBQUEsaUJBQWlCLENBQUMsV0FBbEIsQ0FBOEIsS0FBSyxnQkFBTCxDQUFzQjtBQUNoRCxNQUFBLFdBQVcsRUFBRSxPQURtQztBQUVoRCxNQUFBLE9BQU8sRUFBRSxPQUZ1QztBQUdoRCxNQUFBLFVBQVUsRUFBRTtBQUNSLFFBQUEsR0FBRyxFQUFFO0FBREc7QUFIb0MsS0FBdEIsQ0FBOUI7QUFRQSxJQUFBLGlCQUFpQixDQUFDLFdBQWxCLENBQThCLEtBQUssZ0JBQUwsQ0FBc0I7QUFDaEQsTUFBQSxXQUFXLEVBQUUsVUFEbUM7QUFFaEQsTUFBQSxVQUFVLEVBQUU7QUFDUixRQUFBLEVBQUUsRUFBRSxjQURJO0FBRVIsUUFBQSxJQUFJLEVBQUUsSUFGRTtBQUdSLFFBQUEsSUFBSSxFQUFFLEdBSEU7QUFJUixRQUFBLFFBQVEsRUFBRSxFQUpGO0FBS1IsUUFBQSxJQUFJLEVBQUU7QUFMRTtBQUZvQyxLQUF0QixDQUE5QjtBQVdBLFFBQUksZUFBZSxHQUFHLEtBQUssZ0JBQUwsQ0FBc0I7QUFDeEMsTUFBQSxXQUFXLEVBQUUsU0FEMkI7QUFFeEMsTUFBQSxRQUFRLEVBQUU7QUFGOEIsS0FBdEIsQ0FBdEI7QUFLQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixLQUFLLGdCQUFMLENBQXNCO0FBQzlDLE1BQUEsV0FBVyxFQUFFLE9BRGlDO0FBRTlDLE1BQUEsT0FBTyxFQUFFLFlBRnFDO0FBRzlDLE1BQUEsVUFBVSxFQUFFO0FBQ1IsUUFBQSxHQUFHLEVBQUU7QUFERztBQUhrQyxLQUF0QixDQUE1QjtBQVFBLFFBQUksZ0JBQWdCLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUN6QyxNQUFBLFdBQVcsRUFBRSxRQUQ0QjtBQUV6QyxNQUFBLE9BQU8sRUFBRSxZQUZnQztBQUd6QyxNQUFBLFVBQVUsRUFBRTtBQUNSLFFBQUEsRUFBRSxFQUFFLFlBREk7QUFFUixRQUFBLFFBQVEsRUFBRSxFQUZGO0FBR1IsUUFBQSxJQUFJLEVBQUU7QUFIRTtBQUg2QixLQUF0QixDQUF2QjtBQVNBLFFBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksYUFBSixDQUFELEVBQW9CLENBQUMsQ0FBRCxFQUFJLGNBQUosQ0FBcEIsRUFBd0MsQ0FBQyxDQUFELEVBQUksZUFBSixDQUF4QyxDQUFkOztBQUNBLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQTVCLEVBQW9DLENBQUMsRUFBckMsRUFBeUM7QUFDckMsWUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FBdEI7QUFFQSxNQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLEtBQUssZ0JBQUwsQ0FBc0I7QUFDL0MsUUFBQSxXQUFXLEVBQUUsUUFEa0M7QUFFL0MsUUFBQSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUQsQ0FGZ0M7QUFHL0MsUUFBQSxVQUFVLEVBQUU7QUFDUixVQUFBLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBRDtBQURMO0FBSG1DLE9BQXRCLENBQTdCO0FBT0g7O0FBRUQsSUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsZ0JBQTVCO0FBR0EsUUFBSSxTQUFTLEdBQUcsS0FBSyxnQkFBTCxDQUFzQjtBQUNsQyxNQUFBLFdBQVcsRUFBRSxTQURxQjtBQUVsQyxNQUFBLFFBQVEsRUFBRSxhQUZ3QjtBQUdsQyxNQUFBLFVBQVUsRUFBRTtBQUNSLFFBQUEsRUFBRSxFQUFFO0FBREk7QUFIc0IsS0FBdEIsQ0FBaEI7QUFPQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLENBQXNCLEtBQUssZ0JBQUwsQ0FBc0I7QUFDeEMsTUFBQSxXQUFXLEVBQUUsUUFEMkI7QUFFeEMsTUFBQSxPQUFPLEVBQUU7QUFGK0IsS0FBdEIsQ0FBdEI7QUFLQSxRQUFJLE9BQU8sR0FBRyxLQUFLLGdCQUFMLENBQXNCO0FBQ2hDLE1BQUEsV0FBVyxFQUFFLEtBRG1CO0FBRWhDLE1BQUEsVUFBVSxFQUFFO0FBQ1IsUUFBQSxFQUFFLEVBQUU7QUFESTtBQUZvQixLQUF0QixDQUFkO0FBTUEsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsYUFBVixDQUFELEVBQTBCLENBQUMsQ0FBRCxFQUFJLE9BQUosRUFBYSxhQUFiLENBQTFCLEVBQXNELENBQUMsQ0FBRCxFQUFJLEtBQUosRUFBVyxhQUFYLENBQXRELENBQVo7O0FBQ0EsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBMUIsRUFBa0MsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxZQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBRCxDQUFsQjs7QUFFQSxVQUFJLElBQUksQ0FBQyxDQUFELENBQUosS0FBVyxDQUFmLEVBQWtCO0FBRWQsUUFBQSxPQUFPLENBQUMsV0FBUixDQUFvQixLQUFLLGdCQUFMLENBQXNCO0FBQ3RDLFVBQUEsV0FBVyxFQUFFLE9BRHlCO0FBRXRDLFVBQUEsVUFBVSxFQUFFO0FBQ1IsWUFBQSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUQsQ0FESDtBQUVSLFlBQUEsSUFBSSxFQUFFLE1BRkU7QUFHUixZQUFBLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBRCxDQUhBO0FBSVIsWUFBQSxJQUFJLEVBQUUsT0FKRTtBQUtSLFlBQUEsT0FBTyxFQUFFO0FBTEQ7QUFGMEIsU0FBdEIsQ0FBcEI7QUFXSCxPQWJELE1BYU87QUFDSCxRQUFBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLEtBQUssZ0JBQUwsQ0FBc0I7QUFDdEMsVUFBQSxXQUFXLEVBQUUsT0FEeUI7QUFFdEMsVUFBQSxVQUFVLEVBQUU7QUFDUixZQUFBLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBRCxDQURIO0FBRVIsWUFBQSxJQUFJLEVBQUUsTUFGRTtBQUdSLFlBQUEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFELENBSEE7QUFJUixZQUFBLElBQUksRUFBRTtBQUpFO0FBRjBCLFNBQXRCLENBQXBCO0FBU0g7O0FBRUQsTUFBQSxPQUFPLENBQUMsV0FBUixDQUFvQixLQUFLLGdCQUFMLENBQXNCO0FBQ3RDLFFBQUEsV0FBVyxFQUFFLE9BRHlCO0FBRXRDLFFBQUEsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFELENBRnlCO0FBR3RDLFFBQUEsVUFBVSxFQUFFO0FBQ1IsVUFBQSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUQ7QUFERDtBQUgwQixPQUF0QixDQUFwQjtBQU9IOztBQUNELElBQUEsU0FBUyxDQUFDLFdBQVYsQ0FBc0IsT0FBdEI7QUFFQSxJQUFBLFNBQVMsQ0FBQyxNQUFWLENBQWlCLFNBQWpCO0FBQ0EsSUFBQSxTQUFTLENBQUMsTUFBVixDQUFpQixhQUFqQjtBQUNBLElBQUEsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsaUJBQWpCO0FBQ0EsSUFBQSxTQUFTLENBQUMsTUFBVixDQUFpQixTQUFqQjtBQUNBLElBQUEsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsZUFBakI7QUFFQSxRQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxvQkFBRCxDQUExQjtBQUNBLElBQUEsa0JBQWtCLENBQUMsS0FBbkIsQ0FBeUIsd0JBQWUsdUJBQXhDO0FBRUEsUUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsaUJBQUQsQ0FBeEI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLEtBQWpCLENBQXVCLHdCQUFlLG1CQUF0QztBQUNILEdBM0xvQjs7QUE2THJCLEVBQUEsZ0JBQWdCLENBQUM7QUFBQyxJQUFBLFdBQUQ7QUFBYyxJQUFBLE9BQU8sR0FBRyxJQUF4QjtBQUE4QixJQUFBLFFBQVEsR0FBRyxFQUF6QztBQUE2QyxJQUFBLFVBQVUsR0FBRztBQUExRCxHQUFELEVBQWdFO0FBQzVFLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUF0Qjs7QUFFQSxRQUFJLFFBQUosRUFBYztBQUNWLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRDs7QUFFSCxTQUFLLElBQUksR0FBVCxJQUFnQixVQUFoQixFQUE0QjtBQUMxQixNQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLFVBQVUsQ0FBQyxHQUFELENBQXBDO0FBQ0Q7O0FBQ0QsV0FBTyxPQUFQO0FBQ0Q7O0FBek1rQixDQUF6QjtlQTRNZSxnQjs7Ozs7Ozs7OztBQzdNZixNQUFNLGNBQWMsR0FBRztBQUVuQixFQUFBLHlCQUF5QixDQUFFLEtBQUYsRUFBUztBQUVsQyxRQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBbkI7QUFDQSxRQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBdEI7QUFDQSxRQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBcEI7QUFDQSxRQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBTixDQUFXLEtBQXhCO0FBQ0EsUUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsU0FBdEM7QUFDQSxRQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBTixDQUFpQixRQUF0QztBQUNBLFFBQUksWUFBWSxHQUFJLEdBQUUsY0FBZSxJQUFHLGNBQWUsRUFBdkQ7QUFFQSxRQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0EsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBLFFBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQVY7QUFDQSxRQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFWO0FBRUEsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBLFFBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXlCLFNBQVEsTUFBTyxFQUF4QyxDQUFwQjtBQUNBLFFBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXlCLHFCQUFvQixTQUFVLEVBQXZELENBQXBCO0FBQ0EsUUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBeUIsa0JBQWlCLE9BQVEsRUFBbEQsQ0FBcEI7QUFDQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF5QixTQUFRLE1BQU8sRUFBeEMsQ0FBcEI7QUFDQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF5QixlQUFjLFlBQWEsRUFBcEQsQ0FBcEI7QUFFQSxJQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEdBQW5CLENBQXVCLGNBQXZCO0FBQ0EsSUFBQSxRQUFRLENBQUMsV0FBVCxDQUFxQixhQUFyQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsRUFBckI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLGFBQXJCO0FBQ0EsSUFBQSxRQUFRLENBQUMsV0FBVCxDQUFxQixHQUFyQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsYUFBckI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLEdBQXJCO0FBQ0EsSUFBQSxRQUFRLENBQUMsV0FBVCxDQUFxQixhQUFyQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsR0FBckI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLGFBQXJCO0FBRUEsV0FBTyxRQUFQO0FBRUM7O0FBckNrQixDQUF2QjtlQXdDZSxjOzs7Ozs7Ozs7OztBQ3pDZjs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU0sY0FBYyxHQUFHO0FBRW5CLEVBQUEsdUJBQXVCLEdBQUk7QUFFdkIsUUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixHQUFsQixFQUFoQjtBQUNBLFFBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCLEdBQXRCLEVBQXBCO0FBQ0EsUUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixHQUFuQixFQUFoQjtBQUNBLFFBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEdBQXJCLEVBQWhCO0FBQ0EsUUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixHQUFqQixFQUF0QjtBQUVBLFFBQUksa0JBQWtCLEdBQUc7QUFDckIsY0FBUyxHQUFFLFNBQVUsRUFEQTtBQUVyQixpQkFBWSxHQUFFLGFBQWMsRUFGUDtBQUdyQixlQUFVLEdBQUUsU0FBVSxFQUhEO0FBSXJCLGdCQUFVLFFBQVEsQ0FBQyxTQUFELENBSkc7QUFLckIsc0JBQWdCLFFBQVEsQ0FBQyxlQUFEO0FBTEgsS0FBekI7O0FBUUEsUUFBSSx3QkFBZSxZQUFmLEVBQUosRUFBbUM7QUFDL0Isb0JBQUksZ0JBQUosQ0FBcUIsa0JBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDSDs7QUFDRCxJQUFBLFFBQVEsQ0FBQyxNQUFULENBQWdCLElBQWhCO0FBRUgsR0F6QmtCOztBQTJCbkIsRUFBQSxtQkFBbUIsR0FBSTtBQUVuQixRQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsV0FBRCxDQUFoQjtBQUNBLElBQUEsUUFBUSxDQUFDLEtBQVQ7QUFFQSxRQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsQ0FBbUIsUUFBbkIsRUFBWDs7QUFFQSxrQkFBSSxpQkFBSixHQUF3QixJQUF4QixDQUE2QixhQUFhLElBQUk7QUFFMUMsWUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDLE1BQWQsQ0FBcUIsU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFWLENBQWlCLFFBQWpCLE9BQWdDLElBQWxFLENBQXhCO0FBRUEsTUFBQSxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsS0FBSyxJQUFJO0FBRTdCLFlBQUksU0FBUyxHQUFHLHdCQUFlLHlCQUFmLENBQXlDLEtBQXpDLENBQWhCOztBQUNBLDRCQUFjLG9CQUFkLENBQW1DLFNBQW5DO0FBQ0gsT0FKRDtBQUtILEtBVEQ7QUFVSDs7QUE1Q2tCLENBQXZCO2VBK0NlLGM7Ozs7Ozs7Ozs7QUNwRGYsTUFBTSxjQUFjLEdBQUc7QUFFbkIsRUFBQSxZQUFZLEdBQUk7QUFFWjtBQUVBLFFBQUksY0FBYyxDQUFDLFlBQWYsTUFBaUMsY0FBYyxDQUFDLGdCQUFmLEVBQWpDLElBQXNFLGNBQWMsQ0FBQyxhQUFmLEVBQXRFLElBQXdHLGNBQWMsQ0FBQyxZQUFmLEVBQXhHLElBQXlJLGNBQWMsQ0FBQyxrQkFBZixFQUE3SSxFQUFrTDtBQUM5SyxhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBQ0osR0Faa0I7O0FBY25CLEVBQUEsWUFBWSxHQUFJO0FBQ1osUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUFmLEVBQTRCLGFBQTVCLEVBQTJDLEtBQWhFOztBQUVBLFFBQUksY0FBYyxLQUFLLEVBQXZCLEVBQTJCO0FBQ3ZCLE1BQUEsS0FBSyxDQUFDLCtCQUFELENBQUw7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQUhELE1BR087QUFDSCxhQUFPLElBQVA7QUFDSDtBQUNKLEdBdkJrQjs7QUF5Qm5CLEVBQUEsZ0JBQWdCLEdBQUk7QUFDaEIsUUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsS0FBVCxDQUFlLFdBQWYsRUFBNEIsaUJBQTVCLEVBQStDLEtBQXhFO0FBQ0EsUUFBSSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsTUFBeEM7O0FBRUEsUUFBSSxrQkFBa0IsS0FBSyxFQUEzQixFQUErQjtBQUMzQixNQUFBLEtBQUssQ0FBQyxtQ0FBRCxDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FIRCxNQUdPLElBQUksY0FBYyxHQUFHLEdBQXJCLEVBQTBCO0FBQzdCLE1BQUEsS0FBSyxDQUFDLG1DQUFELENBQUw7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQUhNLE1BR0E7QUFDSCxhQUFPLElBQVA7QUFDSDtBQUNKLEdBdENrQjs7QUF3Q25CLEVBQUEsYUFBYSxHQUFJO0FBQ2IsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUFmLEVBQTRCLGNBQTVCLEVBQTRDLEtBQWxFO0FBQ0EsUUFBSSxlQUFlLEdBQUcsSUFBSSxNQUFKLENBQVcsQ0FBQyw0RUFBRCxDQUFYLEVBQTJGLEdBQTNGLENBQXRCO0FBRUksSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQSxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWjs7QUFFSixRQUFJLGVBQWUsS0FBSyxFQUF4QixFQUE0QjtBQUN4QixNQUFBLEtBQUssQ0FBQyxnQ0FBRCxDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FIRCxNQUdPLElBQUksZUFBZSxDQUFDLElBQWhCLENBQXFCLGVBQXJCLENBQUosRUFBMkM7QUFDOUMsTUFBQSxLQUFLLENBQUMsYUFBRCxDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FITSxNQUdBO0FBQ0gsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQXhEa0I7O0FBMERuQixFQUFBLFlBQVksR0FBSTtBQUNaLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxLQUFULENBQWUsV0FBZixFQUE0QixlQUE1QixFQUE2QyxLQUFsRTs7QUFDQSxRQUFJLGNBQWMsS0FBSyxFQUF2QixFQUEyQjtBQUN2QixNQUFBLEtBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQWxFa0I7O0FBb0VuQixFQUFBLGtCQUFrQixHQUFHO0FBQ2pCLFFBQUksb0JBQW9CLEdBQUcsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUFmLEVBQTRCLFlBQTVCLEVBQTBDLEtBQXJFOztBQUNBLFFBQUksb0JBQW9CLEtBQUssRUFBN0IsRUFBaUM7QUFDN0IsTUFBQSxLQUFLLENBQUMscUNBQUQsQ0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNILEtBSEQsTUFHTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBNUVrQixDQUF2QjtlQStFZSxjOzs7Ozs7QUMvRWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxxQkFBaUIsZUFBakI7O0FBRUEsY0FBSSxpQkFBSixHQUF3QixJQUF4QixDQUE2QixhQUFhLElBQUk7QUFFMUMsRUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixLQUFLLElBQUk7QUFFM0IsUUFBSSxTQUFTLEdBQUcsd0JBQWUseUJBQWYsQ0FBeUMsS0FBekMsQ0FBaEI7O0FBQ0Esd0JBQWMsb0JBQWQsQ0FBbUMsU0FBbkM7QUFDSCxHQUpEO0FBS0gsQ0FQRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuY29uc3QgQVBJID0ge1xuICAgIGdldEpvdXJuYWxFbnRyaWVzICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXM/X2V4cGFuZD1tb29kJl9leHBhbmQ9aW5zdHJ1Y3RvclwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG5cbiAgICBwb3N0Sm91cm5hbEVudHJ5KGpvdXJuYWxFbnRyeU9iamVjdCkge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzP19leHBhbmQ9bW9vZCZfZXhwYW5kPWluc3RydWN0b3JcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShqb3VybmFsRW50cnlPYmplY3QpXG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImNvbnN0IHJlbmRlckVudHJpZXMgPSB7XG4gICAgcmVuZGVySm91cm5hbEVudHJpZXMgKGVudHJ5SFRNTCkge1xuXG4gICAgJChcIiNlbnRyeUxvZ1wiKS5hcHBlbmQoZW50cnlIVE1MKTtcblxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckVudHJpZXM7IiwiaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IGpvdXJuYWxFbnRyeUZvcm0gPSB7XG5cbiAgICBjcmVhdGVFbnRyeUZvcm0gKCkge1xuXG5cbiAgICAgICAgbGV0IGVudHJ5Rm9ybSA9ICQoXCIjZW50cnlGb3JtXCIpO1xuXG4gICAgICAgIGxldCBkYXRlRmllbGQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IFwiZm9ybUVsZW1lbnRcIlxuICAgICAgICB9KTtcblxuICAgICAgICBkYXRlRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkRhdGUgb2YgRW50cnlcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBmb3I6IFwiam91cm5hbERhdGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcImpvdXJuYWxEYXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJqb3VybmFsRGF0ZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiam91cm5hbERhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgbGV0IGNvbmNlcHRzRmllbGQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IFwiZm9ybUVsZW1lbnRcIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb25jZXB0c0ZpZWxkLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJDb25jZXB0cyBDb3ZlcmVkXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgZm9yOiBcImNvbmNlcHRzQ292ZXJlZFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uY2VwdHNGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJjb25jZXB0c0NvdmVyZWRcIixcbiAgICAgICAgICAgICAgICBjb2xzOiBcIjYwXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCIxXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb25jZXB0c0NvdmVyZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgbGV0IGpvdXJuYWxFbnRyeUZpZWxkID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBcImZvcm1FbGVtZW50XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgam91cm5hbEVudHJ5RmllbGQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVsXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkVudHJ5XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgZm9yOiBcImpvdXJuYWxFbnRyeVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgam91cm5hbEVudHJ5RmllbGQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiam91cm5hbEVudHJ5XCIsXG4gICAgICAgICAgICAgICAgY29sczogXCI2MFwiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiam91cm5hbEVudHJ5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGxldCBpbnN0cnVjdG9yRmllbGQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICAgICAgY3NzQ2xhc3M6IFwiZm9ybUVsZW1lbnRcIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaW5zdHJ1Y3RvckZpZWxkLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJJbnN0cnVjdG9yXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgZm9yOiBcImluc3RydWN0b3JcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGxldCBpbnN0cnVjdG9yU2VsZWN0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJJbnN0cnVjdG9yXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiaW5zdHJ1Y3RvclwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiaW5zdHJ1Y3RvclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBvcHRpb25zID0gW1sxLCBcIkppc2llIERhdmlkXCJdLFsyLCBcIkVtaWx5IExlbW1vblwiXSxbMywgXCJMZWFoIEhvZWZsaW5nXCJdXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGluc3RydWN0b3JTZWxlY3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRpb25bMV0sXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cblxuICAgICAgICBpbnN0cnVjdG9yRmllbGQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RvclNlbGVjdCk7XG5cblxuICAgICAgICBsZXQgbW9vZEZpZWxkID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgICAgIGNzc0NsYXNzOiBcImZvcm1FbGVtZW50XCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibW9vZEZvclRoZURheVwiXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgbW9vZEZpZWxkLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJsZWdlbmRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiTW9vZCBmb3IgdGhlIERheVwiLFxuICAgICAgICB9KSlcblxuICAgICAgICBsZXQgbW9vZERpdiA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJtb29kRGl2XCJcbiAgICAgICAgICAgIH19KTtcblxuICAgICAgICBsZXQgbW9vZHMgPSBbWzEsIFwiT0tcIiwgXCJtb29kQ2hvaWNlM1wiXSxbMiwgXCJIYXBweVwiLCBcIm1vb2RDaG9pY2UxXCJdLFszLCBcIlNhZFwiLCBcIm1vb2RDaG9pY2UyXCJdXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vb2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtb29kID0gbW9vZHNbaV07XG5cbiAgICAgICAgICAgIGlmIChtb29kWzBdPT09IDIpIHtcblxuICAgICAgICAgICAgICAgIG1vb2REaXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vb2RbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vb2RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtb29kWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9vZERpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9vZFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9vZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1vb2RbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtb29kWzFdLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yOiBtb29kWzJdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgICAgbW9vZEZpZWxkLmFwcGVuZENoaWxkKG1vb2REaXYpO1xuXG4gICAgICAgIGVudHJ5Rm9ybS5hcHBlbmQoZGF0ZUZpZWxkKTtcbiAgICAgICAgZW50cnlGb3JtLmFwcGVuZChjb25jZXB0c0ZpZWxkKTtcbiAgICAgICAgZW50cnlGb3JtLmFwcGVuZChqb3VybmFsRW50cnlGaWVsZCk7XG4gICAgICAgIGVudHJ5Rm9ybS5hcHBlbmQobW9vZEZpZWxkKTtcbiAgICAgICAgZW50cnlGb3JtLmFwcGVuZChpbnN0cnVjdG9yRmllbGQpO1xuXG4gICAgICAgIGxldCBqb3VybmFsRW50cnlCdXR0b24gPSAkKFwiI3JlY29yZEVudHJ5QnV0dG9uXCIpO1xuICAgICAgICBqb3VybmFsRW50cnlCdXR0b24uY2xpY2soZXZlbnRMaXN0ZW5lcnMuaGFuZGxlUmVjb3JkRW50cnlCdXR0b24pO1xuXG4gICAgICAgIGxldCBtb29kUmFkaW9CdXR0b25zID0gJChcIltuYW1lID0gJ21vb2QnXVwiKTtcbiAgICAgICAgbW9vZFJhZGlvQnV0dG9ucy5jbGljayhldmVudExpc3RlbmVycy5maWx0ZXJPblJhZGlvQnV0dG9uKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRG9tRWxlbWVudCh7ZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcyA9ICcnLCBhdHRyaWJ1dGVzID0ge319KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgam91cm5hbEVudHJ5Rm9ybTsiLCJcbmNvbnN0IGVudHJ5Q29tcG9uZW50ID0ge1xuXG4gICAgbWFrZUpvdXJuYWxFbnRyeUNvbXBvbmVudCAoZW50cnkpIHtcblxuICAgIGxldCBqRURhdGUgPSBlbnRyeS5kYXRlO1xuICAgIGxldCBqRUNvbmNlcHQgPSBlbnRyeS5jb25jZXB0O1xuICAgIGxldCBqRUVudHJ5ID0gZW50cnkuZW50cnk7XG4gICAgbGV0IGpFTW9vZCA9IGVudHJ5Lm1vb2QubGFiZWw7XG4gICAgbGV0IGpFSW5zdHJ1Y3RvckZOID0gZW50cnkuaW5zdHJ1Y3Rvci5maXJzdE5hbWU7XG4gICAgbGV0IGpFSW5zdHJ1Y3RvckxOID0gZW50cnkuaW5zdHJ1Y3Rvci5sYXN0TmFtZTtcbiAgICBsZXQgakVJbnN0cnVjdG9yID0gYCR7akVJbnN0cnVjdG9yRk59ICR7akVJbnN0cnVjdG9yTE59YDtcblxuICAgIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICBsZXQgYnIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgIGxldCBicjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgbGV0IGJyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIGxldCBlbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgRGF0ZTogJHtqRURhdGV9YClcbiAgICBsZXQgZW50cnlEaXZUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBDb25jZXB0cyBDb3ZlcmVkOiAke2pFQ29uY2VwdH1gKTtcbiAgICBsZXQgZW50cnlEaXZUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBKb3VybmFsIEVudHJ5OiAke2pFRW50cnl9YCk7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgTW9vZDogJHtqRU1vb2R9YCk7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgSW5zdHJ1Y3RvcjogJHtqRUluc3RydWN0b3J9YCk7XG5cbiAgICBlbnRyeURpdi5jbGFzc0xpc3QuYWRkKFwiam91cm5hbEVudHJ5XCIpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGVudHJ5RGl2VGV4dDEpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGJyKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChlbnRyeURpdlRleHQyKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChicjIpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGVudHJ5RGl2VGV4dDMpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGJyMyk7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoZW50cnlEaXZUZXh0NCk7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoYnI0KTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChlbnRyeURpdlRleHQ1KTtcblxuICAgIHJldHVybiBlbnRyeURpdjtcblxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVudHJ5Q29tcG9uZW50OyIsImltcG9ydCBBUEkgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IGVudHJ5Q29tcG9uZW50IGZyb20gXCIuL2VudHJ5Q29tcG9uZW50XCI7XG5pbXBvcnQgZm9ybVZhbGlkYXRpb24gZnJvbSBcIi4vZm9ybVZhbGlkYXRpb25cIjtcbmltcG9ydCByZW5kZXJFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNET01cIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG5cbiAgICBoYW5kbGVSZWNvcmRFbnRyeUJ1dHRvbiAoKSB7XG5cbiAgICAgICAgbGV0IGVudHJ5RGF0ZSA9ICQoXCIjam91cm5hbERhdGVcIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeUNvbmNlcHRzID0gJChcIiNjb25jZXB0c0NvdmVyZWRcIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeVRleHQgPSAkKFwiI2pvdXJuYWxFbnRyeVwiKS52YWwoKTtcbiAgICAgICAgbGV0IGVudHJ5TW9vZCA9ICQoXCJbbmFtZSA9ICdtb29kJ11cIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeUluc3RydWN0b3IgPSAkKFwiI2luc3RydWN0b3JcIikudmFsKCk7XG5cbiAgICAgICAgbGV0IGpvdXJuYWxFbnRyeU9iamVjdCA9IHtcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBgJHtlbnRyeURhdGV9YCxcbiAgICAgICAgICAgIFwiY29uY2VwdFwiOiBgJHtlbnRyeUNvbmNlcHRzfWAsXG4gICAgICAgICAgICBcImVudHJ5XCI6IGAke2VudHJ5VGV4dH1gLFxuICAgICAgICAgICAgXCJtb29kSWRcIjogcGFyc2VJbnQoZW50cnlNb29kKSxcbiAgICAgICAgICAgIFwiaW5zdHJ1Y3RvcklkXCI6IHBhcnNlSW50KGVudHJ5SW5zdHJ1Y3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgQVBJLnBvc3RKb3VybmFsRW50cnkoam91cm5hbEVudHJ5T2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cbiAgICB9LFxuXG4gICAgZmlsdGVyT25SYWRpb0J1dHRvbiAoKSB7XG5cbiAgICAgICAgbGV0IGVudHJ5TG9nID0gJChcIiNlbnRyeUxvZ1wiKTtcbiAgICAgICAgZW50cnlMb2cuZW1wdHkoKTtcblxuICAgICAgICBsZXQgbW9vZCA9IGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpO1xuXG4gICAgICAgIEFQSS5nZXRKb3VybmFsRW50cmllcygpLnRoZW4ocGFyc2VkRW50cmllcyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRW50cmllcyA9IHBhcnNlZEVudHJpZXMuZmlsdGVyKGVudHJ5SXRlbSA9PiBlbnRyeUl0ZW0ubW9vZElkLnRvU3RyaW5nKCkgPT09IG1vb2QpXG5cbiAgICAgICAgICAgIGZpbHRlcmVkRW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBlbnRyeUhUTUwgPSBlbnRyeUNvbXBvbmVudC5tYWtlSm91cm5hbEVudHJ5Q29tcG9uZW50KGVudHJ5KTtcbiAgICAgICAgICAgICAgICByZW5kZXJFbnRyaWVzLnJlbmRlckpvdXJuYWxFbnRyaWVzKGVudHJ5SFRNTCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXJzOyIsImNvbnN0IGZvcm1WYWxpZGF0aW9uID0ge1xuXG4gICAgdmFsaWRhdGVGb3JtICgpIHtcblxuICAgICAgICAvLyBsZXQgYWxlcnRzQXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAoZm9ybVZhbGlkYXRpb24udmFsaWRhdGVEYXRlKCkgJiYgZm9ybVZhbGlkYXRpb24udmFsaWRhdGVDb25jZXB0cygpICYmIGZvcm1WYWxpZGF0aW9uLnZhbGlkYXRlRW50cnkoKSAmJiBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZU1vb2QoKSAmJiBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUluc3RydWN0b3IoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbGVydChcIkRhdGUgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHZhbGlkYXRlRGF0ZSAoKSB7XG4gICAgICAgIGxldCBkYXRlVmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wiam91cm5hbERhdGVcIl0udmFsdWU7XG5cbiAgICAgICAgaWYgKGRhdGVWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkRhdGUgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFsaWRhdGVDb25jZXB0cyAoKSB7XG4gICAgICAgIGxldCBjb25jZXB0c1ZhbGlkYXRpb24gPSBkb2N1bWVudC5mb3Jtc1tcImVudHJ5Rm9ybVwiXVtcImNvbmNlcHRzQ292ZXJlZFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IGNvbmNlcHRzTGVuZ3RoID0gY29uY2VwdHNWYWxpZGF0aW9uLmxlbmd0aDtcblxuICAgICAgICBpZiAoY29uY2VwdHNWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkNvbmNlcHRzIGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25jZXB0c0xlbmd0aCA+IDEwMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJDb25jZXB0cyBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZUVudHJ5ICgpIHtcbiAgICAgICAgbGV0IGVudHJ5VmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wiam91cm5hbEVudHJ5XCJdLnZhbHVlO1xuICAgICAgICBsZXQgcG90dHlNb3V0aFdvcmRzID0gbmV3IFJlZ0V4cChbL1xcYihcXHcqc2hpdFxcdyopXFxifFxcYihcXHcqZnVja1xcdyopXFxifFxcYihcXHcqcGlzc1xcdyopXFxifChoZWxsKXxcXGIoXFx3KmRhbW5cXHcqKVxcYi9dLCBcImlcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5VmFsaWRhdGlvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvdHR5TW91dGhXb3JkcylcblxuICAgICAgICBpZiAoZW50cnlWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudHJ5IGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3R0eU1vdXRoV29yZHMudGVzdChlbnRyeVZhbGlkYXRpb24pKSB7XG4gICAgICAgICAgICBhbGVydChcIlBvdHR5IG1vdXRoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFsaWRhdGVNb29kICgpIHtcbiAgICAgICAgbGV0IG1vb2RWYWxpZGF0aW9uID0gZG9jdW1lbnQuZm9ybXNbXCJlbnRyeUZvcm1cIl1bXCJtb29kRm9yVGhlRGF5XCJdLnZhbHVlO1xuICAgICAgICBpZiAobW9vZFZhbGlkYXRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTW9vZCBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZUluc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBpbnN0cnVjdG9yVmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wiaW5zdHJ1Y3RvclwiXS52YWx1ZTtcbiAgICAgICAgaWYgKGluc3RydWN0b3JWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkluc3RydWN0b3IgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1WYWxpZGF0aW9uOyIsImltcG9ydCBBUEkgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IGpvdXJuYWxFbnRyeUZvcm0gZnJvbSBcIi4vZW50cmllc0Zvcm1cIjtcbmltcG9ydCByZW5kZXJFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNET01cIjtcbmltcG9ydCBlbnRyeUNvbXBvbmVudCBmcm9tIFwiLi9lbnRyeUNvbXBvbmVudFwiO1xuXG5qb3VybmFsRW50cnlGb3JtLmNyZWF0ZUVudHJ5Rm9ybSgpO1xuXG5BUEkuZ2V0Sm91cm5hbEVudHJpZXMoKS50aGVuKHBhcnNlZEVudHJpZXMgPT4ge1xuXG4gICAgcGFyc2VkRW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblxuICAgICAgICBsZXQgZW50cnlIVE1MID0gZW50cnlDb21wb25lbnQubWFrZUpvdXJuYWxFbnRyeUNvbXBvbmVudChlbnRyeSk7XG4gICAgICAgIHJlbmRlckVudHJpZXMucmVuZGVySm91cm5hbEVudHJpZXMoZW50cnlIVE1MKTtcbiAgICB9KVxufSlcblxuXG5cblxuXG5cblxuXG4iXX0=
