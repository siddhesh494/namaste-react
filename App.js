import React from "react"
import ReactDOM from "react-dom/client"
import Logo from './Images/js-logo.png'
import User from './Images/user-logo.png'

const title = (
  <h1 className="head">
    Namaste React using JSX
  </h1>
)

const Title = () => (
  <h1 className="head">
    Namaste React using JSX
  </h1>
)

const HeadersComponent = () => {
  return (
    <div 
      className="header-bar"
    > 
      <div>
        <img 
          src={Logo}
          width={50}
        />
      </div>
      <div>
        <input type="text" placeholder="Search.." />
      </div>
      <div>
        <img 
          src={User}
          width={50}
        />
      </div>
    </div>
  )
}

// React components
const ContentComponent = () => {
  return (
    <div>
      <HeadersComponent />
      {/* This is component composition */}
      {Title()} 
      <h1>
        Namanste React Functional components
      </h1>
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// Rendering react functional component
root.render(
  <ContentComponent />
)