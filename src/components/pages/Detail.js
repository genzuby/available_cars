import React, { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { DetailInfoContext } from '../../contexts/DetailInfoContext';
import DetailInfo from '../Content/DetailInfo';
import Favorites from '../Content/Favorites';
import {
  detailStyle,
  HERO,
  DETAIL_INFO_SUB,
  DETAIL_INFO_GROUP,
  BTN_WRAPPER,
  BUTTON,
} from '../../style/componentStyle';

function Detail() {
  const { detailInfo, fetchDetailInfo } = useContext(DetailInfoContext);
  const history = useHistory();
  const stockId = useParams().stockNumber;
  const prevPath = history.location.state.prevPath;

  useEffect(() => {
    fetchDetailInfo(stockId);
  }, []);

  const {
    pictureUrl,
    stockNumber,
    manufacturerName,
    modelName,
    color,
    fuelType,
    mileage,
  } = detailInfo;

  const title = `${manufacturerName} ${modelName}`;
  const desc =
    mileage &&
    `Stock # ${stockNumber} - ${mileage.number} ${mileage.unit} - ${fuelType} - ${color}`;

  const onClickBackToList = () => {
    history.goBack();
  };

  const renderAddFavoriteButton = () =>
    prevPath === '/favorites' ? (
      <Favorites stockNumber={stockId} />
    ) : (
      <Favorites />
    );

  const renderDetilInfo = () => {
    return (
      stockNumber && (
        <>
          <HERO url={pictureUrl} />
          <DETAIL_INFO_GROUP>
            <DetailInfo title={title} desc={desc} />
            <DETAIL_INFO_SUB>{renderAddFavoriteButton()}</DETAIL_INFO_SUB>
          </DETAIL_INFO_GROUP>
          <BTN_WRAPPER justifyContent="center">
            <BUTTON onClick={onClickBackToList}>Back to the list</BUTTON>
          </BTN_WRAPPER>
        </>
      )
    );
  };

  return (
    <div style={detailStyle} data-testid="detail">
      {renderDetilInfo()}
    </div>
  );
}

export default Detail;
