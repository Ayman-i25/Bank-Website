import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/images/Logo.png';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import bgO from '../assets/images/Gradient-orang.png'
import bgP from '../assets/images/Gradient-p.png'
import Template from './Template';

const pages = ['Home', 'About Us', 'Banking', 'Cards', 'Investments'];
function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [search, setSearch] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenSearch = (event) => {
        setSearch(event.currentTarget);
    };
    const handleColseSearch = (event) => {
        setSearch(null);
    };

    return (
        <Box position={'relative'}>
            <Template>

                <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'black', boxShadow: 'none' }} >
                    <Container>
                        <Toolbar disableGutters sx={{ borderRight: '2px solid black', borderLeft: '2px solid black', px: 1 }}>
                            {/* <AdbIcon  /> */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                                <img src={logo} alt='logo' />
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                                <img src={logo} alt='logo' />
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'black', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0, alignItems: 'center' }}>
                                <Button variant='outlined' color='primary'>Singup Here</Button>
                                <TextField variant="standard" InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }} sx={{ ml: 1, display: { xs: 'none', md: 'inline-block' } }} />
                            </Box>
                            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="search"
                                    aria-haspopup="true"
                                    onClick={handleOpenSearch}
                                    color="inherit"
                                >
                                    <SearchIcon />
                                </IconButton>
                                <Menu
                                    id="search"
                                    anchorEl={search}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(search)}
                                    onClose={handleColseSearch}
                                    sx={{ display: { xs: 'block', md: 'none' }, }}
                                >
                                    <TextField size='small' variant="outlined" sx={{ p: 1 }} />
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Template>
        </Box>
    );
}
export default NavBar;