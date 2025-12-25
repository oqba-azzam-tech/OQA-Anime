// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Box from '@mui/material/Box';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

// export default function DarkHeaderNavigation() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeMenu, setActiveMenu] = React.useState(null);
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [expandedItems, setExpandedItems] = React.useState({});
//   const open = Boolean(anchorEl);

//   const colors = {
//     primary: '#e53637',
//     secondary: '#0b0c2a',
//     backLayout: '#070720',
//     white1: '#ffffff',
//     white2: '#ffffff12',
//     gray1: '#3d3d3d',
//     gray2: '#ffffff33',
//     gray3: '#b7b7b7',
//     darkBlue: '#1d1e39'
//   };

//   const headerLink = [
//     {
//       name: "Homepage",
//       link: "/",
//       categories: []
//     },
//     {

//       name: "Categories",
//       link: "/Categories",
//       categories: [
//         { name: "Categories", link: "/categories" },
//         { name: "Anime Details", link: "/animedetails" },
//         { name: "Anime Watching", link: "/animewatching" },
//         { name: "Blog Details", link: "/blogdetails" },
//         { name: "Sign Up", link: "/signup" },
//         { name: "Login", link: "/login " },
//       ]
//     },
//     {
//       name: "OurBlog",
//       link: "/blogpost",
//       categories: []
//     },
//     {
//       name: "Contact",
//       link: "/conact",
//       categories: []
//     },
//   ];

//   const handleMenuClick = (event, index) => {
//     if (headerLink[index].categories.length > 0) {
//       setAnchorEl(event.currentTarget);
//       setActiveMenu(index);
//     } else {
//       navigateTo(headerLink[index].link);
//     }
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setActiveMenu(null);
//   };

//   const navigateTo = (url) => {
//     console.log('Navigating to:', url);
//     window.location.href = url;
//   };

//   const handleItemClick = (link) => {
//     navigateTo(link);
//     handleClose();
//     setMobileOpen(false);
//   };

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleMobileItemClick = (item, index) => {
//     if (item.categories.length > 0) {
//       setExpandedItems(prev => ({
//         ...prev,
//         [index]: !prev[index]
//       }));
//     } else {
//       handleItemClick(item.link);
//     }
//   };

//   const drawer = (
//     <Box
//       sx={{
//         width: 280,
//         height: '100%',
//         bgcolor: colors.secondary,
//         color: colors.white1,
//         display: 'flex',
//         flexDirection: 'column'
//       }}
//     >
//       <Box sx={{ p: 2, borderBottom: `1px solid ${colors.gray2}` }}>
//         <Box
//           component="span"
//           sx={{
//             fontSize: '24px',
//             fontWeight: 'bold',
//             color: colors.primary
//           }}
//         >
//           Navigation
//         </Box>
//       </Box>
      
//       <List sx={{ flexGrow: 1, overflow: 'auto' }}>
//         {headerLink.map((item, index) => (
//           <React.Fragment key={index}>
//             <ListItem
//               button
//               onClick={() => handleMobileItemClick(item, index)}
//               sx={{
//                 borderBottom: `1px solid ${colors.gray2}`,
//                 py: 2,
//                 '&:hover': {
//                   bgcolor: colors.darkBlue
//                 }
//               }}
//             >
//               <ListItemText 
//                 primary={item.name}
//                 primaryTypographyProps={{
//                   sx: {
//                     fontSize: {
//                       xs: '16px',
//                       sm: '18px'
//                     },
//                     fontWeight: '500'
//                   }
//                 }}
//               />
//               {item.categories.length > 0 && (
//                 expandedItems[index] ? <ExpandLess /> : <ExpandMore />
//               )}
//             </ListItem>
            
//             {item.categories.length > 0 && (
//               <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   <ListItem 
//                     button 
//                     onClick={() => handleItemClick(item.link)}
//                     sx={{
//                       pl: 4,
//                       bgcolor: colors.darkBlue,
//                       borderBottom: `1px solid ${colors.gray2}`,
//                       '&:hover': {
//                         bgcolor: colors.primary
//                       }
//                     }}
//                   >
//                     <ListItemText 
//                       primary={item.name}
//                       primaryTypographyProps={{
//                         sx: {
//                           color: colors.primary,
//                           fontSize: {
//                             xs: '15px',
//                             sm: '16px'
//                           },
//                           fontWeight: 'bold',
//                           '&:hover': {
//                             color: colors.white1
//                           }
//                         }
//                       }}
//                     />
//                   </ListItem>
                  
//                   {item.categories.map((category, catIndex) => (
//                     <ListItem 
//                       key={catIndex}
//                       button 
//                       onClick={() => handleItemClick(category.link)}
//                       sx={{
//                         pl: 6,
//                         borderBottom: `1px solid ${colors.gray2}`,
//                         '&:hover': {
//                           bgcolor: colors.darkBlue
//                         }
//                       }}
//                     >
//                       <ListItemText 
//                         primary={category.name}
//                         primaryTypographyProps={{
//                           sx: {
//                             color: colors.gray3,
//                             fontSize: {
//                               xs: '14px',
//                               sm: '15px'
//                             },
//                             '&:hover': {
//                               color: colors.white1
//                             }
//                           }
//                         }}
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <React.Fragment>
//       {/* شريط التنقل للشاشات الكبيرة - يظهر فوق 700px */}
//       <Box sx={{ 
//         display: { xs: 'none', sm: 'none', md: 'flex' }, // يظهر فقط عند عرض أكبر من 900px
//         bgcolor: colors.backLayout,
//         color: colors.white1,
//         p: 2,
//         borderRadius: '0px',
//         borderBottom: `1px solid ${colors.gray2}`,
//         justifyContent: 'center',
//         gap: { md: 3, lg: 4, xl: 5 }
//       }}>
//         {headerLink.map((item, index) => (
//           <Box key={index} sx={{ position: 'relative' }}>
//             <Button
//               id={`nav-button-${index}`}
//               onClick={(e) => handleMenuClick(e, index)}
//               endIcon={item.categories.length > 0 ? 
//                 <KeyboardArrowDownIcon sx={{ 
//                   color: activeMenu === index ? colors.primary : colors.white1,
//                   transition: 'transform 0.3s',
//                   transform: activeMenu === index ? 'rotate(180deg)' : 'rotate(0deg)',
//                   fontSize: {
//                     md: '20px',
//                     lg: '22px',
//                     xl: '24px'
//                   }
//                 }} /> 
//                 : null}
//               sx={{
//                 color: colors.white1,
//                 textTransform: 'none',
//                 fontSize: {
//                   md: '15px',
//                   lg: '16px',
//                   xl: '17px'
//                 },
//                 fontWeight: activeMenu === index ? '600' : '400',
//                 letterSpacing: '0.3px',
//                 px: { md: 2, lg: 2.5, xl: 3 },
//                 py: 1.2,
//                 borderRadius: '4px',
//                 minWidth: 'auto',
//                 '&:hover': {
//                   bgcolor: colors.darkBlue,
//                   color: colors.primary,
//                   '& .MuiButton-endIcon svg': {
//                     color: colors.primary
//                   }
//                 },
//                 '&.Mui-focusVisible': {
//                   bgcolor: colors.darkBlue,
//                   outline: `2px solid ${colors.primary}`
//                 }
//               }}
//             >
//               {item.name}
//             </Button>

//             {/* القائمة المنسدلة */}
//             {item.categories.length > 0 && activeMenu === index && (
//               <Menu
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 slotProps={{
//                   paper: {
//                     sx: {
//                       mt: 1,
//                       minWidth: 240,
//                       maxHeight: 400,
//                       bgcolor: colors.secondary,
//                       border: `1px solid ${colors.gray2}`,
//                       boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: '-5px',
//                         left: '20px',
//                         width: '20px',
//                         height: '20px',
//                         bgcolor: colors.secondary,
//                         borderTop: `1px solid ${colors.gray2}`,
//                         borderLeft: `1px solid ${colors.gray2}`,
//                         transform: 'rotate(45deg)'
//                       }
//                     }
//                   }
//                 }}
//               >
//                 <MenuItem 
//                   onClick={() => handleItemClick(item.link)}
//                   sx={{ 
//                     fontWeight: '700',
//                     bgcolor: colors.darkBlue,
//                     color: colors.primary,
//                     py: 1.8,
//                     borderBottom: `2px solid ${colors.primary}`,
//                     fontSize: {
//                       md: '15px',
//                       lg: '16px'
//                     },
//                     '&:hover': {
//                       bgcolor: colors.primary,
//                       color: colors.white1
//                     }
//                   }}
//                 >
//                   {item.name}
//                 </MenuItem>

//                 {item.categories.map((category, catIndex) => (
//                   <MenuItem 
//                     key={catIndex}
//                     onClick={() => handleItemClick(category.link)}
//                     sx={{ 
//                       py: 1.5,
//                       pl: 3,
//                       color: colors.gray3,
//                       fontSize: {
//                         md: '14px',
//                         lg: '15px'
//                       },
//                       borderLeft: '3px solid transparent',
//                       transition: 'all 0.2s ease',
//                       '&:hover': {
//                         borderLeft: `3px solid ${colors.primary}`,
//                         bgcolor: colors.darkBlue,
//                         color: colors.white1,
//                         pl: '2.5rem',
//                         '&::after': {
//                           content: '""',
//                           position: 'absolute',
//                           right: '15px',
//                           width: '6px',
//                           height: '6px',
//                           bgcolor: colors.primary,
//                           borderRadius: '50%'
//                         }
//                       }
//                     }}
//                   >
//                     {category.name}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             )}
//           </Box>
//         ))}
//       </Box>

//       {/* زر القائمة للشاشات الصغيرة - يظهر عند 700px أو أقل */}
//       <Box sx={{ 
//         display: { xs: 'flex', sm: 'flex', md: 'none' }, // يظهر عند 900px أو أقل
//         bgcolor: colors.backLayout,
//         p: 1.5,
//         borderBottom: `1px solid ${colors.gray2}`,
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}>
//         <Box
//           component="span"
//           sx={{
//             fontSize: {
//               xs: '20px',
//               sm: '24px'
//             },
//             fontWeight: 'bold',
//             color: colors.primary,
//             ml: 1
//           }}
//         >
//           Menu
//         </Box>
        
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="end"
//           onClick={handleDrawerToggle}
//           sx={{
//             color: colors.white1,
//             '&:hover': {
//               color: colors.primary,
//               bgcolor: colors.darkBlue
//             }
//           }}
//         >
//           <MenuIcon sx={{ 
//             fontSize: {
//               xs: '28px',
//               sm: '32px'
//             }
//           }} />
//         </IconButton>
//       </Box>

//       {/* دراور القائمة للشاشات الصغيرة */}
//       <Drawer
//         variant="temporary"
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', sm: 'block', md: 'none' },
//           '& .MuiDrawer-paper': { 
//             boxSizing: 'border-box',
//             width: 280 
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </React.Fragment>
//   );
// }



import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function DarkHeaderNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState({});
  const navigate = useNavigate();
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
      link: "/categories",
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
      link: "/contact",
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
    navigate(url);
    handleClose();
  };

  const handleItemClick = (link) => {
    navigate(link);
    handleClose();
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileItemClick = (item, index) => {
    if (item.categories.length > 0) {
      setExpandedItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    } else {
      handleItemClick(item.link);
    }
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        bgcolor: colors.secondary,
        color: colors.white1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ p: 2, borderBottom: `1px solid ${colors.gray2}` }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: colors.primary,
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.9
            }
          }}
        >
          Navigation
        </Box>
      </Box>
      
      <List sx={{ flexGrow: 1, overflow: 'auto' }}>
        {headerLink.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => handleMobileItemClick(item, index)}
              sx={{
                borderBottom: `1px solid ${colors.gray2}`,
                py: 2,
                '&:hover': {
                  bgcolor: colors.darkBlue
                }
              }}
            >
              <ListItemText 
                primary={item.name}
                primaryTypographyProps={{
                  sx: {
                    fontSize: {
                      xs: '16px',
                      sm: '18px'
                    },
                    fontWeight: '500'
                  }
                }}
              />
              {item.categories.length > 0 && (
                expandedItems[index] ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
            
            {item.categories.length > 0 && (
              <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem 
                    button 
                    component={RouterLink}
                    to={item.link}
                    onClick={() => {
                      handleClose();
                      setMobileOpen(false);
                    }}
                    sx={{
                      pl: 4,
                      bgcolor: colors.darkBlue,
                      borderBottom: `1px solid ${colors.gray2}`,
                      textDecoration: 'none',
                      '&:hover': {
                        bgcolor: colors.primary
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.name}
                      primaryTypographyProps={{
                        sx: {
                          color: colors.primary,
                          fontSize: {
                            xs: '15px',
                            sm: '16px'
                          },
                          fontWeight: 'bold',
                          '&:hover': {
                            color: colors.white1
                          }
                        }
                      }}
                    />
                  </ListItem>
                  
                  {item.categories.map((category, catIndex) => (
                    <ListItem 
                      key={catIndex}
                      button 
                      component={RouterLink}
                      to={category.link}
                      onClick={() => {
                        handleClose();
                        setMobileOpen(false);
                      }}
                      sx={{
                        pl: 6,
                        borderBottom: `1px solid ${colors.gray2}`,
                        textDecoration: 'none',
                        '&:hover': {
                          bgcolor: colors.darkBlue
                        }
                      }}
                    >
                      <ListItemText 
                        primary={category.name}
                        primaryTypographyProps={{
                          sx: {
                            color: colors.gray3,
                            fontSize: {
                              xs: '14px',
                              sm: '15px'
                            },
                            '&:hover': {
                              color: colors.white1
                            }
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {/* شريط التنقل للشاشات الكبيرة - يظهر فوق 700px */}
      <Box sx={{ 
        display: { xs: 'none', sm: 'none', md: 'flex' },
        bgcolor: colors.backLayout,
        color: colors.white1,
        p: 2,
        borderRadius: '0px',
        borderBottom: `1px solid ${colors.gray2}`,
        justifyContent: 'center',
        gap: { md: 3, lg: 4, xl: 5 }
      }}>
        {headerLink.map((item, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            {item.categories.length === 0 ? (
              // روابط مباشرة للعناصر بدون قوائم فرعية
              <Button
                component={RouterLink}
                to={item.link}
                sx={{
                  color: colors.white1,
                  textTransform: 'none',
                  fontSize: {
                    md: '15px',
                    lg: '16px',
                    xl: '17px'
                  },
                  fontWeight: activeMenu === index ? '600' : '400',
                  letterSpacing: '0.3px',
                  px: { md: 2, lg: 2.5, xl: 3 },
                  py: 1.2,
                  borderRadius: '4px',
                  minWidth: 'auto',
                  '&:hover': {
                    bgcolor: colors.darkBlue,
                    color: colors.primary,
                  },
                  '&.Mui-focusVisible': {
                    bgcolor: colors.darkBlue,
                    outline: `2px solid ${colors.primary}`
                  }
                }}
              >
                {item.name}
              </Button>
            ) : (
              // أزرار مع قوائم منسدلة
              <Button
                id={`nav-button-${index}`}
                onClick={(e) => handleMenuClick(e, index)}
                endIcon={
                  <KeyboardArrowDownIcon sx={{ 
                    color: activeMenu === index ? colors.primary : colors.white1,
                    transition: 'transform 0.3s',
                    transform: activeMenu === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: {
                      md: '20px',
                      lg: '22px',
                      xl: '24px'
                    }
                  }} />
                }
                sx={{
                  color: colors.white1,
                  textTransform: 'none',
                  fontSize: {
                    md: '15px',
                    lg: '16px',
                    xl: '17px'
                  },
                  fontWeight: activeMenu === index ? '600' : '400',
                  letterSpacing: '0.3px',
                  px: { md: 2, lg: 2.5, xl: 3 },
                  py: 1.2,
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
            )}

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
                  component={RouterLink}
                  to={item.link}
                  onClick={handleClose}
                  sx={{ 
                    fontWeight: '700',
                    bgcolor: colors.darkBlue,
                    color: colors.primary,
                    py: 1.8,
                    borderBottom: `2px solid ${colors.primary}`,
                    fontSize: {
                      md: '15px',
                      lg: '16px'
                    },
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
                    component={RouterLink}
                    to={category.link}
                    onClick={handleClose}
                    sx={{ 
                      py: 1.5,
                      pl: 3,
                      color: colors.gray3,
                      fontSize: {
                        md: '14px',
                        lg: '15px'
                      },
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

      {/* زر القائمة للشاشات الصغيرة - يظهر عند 700px أو أقل */}
      <Box sx={{ 
        display: { xs: 'flex', sm: 'flex', md: 'none' },
        bgcolor: colors.backLayout,
        p: 1.5,
        borderBottom: `1px solid ${colors.gray2}`,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            fontSize: {
              xs: '20px',
              sm: '24px'
            },
            fontWeight: 'bold',
            color: colors.primary,
            ml: 1,
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.9
            }
          }}
        >
          Menu
        </Box>
        
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            color: colors.white1,
            '&:hover': {
              color: colors.primary,
              bgcolor: colors.darkBlue
            }
          }}
        >
          <MenuIcon sx={{ 
            fontSize: {
              xs: '28px',
              sm: '32px'
            }
          }} />
        </IconButton>
      </Box>

      {/* دراور القائمة للشاشات الصغيرة */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 280 
          },
        }}
      >
        {drawer}
      </Drawer>
    </React.Fragment>
  );
}