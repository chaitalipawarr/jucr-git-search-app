# Getting Started with JUCR App

This project resembles Github search functionality with custom search. This React app is responsive and unit tested.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## Steps for Deployment

1. Create a GitHub repository for the app and push the code to it.
2. Create a new file in the .github/workflows directory in the repository, with a .yml extension. This file will define the workflow for deploying the app.
3. In the workflow file, specify the steps for building and deploying the app. For example, you could use the steps to deploy to GitHub Pages.
4. Add the ACCESS_TOKEN secret to the GitHub repository. This will allow the workflow to authenticate with GitHub and deploy the app to GitHub Pages.
5. Commit and push the changes to the repository. This will trigger the workflow and deploy the app to GitHub Pages.

This is just one example of how to deploy a React app using GitHub Actions. There are many other deployment options available, including AWS S3, Firebase, and more. We can choose the deployment option that best fits your needs and adjust the workflow steps accordingly.

## Assumptions:

1. This app currently supports search functionality only for User and Repository.

## Improvement:

1. This app can be extended to support other tabs like Issues, Commits, Discussions etc.
2. Unit test and code coverage can be improved further.
