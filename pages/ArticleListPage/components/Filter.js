import React from "react";
import { Button, Label, Input } from "reactstrap";

function Filter({ handleChange, filterName, handleFilter }) {
  return (
    <div>
          <Label for="article-filter">Article Name:</Label>
          <div className="d-flex justify-content-center">
            <Input 
              type="text" 
              id="article-filter"
              onChange={handleChange}
              value={filterName}
              placeholder="Please Input Article Name..." 
            />
            <Button 
              className='ml-3' 
              color="primary"
              onClick={handleFilter}
            >
              Search
            </Button>
          </div>
        </div>
  )
}

export default Filter;