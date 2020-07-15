import React, {useCallback, useState} from 'react';
import {Button, Caption, DropZone, Stack, Thumbnail} from '@shopify/polaris';

export default function IconDropZone(handleDropZoneDrop) {
  
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const fileUpload = !files.length && <DropZone.FileUpload
                                          actionTitle="Add file"
                                          actionHint="or drop files to upload" />;

  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={
              validImageTypes.indexOf(file.type) > 0
                ? window.URL.createObjectURL(file)
                : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
            }
          />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  return (
    
  );
}
