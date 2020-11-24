import React, { useEffect, useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { DetailInfoContext } from '../../contexts/DetailInfoContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import useMedia from '../../hooks/useMedia';
import DetailInfo from '../Content/DetailInfo';
import DetailMediaView from '../Content/DetailMediaView';
import Loading from '../Content/Loading';
import {
  detailStyle,
  flexRowStyle,
  flexColumnStyle,
  detailMobileStyle,
  HERO,
  DETAIL_INFO_GROUP,
  BTN_WRAPPER,
  BUTTON,
} from '../../style/componentStyle';

function Detail() {
  const { detailInfo, fetchDetailInfo } = useContext(DetailInfoContext);
  const { addFavorite, deleteFavorite } = useContext(FavoritesContext);
  const history = useHistory();
  const stockId = useParams().stockNumber;
  const prevPath = history.location.state.prevPath;
  const [mediaType] = useMedia();

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

  const handleDeleteFavorite = () => {
    deleteFavorite(stockNumber);
    history.goBack();
  };

  const renderDetail = () => {
    if (typeof stockNumber === 'undefined') <Loading />;
    else {
      return stockNumber !== 'notfound' ? (
        <div style={detailStyle} data-testid="detail">
          <HERO url={pictureUrl} />
          <DETAIL_INFO_GROUP
            style={
              mediaType === 'mobile'
                ? {
                    ...flexColumnStyle,
                    ...detailMobileStyle,
                    position: 'relative',
                  }
                : flexRowStyle
            }
          >
            <DetailInfo title={title} desc={desc} />
            <DetailMediaView
              prevPath={prevPath}
              mediaType={mediaType}
              stockId={stockId}
              onClickAdd={addFavorite}
              onClickDelete={handleDeleteFavorite}
            />
          </DETAIL_INFO_GROUP>
          <BTN_WRAPPER justifyContent="center">
            <BUTTON onClick={onClickBackToList}>Back to the list</BUTTON>
          </BTN_WRAPPER>
        </div>
      ) : (
        <Redirect to="/notfound" />
      );
    }
  };

  return <>{renderDetail()}</>;
}

export default Detail;
