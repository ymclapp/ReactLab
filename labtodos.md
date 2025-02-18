#  Lab 36
##  Phase 1 Requirements
###  Done - just needed for it to look like mockup

Today, we begin the first of a 4-phase build of the To Do List Manager, a web-based task manager application, written in React. In this first phase, our goal is to build an initial design that we can build upon in later phases, adding databases, logins, and more advanced features.

The following user/developer stories detail the major functionality for this phase of the project.

- [x]  As a user, I would like an easy way to add a new to do item using an online interface
- [x]  As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
- [X]  As a user, I would like to delete to do items that are no longer needed
    > The x on the toast will do this.  Need to get the x to work for lab 37
- [x]  As a user, I would like to easily mark to do items as completed
    >  The badge toggle will accomplish this.  Need to get the badge to register the status for lab 37
    >  Also, when we add a new task, it should come in as pending - lab 37
- [x]  As a user, I would like to edit an existing to do item
    >  Only thing is the status of completed vs pending

##  Technical Requirements / Notes

- Use Routing to provide navigation to the following pages:
	-[x] Home (/) shows todo list
	-[x] About (/about) shows information about the project/developer
- Use function components instead of class components
- Apply styling and layout using React Bootstrap Components
- Match the provided mockup for the design
	- Use react-bootstrap components and theming

#  Lab 37
##  Phase 2 Requirements

- [x]  As a user, I would like an easy way to add a new to do item using an online interface
- [x]  As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
- [ ]  As a user, I would like to delete to do items that are no longer needed
    >  Need to get these to be removed from the database
- [ ]  As a user, I would like to easily mark to do items as completed
    >  Need to get this to show in database

##  Technical Requirements / Notes

-  Technical requirements for the core application are unchanged from Phase 1, with the following exceptions and notes:

- Manage state using the useState() hook
- Match the provided mockup for the design
	- Use react-bootstrap components and theming
	- Some interactivity notes:
		- Each item in list should show the text of the item as well as the assignee
		- When clicked, toggle the “complete” status of the item.
		- Items should be styled differently when complete/incomplete making their status visually obvious

##  Stretch Goals

- [x]  Use useLocalStorage to persist todos in localStorage
    >  Blew past this and have it in api database
- [ ]  Allow the user to dynamically sort to do items by date, difficulty, or assignee
- [ ]  Allow the user to filter to do items by date, difficulty, or assignee

#  Lab 38
##  Phase 3 Requirements

In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

- [ ]  As a user, I want to provide a way for all users to login to their account
- [ ]  As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
- [ ]  As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
- [ ]  As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
- [ ]  As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

##  Technical Requirements / Notes

Technical requirements for the core application are unchanged from the prior phases, with the addition of an Authentication Context Provider and Components that consume the Context Values and Behaviors.

1. Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.
	- Define a useAuth hook to expose the current context
	- Define a function that can simulate a login event.
		- Parameters: username and password as strings.
		- Sets a User on the auth context, and changes login status to true.
	- Define a function that can simulate a logout event.
		- Resets the User object and changes login status to `false.
	- Define a function that can authorize a User based on a capabilty.
		- Parameters: a capability as a string.
		- Returns a boolean whether the user has the capabililty parameter.
2. Create an <Auth /> component with the following features:
	- Given a capability prop of type string, conditionally render components based on the user stored in context.
	- Hide the entire interface until the user has logged in.
	- Implements the following RBAC rules:
		- Logged In Users with ‘read’ permissions can see the summary/count.
		- Logged In Users with ‘read’ permissions can see the list of To Do Items.
		- Logged In Users with ‘update’ permissions can click the records to mark them as complete.
		- Logged In Users with ‘create’ permissions can create new items.
		- Logged In Users with ‘delete’ permissions can delete items.
3. Implement a <Login /> Component that has the following features:
	- Provide an account login screen with a form.
		- Accepts Username and Password
		- On successful login, store the token as a cookie
	- If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”
		- Display a logout button instead of a form if they are “Logged In”.

##  Stretch Goals

- [ ]  Add a /register route with a form to a create new accounts
- [ ]  Find a cookie library to save/restore the user token, so users stay logged in
