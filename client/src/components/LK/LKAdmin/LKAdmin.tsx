import { useEffect, useState } from "react";
import BasicTabs from "./TabLKAdmin";


function LKAdmin() {
    const [user, setUser] = useState()

    useEffect(() => {
        console.log('useEffect App',);
        fetch("http://localhost:3000/lk/lkadmin", {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
              },
        })
          .then((res) => res.json())
          .then((data) => setUser(data))
          .catch((err) => console.log(err))
      }, [])

      console.log('user-------->', user);
    


    return ( 
        <>
        <h1>Личный кабинет Менеджера</h1>
        <BasicTabs user={user}/>
        </>
     );
}

export default LKAdmin;

