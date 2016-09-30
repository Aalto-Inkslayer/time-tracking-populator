"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * A single-use script that will populate a certain project's time tracking  *
 * spreadsheet with various values and ranges necessary for gathering data.  *
 *                                                                           *
 * @author: Esa "mmKALLL" Koskinen                                           *
 * @source: https://github.com/Aalto-Inkslayer/time-tracking-populator       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * This program is free software: you can redistribute it and/or modify      *
 * it under the terms of the GNU General Public License as published by      *
 * the Free Software Foundation, either version 3 of the License, or         *
 * (at your option) any later version.                                       *
 *                                                                           *
 * This program is distributed in the hope that it will be useful,           *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of            *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the             *
 * GNU General Public License for more details.                              *
 *                                                                           *
 * You should have received a copy of the GNU General Public License         *
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var inputsheet = SpreadsheetApp.openById("1RIXNqelgvNWrEywzemM3oF-kBMiMphJjXiYECRAw6Cs");
var namelist = ["Esa", "Alpi", "Anton", "Jani", "Kasper", "Tuomo"];
var individualSheetOffset = 2;

// SHOULD ONLY BE RAN ONCE, WHEN READY. OTHERWISE YOU RISK LOSING DATA. //
function run() {
  populateSheet();
}


function populateSheet() {
  addWeekHeadersToIndividualSheets(getWeekHeaderData(inputsheet, namelist), 13);
  addNamedRangesToIndividualSheets(getWeekHeaderData(inputsheet, namelist), 13, namelist);
  insertNamedRangesToTotals(getTotalsRange(inputsheet), namelist);
}


/*
Some useful GAS functions and docs:
https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet

var range = sheet.getRangeByName(rangeName);
var cell = sheet.getRange("A1"); // supports A1 or R1C1 notation
var data = range.getValues();
range.setValues(data);
sheet.setNamedRange("TaxRates", SpreadsheetApp.getActiveRange());

// The code below will log the name of the second sheet in a spreadsheet.
var sheets = sheet.getSheets();
if (sheets.length > 1) {
  Logger.log(sheets[1].getName());
}

*/

// Returns the data area in the totals sheet as an Object[][].
// Includes the week numbers and names, as well as totals.
function getTotalsRange(sheet) {
  return sheet.getRangeByName("totalstable").getValues();
}

// Returns the starting points of weeks in the data as an Array[][].
// The first index is the sheet's index (Totals is 0), the second indicates data value position between B1:B900.
function getWeekHeaderData(sheet, names) {
  var result = [];
  var sheets = sheet.getSheets();
  var i;
  for (i = individualSheetOffset; i < sheets.length; i += 1) {
    if (sheets[i].getName() == names[i - individualSheetOffset]) {
      result.push(sheets[i].getRange("B1:B900").getDisplayValues());
    }
  }
  return result;
}

// Inserts week headers to sheets where they are missing. Leaves some empty space between weeks.
function addWeekHeadersToIndividualSheets(weekHeaderData, weekAmount) {
  var data = weekHeaderData;
  var i;
  for (i = 0; i < data.length; i += 1) {
    var weeksFound = 0;
    var lowestWeek = 0;

    var j;
    for (j = 0; j < data[i].length; j += 1) {
      // Check if the cell's data starts with the string "week"
      if (data[i][j][0].toString().toLowerCase().lastIndexOf("week", 0) === 0) {
        weeksFound += 1;
        lowestWeek = j;
      }
    }

    var k;
    for (k = weeksFound + 1; k <= weekAmount; k += 1) {
      var position = lowestWeek + (k - weeksFound) * 10;
      data[i][position] = "Week " + k.toString();
      var cell = sheet.getSheets()[individualSheetOffset]
                      .getRange("B" + String(position));

      cell.setFontWeight("bold");
      cell.setHorizontalAlignment("left");
    }
  }
}

// Only if the necessary amount of weeks' headers exist, create named ranges appropriately.
function addNamedRangesToIndividualSheets(weekHeaderData, weekAmount, names) {
  var data = weekHeaderData;

}

// Creates and inserts named ranges to the totals sheet.
// Format for named ranges is "nameweekX"; with the person's name, a "week" string, and the week number.
function insertNamedRangesToTotals(totalsRange, names) {

}
