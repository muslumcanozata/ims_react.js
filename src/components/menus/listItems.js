import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';

import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/anasayfa">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Anasayfa" />
    </ListItem>
    <ListItem button component={Link} to="/urunteslim" >
      <ListItemIcon>
        <i class="fas fa-truck-loading fa-lg"></i>
      </ListItemIcon>
      <ListItemText primary="Ürün Teslim" />
    </ListItem>
    <ListItem button component={Link} to="/materyalteslim">
      <ListItemIcon>
        <i class="fad fa-box-check fa-lg"></i>
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    {/*<ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>FORMLAR</ListSubheader>
    <ListItem button component={Link} to="/yuztanitma">
      <ListItemIcon>
        <i class="fas fa-user-plus fa-lg"></i>
      </ListItemIcon>
      <ListItemText primary="Yüz Tanıtma" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);