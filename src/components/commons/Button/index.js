/* eslint-disable linebreak-style */

import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  box-shadow:-1px 3px 8px 1px rgba(243,91,15,0.56);
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 8px 26px;
  font-weight: bold;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.paragraph1}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('padding')}
  ${propToStyle('width')}
  ${propToStyle('height')}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export default Button;
