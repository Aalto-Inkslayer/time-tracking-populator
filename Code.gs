"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * A single-use script that will populate a certain project's time tracking  *
 * spreadsheet with various values and ranges necessary for gathering data.  *
 *                                                                           *
 * @author: Esa "mmKALLL" Koskinen                                           *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var inputsheet = SpreadsheetApp.openById("1RIXNqelgvNWrEywzemM3oF-kBMiMphJjXiYECRAw6Cs");


// SHOULD ONLY BE RAN ONCE, WHEN READY. OTHERWISE YOU RISK LOSING DATA. //
function runSheetFullPopulator() {
  insertNamedRangesToTotals(getTotalsRange(inputsheet));
  addWeekHeadersToIndividualSheets(getWeekHeaderData(inputsheet));
  addNamedRangesToIndividualSheets(getWeekHeaderData(inputsheet));
}


function getTotalsRange(sheet) {

}


function getWeekHeaderData(sheet) {

}


function insertNamedRangesToTotals(totalsRange) {

}


function addWeekHeadersToIndividualSheets(weekHeaderData) {

}


function addNamedRangesToIndividualSheets(weekHeaderData) {

}

/*
Some useful GAS functions:

var range = sheet.getRangeByName(rangeName);
var data = range.getValues(data);
var data = range.setValues(data);
sheet.setNamedRange("TaxRates", SpreadsheetApp.getActiveRange());

*/
