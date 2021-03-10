/* eslint-disable linebreak-style */
import React from 'react';
import ListSkills from '../../commons/List';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
// import Button from '../Button';

export default function MySkillsSection() {
  return (
    <Grid.Container
      minHeight="48rem"
      backgroundImage="url(/images/bolinhas.png), url(/images/Skillstext.png)"
      backgroundRepeat="no-repeat, no-repeat"
      backgroundPosition="17rem 5rem, 45rem 0rem"
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
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            paddingLeft="12.5rem"
            paddingRight="12.5rem"
            paddingBottom="3rem"
          >
            <Text
              variant="paragraph1"
              tag="p"
              color="primary.light"
              textAlign="center"
              margin="0.2rem"
              marginLeft={{
                xs: '0',
                md: '-11rem',
              }}
            >
              My Skills
            </Text>
            <Text
              variant="title"
              tag="h1"
              color="primary.main"
              margin="0"
              textAlign="center"
              marginTop="-1rem"
            >
              My Skills
              <Text
                variant="title"
                tag="span"
                color="secondary.main"
                margin="0"
              >
                .
              </Text>
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="primary.light"
              textAlign="center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi et odio eu dui blandit pellentesque. Cras non tellus non est
              tempor ultricies.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 6, md: 3 }}
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
              variant="title"
              tag="h1"
              color="primary.main"
              margin="0"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              fontSize="28px"
            >
              Languages
            </Text>
            <ListSkills>
              <li>
                - CSS3(SCSS, LESS)
              </li>
              <li>
                - HTML5
              </li>
              <li>
                - JavaScript(ES6)
              </li>
              <li>
                - PHP
              </li>
              <li>
                - Python
              </li>
            </ListSkills>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 6, md: 3 }}
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
              variant="title"
              tag="h1"
              color="primary.main"
              margin="0"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              fontSize="28px"
            >
              Methodos & Tools
            </Text>
            <ListSkills>
              <li>
                - CSS3(SCSS, LESS)
              </li>
              <li>
                - HTML5
              </li>
              <li>
                - JavaScript(ES6)
              </li>
              <li>
                - PHP
              </li>
              <li>
                - Python
              </li>
            </ListSkills>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 6, md: 3 }}
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
              variant="title"
              tag="h1"
              color="primary.main"
              margin="0"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              fontSize="28px"
            >
              Frameworks & Libs
            </Text>
            <ListSkills>
              <li>
                - CSS3(SCSS, LESS)
              </li>
              <li>
                - HTML5
              </li>
              <li>
                - JavaScript(ES6)
              </li>
              <li>
                - PHP
              </li>
              <li>
                - Python
              </li>
            </ListSkills>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 6, md: 3 }}
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
              variant="title"
              tag="h1"
              color="primary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              fontSize="28px"
            >
              Additional
            </Text>
            <ListSkills>
              <li>
                - CSS3(SCSS, LESS)
              </li>
              <li>
                - HTML5
              </li>
              <li>
                - JavaScript(ES6)
              </li>
              <li>
                - PHP
              </li>
              <li>
                - Python
              </li>
            </ListSkills>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Grid.Container>
  );
}
