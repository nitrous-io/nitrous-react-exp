import './MainMenu.sass';
import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

const klass = class MainMenu extends React.Component {
  render() {
    return (
      <div className='MainMenu'>
        <Navbar fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Nitrous</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown id='mainmenu-file' noCaret eventKey='file' title="File">
                <MenuItem eventKey='file.new_file'>New File</MenuItem>
                <MenuItem eventKey='file.open'>Open...</MenuItem>
                <NavDropdown id='mainmenu-file-open_recent' className='dropdown-submenu' noCaret eventKey='file.open_recent' title="Open Recent">
                  <MenuItem eventKey='file.open_recent.reopen_closed_file'>Reopen Closed File</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey='file.open_recent.clear_items'>Clear Items</MenuItem>
                </NavDropdown>
                <MenuItem eventKey='file.save'>Save</MenuItem>
                <MenuItem eventKey='file.save_as'>Save As...</MenuItem>
                <MenuItem eventKey='file.save_all'>Save All...</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='file.close_file'>Close File</MenuItem>
                <MenuItem eventKey='file.close_all_files'>Close All Files</MenuItem>
              </NavDropdown>
              <NavDropdown id='mainmenu-edit' noCaret eventKey='edit' title="Edit">
                <MenuItem eventKey='edit.undo'>Undo</MenuItem>
                <MenuItem eventKey='edit.redo'>Redo</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='edit.copy'>Copy</MenuItem>
                <MenuItem eventKey='edit.cut'>Cut</MenuItem>
                <MenuItem eventKey='edit.paste'>Paste</MenuItem>
              </NavDropdown>
              <NavDropdown id='mainmenu-find' noCaret eventKey='find' title="Find">
              </NavDropdown>
              <NavDropdown id='mainmenu-view' noCaret eventKey='view' title="View">
              </NavDropdown>
              <NavDropdown id='mainmenu-tools' noCaret eventKey='tools' title="Tools">
              </NavDropdown>
              <NavDropdown id='mainmenu-project' noCaret eventKey='project' title="Project">
              </NavDropdown>
              <NavDropdown id='mainmenu-help' noCaret eventKey='help' title="Help">
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default klass;
