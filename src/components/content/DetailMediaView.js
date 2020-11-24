import React from 'react';
import Favorites from './Favorites';
import { ACTION_ICON, DETAIL_INFO_SUB } from '../../style/componentStyle';
import { ICON_IMG } from '../../style/constant';

function DetailMediaView({
  prevPath,
  mediaType,
  stockId,
  onClickAdd,
  onClickDelete,
}) {
  const renderMediaView = () =>
    prevPath === '/favorites' ? (
      mediaType === 'mobile' ? (
        <ACTION_ICON
          size="30px"
          right="100px"
          top="30px"
          bgImg={ICON_IMG.DELETE_NORMAL}
          hoverImg={ICON_IMG.DELETE_HOVER}
          onClick={onClickDelete}
        />
      ) : (
        <DETAIL_INFO_SUB>
          <Favorites stockNumber={stockId} onClickDelete={onClickDelete} />
        </DETAIL_INFO_SUB>
      )
    ) : mediaType === 'mobile' ? (
      <ACTION_ICON
        size="30px"
        right="8%"
        top="10%"
        bgImg={ICON_IMG.ADD_NORMAL}
        hoverImg={ICON_IMG.ADD_HOVER}
        onClick={onClickAdd}
      />
    ) : (
      <DETAIL_INFO_SUB>
        <Favorites onClickAdd={onClickAdd} />
      </DETAIL_INFO_SUB>
    );
  return <div data-testid="detailMediaView">{renderMediaView()}</div>;
}

export default DetailMediaView;
