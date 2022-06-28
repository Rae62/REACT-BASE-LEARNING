import { Header, SerieDetail, SerieList } from "./composant";




function App() {
  return (
    <div className="App">
      <Header />,
      <div className="d-flex">
        <SerieList />,
        <SerieDetail />,
      </div>
    

    </div>
  );
}

export default App;