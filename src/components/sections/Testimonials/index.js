/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';

export default function Testimonials() {
  return (
    <Grid.Container
      minHeight="48rem"
      backgroundImage="url(/images/bolinhas.png), url(/images/TestimonialsText.png)"
      backgroundRepeat="no-repeat, no-repeat"
      backgroundPosition="left top, right center"
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
              What My Clients Says
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
              Testimonials
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
              Morbi et odio eu dui blandit pellentesque. Cras non tellus non est
              tempor ultricies. In arcu orci, condimentum sit amet rhoncus id, tincidunt
              eu nibh. Nulla rhoncus elit pellentesque, posuere augue in, vulputate ligula.
              Curabitur vel leo metus. Cras vitae erat ut lorem mattis congue.
            </Text>
            <Grid.Row>
              <img
                alt="Imagem do moco ok"
                style={{ display: 'block', margin: '0px', width: '4.5rem' }}
                src="images/icon.png"
              />
              <Text
                variant="paragraph1"
                tag="p"
                color="primary.light"
                marginLeft="1rem"
              >
                Lorem ipsum dolor sit amet
              </Text>
            </Grid.Row>

          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Grid.Container>
  );
}
