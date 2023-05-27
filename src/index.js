function getComponent(){
    return import('lodash')
    .then(({default: _}) =>{
        const element = document.createElement('div');

        element.innerHTML =_.join(['Hello', "webpack",],' ');

        return element;
    })
    .catch(error='An err0r occurred while loading the component')

}

getComponent().then(component=>{
    document.body.appendChild(component);   
});

// import _ from "lodash";
// import './style.css'
// import Icon from './icon.png'
// import Data from './data.xml';
// import Notes from './data.csv';
// import printMe,{sayMyName} from './print.js'

// const webpackDiv  = document.getElementById('webpack');

// function component(){
//     const element = document.createElement('div')
//     const btn = document.createElement('button')

//     //Lodash, now imported by this script
//    // element.innerHTML = _.join(['Hello',',', 'Anwar','Sadat','Ayub'],' ')
//     // element.classList.add('hello','bgcolor')

//     //Add the image to our existing div
//     // const myIcon = new Image();
//     // myIcon.src = Icon;

//     btn.classList.add('btnWP')
//     btn.innerHTML = 'Click me and check the console'
//     btn.onclick = sayMyName

// //    element.appendChild(myIcon);
// element.appendChild(btn);

// //    console.log(Data)
// //    console.log(Notes)
   
//     return element
// }

// document.body.appendChild(component())