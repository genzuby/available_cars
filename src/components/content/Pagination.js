import React from 'react';
import {
  PAGINATAION_WRAPPER,
  PAGINATION_TEXT,
  PAGINATION_BTN,
} from '../../style/componentStyle';

function Pagination({ page, totalPage, onClickPagenation }) {
  const setDisableBtn = type => {
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
        <PAGINATION_TEXT key={index}>
          Page {page} of {totalPage}
        </PAGINATION_TEXT>
      ) : (
        <PAGINATION_BTN
          key={index}
          disabled={setDisableBtn(btn.type)}
          onClick={() => onClickPagenation(btn.page)}
        >
          {btn.name}
        </PAGINATION_BTN>
      );
    });
  };
  return <PAGINATAION_WRAPPER>{renderPagenationBtn()}</PAGINATAION_WRAPPER>;
}

export default Pagination;
