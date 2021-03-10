/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
// import Button from '../Button';

export default function ExperiencesSection() {
  return (
    <Grid.Container
      minHeight="48rem"
      backgroundImage="url(/images/experienceText.png)"
      backgroundRepeat="no-repeat"
      backgroundPosition="left top"
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
            value={{ xs: 12, md: 12 }}
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
              My Experiences
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
              Experiences
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
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            justifyContent="flex-start"
            flexDirection="row"
            paddingLeft="0px"
            alignItems="flex-start"
          >
            {' '}
            <img
              alt="Imagem de timeline"
              style={{ display: 'block', margin: 'auto' }}
              src="images/timeline.jpg"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Grid.Container>
  );
}
