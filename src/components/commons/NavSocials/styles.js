/* eslint-disable linebreak-style */

import styled from 'styled-components';

const SocialBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

SocialBar.StyleIcon = styled.a`
        margin-left: 16px;
        width: 32px;
        cursor: pointer;

        path, circle{
            transition: ${({ theme }) => theme.transition};
        }

        &:hover{
            path, circle{
                fill: ${({ theme }) => theme.colors.secondary.main.color};
                transform: translate3d(0, 2px, 0);
            }
        }
`;

export default SocialBar;
