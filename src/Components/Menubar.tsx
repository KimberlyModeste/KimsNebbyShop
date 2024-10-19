import React, { useEffect, useState } from 'react'
import { Menu, Icon, MenuItem, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Menubar = () => {
	const pathname : string =  window.location.hash
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  //Changes the text to be smaller depending on the size of the screen
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
    switch(true)
    {
      case window.innerWidth < 420:
        document.documentElement.style.setProperty("--title-size-changer", "small")
        break
      
      case window.innerWidth < 630:
        document.documentElement.style.setProperty("--title-size-changer", "large")
        break

      case window.innerWidth < 820:
        document.documentElement.style.setProperty("--title-size-changer", "x-large")
        break
      
      default:
        document.documentElement.style.setProperty("--title-size-changer", "xx-large")
        break
    }
  }

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
      <Grid>
        <GridRow>
          <GridColumn>
      <Menu secondary>
        <Menu.Menu position='left' className="navbar-left">
          <Menu.Item name = "home" as={Link} to="/"> { width < 720 ? <Icon name='home'/> : "Home"} </Menu.Item>
            <Menu.Item name = "new" as={Link} to="/new" > { width < 720 ? <Icon name='star'/> : "New In"}  </Menu.Item>
            <Menu.Item name = "artisphere" as={Link} to="/artishpere" > { width < 720 ? <Icon name='paint brush'/> : "Artishpere"} </Menu.Item>
        </Menu.Menu>

        <Menu.Menu className='navbar-middle'>
          <div  className='middle-item'>
            Kim's Nebby Shop
          </div>
          {/* <Grid>
            <GridRow>
              <GridColumn className='middle-item'>
              </GridColumn>
            </GridRow>
            <GridRow className='middle-nav'>
              <Menu.Item className='search' name="search" >
                
              </Menu.Item>
            </GridRow>
          </Grid> */}
        </Menu.Menu>

        <Menu.Menu position='right' className='navbar-right'>
          <Menu.Item className='right-item' name="shopping cart" as={Link} to="/cart">
            <FiShoppingCart />
          </Menu.Item>
          {/* Here need to change the icon depending on if signed in or not */}
          <Menu.Item className='right-item' name="user" as={Link} to="/login">
            <Icon name="user outline" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
      <div className='search'>
          {/* <div className='search' name="search" > */}
          <input type="search" placeholder='Search here...' />
                <Icon name='search' className='search-icon' />
          {/* </div> */}
      </div>
      </GridColumn>
      </GridRow>
      </Grid>
      <div className='navbar-border'></div>
    </div>
  )
}

export default Menubar
