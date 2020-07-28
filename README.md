## Scaffolding from scratch, packages and why
* React: Is our default frontend library
* Redux: to manage the state of a React app in a centralized place. It allows us to update the state and make all the components that depend on that state update
* React Router: React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.
* Webpack: Our Bundler
* Webpack dev server: Instead of making a build every time we make a change webpack de server keeps bundle files in memory and serves them as if they were real files mounted at the server's root path
* Babel: Allow us to use our ECMAScript 2015+ syntax 
* react-minimal-pie-chart: It allows us to make the pie chart easily
* fetch-mock: This project doesn't have backend, so this package will enable us to mock our fetch requests  

### Folder Structure
* **Components:** These are the global components like inputs or stuff like that.
    * **Views:** These are the global components like inputs or stuff like that.
* **Mocks:** Here are the application mocks
* **Shared:**  Reusable parts that get used across multiple views or components of an application find their home here. 
* **State:**  state management related code goes here. In the case of redux, you'll find action and reducer code here.
* **Scss:** styling for associated components. The style directory for App holds global styles and settings.

### General Flow

The overall flow goes something like this:
* The login form dispatches an action
* Success actions trigger an update of the userManagement state, passing the username to the state
* When our component is mounted, the component gets the latest exchange rate (this is to handle all in dollars in the graphs)
* The layout component receives the new userManagement state
* If authentication was successful, the Router send you to the home view

Taking a look at the code should make this more clear!

---

## Getting started

You can view a live demo over at

To get the frontend running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server 
- `npm build` to make the bundle

Local web server will use port 8080 instead of standard React's port 3000 to prevent conflicts.
 
