import Header from "./components/Header/Header";
import AddEmployee from "./components/AddEmployeeSection/AddEmployee";
import EmployeeList from "./components/EmployeeList/EmployeeList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

export default App;
