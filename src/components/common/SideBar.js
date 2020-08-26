import React from 'react';

const SideBar = () => {
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  function openNav() {
    console.log('open');
    //document.getElementById('mySidebar').style.width = '250px';
    // document.getElementById('main').style.marginLeft = '250px';
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    console.log('close');
    // document.getElementById('mySidebar').style.width = '0';
    // document.getElementById('main').style.marginLeft = '0';
  }
  return (
    <div>
      <div id="mySidebar" class="sidebar">
        <a
          href="javascript:void(0)"
          class="closebtn"
          onclick={() => console.log('close')}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main">
        <button class="openbtn" onclick={() => console.log('open')}>
          &#9776; Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>Content...</p>
      </div>
    </div>
  );
};

export default SideBar;
