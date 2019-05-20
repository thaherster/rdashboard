import React from "react";

const NavBar = () => {
  return (
    <div class="container is-widescreen is-fullhd">
      <div class="columns is-primary is-mobile">
        <div class="column is-one-quarter">is-four-fifths</div>
        <div class="column level">
          <div class="level-right">
            <a class="button is-primary level-item is-mobile">Primary</a>
            <a class="button is-primary level-item is-mobile">Primary</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
