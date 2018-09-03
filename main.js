$(document).ready(function() {
  var socket = io.connect();
  var user;

  socket.io.on('connect_error', function(err) {
    alert('Connection Error: ' + err);
  });

  socket.on('correct', function(response) {
    if(response) {
      alert('You are correct! We will notify you soon by email.');
    } else {
      alert('Incorrect, try again.');
    }
  });

  $('#user-save').click(function() {
    var email = $('#email').val().trim();
    var name = $('#name').val().trim();
    var answer = $('#answer').val().trim();
    if (email.length > 0 && answer.length > 0 && name.length > 0) {
      socket.emit('user', {
        email: email,
        name: name,
        answer: answer
      });
    } else {
      alert('Email, name, and answer are required');
    }
  });
});
