window.onliad = function () {
  $.get('async/tweets.json', function (data) {
    console.log(data);
  });
  console.log('test');
};
