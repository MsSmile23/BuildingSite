import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
  Button,
} from '@mui/material';

function FilterForm({
  filters,
  onFilterChange,
  onSizeSortChange,
  onPriceSortChange,
}: {
  filters: any;
  onFilterChange: (name: string, value: any) => void;
  onSizeSortChange: (direction: string) => void;
  onPriceSortChange: (direction: string) => void;
}) {
  const [sizeSort, setSizeSort] = useState(filters.size);
  const [priceSort, setPriceSort] = useState(filters.price);

  const handleFilterChange = (name: string, value: any) => {
    onFilterChange(name, value);
  };

  const handleSizeSortChange = (direction: string) => {
    if (sizeSort === direction) {
      setSizeSort('');
      onSizeSortChange('');
    } else {
      setSizeSort(direction);
      onSizeSortChange(direction);
    }
  };

  const handlePriceSortChange = (direction: string) => {
    if (priceSort === direction) {
      setPriceSort('');
      onPriceSortChange('');
    } else {
      setPriceSort(direction);
      onPriceSortChange(direction);
    }
  };

  return (
    <Container>
      <Grid container flexDirection="column" alignItems="flex-start">
        {/* <Typography variant="h4">Поиск по фильтрам</Typography> */}
        <Grid item >
          <FormControl component="fieldset">
            <Typography variant="h6" align='left'>Этажность</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.floor.includes('1')}
                    onChange={() =>
                      handleFilterChange(
                        'floor',
                        filters.floor.includes('1')
                          ? filters.floor.filter((floor) => floor !== '1')
                          : [...filters.floor, '1']
                      )
                    }
                  />
                }
                label="Один этаж"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.floor.includes('2')}
                    onChange={() =>
                      handleFilterChange(
                        'floor',
                        filters.floor.includes('2')
                          ? filters.floor.filter((floor) => floor !== '2')
                          : [...filters.floor, '2']
                      )
                    }
                  />
                }
                label="Два этажа"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.floor.includes('Мансарда')}
                    onChange={() =>
                      handleFilterChange(
                        'floor',
                        filters.floor.includes('Мансарда')
                          ? filters.floor.filter((floor) => floor !== 'Мансарда')
                          : [...filters.floor, 'Мансарда']
                      )
                    }
                  />
                }
                label="С мансардой"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Divider style={{ margin: '16px 0', width: '160px' }} /> 


        <Grid item xs={12} sm={6} md={4}>
          <FormControl component="fieldset">
            <Typography variant="h6">Технология</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.material.includes('Дерево')}
                    onChange={() =>
                      handleFilterChange(
                        'material',
                        filters.material.includes('Дерево')
                          ? filters.material.filter(
                              (material) => material !== 'Дерево'
                            )
                          : [...filters.material, 'Дерево']
                      )
                    }
                  />
                }
                label="Дерево"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.material.includes('Кирпич')}
                    onChange={() =>
                      handleFilterChange(
                        'material',
                        filters.material.includes('Кирпич')
                          ? filters.material.filter(
                              (material) => material !== 'Кирпич'
                            )
                          : [...filters.material, 'Кирпич']
                      )
                    }
                  />
                }
                label="Кирпич"
              />
            </FormGroup>
          </FormControl>
        </Grid>
          <Divider style={{ margin: '16px 0', width: '160px' }} /> 

        {/*    ПЛОЩАДЬ */}
        <Grid item >
          <FormControl component="fieldset">
            <Typography variant="h6" align="left">Площадь, м²</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.size === 'asc'}
                    onChange={() =>
                      handleSizeSortChange(filters.size === 'asc' ? '' : 'asc')
                    }
                  />
                }
                label="По возрастанию"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.size === 'desc'}
                    onChange={() => handleSizeSortChange('desc')}
                  />
                }
                label="По убыванию"
              />
            </FormGroup>
          </FormControl>
        </Grid>
          <Divider style={{ margin: '16px 0', width: '160px' }} /> 

        {/* ЦЕНА */}
        <Grid item >
          <FormControl component="fieldset">
            <Typography variant="h6" style={{ marginLeft: '-100px' }}>Цена, ₽</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.price === 'asc'}
                    onChange={() =>
                      handlePriceSortChange(
                        filters.price === 'asc' ? '' : 'asc'
                      )
                    }
                  />
                }
                label="По возрастанию"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.price === 'desc'}
                    onChange={() => handlePriceSortChange('desc')}
                  />
                }
                label="По убыванию"
              />
            </FormGroup>
          </FormControl>
          <Divider style={{ margin: '16px 0', width: '160px' }} /> 
        </Grid>
      </Grid>
    </Container>
  );
}

export default FilterForm;

// import React, { useState } from 'react';
// import { Container, Typography, Box, Grid } from '@mui/material';

// function FilterForm({
//   filters,
//   onFilterChange,
//   onSizeSortChange,
//   onPriceSortChange,
// }: {
//   filters: any;
//   onFilterChange: (name: string, value: any) => void;

//   onSizeSortChange: (direction: string) => void;
//   onPriceSortChange: (direction: string) => void;
// }) {
//   // Локальное состояние для отслеживания текущего состояния сортировки
//   const [sizeSort, setSizeSort] = useState(filters.size);
//   // доп
//   const [priceSort, setPriceSort] = useState(filters.price);

//   const handleFilterChange = (name: string, value: any) => {
//     onFilterChange(name, value);
//   };

//   const handleSizeSortChange = (direction: string) => {
//     // Если текущее направление сортировки совпадает с выбранным,
//     // сбрасываем сортировку
//     if (sizeSort === direction) {
//       setSizeSort('');
//       onSizeSortChange('');
//     } else {
//       setSizeSort(direction);
//       onSizeSortChange(direction);
//     }
//   };

//   const handlePriceSortChange = (direction: string) => {
//     if (priceSort === direction) {
//       setPriceSort('');
//       onPriceSortChange('');
//     } else {
//       setPriceSort(direction);
//       onPriceSortChange(direction);
//     }
//   };

//   // const handlePriceSortChange = (direction: string) => {
//   //   onPriceSortChange(direction);
//   // };

//   return (
//     <div>
//       <Typography variant="h4">Фильтры и сортировка</Typography>
//       <div>
//         <h3>Этажность</h3>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.floor.includes(1)}
//             onChange={() =>
//               handleFilterChange(
//                 'floor',
//                 filters.floor.includes(1)
//                   ? filters.floor.filter((floor) => floor !== 1)
//                   : [...filters.floor, 1]
//               )
//             }
//           />
//           1 этаж
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.floor.includes(2)}
//             onChange={() =>
//               handleFilterChange(
//                 'floor',
//                 filters.floor.includes(2)
//                   ? filters.floor.filter((floor) => floor !== 2)
//                   : [...filters.floor, 2]
//               )
//             }
//           />
//           2 этажа
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.floor.includes(3)}
//             onChange={() =>
//               handleFilterChange(
//                 'floor',
//                 filters.floor.includes(3)
//                   ? filters.floor.filter((floor) => floor !== 3)
//                   : [...filters.floor, 3]
//               )
//             }
//           />
//           3 этажа
//         </label>
//       </div>
//       <div>
//         <h3>Технология</h3>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.material.includes('Дерево')}
//             onChange={() =>
//               handleFilterChange(
//                 'material',
//                 filters.material.includes('Дерево')
//                   ? filters.material.filter((material) => material !== 'Дерево')
//                   : [...filters.material, 'Дерево']
//               )
//             }
//           />
//           Дерево
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={filters.material.includes('Кирпич')}
//             onChange={() =>
//               handleFilterChange(
//                 'material',
//                 filters.material.includes('Кирпич')
//                   ? filters.material.filter((material) => material !== 'Кирпич')
//                   : [...filters.material, 'Кирпич']
//               )
//             }
//           />
//           Кирпич
//         </label>
//       </div>
//       <div>
//         <h3>Площадь, м2</h3>
//         <label>
//           <input
//             type="checkbox"
//             name="sizeSort"
//             value="asc"
//             checked={filters.size === 'asc'}
//             onChange={() =>
//               handleSizeSortChange(filters.size === 'asc' ? '' : 'asc')
//             }
//           />
//           По возрастанию
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             name="sizeSort"
//             value="desc"
//             checked={filters.size === 'desc'}
//             onChange={() => handleSizeSortChange('desc')}
//           />
//           По убыванию
//         </label>
//       </div>
//       <div>
//         <h3>Цена</h3>
//         <label>
//           <input
//             type="checkbox"
//             name="priceSort"
//             value="asc"
//             checked={filters.price === 'asc'}
//             onChange={() =>
//               handlePriceSortChange(filters.price === 'asc' ? '' : 'asc')
//             }
//           />
//           По возрастанию
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="priceSort"
//             value="desc"
//             checked={filters.price === 'desc'}
//             onChange={() => handlePriceSortChange('desc')}
//           />
//           По убыванию
//         </label>
//       </div>
//     </div>
//   );
// }

// export default FilterForm;
