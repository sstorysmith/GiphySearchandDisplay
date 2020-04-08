GiphySearchAndDisplay
Sharon Story Smith  storysmithsharon@gmail.com
2019-08-30 

![screenshot of GiphySearchandDisplay](.\assets\Images\screenshot.jpg)

Execute  [GiphySearchAndDisplay](https://sstorysmith.github.io/GiphySearchandDisplay/).

To run in your browser, open browser with index.html.



JQuery
jQuery, a JavaScript library, takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

AJAX = Asynchronous JavaScript and XML. AJAX is a technique for creating fast and dynamic web pages. AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


What ths application does:
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

Why the project is useful:
    This project is useful taking user input from the browser screen, finding the .gif resources, then adding clickable
    links to facilitate ease of access --- a very common requirement from users.

How users can get started with the project
    The screen will display a group of buttons with movie topic interests. Cick on a chosen button to a max of 10 .gifs of that topic. 
    If you would like to add new topic buttons with user entered topics of interest, type in your "interest", and click submit. 
    If you would like to watch any of the .gifs displayed, click on   the the image of your choice. If the .gif is playing, click to pause, and toggle back and forth.

    This project was completed with these references from classroom coding examples:
            class 8/22/2019 - Add movie buttons: movies.solved 8/22
            class 8/24/2019- Start stop giphys: pausing Gifs.solved 
            class 8/22/2019 - Adding elements, displaying gifs from a button click: Button triggered ajax

Where users can get help with your project:
    If you need help with this code, contact Sstorysmith@gmail.com.

Who maintains and contributes to the project:
    Sharon Story Smith maintains and contributes to this code, sstorysmith@gmail.com -->