import {baseStorybookConfig} from '../../../.storybook/docs.base'

export const defaultStorybookConfig = {
    ...baseStorybookConfig,
    parameters: {
    docs: { 
        description: { 
            component: 'npm install -S @galaxy/core' 
        } 
    },
  }
}