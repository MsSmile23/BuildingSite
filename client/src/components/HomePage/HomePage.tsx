import { Container, CssBaseline, Grid, Typography, Paper } from '@mui/material';
import MainPhoto from './../HomePage/MainPhoto';
import OneService from './ProjectCardMain';
import Subscribe from './Subscribe';
import VideoBlog from './../HomePage/VideoBlog';


const mainPhoto = {
  title: 'Энергоэффективный одноэтажный дом',
  description:
    "Главная особенность дома - максимальное раскрытие внутреннего пространства на участок. Столовая, гостиная, террасы и мастер-спальня выходят в сад.",
  image: 'https://izburg.ru/pic/full/files/lists/Projects/85_Image_1655231235_826_1.jpg',
  imageText: 'main image description',
  linkText: 'ПОДРОБНЕЕ',
};

const mainServices = [
  { 
    
    title: 'Энергоэффективные дома',
    description:
      'Проектирование и строительство современных технологичных домов в Москве и Санкт-Петербурге.',
    image: 'https://www.gwd.ru/upload/resize_cache/iblock/54c/555_340_2619711fa078991f0a23d032687646b21/54cccde08587d2b3c697c68ad66caf5f.jpeg.webp',
    imageLabel: 'Image Text',
  },
  {
    title: 'Инженерные коммуникации',
    description:
      'Качественное и эстетичное отопление и водоснабжение частного дома. Теплые полы.',
    image: 'https://sankt-tehnik.ru/wp-content/uploads/2022/07/21.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Озеленение участков',
    description:
      'Ландшафтный дизайн и озеление загородных участков. Малые архитектурные формы.',
    image: 'https://sr-landshaft.ru/wp-content/uploads/2018/09/IMG_3195-2-1024x768.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Дизайн и внутренняя отделка',
    description:
      'От проекта до полной отделки под ключ. Подбор материалов. Установка каминов.',
    image: 'https://finskidomik.ru/wp-content/uploads/2022/11/menitskiye_villayukka_42.jpg.webp',
    imageLabel: 'Image Text',
  },
];

export default function HomePage() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg">
          <MainPhoto post={mainPhoto} />
      <Paper elevation={3} sx={{mt: 8.5, mb: 2}}>
          <Grid container spacing={4}>
            {mainServices.map((post) => (
              <OneService key={post.title} post={post} />
            ))}
          </Grid>
          </Paper>
          <Paper elevation={3}>
          <Typography sx={{mt: 3.5}} align="center" component="h4" variant="h4" color="inherit" gutterBottom>
              Строим современные дома в Москве и Санкт-Петербурге
          </Typography >
          <Typography sx={{p: 2, mx: 1.5, mb: 3.5}} align="justify" variant="body1" color="inherit" gutterBottom>
          Компания Home & Garden реализует полный цикл строительства загородных домов: от подготовки земельного участка и разработки проектной документации до сдачи дома под ключ. Гарантия качественного строительства и длительной эксплуатации домов от обеспечивается за счет специализации исключительно на энергоэффективных технологиях, соблюдении СНиП и применении только проверенных материалов.
          Инженерные системы, дренаж, благоустройство участка, ландшафтные работы — вот неполный перечень возможностей компании Home & Garden. У вас есть еще неразработанный участок и желание увидеть готовый долговечный построенный по европейскому проекту дом на благоустроенной территории — вы обратились по адресу.

          Все решения по строительству загородных домов четко подбираются под конкретных заказчиков, исходя из предполагаемых условий эксплуатации дома и особенностей участка под застройку. Дома Home & Garden — не штампованные одинаковые типовые проекты, а индивидуальные коттеджи, учитывающие потребности будущего владельца. Хотим обратить внимание, что разработка индивидуального проекта с учетом строительства дома в нашей компании будет бесплатна.
          Что входит в стоимость строительства домов под ключ: проект, земляные работы, фундамент, монтаж ЛОС. Утепленный дом с полной наружной отделкой, инженерные коммуникации и предчистовая отделка. Дополнительно можно заказать утепленную отмостку, устройство дорожек и парковки, забор и навес для автомобиля. Финишную отделку специалисты компании также реализуют по утвержденному дизайн-проекту.

          </Typography>
          </Paper>
          <Paper elevation={3}
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            mb: 4,
          }}
          >
          <Container sx={{
            position: 'center'}}>
          <Typography align="center" component="h3" variant="h3" color="inherit" gutterBottom>
              Блог компании
          </Typography>
          <VideoBlog/>
          </Container>  
          </Paper>
          <Subscribe />
      </Container>
    </>
  )
}
