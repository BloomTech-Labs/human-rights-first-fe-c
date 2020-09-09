import React from 'react';

const SideBar = () => {
  function openNav() {}

  function closeNav() {}
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
