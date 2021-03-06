let app = require('app');  // Módulo para controlar el ciclo de vida de la aplicación.
let BrowserWindow = require('browser-window');  // Módulo para crear uan ventana de navegador.

// Mantener una referencia global al objeto window, si no lo haces, esta ventana
// se cerrará automáticamente cuando el objeto JavaScript sea recolectado (garbage collected):
let mainWindow = null;

// Salir de todas las ventanas cuando se cierren.
app.on('window-all-closed', function() {
  // En OS X es común que las aplicaciones y su barra de menú
  // se mantengan activas hasta que el usuario cierre la aplicación
  // explícitamente utilizando Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Este método será llamado cuando Electron haya finalizado la inicialización
// y esté listo para crear ventanas de navegador.
app.on('ready', function() {
  // Crear la ventana.
  mainWindow = new BrowserWindow({width: 1100, height: 900});

  // cargar el index.html de nuestra aplicación.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Desplegar devtools.
  mainWindow.openDevTools();

  // Evento emitido cuando se cierra la ventana.
  mainWindow.on('closed', function() {
    // Eliminar la referencia del objeto window.
    // En el caso de soportar multiples ventanas, es usual almacenar
    // los objetos window en un array, este es el momento en el que debes eliminar el elemento correspondiente.
    mainWindow = null;
  });
});
