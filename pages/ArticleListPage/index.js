import React, { useState } from "react";
import { Card, Button, CardTitle } from "reactstrap";

// components
import Filter from "./components/Filter";
import TableArticle from "./components/TableArticle";
import ModalExample from "./components/Modal";

// general function
// import { handleChange, handleFilter, toggle } from "./general-function";
import { useSelector } from "react-redux";

// handle change
function handleChange(event, setFilterName) {
  setFilterName(event.target.value);
}

// handle filter
function handleFilter(article, filterName, setArticle, contohData) {
  const newList = article.data.filter(function(value) {
    return value.title === filterName
  });
  
  if(filterName !== "") {
    setArticle({ data: newList });
  } else {
    setArticle({ data: [...contohData] })
  }
}

// show/hide modal
function toggle(showModal, setShowModal) {
  setShowModal(!showModal)
}

// import { ArticleApi } from "@/api/ArticleApi";

const contohData = [
  {
    id: 1,
    title: 'Hiking ke Pangrango'
  },
  {
    id: 2,
    title: 'Jalan-jalan ke Pangandaran'
  }
]

function ArticleListPage() {
  // show/hide add article modal
  const [showModal, setShowModal] = useState(false);
  // data
  const [article, setArticle] = useState({ data: [...contohData] });
  // filter
  const [filterName, setFilterName] = useState("")
  // redux state
  const reduxState = useSelector(function(state) {
    return state
  });

  console.log(reduxState.user)

  return (
    <div>
      <Card className='m-3 p-3' outline color="secondary">
        <CardTitle tag="h3">Article List</CardTitle>
        <hr />
        <Filter 
          filterName={filterName} 
          handleChange={(event) => handleChange(event, setFilterName)} 
          handleFilter={() => handleFilter(article, filterName, setArticle, contohData)}
        />
      </Card>
      <Card className='m-3 p-3' outline color="secondary">
        <TableArticle article={article} />
        <Button type='button' onClick={() => toggle(showModal, setShowModal)}>Add Article</Button>
        <ModalExample modal={showModal} toggle={() => toggle(showModal, setShowModal)} />
      </Card>
    </div>
  )
}

export default ArticleListPage;