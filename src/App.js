import { Carousel } from '@mantine/carousel';
import {
  Accordion, ActionIcon, Button, Container,
  createStyles, Grid, SimpleGrid,
  Text, Title, useMantineTheme
} from "@mantine/core";
import {
  Barbell, Calendar, Clock, Flower, Heart, Plus, ScaleOutline, Video, Yoga
} from "tabler-icons-react";
import bg from "./assets/bg.png";
import bgone from "./assets/bgone.png";
import bgthree from "./assets/bgthree.png";
import bgtwo from "./assets/bgtwo.png";
import days from "./assets/days.png";
import gridimg from "./assets/gridimg.png";
import gridimg2 from "./assets/gridimg2.png";
import Redlogo from "./assets/Redlogo.png";
import Videologo from "./assets/Videologo.png";
import Footers from './Components/Footer';
import Header from './Components/Header';
import LazyShow from "./Components/LazyShow";


const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    [theme.fn.smallerThan("sm")]: {
      paddingTop: 30,
      paddingBottom: 30
    },

  },
  root: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
    height: 320,
    [theme.fn.smallerThan("sm")]: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${bg})`,
      height: 330,
    },
  },
  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
    color: theme.black,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 13,
      textAlign: 'center',
      maxWidth: 560,
      lineHeight: 1.2,
      fontWeight: 600,
    },
  },
  AccordionText: {
    fontSize: 20,
    lineHeight: 1.2,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 11.5,
      color: 'dimgray',
      marginTop: 10
    },
  },
  AccordionIcon: {
    width: 16,
    height: 16,
    [theme.fn.smallerThan("sm")]: {
      width: 13,
      height: 13,
    },
  },
  titleHeading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: 20,
    color: theme.black,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 14,
      textAlign: 'center',
      maxWidth: 560,
      marginBottom: 20,
      lineHeight: 1.2,
      fontWeight: 600,
    },
  },
  mainTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 20,
    color: theme.black,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 16,
      textAlign: 'center',
      maxWidth: 260,
      marginTop: 20,
      lineHeight: 1.2,
      fontWeight: 600,
    },
  },
  title2: {
    fontSize: 38,
    lineHeight: 1.2,
    fontWeight: 700,
    maxWidth: 560,
    marginBottom: theme.spacing.xs / 2,
    color: "#626262",
    [theme.fn.smallerThan("sm")]: {
      fontSize: 26,
      textAlign: 'center',
      maxWidth: 560,
      lineHeight: 1.2,
      fontWeight: 700,
    },
  },
  Subtitletitle2: {
    fontSize: 18,
    lineHeight: 1.2,
    maxWidth: 620,
    marginBottom: 20,
    marginTop: 20,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
  },
  red: {
    color: "#ED3843"
  },
  borderRed: {
    border: "3px solid #EC322E",
    padding: 28,

  },
  description: {
    fontSize: 18,
    lineHeight: 1.2,
    textAlign: 'center',
    marginTop: 20,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 8.2,
      textAlign: 'center',
      marginTop: 10
    },
  },
  description4: {
    fontSize: 20,
    lineHeight: 1.2,
    marginTop: 20,
    fontWeight: 600,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 12,
      fontWeight: 600,
      marginTop: 10
    },
  },
  description1: {
    fontSize: 16,
    lineHeight: 1.2,
    maxWidth: 960,
    textAlign: 'center',
    marginTop: 20,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 11,
      textAlign: 'center',
      marginTop: 40,
      maxWidth: 290,
    },
  },
  Icon: {
    width: 60, height: 60, color: 'red',
    [theme.fn.smallerThan("sm")]: {
      width: 40, height: 40,
    },
  },
  Icon2: {
    width: 40, height: 40, color: 'red',
    [theme.fn.smallerThan("sm")]: {
      width: 22, height: 22,
    },
  },
  IconCenter: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.smallerThan("sm")]: {
      padding: 12
    },
  },
  Action: {
    width: 130, height: 130,
    [theme.fn.smallerThan("sm")]: {
      width: 65, height: 65,
    },
  },
  borderRedPadding: {
    padding: 40,
    [theme.fn.smallerThan("sm")]: {
      padding: 10
    },
  },
  marginTop: {
    marginTop: 40,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 20
    },
  },
  marginTop2: {
    marginTop: 60,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 30
    },
  },
  marginandpadding: {
    marginTop: 80,
    padding: 20,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 40,
      padding: 20
    },
  },
  imagepadding: {
    marginTop: 60,
    padding: 30,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 30,
      padding: 15
    },
  }
}));

export function Feature({ icon: Icon, title, description }) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  return (
    <div className="Features">
      <div className={classes.main}>
        <ActionIcon color="red" variant='transparent' className={classes.Action} radius={130}>
          <Icon className={classes.Icon2} />
        </ActionIcon >
      </div>
      <Text
        className={classes.title}
      >
        {title}
      </Text>
      <Text
        size="sm"
        color="black"
        className={classes.description}

      >
        {description}
      </Text>
    </div>
  );
}

const MOCKDATA = [
  {
    icon: Heart,
    title: "1,672,000",
    description:
      "Lives Transformed",
  },
  {
    icon: ScaleOutline,
    title: "6,688,000",
    description:
      "Kgs Lost",
  },
  {
    icon: Clock,
    title: "13,260,000",
    description:
      "Hours of Yoga",
  },
];
const App = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <div>
      <Header />
      <div style={{ paddingTop: 90, justifyContent: 'center', display: 'flex' }}>
        <img
          src={Redlogo}
        />
      </div>
      <div className={classes.main}>
        <Title className={classes.mainTitle}>Reduce <Text variant="gradient" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} inherit component="span">Fat</Text>. Reduce <Text variant="gradient" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} inherit component="span">Inches</Text>. Reduce <Text variant="gradient" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} inherit component="span">Stress</Text> - The Yogic Way!</Title>
      </div>
      <div className={classes.main}>
        <Text color='dimmed' className={classes.description1}>
          Developed by the living Himalayan master, Dr. Bharat Thakur himself, the Reduce Every Day (RED) program combines the best of the modern workout techniques and powerful yogic practices to increase your metabolism and work on the deepest layes of muscles. The result? A thinner, fitter, calmer and more energetic you!

        </Text>
      </div>
      <Container size='lg' className={classes.marginTop2}>
        <Grid>
          <Grid.Col md={6} sm={12}>
            <Grid className="center">
              <Grid.Col span={6} >
                <div className={classes.IconCenter}>

                  <Calendar className={classes.Icon2} color='red' />

                  <Text className={classes.description4}>
                    5 days a week
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={6} >
                <div className={classes.IconCenter}>
                  <Video className={classes.Icon2} color='red' />
                  <Text className={classes.description4}>
                    Live Zoom Classes
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={6} >
                <div className={classes.IconCenter}>
                  <Clock className={classes.Icon2} color='red' />
                  <Text className={classes.description4}>
                    1 Hour Dialy
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={6} >
                <div className={classes.IconCenter}>
                  <Yoga className={classes.Icon2} color='red' />
                  <Text className={classes.description4}>
                    Ongoiung Carrers
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col md={12} sm={12}>
                <div className={classes.main}>
                  <Button variant="gradient" className="button-7" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="xl" radius="xl">
                    Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
                  </Button>
                </div>
                <div className={classes.main}>
                  <Button variant="gradient" className="button-71" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="md" radius="xl">
                    Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
                  </Button>
                </div>
              </Grid.Col>
            </Grid>


          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <div className={classes.main}>
              <img
                className="Videoimg"
                src={Videologo}
              />
            </div>
          </Grid.Col>
        </Grid>

      </Container>
      <Container size="lg" className={classes.wrapper} >
        <LazyShow>
          <SimpleGrid
            cols={3}
            spacing={theme.spacing.xl * 2}
          >
            {features}
          </SimpleGrid>
        </LazyShow>
      </Container>
      <Container size="lg" className={classes.marginTop}>
        <Text className={classes.titleHeading}> Here is what our clients have to say about us...</Text>
        <LazyShow>
          <Grid className="NotCarousel">
            <Grid.Col md={4}>
              <img
                src={bgone}
                style={{ width: 368 }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <img
                src={bgtwo}
                style={{ width: 368 }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <img
                src={bgthree}
                style={{ width: 368 }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <img
                src={bgone}
                style={{ width: 368 }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <img
                src={bgtwo}
                style={{ width: 368 }}
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <img
                src={bgthree}
                style={{ width: 368 }}
              />
            </Grid.Col>
          </Grid>
        </LazyShow>
        <LazyShow>
          <div className="carousel">
            <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators withControls={false} height={200}>
              <Carousel.Slide> <img
                src={bgone}
                style={{ width: 308 }}
              /></Carousel.Slide>
              <Carousel.Slide>
                <img
                  src={bgtwo}
                  style={{ width: 308 }}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <img
                  src={bgthree}
                  style={{ width: 308 }}
                />
              </Carousel.Slide>
              <Carousel.Slide> <img
                src={bgone}
                style={{ width: 308 }}
              /></Carousel.Slide>
              <Carousel.Slide>
                <img
                  src={bgtwo}
                  style={{ width: 308 }}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <img
                  src={bgthree}
                  style={{ width: 308 }}
                />
              </Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
          </div>
        </LazyShow>
      </Container>

      <Container size="lg" className={classes.marginTop} >

        <Text className={classes.title}> One Hour, Multiple Benefits</Text>
        <div class="container_1">
          <div class="card-wrap_1">
            <div class="card_1">
              <div className="borderRed">
                <div className={classes.main}>
                  <Yoga className={classes.Icon} />
                </div>
                <Text
                  className='Title'
                >
                  All The Benefits of Traditional Yoga
                </Text>
                <Text
                  size="sm"
                  color="dimmed"
                  className='Desc'

                >
                  Higher Energy Levels, Feeling of Lightness,Hormonal balance,Improved immuntiy,Better Flexibility
                </Text>
              </div>
            </div>
          </div>
          <div class="card-wrap_1">
            <div className="card_1">
              <div className="borderRed">
                <div className={classes.main}>
                  <Barbell className={classes.Icon} />
                </div>
                <Text
                  className='Title'
                >
                  All The Benefits of Physical Workout
                </Text>
                <Text
                  size="sm"
                  color="dimmed"
                  className='Desc'

                >
                  Weight Loss,Inch Loss & Fat Loss,Improved muscle-tone,Increased stamina & cardiovascular endurance,High overall physical fitness
                </Text>
              </div>

            </div>
          </div>
          <div class="card-wrap_1">
            <div class="card_1">
              <div className="borderRed">
                <div className={classes.main}>
                  <Flower className={classes.Icon} />
                </div>
                <Text
                  className='Title'
                >
                  All The Benefits of Meditation
                </Text>
                <Text
                  size="sm"
                  color="dimmed"
                  className='Desc'

                >
                  Mental clarity,Emotional stability,Improved sleep,Reduction in stress levels,
                </Text>
              </div>
            </div>
          </div>
        </div>

      </Container>
      <Container size='lg' className={classes.marginandpadding} >
        <Grid className={classes.borderRed}>
          <Grid.Col md={8} sm={12} className={classes.borderRedPadding}>
            <div>
              <Text className={classes.title2}>
                <span className={classes.red}>Burn</span> Calories,Get <span className={classes.red}>Stronger</span> And <span className={classes.red}>Energise</span> Your System at The Same Time
              </Text>
              {/* <div className={classes.main}> */}
              <Button variant="gradient" className="button-7" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="xl" radius="xl">
                Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col md={4} sm={12}>
            <div className={classes.root}>
              <div className={classes.main}>
                <img
                  src={days}

                  className='days'
                />
              </div>
              <Grid>
                <Grid.Col span={3}> <Text className="Time" weight={600}>12 &nbsp; :</Text><Text className="Days" color='#737270'>Days</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>18 &nbsp; :</Text><Text className="Days" color='#737270'>Hours</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>59 &nbsp; :</Text><Text className="Days" color='#737270'>Minutes</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>12 &nbsp; </Text><Text className="Days" color='#737270'>Seconds</Text> </Grid.Col>
              </Grid>
              <Button variant="gradient" className="button-71" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="md" radius="xl">
                Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size="lg" className={classes.imagepadding}>
        <LazyShow>
          <div className={classes.main}>
            <img
              src={gridimg2}
              className="Yogaimage"
            />
          </div>
        </LazyShow>
      </Container>
      <Container size='lg' className={classes.marginandpadding}>
        <Grid className={classes.borderRed}>
          <Grid.Col md={8} sm={12} className={classes.borderRedPadding}>
            <div>
              <Text className={classes.title2}>
                The majority of people gain back the weight they lose , <span className={classes.red}>But Not with RED!</span>
              </Text>
              <Text className={classes.Subtitletitle2} color="#B0ADAA">Do you think dieting and burning more calories is helping you?It may help for a short while but will make you gain back all the weight you have lose soon</Text>
              {/* <div className={classes.main}> */}
              <Button variant="gradient" className="button-7" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="xl" radius="xl">
                Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col md={4} sm={12} >
            <div className={classes.root}>
              <div className={classes.main}>
                <img
                  src={days}
                  className='days'
                />
              </div>
              <Grid >
                <Grid.Col span={3}> <Text className="Time" weight={600}>12 &nbsp; :</Text><Text className="Days" color='#737270'>Days</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>18 &nbsp; :</Text><Text className="Days" color='#737270'>Hours</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>59 &nbsp; :</Text><Text className="Days" color='#737270'>Minutes</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>12 &nbsp; </Text><Text className="Days" color='#737270'>Seconds</Text> </Grid.Col>
              </Grid>
              <Button variant="gradient" className="button-71" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="md" radius="xl">
                Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size="lg" className={classes.imagepadding}>
        <LazyShow>
          <div className={classes.main}>
            <img
              src={gridimg}
              className="Yogaimage"
            />
          </div>
        </LazyShow>
      </Container>
      <Container size='lg' className={classes.marginandpadding} >
        <Grid className={classes.borderRed}>
          <Grid.Col md={8} sm={12} className={classes.borderRedPadding}>
            <div>
              <Text className={classes.title2}>
                <span className={classes.red}>Burn</span> Calories,Get <span className={classes.red}>Stronger</span> And <span className={classes.red}>Energise</span> Your System at The Same Time
              </Text>
              {/* <div className={classes.main}> */}
              <Button variant="gradient" className="button-7" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="xl" radius="xl">
                Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col md={4} sm={12}>
            <div className={classes.root}>
              <div className={classes.main}>
                <img
                  src={days}
                  className='days'
                />
              </div>
              <Grid>
                <Grid.Col span={3}> <Text className="Time" weight={600}>12 &nbsp; :</Text><Text className="Days" color='#737270'>Days</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>18 &nbsp; :</Text><Text className="Days" color='#737270'>Hours</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>59 &nbsp; :</Text><Text className="Days" color='#737270'>Minutes</Text> </Grid.Col>
                <Grid.Col span={3}> <Text className="Time" weight={600}>12 &nbsp; </Text><Text className="Days" color='#737270'>Seconds</Text> </Grid.Col>
              </Grid>
              <Button variant="gradient" className="button-71" gradient={{ from: "#E11E71", to: '#7B4AD7', deg: 105 }} mt={20} size="md" radius="xl">
                Join Today for just  <span style={{ textDecoration: 'line-through', marginLeft: 5, marginRight: 5 }}> 300</span>  200 AED
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      {/* Accordion */}
      <Container size="lg" className={classes.marginTop2}>
        <Text className={classes.title}> FAQ</Text>
        <Accordion defaultValue="customization" chevron={<Plus className={classes.AccordionIcon} />}
          styles={{
            chevron: {
              '&[data-rotate]': {
                transform: 'rotate(45deg)',
              },
              color: '#F0232F'
            },
          }}>
          <Accordion.Item value="customization">
            <Accordion.Control>
              <Text className={classes.AccordionText}>
                What exactly does one RED session include?
              </Text></Accordion.Control>
            <Accordion.Panel>
              <Text className={classes.AccordionText}>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Text></Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>
              <Text className={classes.AccordionText}>How is RED session different from a normal fitness workout?</Text></Accordion.Control>
            <Accordion.Panel>
              <Text className={classes.AccordionText}>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Text></Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>
              <Text className={classes.AccordionText}>How is RED session different from a normal fitness workout?</Text></Accordion.Control>
            <Accordion.Panel>
              <Text className={classes.AccordionText}>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Text></Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <div className={classes.main}>
          <Button variant="outline" color="red" radius="xl" mt={35}>
            View All
          </Button>
        </div>

      </Container>
      <Footers />
    </div>
  )
}
export default App