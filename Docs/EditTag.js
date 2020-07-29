import React, {useCallback, useState, useEffect} from 'react';
import {Button, Modal, TextContainer, Form, FormLayout, TextField} from '@shopify/polaris';
import { updateTag, removeTag } from '../../actions/tag';
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
      setTag(props);
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

    const deleteConfirm = slug => {
        console.log('slug in deleteConfirm', slug)
        console.log('tag in deleteConfirm', tag)
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
            deleteTag(slug);
        }
    };

    const deleteTag = slug => {
        // console.log('delete', slug);
        removeTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                // setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
                console.log('data in deleteTag');
                props.loadTags();
            }
        });
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
            content: 'Delete',
            destructive: true,
            onAction: ()=>deleteConfirm(tag.slug),
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
                  value={tag.name}
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
              <Button destructive={true}>Delete</Button>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}

