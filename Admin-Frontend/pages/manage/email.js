import React, { useRef } from 'react';

import {
  Layout,
  Page,
} from '@shopify/polaris';

import EmailEditor from 'react-email-editor';

const Email = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
     <Page>
        <Layout> 
          <button onClick={exportHtml}>Export HTML</button>
          
          <EmailEditor
            ref={emailEditorRef}
            onLoad={onLoad}
          />
        
        </Layout>  
    </Page>
  );
};

export default Email;