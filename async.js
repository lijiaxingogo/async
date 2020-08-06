window.onload = function () {
  $.ajax({
    type: 'GET',
    url: 'tweets.json',
    success: function (data) {
      console.log(data);
      // query friends.json
      window.onload = function () {
        $.ajax({
          type: 'GET',
          url: 'friends.json',
          success: function (data) {
            console.log(data);
            window.onload = function () {
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
            };
          },
          error: function (jqXHR, textStatus, error) {
            console.log(error);
          },
        });
      };
    },
    error: function (jqXHR, textStatus, error) {
      console.log(error);
    },
  });
};
