# Promin
Психологічна Допомога під час війни

Figma: [https://www.figma.com/file/tOHjTlZEEdiY1rdRiodocn/Promin-app?node-id=0%3A1](https://www.figma.com/file/tOHjTlZEEdiY1rdRiodocn/Promin-app?node-id=0%3A1)

-------
### Run: 

`npm install`

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

`expo start` then w for web view

The app makes use of Expo XDE. This allows to run app in many ways, including in browser for ease of development.
Download "Expo" app to run it on Androin, or open Camera on iPhone - then scan a barcode that is generated when you run the app.

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
### Simplified GitHub Flow
Let's adopt simplified GitHub Flow to develop our app in team. Please make yourself familiar with the diagram below.
![alt text](https://github.com/Cu7ious/Promin-App/blob/main/documentation/simplified_git_flow.png)

-------
### Roadmap
1. Let's develop bare screens first ✔️
2. I will add react-navigation component later ✔️
3. Let's use hard-coded text, then we can source it from somewhere ✔️
4. Use designs and graphics similar to official Ukrainian sites ✔️
5. After finish all the screens ⬅️ YOU ARE HERE
6. Caching and sourcing for texts
7. 🔜 Release 1 
8. Videos for kids

--------

### I am a beginner
It's easy to try out and/or participate in this project even if you are just a beginner!

To download the code and try it out for your self, follow these steps:

#### Create GitHub account
If you don't have a github account, you'll have to create one.

Go here: [https://github.com/join](https://github.com/join) and follow the steps.

#### Install GitHub Desktop
If you don't have installed:

Download it from here: [https://desktop.github.com/](https://desktop.github.com/), then install it.

#### Clone Repository
Open up Github Desktop (you will be automatically logged in, or promptet to log in with browser).

Click "Clone Repository"

Select "URL" Tab

Paste this URL: https://github.com/Cu7ious/Promin-App.git

You will be prompted to enter local path. I usually store repositories in Documents/GitHub/[repo name]

Example: `Documents/GitHub/Promin-app`

Click clone.


You now have all files needed to build the app.

#### Download Node.JS
Download LTS build of Node from here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Then install it.

#### I want to edit code! - Install code editor - VSCode
Download and install VS Code: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

Open VSCode.

Click File > Open Folder, then select the folder where you downloaded the repository.

You should see all repository files in the left pane.

#### I don't want to edit code - just launch using command line (NOT PREFFERED) - May have issues on windows with PowerShell execution for npm and expo binaries, requires allowing permissions
and I don't remember how I did it

If you are using Mac - open Terminal:

`⌘ + Space`, then type `terminal`, hit enter.

Windows: Open cmd

`⊞ Win key + R`, then in opened "Run" dialog enter `cmd`, hit enter.

You just have opened command line on your computer. By default, command line is set to `User` directory, which you can see named to the left.
You new need to navigate to your file directory by entering following command:

`cd Documents/GitHub/Promin-app`

If you got `cannot find path` error - do following:
1. Make sure you are in `User` folder - run `pwd`. It will show you current directory - like `\Users\Documents`
2. To go up in directory, use `cd ..` command, then run `pwd`
3. Don't worry - you will get used to this soon and feel like a hacker:) 
4. `cd` means `change directory`, `pwd` means `print working directory`, and `\` vs `/` usually don't matter.

You can now skip opening VS code in last step, and just enter commands into command line.

#### Last Step
Finally: in VSCode click Terminal > New Terminal.

Let's make sure we have everything we need - in Terminal, type (copypaste):

`npm -version`

You should see something like `8.5.0`

If you get something like `'npm' is not recognized as the name ...` - it means you didn't install Node.JS properly. Try reinstalling it and/or restarting your computer.

You are set! Now in Terminal, run commands from __Run__ section above

--------

### Resources
How to write styles for React Native

https://negativeepsilon.com/posts/expo-firststeps-goodpractices/

https://www.bitstoliveby.com/posts/how-to-position-things-in-react-native/

https://reactnative.dev/docs/height-and-width

https://medium.com/soluto-engineering/size-matters-5aeeb462900a



