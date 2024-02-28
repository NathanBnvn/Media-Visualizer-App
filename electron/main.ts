import { app, BrowserWindow } from 'electron'

const path = require('node:path')

app.whenReady().then(() => {
  new BrowserWindow({
    minWidth: 840,
    minHeight: 460,
    titleBarStyle: 'hidden',
    trafficLightPosition: {x: 10, y: 10},
    titleBarOverlay: true,
        
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  }).loadURL(process.env.VITE_DEV_SERVER_URL)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})