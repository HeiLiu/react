import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './menu.css';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    mealInfo: PropTypes.string,
    num: PropTypes.number,
  };

  static defaultProps = {
    mealInfo: '菜单备注',
    num: 0,
  };
  render() {
    const { selected, mealInfo, num} = this.props;
    return (
      <div className="component">
        <div className="menuBook"></div>
        <div className="detail">
          <div className="meal">{mealInfo}</div>
          <div className="dishNum">共{num}道</div>
        </div>
      </div>
    );
  }
}

export default Menu;
