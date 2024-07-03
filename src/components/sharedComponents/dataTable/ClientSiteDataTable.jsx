import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";

function ClientSiteDataTable(props) {
  useEffect(() => {}, []);
  return (
    <div>
      <DataGrid
        rows={props.dataRows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection={props.isActive}
        disableRowSelectionOnClick
        onRowSelectionModelChange={(ids) => props.getselectedData(ids)}
        rowSelectionModel={props.selectedRows}
      />
    </div>
  );
}

export default ClientSiteDataTable;
