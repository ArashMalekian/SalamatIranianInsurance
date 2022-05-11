import React , {useContext , useState , useEffect} from 'react';
import { DataGrid , GridToolbar , GridToolbarColumnsButton , GridToolbarContainer , GridToolbarFilterButton 
, GridToolbarExport , GridToolbarDensitySelector ,faIR
} from '@mui/x-data-grid';
import { infoContext } from '../../../contexts/AppContext';
import classes from './TableSection.module.scss'



export default function TableSection() {
    const context = useContext(infoContext)
    const columns = [
      { field: 'ni', headerName: 'سود خالص', width: 170 , headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
    },
      {
        field: 'mc',
        headerName: 'ارزش بازار',
        width: 170,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
      },
      {
        field: 'longTermInvestment',
        headerName: 'مقدار سرمایه گذاری بلند مدت',
          type: 'number',
          width:170,
          headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        },
        { field: 'pNav', headerName: 'نسبت قیمت به ارزش خالص دارایی', width: 200 , headerAlign: 'center',headerClassName: 'super-app-theme--header', },
        { field: 'nav', headerName: 'ارزش خالص دارایی', width: 150 , headerAlign: 'center',headerClassName: 'super-app-theme--header',},
        { field: 'name', headerName: 'نماد', width: 200 ,headerAlign: 'center',headerClassName: 'super-app-theme--header', },
    ];
    function CustomToolbar() {
      return (
        <GridToolbarContainer style={{textAlign:"center" , width:"100%" , display:"flex" , justifyContent:"space-evenly" }} >
          <GridToolbarColumnsButton variant='outlined' className={classes.tableheadbtn} />
          <GridToolbarFilterButton variant='outlined' className={classes.tableheadbtn} />
          <GridToolbarDensitySelector variant='outlined' className={classes.tableheadbtn} />
          <GridToolbarExport variant='outlined' className={classes.tableheadbtn} />
        </GridToolbarContainer>
      );
    }
      

    const [row, setRow] = useState([])
    useEffect(() => {
      var rows =[]
        for(var i=0 ; i< 27 ; i++){
          rows.push({
            name : context.ostani.nameFA[i],
            nav : context.ostani.nav[i],
            pNav : context.ostani.pnav[i],
            longTermInvestment : context.ostani.longTermInvestment[i],
            mc : context.ostani.mc[i].toLocaleString(),
            ni : context.ostani.NI[i].toLocaleString(),
            id:i
            })
        }
        setRow(rows)
      return () => {
        
      }
    }, [])


    
  return (
    <div className={classes.tablecontainer} >
      {
        !context.loading ?
        <DataGrid
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        getRowClassName={"rows"}
        sx={{
          '& rows ' : {
            color:"red"
          },
        '& .super-app-theme--header': {
          color: '#134e6f',
        },

        }}
        columns={columns}
        rows={row}
        pageSize={6}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: CustomToolbar,
        }}
      />  
          :
          <h1>wait</h1>
      }
    </div>
  );
}
