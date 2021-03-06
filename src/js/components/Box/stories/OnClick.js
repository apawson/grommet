import React from 'react';
import { Attraction } from 'grommet-icons';

import { Grommet, Box, Text } from 'grommet';
import { grommet } from '../../../themes';

export const OnClickBox = () => (
  <Grommet theme={grommet}>
    <Box justify="center" align="center" pad="large">
      {/* eslint-disable no-alert */}
      <Box
        border
        pad="large"
        align="center"
        round
        gap="small"
        hoverIndicator
        onClick={() => {
          alert('clicked');
        }}
      >
        <Attraction size="large" />
        <Text>Party</Text>
      </Box>
    </Box>
  </Grommet>
);

OnClickBox.story = { name: 'onClick' };
