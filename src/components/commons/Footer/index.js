/* eslint-disable linebreak-style */
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import { Text } from '../../foundation/Text';
import Button from '../Button';
import SocialBar from '../NavSocials/styles';
import Instagram from '../../../theme/Icons/instagram';
import Linkedin from '../../../theme/Icons/linkedin';
import GitHub from '../../../theme/Icons/github';

export default function Footer() {
  return (
    <Grid.Row
      background="#212428"
      alignItems="center"
      justifyContent="center"
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
      >
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.main"
          textAlign="center"
          margin="0.2rem"
        >
          Get in touch
        </Text>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          margin="0"
          textAlign="center"
          marginTop="-1rem"
        >
          Let´s Work Together
          <Text
            variant="title"
            tag="span"
            color="secundary.main"
            margin="0"
          >
            .
          </Text>
        </Text>
        <img
          alt="Imagem do moco ok"
          style={{ display: 'block', margin: '0px', width: '4.5rem' }}
          src="images/icon.png"
        />
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.main"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi et odio eu dui blandit pellentesque. Cras non tellus non est
          tempor ultricies.
        </Text>
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
        <br />
      </Grid.Col>
      <SocialBar.StyleIcon href="https://www.instagram.com/mubreda/" target="_blank" rel="noopener noreferrer">
        <Instagram />
      </SocialBar.StyleIcon>
      <SocialBar.StyleIcon href="https://www.linkedin.com/in/mubreda/" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </SocialBar.StyleIcon>
      <SocialBar.StyleIcon href="https://github.com/mubreda" target="_blank" rel="noopener noreferrer">
        <GitHub />
      </SocialBar.StyleIcon>
    </Grid.Row>
  );
}
