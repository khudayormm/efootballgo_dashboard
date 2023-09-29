import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    // Create a FormData object and append the selected file
    const formData = new FormData();
    formData.append('document', selectedFile);
    formData.append('caption', "any changes");

    try {
      // Make a POST request to send the file to the bot
      const response = await axios.post(
        `https://api.telegram.org/bot6496550938:AAGTMAqLhr3tras1aVcWEdYyRbxaSqjqgg4/sendDocument`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          params: {
            chat_id: "6249325272", // Replace with your user's chat ID
          },
        }
      );

      console.log('File sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Send File to Telegram Bot</button>
    </div>
  )
};

export default FileUpload;
