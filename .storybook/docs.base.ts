import { withKnobs } from '@storybook/addon-knobs';

export const baseStorybookConfig = {
    decorators: [withKnobs],
    excludeStories: /.*Data$/
}