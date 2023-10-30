import { Container } from '@mui/material';

import { ClusterMap } from '../ClusterMap/ClusterMap';


function MapHouses() {
  return (
      <>
      <h1>
        Карта построенных объектов
      </h1>
      <Container maxWidth="lg" sx={{mt: 2}}>
      <h4>
        Для записи на просмотр наших домов, пожалуйста, звоните 8 800 555-33-77
      </h4>
          <ClusterMap />
      </Container>
      </>
  );
}

export default MapHouses;