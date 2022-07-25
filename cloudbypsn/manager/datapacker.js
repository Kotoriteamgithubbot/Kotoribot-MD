const fs = require('fs');
const archiver = require('archiver');

function compressdatabase(namefile) {
   const output = fs.createWriteStream(namefile);
   const archive = archiver('zip', {
       zlib: { level: 9 } 
    });
   output.on('close', function() {
       console.log(archive.pointer() + ' total bytes');
       console.log('archiver has been finalized and the output file descriptor has closed.');
    });
   output.on('end', function() {
       console.log('Data has been drained');
   });
   archive.on('warning', function(err) {
        throw err;
    });
   archive.on('error', function(err) {
        throw err;
    });
    archive.pipe(output);
    archive.directory('./database', false);
    archive.finalize();
}

module.exports = { 
    compressdatabase
}