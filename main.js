import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {UsersApp} from "./src/users/users-app";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>CRUD</h1>
    <div class="card" id="app-main__div">
      
    </div>
  </div>
`
UsersApp(document.querySelector('#app-main__div')).then().catch(()=>{
    console.log('error')
})