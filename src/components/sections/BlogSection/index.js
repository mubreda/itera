/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../../commons/Button';

import { Card } from '../../commons/Card';

const projects = [
  {
    title: '',
    info: '',
    img: '/images/blog1.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/blog2.png',
    url: 'https://itera.com.br/',
  },
  {
    title: '',
    info: '',
    img: '/images/blog3.png',
    url: 'https://itera.com.br/',
  },
];

export default function BlogSection() {
  return (
    <Grid.Container
      minHeight="48rem"

    >
      <Grid.Container
        backgroundImage="url(/images/blogText.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center top"
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
            value={{ xs: 12, md: 12 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            alignItems={{
              xs: 'flex-start',
              md: 'center',
            }}
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
              My Blog
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
              Blog
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
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
            Read all articles
          </Button>
        </Grid.Row>
      </Grid.Container>
    </Grid.Container>
  );
}
