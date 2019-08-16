import React, { PureComponent } from 'react';
import classnames from 'classnames';
import styles from './styles.css'

import defaultPng from './default.png';

class MenuBook extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { src, width, height, alt } = this.props;
        const defaultWidth = typeof Number(width) === 'number' ? `${width}px` : width;
        const defaultHeight = typeof Number(height) === 'number' ? `${height}px` : height;
        const defaultStyle = {
            width: defaultWidth || '48px',
            height: defaultHeight || '60px'
        };

        return (
            <img
                className={classnames(styles.component)}
                style={defaultStyle}
                src={src || defaultPng}
                alt={alt || '菜单图片'}
            />
        );
    }

}

export default MenuBook;
