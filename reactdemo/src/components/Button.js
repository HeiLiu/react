import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';

import Button from '../../src/oldComponents/Button';

storiesOf('oldComponents|Button', module)
    .add('default', () => <Button />)
    .add('{ label }', () => <Button label={text('label', '添加成分')} />)
    .add('{ label, fontSize, disabled={false}, setIconLeft, icon={plus} }', () => (
        <Button
            label={text('label', '添加成分')}
            icon={text('icon', 'plus')}
            setIconLeft
            disabled={boolean('disabled', false)}
            fontSize={number('fontSize', 14)}
        />
    ))
    .add('{ label, disabled={true}, setIconRight, icon={plus} }', () => (
        <Button label={text('label', '添加成分')} icon={text('icon', 'plus')} setIconRight disabled={boolean('disabled', true)} />
    ))
    .add('{ label, setIconLeft, setIconRight,icon={plus} }', () => (
        <Button label={text('label', '添加成分')} icon={text('icon', 'plus')} setIconLeft setIconRight />
    ));
