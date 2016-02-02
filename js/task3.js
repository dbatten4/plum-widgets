$(document).ready(function() {
  var NUMBER_OF_STORIES = 10;

  var news = $.get("https://hacker-news.firebaseio.com/v0/topstories.json", function(data) {
    console.log('success');
  })
    .done(function(data) {
      var idArray = data.splice(0,NUMBER_OF_STORIES);
      collectNewsStories(idArray);
    })
    .fail(function(e) {
      console.log('error: ' + e);
    });

  function collectNewsStories(idArray) {
    var promises = [];
    var appendItems = [];
    $.each(idArray, function(_, id) {
      var def = new $.Deferred();
      $.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json', function(response) {
        })
          .done(function(response) {
            var listItem = '<li><a href='+response.url+' target="_blank">'+response.title+'</a> by: '+response.by+'</li>';
            appendItems.push(listItem);
            def.resolve();
          })
          .fail(function(error) {
            console.log('error: ' + error);
          });
      promises.push(def);
    });
    return $.when.apply(null, promises).then(function() {
      appendStories(appendItems);
    });
  };

  function appendStories(appendItemsArray) {
    $.each(appendItemsArray, function(_, item) {
      $('.news-list').append(item);
    });
  };

});
