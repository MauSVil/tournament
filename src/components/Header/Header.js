import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import _ from 'lodash';
import useWindowSizeWatcher from '../../hooks/useWindowSizeWatcher'
import './Header.css'

const Header = (props) => {
  const [classes, setClasses] = useState({})
  const [open, setOpen] = useState(false);

  const { windowSize } = useWindowSizeWatcher();

  const [token, setToken] = useState("")
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [])

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userData')))
  }, [])

  const classesObject = {
    lg: {
      root: 'header-root',
      rootOpen: 'header-rootOpen',
      headerMenuIcon: 'header-menuicon',
      headerMenuIconOpen: 'header-menuiconOpen',
      linksContainer: 'header-linksContainer',
      linkBox: 'header-linkBox',
      link: 'header-link',
      headerIcon: 'header-icon',
      tooltip: 'header-tooltip',
      userContainer: 'header-userContainer'
    },
    sm: {
      root: 'header-root-sm'
    }
  };

  useEffect(() => {
    setClasses(classesObject[windowSize])
  }, [windowSize])

  const returnCorrectContent = () => {
    if (open) {
      return (
        <>
          <MenuIcon className={classes.headerMenuIconOpen} onClick={() => setOpen(false)}/>
          <div className={classes.linksContainer}>
            <div className={classes.linkBox}>
              <Link to="/" className={classes.link}>
                <HomeIcon className={classes.headerIcon}/>
                Home
              </Link>
            </div>
            <div className={classes.linkBox}>
              <Link to="/tournaments" className={classes.link}>
                <AttachMoneyIcon className={classes.headerIcon}/>
                Tournaments
              </Link>
            </div>
            <div className={classes.linkBox}>
              <Link to="/contact" className={classes.link}>
                <AttachMoneyIcon className={classes.headerIcon}/>
                Contact
              </Link>
            </div>
            <div className={classes.linkBox}>
              <Link to="/link" className={classes.link}>
                <AttachMoneyIcon className={classes.headerIcon}/>
                Link
              </Link>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <MenuIcon className={classes.headerMenuIcon} onClick={() => setOpen(true)}/>
          <div className={classes.linksContainer}>
            <div className={classes.linkBox}>
              <Link to="/" className={classes.link}>
                <HomeIcon className={classes.headerIcon}/>
              </Link>
              <div className={classes.tooltip}>Home</div>
            </div>
            <div className={classes.linkBox}>
              <Link to="/tournaments" className={classes.link}>
                <AttachMoneyIcon className={classes.headerIcon}/>
              </Link>
              <div className={classes.tooltip}>Tournaments</div>
            </div>
            <div className={classes.linkBox}>
              <Link to="/contact" className={classes.link}>
                <AttachMoneyIcon className={classes.headerIcon}/>
              </Link>
              <div className={classes.tooltip}>Home</div>
            </div>
            <div className={classes.linkBox}>
              <Link to="/link" className={classes.link}>
                <AttachMoneyIcon className={classes.headerIcon}/>
              <div className={classes.tooltip}>Link</div>
              </Link>
            </div>
          </div>
          <div className={classes.userContainer}>
            <div className={classes.linkBox}>
              <Link to={token ? "/profile" : "/login"} className={classes.link}>
                <PersonIcon className={classes.headerIcon}/>
              </Link>
              <div className={classes.tooltip}>{_.get(userData, 'name', 'User')}</div>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <div
      className={open ? classes.rootOpen : classes.root}
    >
      {returnCorrectContent()}
    </div>
  )
}

export default Header;
