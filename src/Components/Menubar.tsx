import React, { useState } from 'react'
import { Menu, Icon, MenuItem, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Menubar = () => {
	const pathname : string =  window.location.hash
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [showSearch, setShowSearch] = useState<boolean>(false)

    //I want to click and open searchbar if false and search and close if true
    const handleSearchClick = () => {
    if(showSearch)
    {
      //do the search
    }
    setShowSearch(!showSearch)
  }

  return (
    <div>
      <Menu secondary>
        <Menu.Menu position='left' className="navbar-left">
        <Menu.Item name = "home"
              as={Link} to="/"
              > Home </Menu.Item>
              <Menu.Item name = "new"
                as={Link} to="/new"
              > New In </Menu.Item>
              <Menu.Item name = "artisphere"
                as={Link} to="/artishpere"
              > Artisphere </Menu.Item>
        </Menu.Menu>

        <Menu.Menu className='navbar-middle'>
          <Grid>
            <GridRow>
              <GridColumn className='middle-item'>
                Kim's Nebby Shop
              </GridColumn>
            </GridRow>
            <GridRow className='middle-nav'>
              <Menu.Item className='search' name="search" >
                <input type="search" placeholder='Search here...' />
                <Icon name='search' className='search-icon' />
              </Menu.Item>
            </GridRow>
          </Grid>
        </Menu.Menu>

        <Menu.Menu position='right' className='navbar-right'>
          <Menu.Item className='right-item' name="shopping cart">
            <FiShoppingCart />
          </Menu.Item>
          <Menu.Item className='right-item' name="user" >
            <Icon name="user outline" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className='navbar-border'></div>
    </div>
  )
}

export default Menubar
