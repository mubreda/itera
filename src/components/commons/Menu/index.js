/* eslint-disable linebreak-style */
import React from 'react';
import MenuWrapper from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';
import Button from '../Button';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Text
          variant="title"
          tag="h1"
          color="primary.main"
          margin="0"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
          marginTop="-0.5rem"
          fontSize="2rem"
        >
          John Doe
          <Text
            variant="title"
            tag="span"
            color="secondary.main"
            margin="0"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            marginTop="-0.5rem"
            fontSize="2rem"
          >
            .
          </Text>
        </Text>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'About me' },
          { url: '/whatido', name: 'What i do?' },
          { url: '/portfolio', name: 'Portfolio' },
          { url: '/blog', name: 'Blog' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
        <Button
          variant="secondary.main"
          margin="0"
          display="block"
        >
          Contact
        </Button>
      </MenuWrapper.CentralSide>
    </MenuWrapper>
  );
}
