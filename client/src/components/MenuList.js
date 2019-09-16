import React from 'react';
import Menu from './Menu';

const MenuList = ({ Menus, updateMenu, deleteMenu }) => (
  <div>
    { Menus.map( Menu => 
        <Menu
          key={Menu.id}
          {...Menu}
          updateMenu={updateMenu}
          deleteMenu={deleteMenu}
        />
      )
    }
  </div>
)

export default MenuList;