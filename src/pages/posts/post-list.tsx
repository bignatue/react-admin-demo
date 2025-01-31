import { Datagrid, List, ReferenceField, TextField, FunctionField, EditButton, TextInput, ReferenceInput} from 'react-admin';
 
 const PostList = () => {
    const postFilters = [
        <TextInput source='q' label='Search' alwaysOn />,
        <ReferenceInput source='userId' label='User' reference='users' />
    ]
    return (
        <List filters={postFilters}>
            <Datagrid sx={{
                '.RaDatagrid-headerCell': {
                    padding: "16px",
                }
            }}>
                <TextField source="id" />
                <FunctionField source="title" label="Post Title" render={(record) => `${record.body.substring(0, 60)}`}/>
                <FunctionField source="body" label="Description" render={(record) => `${record.body.substring(0, 100)}...`}/>
                <ReferenceField source="userId" reference="users" />
                <EditButton />
            </Datagrid>
        </List>
    )
 };

export default PostList;