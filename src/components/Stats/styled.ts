import styled from 'styled-components'
import {StatsChart} from '@styled-icons/ionicons-solid/StatsChart'
import { transparentize } from 'polished';
import { defaultTheme } from '../../styles/defaultTheme';

export const Wrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    left:0;
    top:0;
`

export const Stats = styled(StatsChart)`
  height: 3rem;
  color: ${transparentize(0.6, defaultTheme.colors.yellow)};
  margin-left: 10rem;
  margin-top: 1rem;
  cursor: pointer;
`
