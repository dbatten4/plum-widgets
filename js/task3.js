$(document).ready(function() {

  var news = $.get("https://hacker-news.firebaseio.com/v0/topstories.json", function(data) {
    console.log('success');
  })
    .done(function(data) {
      var appendItems = [];
      $.each(data, function(_, id) {
        $.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json', function(response) {
          })
            .done(function(response) {
              var listItem = '<li><a href='+response.url+' target="_blank">'+response.title+'</a> by: '+response.by+'</li>';
              appendItems.push(listItem);
              if(appendItems.length == 10) {
                $.each(appendItems, function(_, item) {
                  $('.news-list').append(item);
                });
                return;
              };
            })
            .fail(function(error) {
              console.log('error: ' + error);
            });
      })
    })
    .fail(function(e) {
      console.log('error: ' + e);
    });

});
