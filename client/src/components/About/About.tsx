import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { AccessTimeTwoTone, ArchitectureTwoTone, CottageTwoTone, HandshakeTwoTone } from '@mui/icons-material';
import { Container, Paper } from '@mui/material';

export default function CustomizedTimeline() {
  return (
    <Container maxWidth='lg'>
      <h1>
        О нас
      </h1>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h6"
          component="span"
          
        >
          2009
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AccessTimeTwoTone />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="text.secondary">
            создание компании
          </Typography>
          <Typography>построены первые 17 домов</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="h6"
          component="span"
          color="text.secondary"
        >
          семей живут в наших домах
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CottageTwoTone />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            3088
          </Typography>
          <Typography>И очень довольны!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h6"
          component="span"
        >
          1209
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <ArchitectureTwoTone />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="text.secondary">
            индивидуальных проектов
          </Typography>
          <Typography>разработано в Home & Garden</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="h6"
          component="span"
          color="text.secondary"
        >
          клиентов рекомендуют нас
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <HandshakeTwoTone />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            95%
          </Typography>
          <Typography>Потому что мы стараемся хорошо делать свою работу!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <Paper elevation={3}>
          
          <Typography sx={{p: 2, mx: 1.5, mb: 3.5}} align="justify" variant="body1" color="inherit" gutterBottom>
          Home & Garden современная, технологичная компания, которая с 2009 года проектирует и строит экологичные загородные дома. Вам не нужно ездить на объект и вдаваться в технические нюансы стройки, и при этом вы можете быть уверены, что: <br/>
          <br/>
          &#10003; Мы используем оптимальные, проверенные, совместимые между собой технологии и материалы <br/>
          &#10003; Применяем современные архитектурные и конструкторские решения <br/>
          &#10003; Все строительные и монтажные процессы соответствуют нормам, а качество работ контролируют опытные специалисты <br/>
          &#10003; Сотрудники всех уровней заинтересованы в том, чтобы в результате получился энергоэффективный и комфортный дом <br/>
          &#10003; Отделка и эксплуатация дома, которые последуют за общей стройкой, не потребуют переделок и дополнительных вложений <br/>
          <br/>
          Чтобы это стало возможным, мы создали поэтапную систему контроля — через проектный отдел, службу инженеров технического надзора и независимую экспертизу со стороны поставщиков.
          Все работы, решения, приемки этапов, документы и фотоотчеты мы транслируем в «Личный кабинет» заказчика, доступный на компьютере и на всех мобильных устройствах. Это делает процесс прозрачным: вы можете спокойно заниматься бизнесом и проводить время с семьей и при этом удаленно следить за стройкой.
          </Typography>
          </Paper>
    </Container>
  );
}



