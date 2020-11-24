import React, { useEffect, useContext, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { DetailInfoContext } from '../../contexts/DetailInfoContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import useMedia from '../../hooks/useMedia';
import DetailInfo from '../Content/DetailInfo';
import DetailMediaView from '../Content/DetailMediaView';
import Loading from '../Content/Loading';
import AlertMsg from '../Content/AlertMsg';
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
  const [showAlert, setShowAlert] = useState(false);
  const [redirectFavorite, setRedirectFavorite] = useState(false);
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

  const handleAddFavorite = () => {
    addFavorite();
    setShowAlert(true);
  };

  const redirectFavoritePage = () => {
    setShowAlert(false);
    setRedirectFavorite(true);
    return <Redirect to="/favorites" />;
  };

  const renderAlert = () => {
    const alertTitle = 'Added Favorite Item';
    const alertMessage = `Successfully added "${title}" on your favorite collection. Do you want to go to your collection?`;
    return (
      <AlertMsg
        show={showAlert}
        title={alertTitle}
        message={alertMessage}
        onClickConfirm={redirectFavoritePage}
        onClickDismiss={() => setShowAlert(false)}
      />
    );
  };

  const renderDetail = () => {
    if (typeof stockNumber === 'undefined') <Loading />;
    else {
      return stockNumber !== 'notfound' ? (
        <div style={detailStyle} data-testid="detail">
          <HERO url={pictureUrl} />
          {renderAlert()}
          {redirectFavorite && <Redirect to="/favorites" />}
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
              onClickAdd={handleAddFavorite}
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
