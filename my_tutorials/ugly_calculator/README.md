# The Ugly Calculator

### Before you dive in
Make sure you have a clear understanding of JS, HTML, and CSS.

This tutorial will teach you how to make a very ugly and semi-working
calculator. The calculator is basically just using some basic JS, HTML, and CSS
to make it all come together and you can publish it right to your github and
view the page from [github pages](https://pages.github.com/). Lets dive in.

**Warning**: I will not be holding your hand through this tutorial, I expect you to
google the answers if you don't know how to do it. (I do this all the time in my
day to day job so you should too.)

### Before you dive in
Make sure you have a clear understanding of JS, HTML, and CSS.

1. Create a file structure that you can work in. (in terminal `mkdir
   ugly_calculator`)
1. Go into that dircetory and open your editor (`cd ugly_calculator`)
1. Open your editor
1. Create your html file. (terminal: `touch index.html`)
1. Begin to make a static HTML page with your HTML knowledge to match the [screen
   shot](./ugly_calculator.png)
1. Once you feel like the calculator has the basic structure of the one in the
   screen shot move to css
1. Create and link you CSS file (terminal `touch index.css`)
  - `<link rel="stylesheet" type="text/css" href="./index.css"></link>`
1. Begin to make the apearance show up exactly as it does in the screen shot.
  - It should all be the same width
  - It should be smack dab in the middle of the screen.
1. Once you have completed the Styling good job move on to the JS
1. Create a js file (terminal: `touch index.js`)
1. Link the js to your index.html
  - `<script src='./index.js'></script>`
1. Start to add `addEventListeners` to your number buttons
  - [w3 schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
1. Make the buttons have values that you can get from the event listener
  - Tip: `event.currentTarget.value`
1. Once you have that value add it to the calculator "screen"
1. Make the rest of the buttons have values that you can add to the screen
   besides the enter button `=`
1. Once you are to the enter button use `eval()` to
   add/subtract/divide/multiply what ever is in the calculator screen.
1. Once all this is finished Add this to github
1. Push the code up to a branch name gh-pages
1. Now you site is live on github pages!


