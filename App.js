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
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
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
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const ResCard = () =>{
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src="https://b.zmtcdn.com/data/dish_photos/6d0/a959f51d106c8c56d915f292c61946d0.jpg" />
            <h3>Bansal Sweets</h3>
            <h4>North Indian, Chinese, Kathiawadi</h4>
            <h5>4.3 stars</h5>
            <h6>38min ETA</h6>
        </div>
    )
}
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
root.render(<Applayout />);
