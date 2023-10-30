import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store';
import { getHouses } from '../../thunk/thunkActionsHouse';
import { Clusterer, Map, Placemark } from '@pbe/react-yandex-maps';
import './ClusterMap.css';

export const ClusterMap = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
    dispatch(getHouses())
    }, [dispatch]);
    const { houses } = useAppSelector((store) => store.houses)
return (
  <div className='carta'>
    <Map
      width='100%'
      height='450px'
      defaultState={{
        center: [55.751574, 37.573856],
        zoom: 5,
      }}
    >
        <Clusterer
          options={{
            preset: "islands#invertedVioletClusterIcons",
            groupByCoordinates: false,
          }}
        >
          {houses.map((house) => (
            <Placemark key={house.id} 
            geometry={[Number(house.pointX), Number(house.pointY)]} 
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContentHeader: `${house.name}`,
              balloonContentBody:
              `<img src=${house.photoSrc[0].photo} alt='office' height='150' width='200' /> <br/>  
              <b>${house.about}</b>` ,
              hintContent: 
              `${house.name}`,
            }}
            options={{
              iconImageSize: [10, 10],
              preset: "islands#blueHomeCircleIcon",
              
            }} />
          ))}
        </Clusterer>
      </Map>
      </div>
  )
}
