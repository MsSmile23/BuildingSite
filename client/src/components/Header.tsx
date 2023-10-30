import React, { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import logo from '../../public/img/Logo-new.png';
import { Menu, MenuItem } from '@mui/material';
import WhatsApp from '../components/WhatsApp/WhatsApp';

// import { useParams } from 'react-router-dom';

export default function Header() {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  

  const [user, setUser] = useState();

  // ДОБАВИЛА
  // const { id } = useParams();

  useEffect(() => {
      console.log('useEffect App');
      fetch("http://localhost:3000/lk/user", {
          credentials: 'include',
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000",
            },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.log(err))
    }, []);

    console.log('user-------->', user);

    const handleLogout = async () => {
      try {
        const response = await fetch('http://localhost:3000/lk/logout', {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.status === 200) {
          window.location.href = '/'; 
        } else {
          console.error('Произошла ошибка при выходе из системы');
        }
      } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
      }
    };

    return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between', overflowX: 'auto' }}>
        <Link href="/">
        <img src={logo} alt="Logo" width="150" height="50" />
        </Link>
        <WhatsApp />
        <Button href="tel:+88005553377" size="large" sx={{ml: 80}}>
          8 800 555-33-77
          </Button>
        {user && user?.name !== 'admin' && 
        <Link href="/profileUser">
        <Button variant="outlined" size="small">
          Личный кабинет
        </Button>
        </Link> 
        }
        {user && user?.name === 'admin' && 
        <Link href="/profileAdmin">
        <Button variant="outlined" size="small">
          Личный кабинет
        </Button>
        </Link> 
        }
        {!user &&
        <Link href="/login">
        <Button variant="outlined" size="small">
          Личный кабинет
        </Button>
        </Link> 
        }
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-start', overflowX: 'auto'}}
      >
        <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Построенные дома &#9660;
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >  <Link underline='none' href="/gallery">
        <MenuItem onClick={handleClose}>ФОТОГАЛЕРЕЯ</MenuItem>
         </Link>
         <Link underline='none' href="/maphouses">
        <MenuItem onClick={handleClose}>КАРТА ОБЪЕКТОВ</MenuItem>
         </Link>
      </Menu>
    </div>    
        <Link  color="inherit"
            underline="hover"
            noWrap
            variant="body2"
            href="/projects"
            sx={{ p: 1, flexShrink: 0 }}>ПРОЕКТЫ</Link>
        <Link color="inherit"
            underline="hover"
            noWrap
            variant="body2"
            href="/services"
            sx={{ p: 1, flexShrink: 0 }}>УСЛУГИ</Link>
        
        <Link  color="inherit"
            underline="hover"
            noWrap
            variant="body2"
            href="/about"
            sx={{ p: 1, flexShrink: 0 }}>О НАС</Link>
        <Link  color="inherit"
            underline="hover"
            noWrap
            variant="body2"
            href="/contacts"
            sx={{ p: 1, flexShrink: 0 }}>КОНТАКТЫ</Link>


{(user?.name && ['111', 'admin', 'АС103788'].includes(user.name)) && (
        <Button variant="outlined" size="small"  sx={{ marginLeft: 'auto' }} onClick={handleLogout}>
          Выйти
        </Button>
      )}


      </Toolbar>
    </React.Fragment>
  );
}
