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
var names = ["Esa", "Alpi", "Anton", "Jani", "Kasper", "Tuomo"];

// SHOULD ONLY BE RAN ONCE, WHEN READY. OTHERWISE YOU RISK LOSING DATA. //
function run() {
  populateSheet();
}


function populateSheet() {
  insertNamedRangesToTotals(getTotalsRange(inputsheet), names);
  addWeekHeadersToIndividualSheets(getWeekHeaderData(inputsheet), 13);
  addNamedRangesToIndividualSheets(getWeekHeaderData(inputsheet), 13, names);
}


/*
Some useful GAS functions and docs:
https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet

var range = sheet.getRangeByName(rangeName);
var data = range.getValues(data);
var data = range.setValues(data);
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

}

// Returns the starting points of weeks in the data as an Array[][].
// The first index is the sheet's index, the second a list of integers denoting the rows of week headers.
function getWeekHeaderData(sheet) {

}

// Creates and inserts named ranges to the totals sheet.
// Format for named ranges is "nameweekX"; with the person's name, a "week" string, and the week number.
function insertNamedRangesToTotals(totalsRange, names) {

}

// Inserts week headers to sheets where they are missing. Leaves some empty space between weeks.
function addWeekHeadersToIndividualSheets(weekHeaderData, weekAmount) {

}

// Only if the necessary amount of weeks' headers exist, create named ranges appropriately.
function addNamedRangesToIndividualSheets(weekHeaderData, weekAmount, names) {

}
