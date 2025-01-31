import { Edit, ReferenceField, SimpleForm, TextInput} from 'react-admin';
 
 const PostEdit = () => (
    <Edit>
        <SimpleForm >
        <ReferenceField source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;