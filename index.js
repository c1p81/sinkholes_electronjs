const { app, BrowserWindow } = require('electron')
 function createWindow () {
 // Crea la finestra del browser
 win = new BrowserWindow({ width: 800, height: 600 })
// e viene caricato il file index.html dell' app.
win.loadFile('index.html')
}
app.on('ready', createWindow)
