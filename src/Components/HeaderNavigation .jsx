import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DarkHeaderNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const open = Boolean(anchorEl);

  
  const colors = {
    primary: '#e53637',
    secondary: '#0b0c2a',
    backLayout: '#070720',
    white1: '#ffffff',
    white2: '#ffffff12',
    gray1: '#3d3d3d',
    gray2: '#ffffff33',
    gray3: '#b7b7b7',
    darkBlue: '#1d1e39'
  };

  const headerLink = [
    {
      name: "Homepage",
      link: "/",
      categories: []
    },
    {
      name: "Categories",
      link: "/Categories",
      categories: [
        { name: "Categories", link: "/categories" },
        { name: "Anime Details", link: "/animedetails" },
        { name: "Anime Watching", link: "/animewatching" },
        { name: "Blog Details", link: "/blogdetails" },
        { name: "Sign Up", link: "/signup" },
        { name: "Login", link: "/login" },
      ]
    },
    {
      name: "OurBlog",
      link: "/blogpost",
      categories: []
    },
    {
      name: "Contact",
      link: "",
      categories: []
    },
  ];

  const handleMenuClick = (event, index) => {
    if (headerLink[index].categories.length > 0) {
      setAnchorEl(event.currentTarget);
      setActiveMenu(index);
    } else {
      navigateTo(headerLink[index].link);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const navigateTo = (url) => {
    console.log('Navigating to:', url);
    window.location.href = url;
  };

  const handleItemClick = (link) => {
    navigateTo(link);
    handleClose();
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      bgcolor: colors.backLayout,
      color: colors.white1,
      p: { xs: 1.5, md: 2 },
      borderRadius: '0px',
      borderBottom: `1px solid ${colors.gray2}`,
      justifyContent: 'center',
      gap: { xs: 1, sm: 2, md: 3, lg: 4 }
    }}>
      {headerLink.map((item, index) => (
        <Box key={index} sx={{ position: 'relative' }}>
          <Button
            id={`nav-button-${index}`}
            onClick={(e) => handleMenuClick(e, index)}
            endIcon={item.categories.length > 0 ? 
              <KeyboardArrowDownIcon sx={{ 
                color: activeMenu === index ? colors.primary : colors.white1,
                transition: 'transform 0.3s',
                transform: activeMenu === index ? 'rotate(180deg)' : 'rotate(0deg)'
              }} /> 
              : null}
            sx={{
              color: colors.white1,
              textTransform: 'none',
              fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
              fontWeight: activeMenu === index ? '600' : '400',
              letterSpacing: '0.3px',
              px: { xs: 1, md: 2 },
              py: 1,
              borderRadius: '4px',
              minWidth: 'auto',
              '&:hover': {
                bgcolor: colors.darkBlue,
                color: colors.primary,
                '& .MuiButton-endIcon svg': {
                  color: colors.primary
                }
              },
              '&.Mui-focusVisible': {
                bgcolor: colors.darkBlue,
                outline: `2px solid ${colors.primary}`
              }
            }}
          >
            {item.name}
          </Button>

          {/* القائمة المنسدلة */}
          {item.categories.length > 0 && activeMenu === index && (
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    minWidth: 240,
                    maxHeight: 400,
                    bgcolor: colors.secondary,
                    border: `1px solid ${colors.gray2}`,
                    boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-5px',
                      left: '20px',
                      width: '20px',
                      height: '20px',
                      bgcolor: colors.secondary,
                      borderTop: `1px solid ${colors.gray2}`,
                      borderLeft: `1px solid ${colors.gray2}`,
                      transform: 'rotate(45deg)'
                    }
                  }
                }
              }}
            >
              <MenuItem 
                onClick={() => handleItemClick(item.link)}
                sx={{ 
                  fontWeight: '700',
                  bgcolor: colors.darkBlue,
                  color: colors.primary,
                  py: 1.8,
                  borderBottom: `2px solid ${colors.primary}`,
                  fontSize: '15px',
                  '&:hover': {
                    bgcolor: colors.primary,
                    color: colors.white1
                  }
                }}
              >
                {item.name}
              </MenuItem>

              {item.categories.map((category, catIndex) => (
                <MenuItem 
                  key={catIndex}
                  onClick={() => handleItemClick(category.link)}
                  sx={{ 
                    py: 1.5,
                    pl: 3,
                    color: colors.gray3,
                    fontSize: '14px',
                    borderLeft: '3px solid transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderLeft: `3px solid ${colors.primary}`,
                      bgcolor: colors.darkBlue,
                      color: colors.white1,
                      pl: '2.5rem',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: '15px',
                        width: '6px',
                        height: '6px',
                        bgcolor: colors.primary,
                        borderRadius: '50%'
                      }
                    }
                  }}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );
}