import React from 'react'
import { Menu, Button, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Menu>
            <Image src='./logo.png' size='small'/>
                <Menu.Item>
                    <NavLink to="/">
                        <Button icon labelPosition='left'>
                        <Icon name='home'/>
                        Home
                        </Button>
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/plants">
                        <Button icon labelPosition='left'>
                        <Icon name='search'/>
                        Search Plants
                        </Button>
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/plants">
                        <Button icon labelPosition='left'>
                        <Icon name='wordpress forms'/>
                        Add New Plant
                        </Button>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar