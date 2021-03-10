/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import MenuWrapper from '../../commons/Menu/styles/MenuWrapper';
import Button from '../../commons/Button';

import { Card } from '../../commons/Card';

const projects = [
  {
    title: '',
    info: '',
    img: '/images/port1.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/port2.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/port3.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/port4.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/port5.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/port6.png',
    url: 'https://itera.com.br/',
  },
];

export default function PortfolioSection() {
  return (
    <Grid.Container
      minHeight="48rem"
      backgroundImage="url(/images/bolinhas.png), url(/images/PortfolioText.png)"
      backgroundRepeat="no-repeat, no-repeat"
      backgroundPosition="left top, right top"
    >
      <Grid.Container
        maxWidth="initial"
        marginTop={{
          xs: '2rem',
          md: '4.7rem',
        }}
      >
        <Grid.Row
          flexWrap={{
            xs: 'wrap',
          }}
        >
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Text
              variant="paragraph1"
              tag="p"
              color="primary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              margin="0.2rem"
            >
              My feature Works
            </Text>
            <Text
              variant="title"
              tag="h1"
              color="primary.main"
              margin="0"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              marginTop="-1rem"
            >
              Portfolio
              <Text
                variant="title"
                tag="span"
                color="secondary.main"
                margin="0"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                .
              </Text>
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="primary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            justifyContent="center"
            flexDirection="row"
            paddingLeft="0px"
            alignItems="flex-end"
          >
            <MenuWrapper.CentralSide as="ul">
              {' '}
              {/* MenuWrapper.CentralSide */}
              {[
                { url: '/', name: 'All category' },
                { url: '/faq', name: 'Web design' },
                { url: '/sobre', name: '3D' },
                { url: '/sobre', name: 'Branding' },
              ].map((link) => (
                <li key={link.url}>
                  <Text variant="smallestException" tag="a" href={link.url}>
                    {link.name}
                  </Text>
                </li>
              ))}
            </MenuWrapper.CentralSide>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          alignItems="center"
          justifyContent="space-around"
          flexWrap={{
            lg: 'wrap',
          }}
        >
          {projects.map((item) => (
            <Card
              title={item.title}
              info={item.info}
              image={item.img}
              url={item.url}
            />
          ))}
        </Grid.Row>
        <Grid.Row
          justifyContent="center"
        >
          <Button
            variant="secondary.main"
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            display="block"
          >
            Discover all works
          </Button>
        </Grid.Row>
      </Grid.Container>
    </Grid.Container>
  );
}
