# Routing example between three seperate apps
it contains three standalone app.And each app contains routes to the other apps.

# Setup

1. npm install 
2. npm setup to install packages

For development mode:
 npm run dev will build files and apps will be running on respective ports.

For Production mode:
npm run build will build apps.
npm start will serve apps.


main app is running on http://localhost:8081/
home app is running on http://localhost:8080/
introduction app is running on http://localhost:8082/


# New Features added
Script tag is removed from the index.html file.
Home page is dynamically loading introduction and contact page at runtime.