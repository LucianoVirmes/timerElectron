    const {app, BrowserWindow, ipcMain} = require('electron'); // controla o ciclo de vida de nossa aplicacao
    // isso é um Destructuring, função do js que me permite acessar apenas os conteudos com esses nomes e nao todo conteudo do electron
    console.log("olá mundo!");
    let mainWindow =  null;
    app.on('ready', () =>{
    

         mainWindow = new BrowserWindow({
            width: 1024,
            height: 900

        });
        mainWindow.loadURL(`file://${__dirname}/app/index.html`);
        
        
    });
    let sobreWindow = null;
    ipcMain.on('abrir-janela-sobre', () =>{
       if(sobreWindow == null){
         
        sobreWindow = new BrowserWindow({
            
            width: 400,
            height: 300, 
            alwaysOnTop: true, 
            frame: false
        });
        sobreWindow.on('closed', () =>{
            sobreWindow = null;
        })
       
    }  
        sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
    });
    
    ipcMain.on('fechar-janela-sobre', ()=> {
        sobreWindow.close();
    });


    app.on('window-all-closed', () =>{
        app.quit();
    })