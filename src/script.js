import $ from 'jquery'

$('#search').on('click', function() {
  $('.searchBar').toggleClass('searchBarOpen')
  $('#searchIcon').toggle()
  $('#xIcon').toggle()
})
