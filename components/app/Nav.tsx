import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import LinkMaterial from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            InfoSpores
          </Typography>
          <Hidden lgUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/">
                  <LinkMaterial underline="none">Home</LinkMaterial>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/about">
                  <LinkMaterial underline="none">About</LinkMaterial>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/posts">
                  <LinkMaterial underline="none">Posts</LinkMaterial>
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
          <Hidden mdDown>
            <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about">
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/posts">
              <Button color="inherit">Posts</Button>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
