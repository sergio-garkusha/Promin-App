# Promin
Психологічна Допомога під час війни

Figma: [https://www.figma.com/file/tOHjTlZEEdiY1rdRiodocn/Promin-app?node-id=0%3A1](https://www.figma.com/file/tOHjTlZEEdiY1rdRiodocn/Promin-app?node-id=0%3A1)

-------
### Run: 

`npm install`

`npm run start` then w for web view

The app makes use of Expo XDE. This allows to run app in many ways, including in browser for ease of development.
Download "Expo Go" to run it on your phone, then scan a barcode that is generated when you run the app.

------
### Develop and try components
You can use expo snack to edit components in real time
[https://snack.expo.dev/@garys/simple-snack-boilerplate](https://snack.expo.dev/@garys/simple-snack-boilerplate)

App.js is an entry point of the app.

If you are developing a screen:
- copypaste any similar screen in `./screens/` directory
- rename screen to what it needs to be (example: myScreen.js)
- inside the screen file, name your screen like following: `export default function MyScreen() {`
- in App.js, import your screen: `import MyScreen from './screens/myScreen'`
- To display the screen on app launch, in App.js, `export default function App() {` function, return your imported component like in an example below: 
```
export default function App() {
  return (
    <MyScreen/>
  );
}
```

After this, you should be able to run the app in web view or on phone by running the app (see "Run" section)

-------
### Roadmap
1. Let's develop bare screens first
2. I will add react-navigation component later
3. Let's use hard-coded text, then we can source it from somewhere
4. Use designs and graphics similar to official Ukrainian sites
5. After all text screens are done, let's work on caching and sourcing
6. Videos for kids

--------

### I am a beginner
It's easy to participate in this project even if you are just a beginner!

To download the code and try it out for your self, follow these steps:

#### Create GitHub account
If you don't have a github account, you'll have to create one.
Go here: [https://github.com/join](https://github.com/join) and follow the steps.

#### Install GitHub Desktop
If you don't have installed:
Download it from here: [https://desktop.github.com/](https://desktop.github.com/)
Then install.

#### Clone Repository
Open up Github Desktop (you will be automatically logged in, or promptet to log in with browser).
Click "Clone Repository"
Select "URL" Tab
Paste this URL: https://github.com/Cu7ious/Promin-App.git
You will be prompted to enter local path. I usually store repositories in Documents/GitHub/[repo name]
Click clone.

You now have all files needed to build the app.

#### Download Node.JS
Download LTS build of Node from here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
Then install it.

#### Install code editor - VSCode
Download and install VS Code: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)
Open VSCode.
Click File > Open Folder, then select the folder where you downloaded the repository.
You should see all repository files in the left pane.

Finally: in VSCode click Terminal > New Terminal.

Let's make sure we have everything we need - in Terminal, type (copypaste):

`npm -version`

You should see something like `8.5.0`

If you get `'npm' is not recognized as the name`, means you didn't install Node.JS properly. Try reinstalling it and/or restarting your computer.

You are set! Now in Terminal, run commands from Run section above




