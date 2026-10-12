import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  totalPlacesCount: number;
};

function App({ totalPlacesCount }: AppScreenProps): JSX.Element {
  return <MainScreen totalPlacesCount={totalPlacesCount} />;
}

export default App;
