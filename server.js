var ghost = require('ghost');
var parentApp = require('express')()

parentApp.get('/.well-known/acme-challenge/jgqtv7brrnlgympkbjkg794g5zbhpihjci6e7fpv2t4', function (req, res) {
  res.send('jGqTv7BRrNlGYMPKBjKg794g5zBhPIHjcI6E7fpv2T4')
})

// Run a single Ghost process
ghost()
  .then( ghostServer => {
    parentApp.use("/", ghostServer.rootApp);
    ghostServer.start(parentApp)
  })
  .catch( error => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`);
    process.exit(1);
  });