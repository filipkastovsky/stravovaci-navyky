// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Deck,
    Heading,
    ListItem,
    List as SpectacleList,
    Quote,
    Slide,
    Text,
    Image,
    Appear,
    Link,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

const List = (props) => <SpectacleList bulletStyle="25A0" {...props} />;

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'white',
        red: '#D53A29',
        darkOliveGreen: '#644D41',
        darkSlateGrey: '#1E2A30',
        grey: '#9A9A99',
    },

    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    },
);

const images = {
    bg: require('./bg.jpg'),
    burger: require('./burger.jpg'),
    vegan: require('./vegan.jpg'),
    shop: require('./shop.jpg'),
    tomato: require('./tomato.jpg'),
    diet: require('./diet.jpg'),
    meat: require('./meat.jpg'),
    bread: require('./bread.jpg'),
    salad: require('./salad.jpg'),
};

preloader(images);

export default () => (
    <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide bgImage={images.bg.replace('/', '')} bgDarken={0.4}>
            <Heading size={4} caps lineHeight={1} textColor="primary">
                Stravovací návyky a diety
            </Heading>
        </Slide>

        <Slide bgColor="darkOliveGreen">
            <Heading size={5} textColor="primary" caps>
                Jak se lidé stravují?
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>2-3 větších jídel, 1-3 menších jídel</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Rovnoměrně během dne</ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        Toto chování je uměle vytvořené lidmi, podléhá etiketě
                    </ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.shop.replace('/', '')}
            bgDarken={0.7}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Výběr jídla
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        Většina lidí má přístup k široké škále potravin
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide bgColor="darkSlateGrey">
            <Heading size={5} textColor="primary" caps>
                Faktory ovlivňující výběr jídla
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>Kulturní</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Sociální</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Ekonomické</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Enviromentální</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Politické</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Náboženské</ListItem>
                </Appear>
                <Appear>
                    <ListItem textColor="red">Individuální</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.burger.replace('/', '')}
            bgDarken={0.6}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Dieta
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        Řízený příjem potravy za účelem dosažení specifického
                        cíle
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide bgColor="darkOliveGreen" notes="Bezlepková => USA až 15%">
            <Heading size={5} textColor="primary" caps>
                Nejčastější diety
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>Reduční</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Vegeteriánské / veganské</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Paleo</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Bezlepkové</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.diet.replace('/', '')}
            bgDarken={0.7}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Redukční dieta
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        Cílem je snížit tělesnou hmotnost
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide bgColor="darkSlateGrey">
            <Heading size={5} textColor="primary" caps>
                Redukční dieta
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>Velká diverzita</ListItem>
                </Appear>
                <Appear>
                    <ListItem textColor="red">Kalorický deficit</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Pozitivní vliv fyzického pohybu</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide bgColor="darkSlateGrey">
            <Heading size={5} textColor="red" caps>
                Rizika
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>Nereálná očekávání</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Nárazová dieta</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Zpomalení metabolismu</ListItem>
                </Appear>
                <Appear>
                    <ListItem>"Jojo" efekt</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Podvodný marketing</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.vegan.replace('/', '')}
            bgDarken={0.7}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Vegeteriánství / veganství
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        Vyřazení masa či všech živočišných produktů z jídelníčku
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgColor="darkOliveGreen"
            notes="Denně sní člověk 300g masa, 2x doporučenné denní dávky"
        >
            <Heading size={5} textColor="primary" caps>
                Vegeteriánství / veganství
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>Etické důvody (ochrana zvířat)</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Ekologický dopad chovu</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Nadměrná konzumace masa ve společnosti</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgColor="darkOliveGreen"
            notes="Chybějící živiny: A, B2, B3, B6, B12, D3, K2, cholesterol, jód, železo, zinek"
        >
            <Heading size={5} textColor="red" caps>
                Rizika
            </Heading>

            <List textColor="primary">
                <Appear>
                    <ListItem>
                        Nekompletní strava (nedostatek některých vitamínů a
                        minerálů)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>Hormonální nerovnováha (fytoestrogeny)</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Riziko nedostatečného příjmu bílkovin</ListItem>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.meat.replace('/', '')}
            bgDarken={0.7}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Paleo
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        Vyřazení průmyslově zpracovaných potravin z jídelníčku
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.bread.replace('/', '')}
            bgDarken={0.7}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Bezlepková
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        Vyřazení průmyslově zpracovaných potravin z jídelníčku
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide
            bgImage={images.salad.replace('/', '')}
            bgDarken={0.7}
            bgColor="darkSlateGrey"
        >
            <Heading size={5} textColor="primary" caps>
                Jak tedy jíst zdravě? Jaká strava je nejlepší?
            </Heading>

            <List textColor="primary">
                <Appear>
                    <Text textColor="primary" textAlign="center">
                        To záleží
                    </Text>
                </Appear>
            </List>
        </Slide>

        <Slide bgColor="darkSlateGrey" textColor="primary">
            <Image
                src="https://health.gov/our-work/food-nutrition/2015-2020-dietary-guidelines/guidelines/img/figure-2-1.png"
                width={600}
            ></Image>
        </Slide>

        <Slide bgColor="darkSlateGrey" textColor="primary">
            <BlockQuote>
                <Quote>Děkuji za pozornost</Quote>
                <Text margin="20px 0 0 0" textColor="red">
                    Filip Kaštovský
                </Text>
            </BlockQuote>
        </Slide>

        <Slide
            bgColor="darkSlateGrey"
            textColor="primary"
            bgImage={images.tomato.replace('/', '')}
            bgDarken={0.8}
        >
            <section style={{ padding: 20 }}>
                <Heading size={5} textColor="primary" caps>
                    Zdroje
                </Heading>
                <Text textAlign="left" textSize={16} lineHeight={1.5}>
                    <div>
                        <Link
                            href="https://www.healthlinkbc.ca/health-topics/ad1169"
                            textColor="primary"
                        >
                            https://www.healthlinkbc.ca/health-topics/ad1169
                        </Link>
                    </div>

                    <div>
                        <Link
                            href="https://health.gov/our-work/food-nutrition/2015-2020-dietary-guidelines/guidelines/chapter-2/current-eating-patterns-in-the-united-states"
                            textColor="primary"
                        >
                            https://health.gov/our-work/food-nutrition/2015-2020-dietary-guidelines/guidelines/chapter-2/current-eating-patterns-in-the-united-states
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="https://www.wikiskripta.eu/w/Bezlepkov%C3%A1_dieta"
                            textColor="primary"
                        >
                            https://www.wikiskripta.eu/w/Bezlepkov%C3%A1_dieta
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="https://www.wikiskripta.eu/w/Dieta_p%C5%99i_obezit%C4%9B"
                            textColor="primary"
                        >
                            https://www.wikiskripta.eu/w/Dieta_p%C5%99i_obezit%C4%9B
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="https://www.eufic.org/en"
                            textColor="primary"
                        >
                            https://www.eufic.org/en
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="https://www.encyclopedia.com/food/news-wires-white-papers-and-books/eating-habits"
                            textColor="primary"
                        >
                            https://www.encyclopedia.com/food/news-wires-white-papers-and-books/eating-habits
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="https://www.wikipedia.org"
                            textColor="primary"
                        >
                            https://www.wikipedia.org
                        </Link>
                    </div>
                </Text>
            </section>
            <section>
                <Heading size={5} textColor="primary" caps>
                    Ilustrace
                </Heading>

                <Link href="https://www.pexels.com/" textColor="primary">
                    https://www.pexels.com/
                </Link>
            </section>
        </Slide>
    </Deck>
);
