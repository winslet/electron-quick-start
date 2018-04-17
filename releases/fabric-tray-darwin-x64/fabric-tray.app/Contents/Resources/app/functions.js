const {app} = require('electron').remote;

function appendToDroidOutput(msg) { getDroidOutput().value += msg; };
function setStatus(msg)           { getStatus().innerHTML = msg; };

function startFabric() {
    const process = require('child_process');
    var ls = process.spawn(app.getAppPath() + '/fabric-tools/startFabric.sh');

    // Console box output
    ls.stdout.on('data', function (data) {
      appendToDroidOutput('' + data+'\n');
    });

    // ls.stderr.on('data', function (data) {
    //   appendToDroidOutput('' + data+'\n');
    // });

    ls.on('close', function (code) {
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function stopFabric() {
    const process = require('child_process');
    var ls = process.spawn(app.getAppPath() + '/fabric-tools/stopFabric.sh');

    // Console box output
    ls.stdout.on('data', function (data) {
      appendToDroidOutput('' + data+'\n');
    });

    // ls.stderr.on('data', function (data) {
    //   appendToDroidOutput('' + data+'\n');
    // });

    ls.on('close', function (code) {
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function teardownFabric() {
    const process = require('child_process');
    var ls = process.spawn(app.getAppPath() + '/fabric-tools/teardownFabric.sh');

    // Console box output
    ls.stdout.on('data', function (data) {
      appendToDroidOutput('' + data+'\n');
    });

    // ls.stderr.on('data', function (data) {
    //   appendToDroidOutput('' + data+'\n');
    // });

    ls.on('close', function (code) {
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function teardownAllDocker() {
    const process = require('child_process');
    var ls = process.spawn(app.getAppPath() + '/fabric-tools/teardownAllDocker.sh');

    // Console box output
    ls.stdout.on('data', function (data) {
      appendToDroidOutput('' + data+'\n');
    });

    // ls.stderr.on('data', function (data) {
    //   appendToDroidOutput('' + data+'\n');
    // });

    ls.on('close', function (code) {
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function createPeerAdminCard() {
    const process = require('child_process');
    var ls = process.spawn(app.getAppPath() + '/fabric-tools/createPeerAdminCard.sh');

    // Console box output
    ls.stdout.on('data', function (data) {
      appendToDroidOutput('' + data+'\n');
    });

    // ls.stderr.on('data', function (data) {
    //   appendToDroidOutput('' + data+'\n');
    // });

    ls.on('close', function (code) {
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function createComposerProfile() {
    const process = require('child_process');
    var ls = process.spawn(app.getAppPath() + '/fabric-tools/createComposerProfile.sh');

    // Console box output
    ls.stdout.on('data', function (data) {
      appendToDroidOutput('' + data+'\n');
    });

    // ls.stderr.on('data', function (data) {
    //   appendToDroidOutput('' + data+'\n');
    // });

    ls.on('close', function (code) {
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};
