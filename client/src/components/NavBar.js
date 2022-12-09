import React from 'react'
import { Menu, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    const {setUser} = props

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }


    return (
        <div>
            <Menu>
            <Image src='./logo.png' size='small'/>
                <Menu.Item>
                        <Button as={Link} to="/home" icon labelPosition='left'>
                        <Icon name='home'/>
                        Home
                        </Button>
                </Menu.Item>
                <Menu.Item>
                        <Button as={Link} to="/plants" icon labelPosition='left'>
                        <Icon name='search'/>
                        Search Plants
                        </Button>
                </Menu.Item>
                <Menu.Item>
                        <Button as={Link} to="/new" icon labelPosition='left'>
                        <Icon name='wordpress forms'/>
                        Add New Plant
                        </Button>
                </Menu.Item>
                <Menu.Item>
                        <Button onClick={handleLogoutClick}>
                            Logout
                        </Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar