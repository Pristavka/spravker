import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('with text', () => <Button>Hello World</Button>)
    .add('with emoji', () => (
        <Button>
            <span role='img'>😀 😎 👍 💯</span>
        </Button>
    ));
