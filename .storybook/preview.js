import React from 'react';
import { addDecorator } from '@storybook/react';
import { ChakraProvider, extendTheme  } from "@chakra-ui/react";

// addDecorator(story => <Center>{story()}</Center>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

const colors = {
  green: "#00ff00",
  red: "#ff0000"
}

const theme = extendTheme({colors});

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story/>
    </ChakraProvider>
  )
]