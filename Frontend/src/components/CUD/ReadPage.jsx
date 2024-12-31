import React, { useEffect } from "react";
import axios from "axios";
import Table from "../Table";
function ReadPage() {
  const [dat, addData] = React.useState(null);
  //   const [show, chkShow] = React.useState(1);
  //   const [create, chkCreate] = React.useStatet(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user")
      .then((response) => {
        console.log(response.data);
        addData(response.data);
      })
      .catch((err) => {
        console.error("error in fetching data :", err);
      });
    //console.log("status value:", status);
    return () => {
      console.log("chk the clean up");
    };
  }, [dat]);

  //   const handleShow = () => {
  //     if (show) {
  //       chkShow(0);
  //     } else {
  //       chkShow(1);
  //     }
  //   };
  {
    /* Conditionally render Table */
  }

  return (
    <div>
      {dat && dat.data ? (
        <Table tableContent={dat.data} />
      ) : (
        <p>No data to display or table is hidden.</p>
      )}
    </div>
  );
}

export default ReadPage;
