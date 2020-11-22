import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getDetailInfo } from '../../redux/actions';
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
  const history = useHistory();
  const stockId = useParams().stockNumber;
  const dispatch = useDispatch();
  const prevPath = history.location.state.prevPath;

  useEffect(() => {
    dispatch(getDetailInfo(stockId));
  }, []);

  const carDetailInfo = useSelector(state => state.carDetailInfo);
  const {
    pictureUrl,
    stockNumber,
    manufacturerName,
    modelName,
    color,
    fuelType,
    mileage,
  } = carDetailInfo;

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

  return (
    <div style={detailStyle}>
      <HERO url={pictureUrl} />
      <DETAIL_INFO_GROUP>
        <DetailInfo title={title} desc={desc} />
        <DETAIL_INFO_SUB>{renderAddFavoriteButton()}</DETAIL_INFO_SUB>
      </DETAIL_INFO_GROUP>
      <BTN_WRAPPER justifyContent="center">
        <BUTTON onClick={onClickBackToList}>Back to the list</BUTTON>
      </BTN_WRAPPER>
    </div>
  );
}

export default Detail;
