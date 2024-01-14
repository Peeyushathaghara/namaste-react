import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('parent', {
//     "id": "parent",
//     "abcp": "eaxy"
// }, [
//     (React.createElement('child1', {"id":"child1"},
//     [(React.createElement('h1', {}, 'I m an h1 tag')),
//     (React.createElement('h2', {}, '*&&&&&*****&&&&&&'))])),
//     (React.createElement('child2', {"id":"child2"},
//     [(React.createElement('h1', {}, 'I m an h1 tag')),
//     (React.createElement('h2', {}, 'I m an h2 tag'))]))
// ]
// )

//using JSX
// babel behind the scenes converts JSX code to React.createElement

// Headers
//     logo 
//     nav-items 
// Body 
//     search 
//     restaurant container 
//     - restaurant card 
// Footer
//     copyright 
//     links 
//     address 
//     contact 



const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Applayout = () =>{
    return (
        <div className="app">
            <Header />

        </div>
    )
}

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
root.render(<Applayout />);
