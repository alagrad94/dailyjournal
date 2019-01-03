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
    let dateField = document.createElement("section");
    dateField.classList.add("formElement");
    let dateInput = document.createElement("input");
    dateInput.setAttribute("id", "journalDate");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("required", "");
    dateInput.setAttribute("name", "journalDate");
    let dateLabel = document.createElement("label");
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
    let conceptsLabel = document.createElement("label");
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
    let journalEntryLabel = document.createElement("label");
    journalEntryLabel.setAttribute("for", "journalEntry");
    journalEntryLabel.textContent = "Entry";
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
    moodField.setAttribute("id", "moodForTheDay");
    let moodFieldLegend = document.createElement("legend");
    moodFieldLegend.textContent = "Mood for the Day";
    let moodDiv = document.createElement("div");
    moodDiv.setAttribute("id", "moodDiv");
    let moodOption1 = document.createElement("input");
    moodOption1.setAttribute("value", 2);
    moodOption1.setAttribute("name", "mood");
    moodOption1.setAttribute("id", "moodChoice1");
    moodOption1.setAttribute("type", "radio");
    moodOption1.setAttribute("checked", "");
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
    journalEntryButton.click(_eventListeners.default.handleRecordEntryButton);
    let moodRadioButtons = $("[name = 'mood']");
    moodRadioButtons.click(_eventListeners.default.filterOnRadioButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2VudHJpZXNET00uanMiLCIuLi9zY3JpcHRzL2VudHJpZXNGb3JtLmpzIiwiLi4vc2NyaXB0cy9lbnRyeUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvZXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2Zvcm1WYWxpZGF0aW9uLmpzIiwiLi4vc2NyaXB0cy9qb3VybmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQ0EsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLGlCQUFpQixHQUFJO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLCtEQUFELENBQUwsQ0FDRixJQURFLENBQ0csUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGYsQ0FBUDtBQUVILEdBSk87O0FBTVIsRUFBQSxnQkFBZ0IsQ0FBQyxrQkFBRCxFQUFxQjtBQUNqQyxJQUFBLEtBQUssQ0FBQywrREFBRCxFQUFrRTtBQUN2RSxNQUFBLE1BQU0sRUFBRSxNQUQrRDtBQUV2RSxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRjhEO0FBS3ZFLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsa0JBQWY7QUFMaUUsS0FBbEUsQ0FBTDtBQU9IOztBQWRPLENBQVo7ZUFpQmUsRzs7Ozs7Ozs7OztBQ2xCZixNQUFNLGFBQWEsR0FBRztBQUNsQixFQUFBLG9CQUFvQixDQUFFLFNBQUYsRUFBYTtBQUVqQyxJQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxNQUFmLENBQXNCLFNBQXRCO0FBRUM7O0FBTGlCLENBQXRCO2VBUWUsYTs7Ozs7Ozs7Ozs7QUNSZjs7OztBQUVBLE1BQU0sZ0JBQWdCLEdBQUc7QUFFakIsRUFBQSxlQUFlLEdBQUk7QUFHZixRQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUVB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QUFBLFlBQVksR0FBSTtBQUNaLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxLQUFULENBQWUsV0FBZixFQUE0QixlQUE1QixFQUE2QyxLQUFsRTs7QUFDQSxRQUFJLGNBQWMsS0FBSyxFQUF2QixFQUEyQjtBQUN2QixNQUFBLEtBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQWxFa0I7O0FBb0VuQixFQUFBLGtCQUFrQixHQUFHO0FBQ2pCLFFBQUksb0JBQW9CLEdBQUcsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUFmLEVBQTRCLFlBQTVCLEVBQTBDLEtBQXJFOztBQUNBLFFBQUksb0JBQW9CLEtBQUssRUFBN0IsRUFBaUM7QUFDN0IsTUFBQSxLQUFLLENBQUMscUNBQUQsQ0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNILEtBSEQsTUFHTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBNUVrQixDQUF2QjtlQStFZSxjOzs7Ozs7QUMvRWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxxQkFBaUIsZUFBakI7O0FBRUEsY0FBSSxpQkFBSixHQUF3QixJQUF4QixDQUE2QixhQUFhLElBQUk7QUFFMUMsRUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixLQUFLLElBQUk7QUFFM0IsUUFBSSxTQUFTLEdBQUcsd0JBQWUseUJBQWYsQ0FBeUMsS0FBekMsQ0FBaEI7O0FBQ0Esd0JBQWMsb0JBQWQsQ0FBbUMsU0FBbkM7QUFDSCxHQUpEO0FBS0gsQ0FQRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuY29uc3QgQVBJID0ge1xuICAgIGdldEpvdXJuYWxFbnRyaWVzICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXM/X2V4cGFuZD1tb29kJl9leHBhbmQ9aW5zdHJ1Y3RvclwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG5cbiAgICBwb3N0Sm91cm5hbEVudHJ5KGpvdXJuYWxFbnRyeU9iamVjdCkge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzP19leHBhbmQ9bW9vZCZfZXhwYW5kPWluc3RydWN0b3JcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShqb3VybmFsRW50cnlPYmplY3QpXG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImNvbnN0IHJlbmRlckVudHJpZXMgPSB7XG4gICAgcmVuZGVySm91cm5hbEVudHJpZXMgKGVudHJ5SFRNTCkge1xuXG4gICAgJChcIiNlbnRyeUxvZ1wiKS5hcHBlbmQoZW50cnlIVE1MKTtcblxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckVudHJpZXM7IiwiaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IGpvdXJuYWxFbnRyeUZvcm0gPSB7XG5cbiAgICAgICAgY3JlYXRlRW50cnlGb3JtICgpIHtcblxuXG4gICAgICAgICAgICBsZXQgZW50cnlGb3JtID0gJChcIiNlbnRyeUZvcm1cIilcblxuICAgICAgICAgICAgbGV0IGRhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICAgICAgZGF0ZUZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtRWxlbWVudFwiKTtcbiAgICAgICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJqb3VybmFsRGF0ZVwiKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiam91cm5hbERhdGVcIik7XG4gICAgICAgICAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiam91cm5hbERhdGVcIik7XG4gICAgICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGUgb2YgRW50cnlcIjtcblxuICAgICAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgICAgICBkYXRlRmllbGQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IGNvbmNlcHRzRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgIGNvbmNlcHRzRmllbGQuY2xhc3NMaXN0LmFkZChcImZvcm1FbGVtZW50XCIpO1xuICAgICAgICAgICAgbGV0IGNvbmNlcHRzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICBjb25jZXB0c0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uY2VwdHNDb3ZlcmVkXCIpO1xuICAgICAgICAgICAgY29uY2VwdHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNjBcIik7XG4gICAgICAgICAgICBjb25jZXB0c0lucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIxXCIpO1xuICAgICAgICAgICAgY29uY2VwdHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbmNlcHRzSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbmNlcHRzQ292ZXJlZFwiKTtcbiAgICAgICAgICAgIGxldCBjb25jZXB0c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgICAgICAgICBjb25jZXB0c0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbmNlcHRzQ292ZXJlZFwiKTtcbiAgICAgICAgICAgIGNvbmNlcHRzTGFiZWwudGV4dENvbnRlbnQgPSBcIkNvbmNlcHRzIENvdmVyZWRcIjtcblxuICAgICAgICAgICAgY29uY2VwdHNGaWVsZC5hcHBlbmRDaGlsZChjb25jZXB0c0xhYmVsKTtcbiAgICAgICAgICAgIGNvbmNlcHRzRmllbGQuYXBwZW5kQ2hpbGQoY29uY2VwdHNJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBqb3VybmFsRW50cnlGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5RmllbGQuY2xhc3NMaXN0LmFkZChcImZvcm1FbGVtZW50XCIpO1xuICAgICAgICAgICAgbGV0IGpvdXJuYWxFbnRyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJqb3VybmFsRW50cnlcIik7XG4gICAgICAgICAgICBqb3VybmFsRW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNjBcIik7XG4gICAgICAgICAgICBqb3VybmFsRW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiMVwiKTtcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImpvdXJuYWxFbnRyeVwiKTtcbiAgICAgICAgICAgIGxldCBqb3VybmFsRW50cnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgam91cm5hbEVudHJ5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiam91cm5hbEVudHJ5XCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudHJ5XCJcblxuICAgICAgICAgICAgam91cm5hbEVudHJ5RmllbGQuYXBwZW5kQ2hpbGQoam91cm5hbEVudHJ5TGFiZWwpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5RmllbGQuYXBwZW5kQ2hpbGQoam91cm5hbEVudHJ5SW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3RvckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yRmllbGQuY2xhc3NMaXN0LmFkZChcImZvcm1FbGVtZW50XCIpO1xuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JGaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvckZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JGaWVsZExhYmVsLnRleHRDb250ZW50ID0gXCJJbnN0cnVjdG9yXCI7XG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3RvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yU2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JTZWxlY3Quc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yU2VsZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JPcHRpb24xLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDEpO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rvck9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkppc2llIERhdmlkXCI7XG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3Rvck9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rvck9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgMik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yT3B0aW9uMi50ZXh0Q29udGVudCA9IFwiRW1pbHkgTGVtbW9uXCI7XG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3Rvck9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rvck9wdGlvbjMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgMyk7XG4gICAgICAgICAgICBpbnN0cnVjdG9yT3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTGVhaCBIb2VmbGluZ1wiO1xuXG5cbiAgICAgICAgICAgIGluc3RydWN0b3JGaWVsZC5hcHBlbmRDaGlsZChpbnN0cnVjdG9yRmllbGRMYWJlbCk7XG4gICAgICAgICAgICBpbnN0cnVjdG9yU2VsZWN0LmFwcGVuZENoaWxkKGluc3RydWN0b3JPcHRpb24xKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JTZWxlY3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rvck9wdGlvbjIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvclNlbGVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdG9yT3B0aW9uMyk7XG4gICAgICAgICAgICBpbnN0cnVjdG9yRmllbGQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RvclNlbGVjdCk7XG4gICAgICAgICAgICBlbnRyeUZvcm0uYXBwZW5kKGluc3RydWN0b3JGaWVsZCk7XG5cbiAgICAgICAgICAgIGxldCBtb29kRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgICAgICBtb29kRmllbGQuY2xhc3NMaXN0LmFkZChcImZvcm1FbGVtZW50XCIpO1xuICAgICAgICAgICAgbW9vZEZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9vZEZvclRoZURheVwiKVxuICAgICAgICAgICAgbGV0IG1vb2RGaWVsZExlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgICAgICBtb29kRmllbGRMZWdlbmQudGV4dENvbnRlbnQgPSBcIk1vb2QgZm9yIHRoZSBEYXlcIjtcbiAgICAgICAgICAgIGxldCBtb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1vb2REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb29kRGl2XCIpO1xuXG4gICAgICAgICAgICBsZXQgbW9vZE9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAyKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24xLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtb29kXCIpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb29kQ2hvaWNlMVwiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24xLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24xLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIilcbiAgICAgICAgICAgIGxldCBtb29kTGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbW9vZExhYmVsMS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtb29kQ2hvaWNlMVwiKTtcbiAgICAgICAgICAgIG1vb2RMYWJlbDEudGV4dENvbnRlbnQgPSBcIkhhcHB5XCI7XG5cbiAgICAgICAgICAgIGxldCBtb29kT3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDMpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vb2RcIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vb2RDaG9pY2UyXCIpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgICAgICAgbGV0IG1vb2RMYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBtb29kTGFiZWwyLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1vb2RDaG9pY2UyXCIpO1xuICAgICAgICAgICAgbW9vZExhYmVsMi50ZXh0Q29udGVudCA9IFwiU2FkXCI7XG5cbiAgICAgICAgICAgIGxldCBtb29kT3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDEpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vb2RcIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vb2RDaG9pY2UzXCIpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgICAgICAgbGV0IG1vb2RMYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBtb29kTGFiZWwzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1vb2RDaG9pY2UzXCIpO1xuICAgICAgICAgICAgbW9vZExhYmVsMy50ZXh0Q29udGVudCA9IFwiT2tcIjtcblxuICAgICAgICAgICAgbW9vZEZpZWxkLmFwcGVuZENoaWxkKG1vb2RGaWVsZExlZ2VuZCk7XG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKG1vb2RPcHRpb24xKTtcbiAgICAgICAgICAgIG1vb2REaXYuYXBwZW5kQ2hpbGQobW9vZExhYmVsMSk7XG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKG1vb2RPcHRpb24yKTtcbiAgICAgICAgICAgIG1vb2REaXYuYXBwZW5kQ2hpbGQobW9vZExhYmVsMik7XG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKG1vb2RPcHRpb24zKTtcbiAgICAgICAgICAgIG1vb2REaXYuYXBwZW5kQ2hpbGQobW9vZExhYmVsMyk7XG4gICAgICAgICAgICBtb29kRmllbGQuYXBwZW5kQ2hpbGQobW9vZERpdik7XG5cbiAgICAgICAgICAgIGVudHJ5Rm9ybS5hcHBlbmQoZGF0ZUZpZWxkKTtcbiAgICAgICAgICAgIGVudHJ5Rm9ybS5hcHBlbmQoY29uY2VwdHNGaWVsZCk7XG4gICAgICAgICAgICBlbnRyeUZvcm0uYXBwZW5kKGpvdXJuYWxFbnRyeUZpZWxkKTtcbiAgICAgICAgICAgIGVudHJ5Rm9ybS5hcHBlbmQobW9vZEZpZWxkKTtcblxuICAgICAgICAgICAgbGV0IGpvdXJuYWxFbnRyeUJ1dHRvbiA9ICQoXCIjcmVjb3JkRW50cnlCdXR0b25cIik7XG4gICAgICAgICAgICBqb3VybmFsRW50cnlCdXR0b24uY2xpY2soZXZlbnRMaXN0ZW5lcnMuaGFuZGxlUmVjb3JkRW50cnlCdXR0b24pO1xuXG4gICAgICAgICAgICBsZXQgbW9vZFJhZGlvQnV0dG9ucyA9ICQoXCJbbmFtZSA9ICdtb29kJ11cIik7XG4gICAgICAgICAgICBtb29kUmFkaW9CdXR0b25zLmNsaWNrKGV2ZW50TGlzdGVuZXJzLmZpbHRlck9uUmFkaW9CdXR0b24pO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpvdXJuYWxFbnRyeUZvcm07XG4iLCJcbmNvbnN0IGVudHJ5Q29tcG9uZW50ID0ge1xuXG4gICAgbWFrZUpvdXJuYWxFbnRyeUNvbXBvbmVudCAoZW50cnkpIHtcblxuICAgIGxldCBqRURhdGUgPSBlbnRyeS5kYXRlO1xuICAgIGxldCBqRUNvbmNlcHQgPSBlbnRyeS5jb25jZXB0O1xuICAgIGxldCBqRUVudHJ5ID0gZW50cnkuZW50cnk7XG4gICAgbGV0IGpFTW9vZCA9IGVudHJ5Lm1vb2QubGFiZWw7XG4gICAgbGV0IGpFSW5zdHJ1Y3RvckZOID0gZW50cnkuaW5zdHJ1Y3Rvci5maXJzdE5hbWU7XG4gICAgbGV0IGpFSW5zdHJ1Y3RvckxOID0gZW50cnkuaW5zdHJ1Y3Rvci5sYXN0TmFtZTtcbiAgICBsZXQgakVJbnN0cnVjdG9yID0gYCR7akVJbnN0cnVjdG9yRk59ICR7akVJbnN0cnVjdG9yTE59YDtcblxuICAgIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICBsZXQgYnIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgIGxldCBicjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgbGV0IGJyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICAgIGxldCBlbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgRGF0ZTogJHtqRURhdGV9YClcbiAgICBsZXQgZW50cnlEaXZUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBDb25jZXB0cyBDb3ZlcmVkOiAke2pFQ29uY2VwdH1gKTtcbiAgICBsZXQgZW50cnlEaXZUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBKb3VybmFsIEVudHJ5OiAke2pFRW50cnl9YCk7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgTW9vZDogJHtqRU1vb2R9YCk7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgSW5zdHJ1Y3RvcjogJHtqRUluc3RydWN0b3J9YCk7XG5cbiAgICBlbnRyeURpdi5jbGFzc0xpc3QuYWRkKFwiam91cm5hbEVudHJ5XCIpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGVudHJ5RGl2VGV4dDEpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGJyKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChlbnRyeURpdlRleHQyKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChicjIpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGVudHJ5RGl2VGV4dDMpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGJyMyk7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoZW50cnlEaXZUZXh0NCk7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoYnI0KTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChlbnRyeURpdlRleHQ1KTtcblxuICAgIHJldHVybiBlbnRyeURpdjtcblxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVudHJ5Q29tcG9uZW50OyIsImltcG9ydCBBUEkgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IGVudHJ5Q29tcG9uZW50IGZyb20gXCIuL2VudHJ5Q29tcG9uZW50XCI7XG5pbXBvcnQgZm9ybVZhbGlkYXRpb24gZnJvbSBcIi4vZm9ybVZhbGlkYXRpb25cIjtcbmltcG9ydCByZW5kZXJFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNET01cIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB7XG5cbiAgICBoYW5kbGVSZWNvcmRFbnRyeUJ1dHRvbiAoKSB7XG5cbiAgICAgICAgbGV0IGVudHJ5RGF0ZSA9ICQoXCIjam91cm5hbERhdGVcIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeUNvbmNlcHRzID0gJChcIiNjb25jZXB0c0NvdmVyZWRcIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeVRleHQgPSAkKFwiI2pvdXJuYWxFbnRyeVwiKS52YWwoKTtcbiAgICAgICAgbGV0IGVudHJ5TW9vZCA9ICQoXCJbbmFtZSA9ICdtb29kJ11cIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeUluc3RydWN0b3IgPSAkKFwiI2luc3RydWN0b3JcIikudmFsKCk7XG5cbiAgICAgICAgbGV0IGpvdXJuYWxFbnRyeU9iamVjdCA9IHtcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBgJHtlbnRyeURhdGV9YCxcbiAgICAgICAgICAgIFwiY29uY2VwdFwiOiBgJHtlbnRyeUNvbmNlcHRzfWAsXG4gICAgICAgICAgICBcImVudHJ5XCI6IGAke2VudHJ5VGV4dH1gLFxuICAgICAgICAgICAgXCJtb29kSWRcIjogcGFyc2VJbnQoZW50cnlNb29kKSxcbiAgICAgICAgICAgIFwiaW5zdHJ1Y3RvcklkXCI6IHBhcnNlSW50KGVudHJ5SW5zdHJ1Y3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgQVBJLnBvc3RKb3VybmFsRW50cnkoam91cm5hbEVudHJ5T2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cbiAgICB9LFxuXG4gICAgZmlsdGVyT25SYWRpb0J1dHRvbiAoKSB7XG5cbiAgICAgICAgbGV0IGVudHJ5TG9nID0gJChcIiNlbnRyeUxvZ1wiKTtcbiAgICAgICAgZW50cnlMb2cuZW1wdHkoKTtcblxuICAgICAgICBsZXQgbW9vZCA9IGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpO1xuXG4gICAgICAgIEFQSS5nZXRKb3VybmFsRW50cmllcygpLnRoZW4ocGFyc2VkRW50cmllcyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRW50cmllcyA9IHBhcnNlZEVudHJpZXMuZmlsdGVyKGVudHJ5SXRlbSA9PiBlbnRyeUl0ZW0ubW9vZElkLnRvU3RyaW5nKCkgPT09IG1vb2QpXG5cbiAgICAgICAgICAgIGZpbHRlcmVkRW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBlbnRyeUhUTUwgPSBlbnRyeUNvbXBvbmVudC5tYWtlSm91cm5hbEVudHJ5Q29tcG9uZW50KGVudHJ5KTtcbiAgICAgICAgICAgICAgICByZW5kZXJFbnRyaWVzLnJlbmRlckpvdXJuYWxFbnRyaWVzKGVudHJ5SFRNTCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TGlzdGVuZXJzOyIsImNvbnN0IGZvcm1WYWxpZGF0aW9uID0ge1xuXG4gICAgdmFsaWRhdGVGb3JtICgpIHtcblxuICAgICAgICAvLyBsZXQgYWxlcnRzQXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAoZm9ybVZhbGlkYXRpb24udmFsaWRhdGVEYXRlKCkgJiYgZm9ybVZhbGlkYXRpb24udmFsaWRhdGVDb25jZXB0cygpICYmIGZvcm1WYWxpZGF0aW9uLnZhbGlkYXRlRW50cnkoKSAmJiBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZU1vb2QoKSAmJiBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUluc3RydWN0b3IoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbGVydChcIkRhdGUgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHZhbGlkYXRlRGF0ZSAoKSB7XG4gICAgICAgIGxldCBkYXRlVmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wiam91cm5hbERhdGVcIl0udmFsdWU7XG5cbiAgICAgICAgaWYgKGRhdGVWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkRhdGUgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFsaWRhdGVDb25jZXB0cyAoKSB7XG4gICAgICAgIGxldCBjb25jZXB0c1ZhbGlkYXRpb24gPSBkb2N1bWVudC5mb3Jtc1tcImVudHJ5Rm9ybVwiXVtcImNvbmNlcHRzQ292ZXJlZFwiXS52YWx1ZTtcbiAgICAgICAgbGV0IGNvbmNlcHRzTGVuZ3RoID0gY29uY2VwdHNWYWxpZGF0aW9uLmxlbmd0aDtcblxuICAgICAgICBpZiAoY29uY2VwdHNWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkNvbmNlcHRzIGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25jZXB0c0xlbmd0aCA+IDEwMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJDb25jZXB0cyBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZUVudHJ5ICgpIHtcbiAgICAgICAgbGV0IGVudHJ5VmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wiam91cm5hbEVudHJ5XCJdLnZhbHVlO1xuICAgICAgICBsZXQgcG90dHlNb3V0aFdvcmRzID0gbmV3IFJlZ0V4cChbL1xcYihcXHcqc2hpdFxcdyopXFxifFxcYihcXHcqZnVja1xcdyopXFxifFxcYihcXHcqcGlzc1xcdyopXFxifChoZWxsKXxcXGIoXFx3KmRhbW5cXHcqKVxcYi9dLCBcImlcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5VmFsaWRhdGlvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvdHR5TW91dGhXb3JkcylcblxuICAgICAgICBpZiAoZW50cnlWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkVudHJ5IGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3R0eU1vdXRoV29yZHMudGVzdChlbnRyeVZhbGlkYXRpb24pKSB7XG4gICAgICAgICAgICBhbGVydChcIlBvdHR5IG1vdXRoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFsaWRhdGVNb29kICgpIHtcbiAgICAgICAgbGV0IG1vb2RWYWxpZGF0aW9uID0gZG9jdW1lbnQuZm9ybXNbXCJlbnRyeUZvcm1cIl1bXCJtb29kRm9yVGhlRGF5XCJdLnZhbHVlO1xuICAgICAgICBpZiAobW9vZFZhbGlkYXRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTW9vZCBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZUluc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBpbnN0cnVjdG9yVmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wiaW5zdHJ1Y3RvclwiXS52YWx1ZTtcbiAgICAgICAgaWYgKGluc3RydWN0b3JWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIkluc3RydWN0b3IgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1WYWxpZGF0aW9uOyIsImltcG9ydCBBUEkgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IGpvdXJuYWxFbnRyeUZvcm0gZnJvbSBcIi4vZW50cmllc0Zvcm1cIjtcbmltcG9ydCByZW5kZXJFbnRyaWVzIGZyb20gXCIuL2VudHJpZXNET01cIjtcbmltcG9ydCBlbnRyeUNvbXBvbmVudCBmcm9tIFwiLi9lbnRyeUNvbXBvbmVudFwiO1xuXG5qb3VybmFsRW50cnlGb3JtLmNyZWF0ZUVudHJ5Rm9ybSgpO1xuXG5BUEkuZ2V0Sm91cm5hbEVudHJpZXMoKS50aGVuKHBhcnNlZEVudHJpZXMgPT4ge1xuXG4gICAgcGFyc2VkRW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblxuICAgICAgICBsZXQgZW50cnlIVE1MID0gZW50cnlDb21wb25lbnQubWFrZUpvdXJuYWxFbnRyeUNvbXBvbmVudChlbnRyeSk7XG4gICAgICAgIHJlbmRlckVudHJpZXMucmVuZGVySm91cm5hbEVudHJpZXMoZW50cnlIVE1MKTtcbiAgICB9KVxufSlcblxuXG5cblxuXG5cblxuXG4iXX0=
