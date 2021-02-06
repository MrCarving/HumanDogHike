const { app, BrowserWindow } = require('electron');
const electron = require('electron');

const {ipcMain} = require('electron');












function createWindow1 () {
  window1 = new BrowserWindow({width: 400,height: 400, webPreferences: {
    nodeIntegration: true
}})
  window1.loadURL(`file://${__dirname}/index.html`)
  //window1.webContents.openDevTools()
  window1.on('closed', function () {
     window1 = null
  })
  return window1
}
function createWindow2 () {
  window2 = new BrowserWindow({width: 400, height: 400, webPreferences: {
    nodeIntegration: true
}})
  window2.loadURL(`file://${__dirname}/input.html`)
  //window2.webContents.openDevTools()
  window2.on('closed', function () {
    window2 = null
  })
  return window2
}

app.on('ready', () => {
  window1 = createWindow1();
  window2 = createWindow2();
 
    ipcMain.on('input1', (event, arg) => {

        window1.webContents.send('reply1', arg);  

        console.log(arg); 
      
  })

  ipcMain.on('input2', (event, arg) => {

    
      window1.webContents.send('reply2', arg); 
      console.log(arg); 
  
    
    
})
ipcMain.on('input3', (event, arg) => {

  
    window1.webContents.send('reply3', arg);  

    console.log(arg); 
  
})
  

  });

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
      app.quit();
});
