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
  btnNoremalStyle,
  BTN_WRAPPER,
} from '../../style/componentStyle';
import { Button } from 'react-bootstrap';

function Detail() {
  const history = useHistory();
  const stockId = useParams().stockNumber;
  const dispatch = useDispatch();

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

  return (
    <div style={detailStyle}>
      <HERO url={pictureUrl} />
      <DETAIL_INFO_GROUP>
        <DetailInfo title={title} desc={desc} />
        <DETAIL_INFO_SUB>
          <Favorites />
        </DETAIL_INFO_SUB>
      </DETAIL_INFO_GROUP>
      <BTN_WRAPPER justifyContent="center">
        <Button style={btnNoremalStyle} onClick={onClickBackToList}>
          Back to the list
        </Button>
      </BTN_WRAPPER>
    </div>
  );
}

export default Detail;
