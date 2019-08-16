import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

import styles from './styles.css';

import Icon from 'oldComponents/Icon';

class Button extends PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.string,
        icon: PropTypes.string,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        text: PropTypes.string,
        fontSize: PropTypes.number,
        shape: PropTypes.string
    };

    static defaultProps = {
        type: 'primary',
        size: 'default',
        icon: '',
        loading: false,
        disabled: false,
        text: '',
        fontSize: 15,
        shape: ''
    };

    handleClick() {
        console.log('hahah');
    }

    getTypeClassName = type => {
        const classNames = {
            default: styles.default,
            primary: styles.primary,
            danger: styles.danger
        }
        return type ? classNames[type] : classNames.default;
    }

    getShapeClass = shape => {
        const classNames = {
            square: styles.square,
            circle: styles.circle
        }
        console.log(shape);
        if(['circle', 'square'].indexOf(shape) !== -1) {
            return classNames[shape];
        }
    }

    getSizeClass = size => {
        const classNames = {
            small: styles.small,
            large: styles.large
        }
        if(['small', 'large'].indexOf(size) !== -1) {
            return classNames[size];
        }
    }

    render() {
        const { type, size, icon, loading, disabled, text, fontSize, shape, classname } = this.props;

        const componentStyle = {
            fontSize: fontSize
        }
        const typeClass = this.getTypeClassName(type);
        const shapeClass = this.getShapeClass(shape);
        let sizeClass = this.getSizeClass(size);
        if(shapeClass) sizeClass = '';

        return (
            <button
                onClick={this.handleClick}
                className={classnames(sizeClass, styles.component, typeClass, shapeClass, classname)}
                style={componentStyle}
                size={size}
                disabled={disabled}
            >
                <span>
                    {text}

                    {loading &&
                        (<span className={classnames(styles.loading_icon)}>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z">
                                </path>
                            </svg>
                        </span>)
                    }

                    {icon && <Icon shape={icon} className={classnames(styles.rightIcon)} />}
                </span>
            </button>
        );
    }
}

export default Button;
