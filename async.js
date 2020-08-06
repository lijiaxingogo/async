window.onload = function () {
  $.ajax({
    type: 'GET',
    url: 'tweets.json',
    success: function (data) {
      console.log(data);
        $.ajax({
          type: 'GET',
          url: 'friends.json',
          success: function (data) {
            console.log(data);
              $.ajax({
                type: 'GET',
                url: 'videos.json',
                success: function (data) {
                  console.log(data);
                },
                error: function (jqXHR, textStatus, error) {
                  console.log(error);
                },
              });
          },
          error: function (jqXHR, textStatus, error) {
            console.log(error);
          },
        });
    },
    error: function (jqXHR, textStatus, error) {
      console.log(error);
    },
  });
};
