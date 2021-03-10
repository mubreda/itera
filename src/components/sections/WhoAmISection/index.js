/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../../commons/Button';

export default function WhoAmISection() {
  return (
    <Grid.Container
      minHeight="48rem"
      backgroundImage="url(/images/bolinhas.png)"
      backgroundRepeat="no-repeat"
      backgroundPosition="right top"
    >
      <Grid.Container
        backgroundImage="url(/images/AboutMeText.png)"
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
            value={{ xs: 6, md: 6 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            justifyContent="flex-start"
            flexDirection="row"
            marginLeft="0px"
            alignItems="flex-start"
          >
            {' '}
            <img
              alt="Imagem do moco ok"
              style={{ display: 'block', margin: '0px' }}
              src="images/Moco2.png"
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 6, md: 6 }}
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
              About me
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
              Who am I
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
                ?
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
              Morbi et odio eu dui blandit pellentesque. Cras non tellus non est
              tempor ultricies. In arcu orci, condimentum sit amet rhoncus id, tincidunt
              eu nibh. Nulla rhoncus elit pellentesque, posuere augue in, vulputate ligula.
              Curabitur vel leo metus. Cras vitae erat ut lorem mattis congue.
            </Text>
            <Button
              ghost
              variant="secondary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              padding={{
                md: '0px 0px',
              }}
            >
              Find out more
              {' '}
              {'-->'}
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Grid.Container>
  );
}
