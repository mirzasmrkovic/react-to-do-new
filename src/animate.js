import anime from 'animejs'
import $ from 'jquery'

let searchBar = function() {
  anime({})
}

$(document).ready(function() {
  searchBar()
})

$(document).on('click', '.deleteItem', function(e) {
  let item = e.currentTarget.parentNode
  anime({
    targets: item,
    translateY: -35,
    opacity: 0,
    height: 0,
    marginTop: -10,
    elasticity: 0,
    duration: 1000,
  })
  setTimeout(function(){$(item).remove()}, 450)
})
