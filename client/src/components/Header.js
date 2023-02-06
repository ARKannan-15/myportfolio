import React from "react";



function Header() {
  return (
    <header >
      
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="styles.css" />
      <nav class="navbar navbar-custom">
    <div class="container1">
    <div class="navbar-custom">
      <div class="navbar-header">
        
        <a class="navbar-brand" href="/">Kannan</a>
      </div>
      
        <ul class="nav navbar-nav navbar-right">
          <li id="home"><a href="#/about">About</a></li>
          <li id="compose"><a href="#/work">Work</a></li>
          <li id="update"><a href="#/contact">Contact</a></li>
          
         </ul>
    </div>
    </div>
    </nav>
    </header>
  );
}

export default Header;
