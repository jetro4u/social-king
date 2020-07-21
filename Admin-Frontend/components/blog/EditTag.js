import React, {useCallback, useState, useEffect} from 'react';
import {Button, Modal, TextContainer, Form, FormLayout, TextField} from '@shopify/polaris';
import { updateTag } from '../../actions/tag';
import { getCookie } from '../../actions/auth';

export default function EditTag(props) {
  let {name} = props;
  const token = getCookie('token');

  const [active, setActive] = useState(false);
  const [tag, setTag] = useState('');
  const [values, setValues] = useState({
      error: '',
      success: '',
      tagName: ''
  });

  console.log('props in EditTag Modal: ',props);
  console.log('tag in EditTag component',tag)
  console.log('values in EditTag component',values);

  useEffect(() => {
      setTag(props.name);
  }, []);

  const handleModalChange = useCallback(() => setActive(!active), [active]);

  const handleTagChange = useCallback((value) => {
      setTag(value)
      setValues({ ...values, tagName: value });
      console.log('ran handleTagChange func with value: ', value);
  }, []);

//input logic
  const submitNewTag = () =>{
    console.log('tag in handleSubmit func',tag)
    console.log('values.tagName in handleSubmit func',values.tagName);

    updateTag({newTagName: tag, props, token}).then(data => {
        if(data){
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                props.loadTags();
            }
        }
       
    });
    setActive(false);
  };

  return (
    <div>
      <Button primary onClick={handleModalChange}>{name}</Button>
      <Modal
        open={active}
        onClose={handleModalChange}
        title={`Edit Tag`}
        primaryAction={{
          content: 'Update',
          onAction: ()=>submitNewTag(),
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleModalChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
                 Tag name
            </p>
              <FormLayout>
                <TextField
                  value={tag}
                  onChange={handleTagChange}
                  label=""
                  type="text"
                  helpText={
                    <span>
                       This is the tag name that will appear within your Social Network.
                    </span>
                  }
                />
              </FormLayout>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}

