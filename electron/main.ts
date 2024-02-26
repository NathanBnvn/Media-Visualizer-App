import { app, BrowserWindow } from 'electron'

const path = require('node:path')

app.whenReady().then(() => {
  new BrowserWindow({
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: {x: 10, y: 10},
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  }).loadURL(process.env.VITE_DEV_SERVER_URL)
})
