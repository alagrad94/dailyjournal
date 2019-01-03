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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2VudHJpZXNET00uanMiLCIuLi9zY3JpcHRzL2VudHJpZXNGb3JtLmpzIiwiLi4vc2NyaXB0cy9lbnRyeUNvbXBvbmVudC5qcyIsIi4uL3NjcmlwdHMvZXZlbnRMaXN0ZW5lcnMuanMiLCIuLi9zY3JpcHRzL2Zvcm1WYWxpZGF0aW9uLmpzIiwiLi4vc2NyaXB0cy9qb3VybmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQ0EsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLGlCQUFpQixHQUFJO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLCtEQUFELENBQUwsQ0FDRixJQURFLENBQ0csUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRGYsQ0FBUDtBQUVILEdBSk87O0FBTVIsRUFBQSxnQkFBZ0IsQ0FBQyxrQkFBRCxFQUFxQjtBQUNqQyxJQUFBLEtBQUssQ0FBQywrREFBRCxFQUFrRTtBQUN2RSxNQUFBLE1BQU0sRUFBRSxNQUQrRDtBQUV2RSxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRjhEO0FBS3ZFLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsa0JBQWY7QUFMaUUsS0FBbEUsQ0FBTDtBQU9IOztBQWRPLENBQVo7ZUFpQmUsRzs7Ozs7Ozs7OztBQ2xCZixNQUFNLGFBQWEsR0FBRztBQUNsQixFQUFBLG9CQUFvQixDQUFFLFNBQUYsRUFBYTtBQUVqQyxJQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxNQUFmLENBQXNCLFNBQXRCO0FBRUM7O0FBTGlCLENBQXRCO2VBUWUsYTs7Ozs7Ozs7Ozs7QUNSZjs7OztBQUVBLE1BQU0sZ0JBQWdCLEdBQUc7QUFFakIsRUFBQSxlQUFlLEdBQUk7QUFHZixRQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUVB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QUFBLFlBQVksR0FBSTtBQUNaLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxLQUFULENBQWUsV0FBZixFQUE0QixlQUE1QixFQUE2QyxLQUFsRTs7QUFDQSxRQUFJLGNBQWMsS0FBSyxFQUF2QixFQUEyQjtBQUN2QixNQUFBLEtBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQWxFa0I7O0FBb0VuQixFQUFBLGtCQUFrQixHQUFHO0FBQ2pCLFFBQUksb0JBQW9CLEdBQUcsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUFmLEVBQTRCLFlBQTVCLEVBQTBDLEtBQXJFOztBQUNBLFFBQUksb0JBQW9CLEtBQUssRUFBN0IsRUFBaUM7QUFDN0IsTUFBQSxLQUFLLENBQUMscUNBQUQsQ0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNILEtBSEQsTUFHTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBNUVrQixDQUF2QjtlQStFZSxjOzs7Ozs7QUMvRWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxxQkFBaUIsZUFBakI7O0FBRUEsY0FBSSxpQkFBSixHQUF3QixJQUF4QixDQUE2QixhQUFhLElBQUk7QUFFMUMsRUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixLQUFLLElBQUk7QUFFM0IsUUFBSSxTQUFTLEdBQUcsd0JBQWUseUJBQWYsQ0FBeUMsS0FBekMsQ0FBaEI7O0FBQ0Esd0JBQWMsb0JBQWQsQ0FBbUMsU0FBbkM7QUFDSCxHQUpEO0FBS0gsQ0FQRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuY29uc3QgQVBJID0ge1xuICAgIGdldEpvdXJuYWxFbnRyaWVzICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VudHJpZXM/X2V4cGFuZD1tb29kJl9leHBhbmQ9aW5zdHJ1Y3RvclwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG5cbiAgICBwb3N0Sm91cm5hbEVudHJ5KGpvdXJuYWxFbnRyeU9iamVjdCkge1xuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbnRyaWVzP19leHBhbmQ9bW9vZCZfZXhwYW5kPWluc3RydWN0b3JcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShqb3VybmFsRW50cnlPYmplY3QpXG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImNvbnN0IHJlbmRlckVudHJpZXMgPSB7XG4gICAgcmVuZGVySm91cm5hbEVudHJpZXMgKGVudHJ5SFRNTCkge1xuXG4gICAgJChcIiNlbnRyeUxvZ1wiKS5hcHBlbmQoZW50cnlIVE1MKTtcblxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckVudHJpZXM7IiwiaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IGpvdXJuYWxFbnRyeUZvcm0gPSB7XG5cbiAgICAgICAgY3JlYXRlRW50cnlGb3JtICgpIHtcblxuXG4gICAgICAgICAgICBsZXQgZW50cnlGb3JtID0gJChcIiNlbnRyeUZvcm1cIik7XG5cbiAgICAgICAgICAgIGxldCBkYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgIGRhdGVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiZm9ybUVsZW1lbnRcIik7XG4gICAgICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiam91cm5hbERhdGVcIik7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImpvdXJuYWxEYXRlXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImpvdXJuYWxEYXRlXCIpO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlIG9mIEVudHJ5XCI7XG5cbiAgICAgICAgICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICAgICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAgICAgICAgIGxldCBjb25jZXB0c0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgICAgICBjb25jZXB0c0ZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtRWxlbWVudFwiKTtcbiAgICAgICAgICAgIGxldCBjb25jZXB0c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgY29uY2VwdHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbmNlcHRzQ292ZXJlZFwiKTtcbiAgICAgICAgICAgIGNvbmNlcHRzSW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjYwXCIpO1xuICAgICAgICAgICAgY29uY2VwdHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiMVwiKTtcbiAgICAgICAgICAgIGNvbmNlcHRzSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgICAgICAgICBjb25jZXB0c0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb25jZXB0c0NvdmVyZWRcIik7XG4gICAgICAgICAgICBsZXQgY29uY2VwdHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgICAgICAgICAgY29uY2VwdHNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb25jZXB0c0NvdmVyZWRcIik7XG4gICAgICAgICAgICBjb25jZXB0c0xhYmVsLnRleHRDb250ZW50ID0gXCJDb25jZXB0cyBDb3ZlcmVkXCI7XG5cbiAgICAgICAgICAgIGNvbmNlcHRzRmllbGQuYXBwZW5kQ2hpbGQoY29uY2VwdHNMYWJlbCk7XG4gICAgICAgICAgICBjb25jZXB0c0ZpZWxkLmFwcGVuZENoaWxkKGNvbmNlcHRzSW5wdXQpO1xuXG4gICAgICAgICAgICBsZXQgam91cm5hbEVudHJ5RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtRWxlbWVudFwiKTtcbiAgICAgICAgICAgIGxldCBqb3VybmFsRW50cnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiam91cm5hbEVudHJ5XCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5SW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjYwXCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5SW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjFcIik7XG4gICAgICAgICAgICBqb3VybmFsRW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJqb3VybmFsRW50cnlcIik7XG4gICAgICAgICAgICBsZXQgam91cm5hbEVudHJ5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImpvdXJuYWxFbnRyeVwiKTtcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUxhYmVsLnRleHRDb250ZW50ID0gXCJFbnRyeVwiXG5cbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUZpZWxkLmFwcGVuZENoaWxkKGpvdXJuYWxFbnRyeUxhYmVsKTtcbiAgICAgICAgICAgIGpvdXJuYWxFbnRyeUZpZWxkLmFwcGVuZENoaWxkKGpvdXJuYWxFbnRyeUlucHV0KTtcblxuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvckZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtRWxlbWVudFwiKTtcbiAgICAgICAgICAgIGxldCBpbnN0cnVjdG9yRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JGaWVsZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImluc3RydWN0b3JcIik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yRmllbGRMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3RvclwiO1xuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvclNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluc3RydWN0b3JcIik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yU2VsZWN0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvclNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgIGxldCBpbnN0cnVjdG9yT3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBpbnN0cnVjdG9yT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAxKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JPcHRpb24xLnRleHRDb250ZW50ID0gXCJKaXNpZSBEYXZpZFwiO1xuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JPcHRpb24yLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDIpO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rvck9wdGlvbjIudGV4dENvbnRlbnQgPSBcIkVtaWx5IExlbW1vblwiO1xuICAgICAgICAgICAgbGV0IGluc3RydWN0b3JPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JPcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDMpO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rvck9wdGlvbjMudGV4dENvbnRlbnQgPSBcIkxlYWggSG9lZmxpbmdcIjtcblxuXG4gICAgICAgICAgICBpbnN0cnVjdG9yRmllbGQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RvckZpZWxkTGFiZWwpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvclNlbGVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdG9yT3B0aW9uMSk7XG4gICAgICAgICAgICBpbnN0cnVjdG9yU2VsZWN0LmFwcGVuZENoaWxkKGluc3RydWN0b3JPcHRpb24yKTtcbiAgICAgICAgICAgIGluc3RydWN0b3JTZWxlY3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rvck9wdGlvbjMpO1xuICAgICAgICAgICAgaW5zdHJ1Y3RvckZpZWxkLmFwcGVuZENoaWxkKGluc3RydWN0b3JTZWxlY3QpO1xuICAgICAgICAgICAgZW50cnlGb3JtLmFwcGVuZChpbnN0cnVjdG9yRmllbGQpO1xuXG4gICAgICAgICAgICBsZXQgbW9vZEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICAgICAgICAgICAgbW9vZEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmb3JtRWxlbWVudFwiKTtcbiAgICAgICAgICAgIG1vb2RGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vb2RGb3JUaGVEYXlcIilcbiAgICAgICAgICAgIGxldCBtb29kRmllbGRMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgICAgICAgICAgbW9vZEZpZWxkTGVnZW5kLnRleHRDb250ZW50ID0gXCJNb29kIGZvciB0aGUgRGF5XCI7XG4gICAgICAgICAgICBsZXQgbW9vZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtb29kRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9vZERpdlwiKTtcblxuICAgICAgICAgICAgbGV0IG1vb2RPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgMik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibW9vZFwiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24xLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9vZENob2ljZTFcIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpXG4gICAgICAgICAgICBsZXQgbW9vZExhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIG1vb2RMYWJlbDEuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9vZENob2ljZTFcIik7XG4gICAgICAgICAgICBtb29kTGFiZWwxLnRleHRDb250ZW50ID0gXCJIYXBweVwiO1xuXG4gICAgICAgICAgICBsZXQgbW9vZE9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAzKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24yLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtb29kXCIpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb29kQ2hvaWNlMlwiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24yLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgICAgIGxldCBtb29kTGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbW9vZExhYmVsMi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtb29kQ2hvaWNlMlwiKTtcbiAgICAgICAgICAgIG1vb2RMYWJlbDIudGV4dENvbnRlbnQgPSBcIlNhZFwiO1xuXG4gICAgICAgICAgICBsZXQgbW9vZE9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBtb29kT3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAxKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24zLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtb29kXCIpO1xuICAgICAgICAgICAgbW9vZE9wdGlvbjMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb29kQ2hvaWNlM1wiKTtcbiAgICAgICAgICAgIG1vb2RPcHRpb24zLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgICAgIGxldCBtb29kTGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbW9vZExhYmVsMy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtb29kQ2hvaWNlM1wiKTtcbiAgICAgICAgICAgIG1vb2RMYWJlbDMudGV4dENvbnRlbnQgPSBcIk9rXCI7XG5cbiAgICAgICAgICAgIG1vb2RGaWVsZC5hcHBlbmRDaGlsZChtb29kRmllbGRMZWdlbmQpO1xuICAgICAgICAgICAgbW9vZERpdi5hcHBlbmRDaGlsZChtb29kT3B0aW9uMSk7XG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKG1vb2RMYWJlbDEpO1xuICAgICAgICAgICAgbW9vZERpdi5hcHBlbmRDaGlsZChtb29kT3B0aW9uMik7XG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKG1vb2RMYWJlbDIpO1xuICAgICAgICAgICAgbW9vZERpdi5hcHBlbmRDaGlsZChtb29kT3B0aW9uMyk7XG4gICAgICAgICAgICBtb29kRGl2LmFwcGVuZENoaWxkKG1vb2RMYWJlbDMpO1xuICAgICAgICAgICAgbW9vZEZpZWxkLmFwcGVuZENoaWxkKG1vb2REaXYpO1xuXG4gICAgICAgICAgICBlbnRyeUZvcm0uYXBwZW5kKGRhdGVGaWVsZCk7XG4gICAgICAgICAgICBlbnRyeUZvcm0uYXBwZW5kKGNvbmNlcHRzRmllbGQpO1xuICAgICAgICAgICAgZW50cnlGb3JtLmFwcGVuZChqb3VybmFsRW50cnlGaWVsZCk7XG4gICAgICAgICAgICBlbnRyeUZvcm0uYXBwZW5kKG1vb2RGaWVsZCk7XG5cbiAgICAgICAgICAgIGxldCBqb3VybmFsRW50cnlCdXR0b24gPSAkKFwiI3JlY29yZEVudHJ5QnV0dG9uXCIpO1xuICAgICAgICAgICAgam91cm5hbEVudHJ5QnV0dG9uLmNsaWNrKGV2ZW50TGlzdGVuZXJzLmhhbmRsZVJlY29yZEVudHJ5QnV0dG9uKTtcblxuICAgICAgICAgICAgbGV0IG1vb2RSYWRpb0J1dHRvbnMgPSAkKFwiW25hbWUgPSAnbW9vZCddXCIpO1xuICAgICAgICAgICAgbW9vZFJhZGlvQnV0dG9ucy5jbGljayhldmVudExpc3RlbmVycy5maWx0ZXJPblJhZGlvQnV0dG9uKTtcbiAgICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBqb3VybmFsRW50cnlGb3JtO1xuIiwiXG5jb25zdCBlbnRyeUNvbXBvbmVudCA9IHtcblxuICAgIG1ha2VKb3VybmFsRW50cnlDb21wb25lbnQgKGVudHJ5KSB7XG5cbiAgICBsZXQgakVEYXRlID0gZW50cnkuZGF0ZTtcbiAgICBsZXQgakVDb25jZXB0ID0gZW50cnkuY29uY2VwdDtcbiAgICBsZXQgakVFbnRyeSA9IGVudHJ5LmVudHJ5O1xuICAgIGxldCBqRU1vb2QgPSBlbnRyeS5tb29kLmxhYmVsO1xuICAgIGxldCBqRUluc3RydWN0b3JGTiA9IGVudHJ5Lmluc3RydWN0b3IuZmlyc3ROYW1lO1xuICAgIGxldCBqRUluc3RydWN0b3JMTiA9IGVudHJ5Lmluc3RydWN0b3IubGFzdE5hbWU7XG4gICAgbGV0IGpFSW5zdHJ1Y3RvciA9IGAke2pFSW5zdHJ1Y3RvckZOfSAke2pFSW5zdHJ1Y3RvckxOfWA7XG5cbiAgICBsZXQgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgbGV0IGJyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICBsZXQgYnIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgIGxldCBicjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgICBsZXQgZW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBlbnRyeURpdlRleHQxID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYERhdGU6ICR7akVEYXRlfWApXG4gICAgbGV0IGVudHJ5RGl2VGV4dDIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgQ29uY2VwdHMgQ292ZXJlZDogJHtqRUNvbmNlcHR9YCk7XG4gICAgbGV0IGVudHJ5RGl2VGV4dDMgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgSm91cm5hbCBFbnRyeTogJHtqRUVudHJ5fWApO1xuICAgIGxldCBlbnRyeURpdlRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYE1vb2Q6ICR7akVNb29kfWApO1xuICAgIGxldCBlbnRyeURpdlRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYEluc3RydWN0b3I6ICR7akVJbnN0cnVjdG9yfWApO1xuXG4gICAgZW50cnlEaXYuY2xhc3NMaXN0LmFkZChcImpvdXJuYWxFbnRyeVwiKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChlbnRyeURpdlRleHQxKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChicik7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoZW50cnlEaXZUZXh0Mik7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoYnIyKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChlbnRyeURpdlRleHQzKTtcbiAgICBlbnRyeURpdi5hcHBlbmRDaGlsZChicjMpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGVudHJ5RGl2VGV4dDQpO1xuICAgIGVudHJ5RGl2LmFwcGVuZENoaWxkKGJyNCk7XG4gICAgZW50cnlEaXYuYXBwZW5kQ2hpbGQoZW50cnlEaXZUZXh0NSk7XG5cbiAgICByZXR1cm4gZW50cnlEaXY7XG5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbnRyeUNvbXBvbmVudDsiLCJpbXBvcnQgQVBJIGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBlbnRyeUNvbXBvbmVudCBmcm9tIFwiLi9lbnRyeUNvbXBvbmVudFwiO1xuaW1wb3J0IGZvcm1WYWxpZGF0aW9uIGZyb20gXCIuL2Zvcm1WYWxpZGF0aW9uXCI7XG5pbXBvcnQgcmVuZGVyRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzRE9NXCI7XG5cbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0ge1xuXG4gICAgaGFuZGxlUmVjb3JkRW50cnlCdXR0b24gKCkge1xuXG4gICAgICAgIGxldCBlbnRyeURhdGUgPSAkKFwiI2pvdXJuYWxEYXRlXCIpLnZhbCgpO1xuICAgICAgICBsZXQgZW50cnlDb25jZXB0cyA9ICQoXCIjY29uY2VwdHNDb3ZlcmVkXCIpLnZhbCgpO1xuICAgICAgICBsZXQgZW50cnlUZXh0ID0gJChcIiNqb3VybmFsRW50cnlcIikudmFsKCk7XG4gICAgICAgIGxldCBlbnRyeU1vb2QgPSAkKFwiW25hbWUgPSAnbW9vZCddXCIpLnZhbCgpO1xuICAgICAgICBsZXQgZW50cnlJbnN0cnVjdG9yID0gJChcIiNpbnN0cnVjdG9yXCIpLnZhbCgpO1xuXG4gICAgICAgIGxldCBqb3VybmFsRW50cnlPYmplY3QgPSB7XG4gICAgICAgICAgICBcImRhdGVcIjogYCR7ZW50cnlEYXRlfWAsXG4gICAgICAgICAgICBcImNvbmNlcHRcIjogYCR7ZW50cnlDb25jZXB0c31gLFxuICAgICAgICAgICAgXCJlbnRyeVwiOiBgJHtlbnRyeVRleHR9YCxcbiAgICAgICAgICAgIFwibW9vZElkXCI6IHBhcnNlSW50KGVudHJ5TW9vZCksXG4gICAgICAgICAgICBcImluc3RydWN0b3JJZFwiOiBwYXJzZUludChlbnRyeUluc3RydWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybVZhbGlkYXRpb24udmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgICAgICAgIEFQSS5wb3N0Sm91cm5hbEVudHJ5KGpvdXJuYWxFbnRyeU9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuXG4gICAgfSxcblxuICAgIGZpbHRlck9uUmFkaW9CdXR0b24gKCkge1xuXG4gICAgICAgIGxldCBlbnRyeUxvZyA9ICQoXCIjZW50cnlMb2dcIik7XG4gICAgICAgIGVudHJ5TG9nLmVtcHR5KCk7XG5cbiAgICAgICAgbGV0IG1vb2QgPSBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgICBBUEkuZ2V0Sm91cm5hbEVudHJpZXMoKS50aGVuKHBhcnNlZEVudHJpZXMgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEVudHJpZXMgPSBwYXJzZWRFbnRyaWVzLmZpbHRlcihlbnRyeUl0ZW0gPT4gZW50cnlJdGVtLm1vb2RJZC50b1N0cmluZygpID09PSBtb29kKVxuXG4gICAgICAgICAgICBmaWx0ZXJlZEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZW50cnlIVE1MID0gZW50cnlDb21wb25lbnQubWFrZUpvdXJuYWxFbnRyeUNvbXBvbmVudChlbnRyeSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyRW50cmllcy5yZW5kZXJKb3VybmFsRW50cmllcyhlbnRyeUhUTUwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVudExpc3RlbmVyczsiLCJjb25zdCBmb3JtVmFsaWRhdGlvbiA9IHtcblxuICAgIHZhbGlkYXRlRm9ybSAoKSB7XG5cbiAgICAgICAgLy8gbGV0IGFsZXJ0c0FycmF5ID0gW107XG5cbiAgICAgICAgaWYgKGZvcm1WYWxpZGF0aW9uLnZhbGlkYXRlRGF0ZSgpICYmIGZvcm1WYWxpZGF0aW9uLnZhbGlkYXRlQ29uY2VwdHMoKSAmJiBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUVudHJ5KCkgJiYgZm9ybVZhbGlkYXRpb24udmFsaWRhdGVNb29kKCkgJiYgZm9ybVZhbGlkYXRpb24udmFsaWRhdGVJbnN0cnVjdG9yKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWxlcnQoXCJEYXRlIGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZURhdGUgKCkge1xuICAgICAgICBsZXQgZGF0ZVZhbGlkYXRpb24gPSBkb2N1bWVudC5mb3Jtc1tcImVudHJ5Rm9ybVwiXVtcImpvdXJuYWxEYXRlXCJdLnZhbHVlO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJEYXRlIGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHZhbGlkYXRlQ29uY2VwdHMgKCkge1xuICAgICAgICBsZXQgY29uY2VwdHNWYWxpZGF0aW9uID0gZG9jdW1lbnQuZm9ybXNbXCJlbnRyeUZvcm1cIl1bXCJjb25jZXB0c0NvdmVyZWRcIl0udmFsdWU7XG4gICAgICAgIGxldCBjb25jZXB0c0xlbmd0aCA9IGNvbmNlcHRzVmFsaWRhdGlvbi5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvbmNlcHRzVmFsaWRhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJDb25jZXB0cyBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uY2VwdHNMZW5ndGggPiAxMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQ29uY2VwdHMgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFsaWRhdGVFbnRyeSAoKSB7XG4gICAgICAgIGxldCBlbnRyeVZhbGlkYXRpb24gPSBkb2N1bWVudC5mb3Jtc1tcImVudHJ5Rm9ybVwiXVtcImpvdXJuYWxFbnRyeVwiXS52YWx1ZTtcbiAgICAgICAgbGV0IHBvdHR5TW91dGhXb3JkcyA9IG5ldyBSZWdFeHAoWy9cXGIoXFx3KnNoaXRcXHcqKVxcYnxcXGIoXFx3KmZ1Y2tcXHcqKVxcYnxcXGIoXFx3KnBpc3NcXHcqKVxcYnwoaGVsbCl8XFxiKFxcdypkYW1uXFx3KilcXGIvXSwgXCJpXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeVZhbGlkYXRpb24pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3R0eU1vdXRoV29yZHMpXG5cbiAgICAgICAgaWYgKGVudHJ5VmFsaWRhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJFbnRyeSBmaWVsZCBtdXN0IGJlIGZpbGxlZCBvdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocG90dHlNb3V0aFdvcmRzLnRlc3QoZW50cnlWYWxpZGF0aW9uKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQb3R0eSBtb3V0aFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHZhbGlkYXRlTW9vZCAoKSB7XG4gICAgICAgIGxldCBtb29kVmFsaWRhdGlvbiA9IGRvY3VtZW50LmZvcm1zW1wiZW50cnlGb3JtXCJdW1wibW9vZEZvclRoZURheVwiXS52YWx1ZTtcbiAgICAgICAgaWYgKG1vb2RWYWxpZGF0aW9uID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIk1vb2QgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFsaWRhdGVJbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgaW5zdHJ1Y3RvclZhbGlkYXRpb24gPSBkb2N1bWVudC5mb3Jtc1tcImVudHJ5Rm9ybVwiXVtcImluc3RydWN0b3JcIl0udmFsdWU7XG4gICAgICAgIGlmIChpbnN0cnVjdG9yVmFsaWRhdGlvbiA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnN0cnVjdG9yIGZpZWxkIG11c3QgYmUgZmlsbGVkIG91dFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtVmFsaWRhdGlvbjsiLCJpbXBvcnQgQVBJIGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBqb3VybmFsRW50cnlGb3JtIGZyb20gXCIuL2VudHJpZXNGb3JtXCI7XG5pbXBvcnQgcmVuZGVyRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzRE9NXCI7XG5pbXBvcnQgZW50cnlDb21wb25lbnQgZnJvbSBcIi4vZW50cnlDb21wb25lbnRcIjtcblxuam91cm5hbEVudHJ5Rm9ybS5jcmVhdGVFbnRyeUZvcm0oKTtcblxuQVBJLmdldEpvdXJuYWxFbnRyaWVzKCkudGhlbihwYXJzZWRFbnRyaWVzID0+IHtcblxuICAgIHBhcnNlZEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cbiAgICAgICAgbGV0IGVudHJ5SFRNTCA9IGVudHJ5Q29tcG9uZW50Lm1ha2VKb3VybmFsRW50cnlDb21wb25lbnQoZW50cnkpO1xuICAgICAgICByZW5kZXJFbnRyaWVzLnJlbmRlckpvdXJuYWxFbnRyaWVzKGVudHJ5SFRNTCk7XG4gICAgfSlcbn0pXG5cblxuXG5cblxuXG5cblxuIl19
