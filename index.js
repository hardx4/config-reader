fs = require('fs');
var configFile = 'config.json';

// Read configuration file data
try {
    global.config = JSON.parse(fs.readFileSync(configFile)); 
    if(typeof config.logging == "undefined"){
        config.logging = {
            dirname:"logs",
            flushInterval:5,
            files:{level:"info"},
            console:{level:"info",colors: true}
        };        
    }
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}
