const { app, BrowserWindow } = require('electron')
const { menubar } = require('menubar');
const path = require('path')

const mb = menubar();

mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
});