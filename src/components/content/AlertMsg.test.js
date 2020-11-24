import { render, screen } from '@testing-library/react';
import AlertMsg from './AlertMsg';

const renderWrapper = ({
  showAlert,
  alertTitle,
  alertMessage,
  redirectFavoritePage,
  onclickDismiss,
}) => {
  return render(
    <AlertMsg
      show={showAlert}
      title={alertTitle}
      message={alertMessage}
      onClickConfirm={redirectFavoritePage}
      onClickDismiss={onclickDismiss}
    />
  );
};

it('renders propperly', () => {
  renderWrapper({
    showAlert: true,
    alertTitle: 'test',
    alertMessage: 'test message',
  });
  expect(screen.getByTestId('alertMsg')).toBeInTheDocument();
});

it('shows information when it show option is false', () => {
  const { getByTestId } = renderWrapper({
    showAlert: true,
    alertTitle: 'test',
    alertMessage: 'test message',
  });
  expect(getByTestId('alertMsg')).toHaveTextContent('test');
});
