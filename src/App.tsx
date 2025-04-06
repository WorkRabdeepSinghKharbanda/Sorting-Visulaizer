import style from "./style.module.scss";
import { SetupSorting,SortingVisualizer }  from "./component/molecules/index";
function App() {  
  
  return (
    <div className={`${style["container"]}`}>
      <div className="d-flex w-100 h-100">
        <SetupSorting />
        <SortingVisualizer />
      </div>
    </div>
  );
}

export default App;
