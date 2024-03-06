# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## To convert React App to Mobile (Android or IOS):

1. First, go to the root of your existing react app and create a file capacitor.config.json and inside that put the below code.

{
"appId": "io.ionic.nameofyourapp",
"appName": "nameofyourapp",
"bundledWebRuntime": false,
"npmClient": "npm",
"webDir": "build",
"cordova": {}
}

2. Now create another file name ionic.config.json and inside that insert the below code.

{
"name": "nameofyourapp",
"integrations": {
"capacitor": {}
},
"type": "react"
}

Note: replace nameofyourapp in both files with the name of your app.

3. Now we need to build our react project. To build your react app open your terminal to the root of the project and run the below-mentioned command

## npm run build

Note: this will create the build folder in your root porject and the name of the folder should match the webDir name inside capacitor.config.json file

4. Now we will install ionic globally in our machine. To install ionic globally in your machine open your terminal and run the below command.

## npm install -g @ionic/cli

5. Now install the capacitor core in our project.

## npm install @capacitor/core --save @capacitor/cli

## Android

6. After that, we will first create an android app with our existing react app. Open your terminal and type

## ionic capacitor add android

This will create the android folder in your root project and install all the required dependencies.

7. Now run the below command to open your android project in android studio.

## npx cap open android

Wait some time and then it will ask you to update the Gradle. Just update the Gradle to the latest version and run the project in the emulator. You can also connect your mobile to run the project live on your mobile phone.

8. Now open the build menu from the android studio and build your apk file.
