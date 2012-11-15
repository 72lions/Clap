var AudioInput = function() {

  EventTarget.call(this);

  var _self = this;

  var _hasGetUserMedia = function() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
  };

  var _enableMicrophone = function() {

    navigator.webkitGetUserMedia({audio: true}, function(stream) {

      _self.trigger('READY');

      var context = new window.webkitAudioContext();

      var gainNode = context.createGainNode();
      gainNode.type = 3;
      gainNode.gain.value = 1;

      var microphone = context.createMediaStreamSource(stream);
      var analyser = context.createAnalyser();
      var javascriptNode = context.createJavaScriptNode(1024, 1, 1);
      var array = new Uint8Array(1024);
      var bufferSource = context.createBufferSource();

      analyser.smoothingTimeConstant = 0.5;
      analyser.fftSize = 2048;

      microphone.connect(analyser);
      bufferSource.connect(analyser);

      setInterval(function() {

        analyser.getByteFrequencyData(array);

        var total = 0;
        var average = 0;

        for (var i = 0; i < array.length; i++) {
          total += array[i];
        }

        average = total / array.length;

        if (average >= 60) {
          _self.trigger('JUMP', {strength: average});
        }
      }, 100);

      //analyser.connect(javascriptNode);
      //javascriptNode.connect(context.destination);

      //javascriptNode.connect(gainNode);
      //gainNode.connect(context.destination);

      javascriptNode.onaudioprocess = function() {
        console.log('writting');
        // get the average for the first channel

        analyser.getByteFrequencyData(array);


      };

    });

  };

  this.init = function() {
    if (_hasGetUserMedia()) {
      _enableMicrophone();
    } else {
      //alert('getUserMedia() is not supported in your browser');
    }
  };

};
