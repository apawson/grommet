import React from 'react';

import { Grommet, Box, InfiniteScroll, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const Example = props => (
  <Grommet theme={grommet}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => (
          <Box
            key={item}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </Grommet>
);

export const Simple = () => <Example />;
export const Show = () => <Example show={117} />;
export const Marker = () => (
  <Example
    renderMarker={marker => (
      <Box pad="medium" background="accent-1">
        {marker}
      </Box>
    )}
  />
);

Show.story = {
  name: 'Show 118th item',
};
