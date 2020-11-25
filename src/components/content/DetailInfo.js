// @flow
import React from 'react';
import type { Node } from 'react';
import { DETAIL_INFO } from '../../style/componentStyle';

function DetailInfo({ title, desc }: { title: string, desc: string }): Node {
  return (
    <DETAIL_INFO data-testid="detailInfo">
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <p>
        This car is currently available and can be delivered as soon as tomorrow
        morning. Please be aware that delivery times shown in this page are not
        definitive and may change due to bad weather conditions.
      </p>
    </DETAIL_INFO>
  );
}

export default DetailInfo;
