// .storybook/preview.js

import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';

addDecorator(withContexts(contexts));

import '../src/index.scss';