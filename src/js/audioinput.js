var AudioInput = function() {

  EventTarget.call(this);

  var _self = this;

  var _hasGetUserMedia = function() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
  };

  var _enableMicrophone = function() {

    console.log('We have getUserMedia');

    var context = new window.webkitAudioContext();

    navigator.webkitGetUserMedia({audio: true}, function(stream) {

      _self.trigger('READY');

      var gainNode = context.createGainNode();
      gainNode.type = 3;
      gainNode.gain.value = 1;

      var microphone = context.createMediaStreamSource(stream);
      var analyser = context.createAnalyser();
      var javascriptNode = context.createJavaScriptNode(2048, 1, 1);

      analyser.smoothingTimeConstant = 0;
      analyser.fftSize = 512;

      microphone.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(gainNode);
      gainNode.connect(context.destination);

      javascriptNode.onaudioprocess = function() {
        // get the average for the first channel
        var array = new Uint8Array(analyser.frequencyBinCount);
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

      };

    });


  };

  this.initialize = function() {
    if (_hasGetUserMedia()) {
      _enableMicrophone();
    } else {
      alert('getUserMedia() is not supported in your browser');
    }
  };

};
