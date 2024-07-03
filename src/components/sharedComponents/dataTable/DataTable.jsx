import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function DataTable(props) {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });
  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCountState, setRowCountState] = React.useState(
    props.pageState?.total || 0
  );
  React.useEffect(() => {
    console.log("object");
    setRowCountState((prevRowCountState) =>
      props.pageState?.total !== undefined
        ? props.pageState?.total
        : prevRowCountState
    );
    console.log(rowCountState);
    props.GetPurchaseOrderNoAPi(paginationModel);
  }, [paginationModel]);

  React.useEffect(() => {
    props.GetPurchaseOrderNoAPi(paginationModel);
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        rowCount={props.pageState.total}
        loading={props.isLoading}
        pageSizeOptions={[5, 10, 15, 20]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
        // onPageChange={(newPage) =>
        //     setpageState((old) => ({ ...old, page: newPage + 1 }))
        // }
        // onPageSizeChange={(newPageSize) =>
        //     setpageState((old) => ({ ...old, pageSize: newPageSize }))
        // }
      />
    </div>
  );
}
