import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { ChangeEvent } from 'react';

// Define your GraphQL mutation
const UPLOAD_IMAGE = gql`
  mutation Mutation($file: Upload!) {
  uploadFile(file: $file) {
    filename
  }
}
`;

function FileUpload() {
  const [uploadFile] = useMutation(UPLOAD_IMAGE);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    console.log(file)

    try {
      const res = await uploadFile({
        variables: { file },
      });

      console.log('Image uploaded successfully:', res);

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
