import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron'

const path = require('node:path')

app.whenReady().then(() => {
  if(process.env.VITE_DEV_SERVER_URL == null) {} else {
    new BrowserWindow({
      minWidth: 840,
      minHeight: 460,
      titleBarStyle: 'hidden',
      trafficLightPosition: {x: 10, y: 9},
      titleBarOverlay: true,
      
      webPreferences: {
        preload: path.join(__dirname, 'preload.ts')
      }
    }).loadURL(process.env.VITE_DEV_SERVER_URL)
  }
})

ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})