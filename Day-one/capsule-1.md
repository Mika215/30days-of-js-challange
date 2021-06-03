To open the Chrome console using a keyboard shortcut.

Mac
Command+Option+J

Windows/Linux
Ctrl+Shift+J

Our Google Chrome V8 engine changes our JS code to a machine code.
These are the main buttons that we are going to explore in the chrome console.
Elements: HTML and CSS code found here
Console: serves as a canvas where we can write JS code and at the same time it desplayes as the out put of our code.
Sources: Source file(code) is found here 
Network: HTTP Request Response cycle found here and anything realated to Network.
Application: Browser applications(storage cache)
 
Console.log (); is a built-in function in any of our browser dev tools
we feed it with any given input and it prints out the output in the console canvas.
console.log(‘Hello, World!’); //a given input
“Hello, World!” //a final out put 

Adding JavaScript to a Web Page
JavaScript can be added to a web page in three different ways:
•	Inline script
•	Internal script
•	External script
•	Multiple External scripts
The following sections show different ways of adding JavaScript code to your web page.
Inline Script
Create a project folder on your desktop or in any location, name it 30DaysOfJS and create an index.html file in the project folder. Then paste the following code and open it in a browser, for example Chrome.
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>
Now, you just wrote your first inline script. We can create a pop up alert message using the alert() built-in function.
Internal Script
The internal script can be written in the head or the body, but it is preferred to put it on the body of the HTML document. First, let us write on the head part of the page.
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
This is how we write an internal script most of the time. Writing the JavaScript code in the body section is the most preferred option. Open the browser console to see the output from the console.log()
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html>
External Script
Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body. First, we should create an external JavaScript file with .js extension. All files ending with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.
console.log('Welcome to 30DaysOfJavaScript')
External scripts in the head:
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
External scripts in the body:
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    //it could be in the header or in the body // Here is the recommended place
    to put the external script
    <script src="introduction.js"></script>
  </body>
</html>
Open the browser console to see the output of the console.log()
Multiple External Scripts
We can also link multiple external JavaScript files to a web page. Create a helloworld.js file inside the 30DaysOfJS folder and write the following code.
console.log('Hello, World!')
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
Your main.js file should be below all other scripts. It is very important to remember this.
