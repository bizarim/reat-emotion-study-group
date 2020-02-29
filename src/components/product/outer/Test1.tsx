import React from 'react';
import { outer_01 } from '../../../assets/index';

const Outer: React.FC = () => {
  return (
    <div className="pg-outer">
      <div className="pg-outer__wrap">
        <div className="pg-outer__wrap__title">
          <strong>아우터 BEST</strong>
        </div>
        <div className="pg-outer__wrap__item">
          <ul className="item-list">
            <li>
              <div className="item-list-img">
                <img src={outer_01} alt="outer_01" />
              </div>
              <div>
                <div className="color">color</div>
                <strong>양털자켓</strong>
                <span>30,000</span>
                <div className="tag">
                  <span>주문폭주</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Outer;
