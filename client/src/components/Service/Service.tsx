import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <>
    <Container maxWidth="lg" sx={{mt: 2, mb: 0}}>
      <h1>
        Услуги
      </h1>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/public/img/Service/arch_proekty.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Архитектурное проектирование
              </Typography>
              <Typography variant="body2" gutterBottom>
                Проектирование дома на основе ваших эскизов и референсов. Работа со сложными участками, нестандартной архитектурой.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Цена: от 3000 руб/м2
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="button">
                Подробнее
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Container>
    
    <Container maxWidth="lg" sx={{mt: 2, mb: 0}}>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/public/img/Service/inzheneria.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Инженерные коммуникации
              </Typography>
              <Typography variant="body2" gutterBottom>
                Проектируем и производим монтаж систем отопления, водоснабжения, вентиляции, канализации ( в т.ч. ЛОС). Электрика.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Цена: рассчитывается индивидуально
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="button">
              Подробнее
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Container>

    <Container maxWidth="lg" sx={{mt: 2, mb: 0}}>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/public/img/Service/fasady.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Фасадные работы
              </Typography>
              <Typography variant="body2" gutterBottom>
                Покраска деревянных фасадов. Облицовка клинкерным кирпичом, фиброцементным сайдингом, планкеном из лиственницы.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Цена: от 250 000 руб
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="button">
              Подробнее
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Container>
    
    <Container maxWidth="lg" sx={{mt: 2, mb: 0}}>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/public/img/Service/tech_nadzor.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Технический надзор
              </Typography>
              <Typography variant="body2" gutterBottom>
                Работа на стороне клиента, контроль скрытых работ, выезд на приемку каждого этапа строительства. Контроль качества.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Цена: от 30 000 руб
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="button">
              Подробнее
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Container>


    </>
  );
}