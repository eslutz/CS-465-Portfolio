# CS-465-Portfolio

Portfolio containing assignments and projects from CS-465 Full Stack Development I.

- Code
  - [Application Backend Server](../app_server/)
  - [Application APIs](../app_api/)
  - [Application Admin Portal](../app_admin/)
- Assignments
  - [Software Design Document](Software%20Design%20Document.pdf)
  - [Project Reflection](#project-reflection)
    - [Architecture](#architecture)
    - [Functionality](#functionality)
    - [Testing](#testing)
    - [Reflection](#reflection)

## Project Reflection

### Architecture

#### Compare and contrast the types of frontend development you used in your full stack project, including Express, HTML, JavaScript, and the single-page application (SPA)

One portion of the site used Express, HTML, and JavaScript to display the pages.  Using Express and JavaScript, routes and controllers were created to handle requests from the browser for a page.  Express would then either retrieve the static HTML page or generate the requested page using a handlebars templates populated with data from the database.  These are all different tools that were working together to handle server requests and sending the result to the frontend client.
The Angular portion of the project worked differently.  Upon the first load of the page, the entire single page application (SPA) is sent to the client.  Once there all page rending and code execution takes place client side in the browser.  Calls to the backend are only needed to retrieve data from the database.
With Express, there are many calls to the server, each time the page is loaded or refreshed.  With a SPA, the initial load takes longer to get all of the code from the backend.  After that initial load though, no additional calls to the server are needed for navigating between pages withing the SPA.

#### Why did the backend use a NoSQL MongoDB database?

MongoDB can scale well and query quickly.  The documents stored in MongoDB align well with JSON formatting, making it a good match for use with frontend applications.

### Functionality

#### How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON is a specification for how to format data.  It can be used with a variety of programming languages.  JavaScript is a programming language that uses JSON to define objects.  The frontend and backend are tied together through the use of APIs and JSON.  RESTful APIs use JSON to receive requests and send responses.

#### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components

One example of improving functionality through refactoring was replacing some of the static HTML pages with templates using Handlebars.  This allowed for the structure of a page to be reused while being able to change the content displayed.  Another refactor involved moving the content used for populating the templates out of static JSON files kept within the codebase and into MongoDB.  This allows for content data to be added or changed without having to deploy and code changes to the website.

### Testing

*Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security.*

#### Explain your understanding of methods, endpoints, and security in a full stack application

HTTP methods are different type of interaction that a client can have with a server.  Some of the most common HTTP methods include GET, POST, PUT, and DELETE.  The API endpoints are how the client can communicate with the server using these HTTP methods.  Security, in regards to this full stack application, consisted of authenticating a user and giving them a valid JWT so that they could access some of the endpoints.

### Reflection

#### How has this course helped you in reaching your professional goals?

This course has helped to expand my knowledge of full stack development and introduced me to some technologies I have not used before, such as Express.  In my professional career as a full stack developer, all of my work has been on existing projects.  I have not had the opportunity to start a full stack application from the beginning.  This allowed me to better see and understand how all the different parts of a full stack application fit together.

#### What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

My JavaScript skills have improved from the practice received in this course using it.  It also gave me the opportunity to use JavaScript on the backend with Node.js and Express.  I have seen knowledge of Node.js listed as a requirement or preferred skill for many positions, so it is good to know the basics of an in-demand skill.
