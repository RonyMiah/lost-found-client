'use client';

import { useDeleteUserMutation, useGetAllUserQuery } from '@/redux/api/userApi';
import { Box, Button, CircularProgress, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { toast } from 'sonner';

const UserManageMent = () => {
  const query: Record<string, any> = {};

  query['role'] = 'USER';

  // const debaounceData = useDebounced({
  //   searchQuery: searchTerm,
  //   delay: 600,
  // });

  // if (!!debaounceData) {
  //   query['searchTerm'] = searchTerm;
  // }

  const { data, isLoading } = useGetAllUserQuery({ ...query });
  const [deleteUser] = useDeleteUserMutation();
  let userData;
  if (data) {
    userData = data?.users?.data;
  }

  // console.log(userData);
  const meta = data?.users?.meta;

  const handleSubmit = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteUser(id).unwrap();
      if (res?.id) {
        toast.success('User Deleted Successfully !');
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box mt={0.7}>
            <IconButton
              onClick={() => handleSubmit(row.id)}
              aria-label="delete"
            >
              <GridDeleteIcon />
            </IconButton>

            <Link href={`/dashboard/admin/users/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box mt={2}>
          <DataGrid rows={userData} columns={columns} />
        </Box>
      ) : (
        //Loading Component
        <CircularProgress
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px auto',
          }}
          color="secondary"
        />
      )}
    </Box>
  );
};

export default UserManageMent;
