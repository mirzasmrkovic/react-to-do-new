import React from 'react';
import ReactDOM from 'react-dom';
import './animate.js'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

//ReactDOM.render(, document.getElementById('root'))

let randomNumber = Math.floor((Math.random() * 19))

let inspiration = [
  {'quote': "Whatever you are, be a good one.", 'author': "Abraham Lincoln"},
  {'quote': "If you dream it, you can do it.", 'author': "Walt Disney"},
  {'quote': "Never, never, never give up.", 'author': "Winston Churchill"},
  {'quote': "Don’t wait. The time will never be just right.", 'author': "Napoleon Hill"},
  {'quote': "If not us, who? If not now, when?", 'author': "John F. Kennedy"},
  {'quote': "Everything you can imagine is real.", 'author': "Pablo Picasso"},
  {'quote': "I can, therefore I am", 'author': "Simone Weil"},
  {'quote': "Remember no one can make you feel inferior without your consent.", 'author': "Eleanor Roosevelt"},
  {'quote': "Turn your wounds into wisdom.", 'author': "Oprah Winfrey"},
  {'quote': "Wherever you go, go with all your heart.", 'author': "Confucius"},
  {'quote': "Do what you can, with what you have, where you are.", 'author': "Theodore Roosevelt"},
  {'quote': "Hope is a waking dream.", 'author': "Aristotle"},
  {'quote': "Action is the foundational key to all success.", 'author': "Pablo Picasso"},
  {'quote': "Do one thing every day that scares you.", 'author': "Eleanor Roosevelt"},
  {'quote': "You must do the thing you think you cannot do.", 'author': "Eleanor Roosevelt"},
  {'quote': "Life is trying things to see if they work.", 'author': "Ray Bradbury"},
  {'quote': "Believe you can and you’re halfway there.", 'author': "Theodore Roosevelt"},
  {'quote': "Eighty percent of success is showing up.", 'author': "Woody Allen"},
]

ReactDOM.render(
  <div className='quote'>{inspiration[randomNumber].quote}<div className='author'>&emsp;&emsp; - <b>{inspiration[randomNumber].author}</b></div></div>,
  document.getElementById('inspirationQuote')
)
