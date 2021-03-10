/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../Button';

export default function Capa() {
  return (
    <Grid.Container
      maxWidth="initial"
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row
        flexWrap={{
          xs: 'wrap',
        }}
      >
        <Grid.Col
          value={{ xs: 6, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems={{
            xs: 'flex-start',
            md: 'flex-start',
          }}
        >
          <Text
            variant="title"
            tag="h1"
            color="primary.main"
            margin="0"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            fontSize="72px"
          >
            Hello
            <Text
              variant="title"
              tag="span"
              color="secondary.main"
              margin="0"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              fontSize="72px"
            >
              .
            </Text>
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
            fontSize="72px"
          >
            I am
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
            fontSize="72px"
          >
            John
          </Text>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 6, md: 2 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems={{
            xs: 'center',
            md: 'flex-start',
          }}
        >
          <Text
            variant="smallestException"
            tag="p"
            color="primary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            margin="0"
            marginLeft="-6rem"
            marginTop="1.5rem"
          >
            I am a graphic Desginer
          </Text>
          <Text
            variant="smallestException"
            tag="p"
            color="primary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            margin="0.5rem"
            marginLeft="-6rem"
          >
            and UI Desginer
          </Text>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row
        marginTop="-48px"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
      >
        <Button
          variant="secondary.main"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
        >
          Say Hello
        </Button>
        <Button
          ghost
          variant="secondary.main"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
        >
          About me
        </Button>
      </Grid.Row>
    </Grid.Container>
  );
}
