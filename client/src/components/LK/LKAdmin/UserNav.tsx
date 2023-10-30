import { useState } from "react";
import TabForUsers from "./TabForUsers";
import { Container } from "@mui/material";


function UserNav({ user }) {
const [visible, setVisible] = useState(true);
const [userId, setUserId] = useState(); 
const [userName, setUserName] = useState(); 


    return ( 
        <>
        <Container maxWidth='lg'>
        {visible && 
        <div>
        {user && user.user.map((el) => (
            <div>
            <a key={el.id} href={"#" + el.id} onClick={() => {
                setUserId(el.id)
                setVisible(false)
                setUserName(el.name)
            }}>{el.name}</a>
            </div>
          ))}
          </div>
        }
        {!visible &&
          <div>
            <h3>Заказчик: {userName}</h3>
            <TabForUsers userId={userId}/>
          </div>
        }
        </Container>
          </>
     );
}

export default UserNav;