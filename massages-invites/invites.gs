function onOpen() {
  
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('Invites')
      .addItem('Create an invite in your calendar', 'createEvent')
      .addToUi();
}

function createEvent() {

  var sheet = SpreadsheetApp.getActiveSheet();  
  var ui = SpreadsheetApp.getUi();
  
  var cell = sheet.getActiveCell();
  var activeRow = cell.getRowIndex();

  var startTime = sheet.getRange("A"+activeRow).getValue(); 
  var endTime = sheet.getRange("B"+activeRow).getValue();

  var startDate = sheet.getRange("D1").getValue();  
  startDate.setHours(startTime.getHours());
  startDate.setMinutes(startTime.getMinutes());

  var endDate = sheet.getRange("D1").getValue();    
  endDate.setHours(endTime.getHours());
  endDate.setMinutes(endTime.getMinutes());
  
  var massageEvent = CalendarApp.getDefaultCalendar().createEvent('Massage with the Lotus ladies',startDate, endDate);
  massageEvent.addEmailReminder(30);
  
  ui.alert("You should have an event in your calendar now!");
}