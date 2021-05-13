const { app, BrowserWindow, Menu, dialog } = require("electron")
const { powerMonitor } = require("electron/main")
const { path } = require("path")

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    fullscreenable: true,
    backgroundColor: "#f6d6d6",
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // Load your React App
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)
}

function menu() {
  const template = [
    {
      label: "Nexus",
      submenu: [
        {
          label: "About",
          click: () => {
            dialog.showMessageBox(win, {
              type: "Info",
              title: "About",
              message: "Nexus is built by Thomas Sankara, @tsbsankara",
              detail:
                "Find him on Twitter @TSBSankara, GitHub @SankThomas or at https://tsbsankara.co.ke",
            })
          },
        },
        {
          label: "Quit",
          click: () => {
            app.quit()
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

app.on("ready", () => {
  createWindow()
  menu()

  powerMonitor.on("resume", () => {
    win.reload()
  })
})
