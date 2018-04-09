function appendToDroidOutput(msg) { getDroidOutput().value += msg; };
function setStatus(msg)           { getStatus().innerHTML = msg; };

function startFabric() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./fabric-tools/startFabric.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('' + data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function stopFabric() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./fabric-tools/stopFabric.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('' + data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function teardownFabric() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./fabric-tools/teardownFabric.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('' + data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function teardownAllDocker() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./fabric-tools/teardownAllDocker.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('' + data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function createPeerAdminCard() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./fabric-tools/createPeerAdminCard.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('' + data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};

function createComposerProfile() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./fabric-tools/createComposerProfile.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('' + data+'\n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('Process complete');
          else
         setStatus('child process exited with code ' + code);
          // getDroidOutput().style.background = "DarkGray";
    });
};
