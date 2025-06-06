function onOpen(e) {
  try {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Diet Tracker')
      .addItem('Open Sidebar', 'openSidebar')
      .addToUi();
  } catch (err) {
    Logger.log('MenuService.onOpen error: ' + err);
  }
}

/**
 * Runs when the add-on is installed to ensure the menu is created.
 * @param {Object} e The onInstall event.
 */
function onInstall(e) {
  onOpen(e);
}