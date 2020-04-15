GiphySearchAndDisplay   
Sharon Story Smith  storysmithsharon@gmail.com  
2019-08-30 

Screen Shot: [screenshot](screenshot.jpg)

Working Demo:  [GiphySearchAndDisplay](https://sstorysmith.github.io/GiphySearchandDisplay/).

Developer:    
  - Download code from Gihub   
  - $npm - i   // this creates the package.json file with dependencies named
  - $npm install express 
  - $node install path 
  - open index.html in a browser



JQuery
jQuery, a JavaScript library, takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

AJAX = Asynchronous JavaScript and XML. AJAX is a technique for creating fast and dynamic web pages. AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


Overview:
    - The screen will display a group of buttons with movie topic interests. Cick on a chosen button see a list of 10 .gifs for that topic.      
    - If you would like to add new topic buttons with your topics of interest, type in your "interest" into the topic box and click submit.   
    - If you would like to animate any of the .gifs displayed, click on the the .gif image of your choice. If the .gif is animated, click to pause, and toggle back and forth.  


Design Flow:  
    This appliction loads up a pre-defined array of .gif topics and displays to the user: 
                   Sunrise, sunset, tropical storms, storm chasers, flooding, 
    Each topic generates a button with the topic name.  
    A form is used to take a topic name from the user input box. The input is added
        into the`topics` array and a function call takes each topic in the array and adds
        a button with that topic name onto the page.
    When the user clicks on a topic button, the page pulls in 10 static, non-animated .gif images 
        from the GIPHY API and places them on the page along with a  rating (PG, G, ...).
    When the user clicks one of the static images, the gif will animate. If the user
         clicks the gif again, it stops playing; this is a it toggle.
    The topic buttons and NEWTOPIC box is displayed.
    If a topic button is clicked the search is performed and the gifs displayed.
    If a new topic is entered, the new topic is added to the displayed buttons.




