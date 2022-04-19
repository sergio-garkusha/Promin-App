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