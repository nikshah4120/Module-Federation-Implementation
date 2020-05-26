const fs=require('fs');
const path=require('path');
const rootPath=path.join(__dirname,'../');
const dirNames=fs.readdirSync(rootPath);
const targetFileName='webpack.config.js';
scripts=[];
dirNames.forEach((dir)=>{
    var folderPath=path.resolve(rootPath,dir);
    if(folderPath!=__dirname)
    {   
        var fileNames=fs.readdirSync(folderPath);  
        fileNames.forEach((file) => {
             if(file==targetFileName){
                 var webpackFile=require(path.resolve(folderPath,file));
                 var address=webpackFile.output.publicPath;      
                 var fname=webpackFile.plugins[1]._options.filename;
                 if(fname!==''){
                     scripts.push(address+fname);
                 }
             }
                        
         });
    }
});  
var content='<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Dashboard</title>';
scripts.forEach((script)=>{
    content+='<script src="'+ script +'"></script>';
})
content+='</head><body><div id="root"></body></html>';

fs.writeFile('index1.html',content,function(err){
    if(err) throw err;
});