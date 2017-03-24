$(function () {
  var source = $("#top-book").html();
  var template = Handlebars.compile(source);

  var context = {
    books: [{
      title: 'Killing Lincoln',
      author: 'Bill O\'Reily',
      cover: 'killinglincoln'
    },{
      title: 'Harry Potter',
      author: 'JK Rowling',
      cover: 'harrypotter'
    }]
  };
  
  var compiled = template(context);
  $('.top-reads').append(compiled);
});
