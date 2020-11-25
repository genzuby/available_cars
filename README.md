# Available Cars list

# scripts

## run `yarn start`

Runs the app in the development mode.\
Open **[http://localhost:3000](http://localhost:3000)** to view it in the browser.

## run `yarn test`

Launches the test runner in the interactive watch mode.\

## run `yarn flow`

Static type checking

# UI

------> [Design and style guide](https://github.com/squirreljuror/api-design-and-styles/blob/master/design-and-style-guide.pdf) <------ Click here to see design

- Use [Material UI](https://material-ui.com/) or [React Bootstrap](https://react-bootstrap.github.io/) for UI components (optional)
- You can use available components only and ignore missmatching of original design if any (optional)
- Logo https://auto1-js-task-api--mufasa71.repl.co/images/logo.png

# Non-technical requirements

The application must meet the following requirements:

- Fetch all available cars
- Implement pagination with limit of 10
- Allow the user to filter the cars by manufacturer or color
- Show the details of a selected car
- **Bonus**: Add/Remove a car to/from the favorites collection using local storage

# Technical requirements

- Create a SPA using latest **ReactJS**
- Use create-react-app to setup app
- Use best practices with hooks
- Add tests (with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro))
- **Bonus** Static type checking (TS or Flow)

# Please avoid

- Copying any functionality from other projects
- Deep project structure, ideally only 2 levels are allowed
- Premature optimization

# Swagger

For the application data, please use following swagger docs:

https://auto1-mock-server.herokuapp.com/docs

You can generate client with [Swagger editor](https://editor.swagger.io/) (or similar) and following file

https://auto1-mock-server.herokuapp.com/openapi.yaml
