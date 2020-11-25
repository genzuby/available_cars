// @flow
import React from 'react';
import type { Node } from 'react';
import {
  PAGINATAION_WRAPPER,
  PAGINATION_TEXT,
  PAGINATION_BTN,
} from '../../style/componentStyle';

type Props = {
  page: number,
  totalPage: number,
  onClickPagenation: number => void,
};

function Pagination({ page, totalPage, onClickPagenation }: Props): Node {
  const setDisableBtn = (type: string) => {
    if (type === 'pre') {
      return page === 1;
    } else if (type === 'next') {
      return page === totalPage;
    }
  };
  const renderPagenationBtn = () => {
    const btnArr = [
      { name: 'First', type: 'pre', page: 1 },
      { name: 'Previous', type: 'pre', page: page - 1 },
      { name: 'Info' },
      { name: 'Next', type: 'next', page: page + 1 },
      { name: 'Last', type: 'next', page: totalPage },
    ];

    return btnArr.map((btn, index) => {
      return btn.name === 'Info' ? (
        <PAGINATION_TEXT key={index} data-testid="pagination-view">
          Page {(page: number)} of {(totalPage: number)}
        </PAGINATION_TEXT>
      ) : (
        <PAGINATION_BTN
          key={index}
          disabled={setDisableBtn((btn.type: string))}
          onClick={() => onClickPagenation((btn.page: number))}
        >
          {(btn.name: string)}
        </PAGINATION_BTN>
      );
    });
  };
  return (
    <PAGINATAION_WRAPPER data-testid="pagination">
      {renderPagenationBtn()}
    </PAGINATAION_WRAPPER>
  );
}

export default Pagination;
