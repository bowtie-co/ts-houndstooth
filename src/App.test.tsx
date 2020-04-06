import React from 'react';
import { render } from '@testing-library/react';
import { App, AppProps } from './App';

test('renders coming soon link', () => {
  const props: AppProps = {
    link: {
      text: 'Coming Soon',
      href: 'https://houndstooth.cloud'
    }
  };

  const { getByText } = render(<App {...props} />);
  const linkElement = getByText(/Coming Soon/i);
  expect(linkElement).toBeInTheDocument();
});
