import './App.css';
import {useEffect, useState} from "react";
import {getContacts} from "./api/ContactService";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllContacts = async (page = 0, size = 10) =>{
    try{
      setCurrentPage(page);
      const {data} = await getContacts(page,size);
      setData(data);
      console.log(data);
    }catch (error) {
      console.log(error)
    }
  }

  const toogleModal = (show) => {console.log('I was click')}

  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <>
      <Header  toogleModal={toogleModal} nbOfContacts={data.totalElements} />
    </>
  );
}

export default App;
