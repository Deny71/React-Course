import React , {Component} from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends Component{
  state = {
      showSiderDrawer: true
  }

  sideDrawerClosedHandler = () => {
      this.setState({showSiderDrawer: false})
  }

  sideDrawerToggleHandler = () => {

    this.setState((prevState) => {
      return {
        showSiderDrawer: !prevState.showSiderDrawer}
    })
  }

  render () {
    return (
      
     <Auxiliary>
       <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer
           open={this.state.showSiderDrawer}
            closed={this.sideDrawerClosedHandler}>
            </SideDrawer>
           <main className={classes.Content}>
            {this.props.children}
           </main>
            </Auxiliary>
    )
  }
} 

export default Layout