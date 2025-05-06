import { Search } from '@mui/icons-material';
import { alpha, InputBase, styled } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const SearchBar = styled('div') (({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #ccc',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '40%',
}));

const SearchIconWrapper = styled('div') (({ theme }) => ({
    padding: theme.spacing(0 ,2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase) (({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    }
}));

function UsersPage() {
    return (
        <Box>
            <SearchBar sx={{ mb: 2 }}>
                <SearchIconWrapper>
                    <Search />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search users…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </SearchBar>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    />
            </Box>
        </Box>
    );
}

export default UsersPage;