import React from 'react'
import "./sidebar.css";
import './icons/Group 46.png';
import './icons/Group 47.png';
import './icons/Group 53.png';
//import './si'

import SideNav, {Toggle, NavItem, NavIcon,NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Sidebar() {
  return <div className='mysidenav'><SideNav 
  
  onSelect={selected=>{
    console.log(selected)
  }}
  className="mysidenav"
  >
    <SideNav.Toggle className="toggle" />
    <SideNav.Nav >
     <NavItem className="hover">
<NavIcon ><img src= { require ('./icons/ICON - Search.png').default}/></NavIcon>
<NavText >Search</NavText>


      </NavItem> 
      <NavItem className="hover"> 
<NavIcon><img src= { require ('./icons/Group 46.png').default}/></NavIcon>
<NavText>Home</NavText>


      </NavItem>
      <NavItem className="hover">
<NavIcon><img src= { require ('./icons/Group 56.png').default}/></NavIcon>
<NavText>TV Shows</NavText>


      </NavItem>

      <NavItem className="hover">
<NavIcon><img src= { require ('./icons/Group 54.png').default}/></NavIcon>
<NavText>Movies</NavText>


      </NavItem>
      <NavItem className="hover">
<NavIcon><img src= {require('./icons/Group 53.png').default}/></NavIcon>
<NavText>Genres</NavText>


      </NavItem>
      <NavItem className="hover">
<NavIcon><img src= { require ('./icons/Group 47.png').default}/></NavIcon>
<NavText>Watch Later</NavText>


      </NavItem>
      
      <NavItem>
<NavIcon></NavIcon>
<NavText>Languages</NavText>


      </NavItem>
      <NavItem>
<NavIcon></NavIcon>
<NavText>Get Help</NavText>


      </NavItem>
      <NavItem>
<NavIcon></NavIcon>
<NavText>Exit</NavText>


      </NavItem>
      
      
      
    </SideNav.Nav>



   
</SideNav>

</div>
}

export default Sidebar

