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


// SHOULD ONLY BE RAN ONCE, WHEN READY. OTHERWISE YOU RISK LOSING DATA. //
function runSheetFullPopulator() {
  insertNamedRangesToTotals(getTotalsRange(inputsheet));
  addWeekHeadersToIndividualSheets(getWeekHeaderData(inputsheet));
  addNamedRangesToIndividualSheets(getWeekHeaderData(inputsheet));
}


/*
Some useful GAS functions:

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
// The first index is the
function getWeekHeaderData(sheet) {

}


function insertNamedRangesToTotals(totalsRange) {

}


function addWeekHeadersToIndividualSheets(weekHeaderData) {

}


function addNamedRangesToIndividualSheets(weekHeaderData) {

}
