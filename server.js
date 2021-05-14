var ghost = require('ghost');
var parentApp = require('express')()

parentApp.get('/.well-known/acme-challenge/OaIFhUES_l3HUPo-dAjY3rprqSdikXOMQ_FRwGLZwcs', function (req, res) {
  res.send('OaIFhUES_l3HUPo-dAjY3rprqSdikXOMQ_FRwGLZwcs.7j72fN1OvFKTpobAWCJZkPWmt7YCczBTX368J3wy2uY')
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