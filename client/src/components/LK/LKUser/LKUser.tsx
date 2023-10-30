import { useEffect, useState } from 'react';
import Order from './Order';


function LKUser() {
    const [order, setOrder] = useState()

    useEffect(() => {
        console.log('useEffect App',);
        fetch("http://localhost:3000/lk/lkuser", {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
              },
        })
          .then((res) => res.json())
          .then((data) => setOrder(data))
          .catch((err) => console.log(err))
      }, [])

      console.log('order-------->', order);
      // const {user, photo, document} = order;
      // console.log('order.HouseUnderConstructions.PhotoUnderConstructions.photo----------->', order.HouseUnderConstructions.PhotoUnderConstructions.photo);

    return ( 
        <>
        <h1>Личный кабинет Заказчика</h1>
        {/* <a href="/lk/lkuser/order" >{order.HouseUnderConstructions.name}</a> */}
        { (order?.user) ? (
          <Order order={order}/>
        ) : (
          <p>Загрузка...</p>
        )
        }
        </>
     );
}

export default LKUser;



