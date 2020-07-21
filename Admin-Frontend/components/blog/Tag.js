import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import { create, getTags } from '../../actions/tag';
import EditTag from './EditTag'

import {
  Button,
  ButtonGroup,
  Card,
  Form,
  FormLayout,
  Stack,
  TextField,
  SettingToggle,
  TextStyle,
  Layout
} from '@shopify/polaris';


const Tag = (props) => {
    console.log('props in Tag.js component: ',props);

    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    });

    const { name, error, success, tags, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadTags();
    }, [reload]);

    const loadTags = () => {
        getTags(props).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log('tags data in loadTags func', data);
                setValues({ ...values, tags: data });
            }
        });
    };

    const showTags = (props) => {
        // console.log('props in ShowTags function', props);
        console.log('tags in showTags func', tags)
        return tags.map((t, i) => {
            return (
                <EditTag {...t} loadTags={loadTags.bind(this)} />
            );
        });
    };

    const clickSubmit = e => {
        console.log('ran clickSubmit function');
        e.preventDefault();
        // console.log('create category', name);
        create({ name }, props, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                console.log('data in createTag callback', data);
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Tag is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-danger">Tag already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Tag is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newTagFom = () => (
        <Form onSubmit={clickSubmit}>
             <FormLayout>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={name} required />
                    <Button submit={true}>
                        Create
                    </Button>
                </div>
             </FormLayout>
        </Form>
    );

    return (
        <React.Fragment>
            <Layout.AnnotatedSection
                title="Manage Tags"
                description="Create new tags which will be featured in your Social Network."
              >
                <div onMouseMove={mouseMoveHandler}>
                    {newTagFom()}
                    <ButtonGroup >
                        {showTags(props)}
                    </ButtonGroup>
                    
                </div>
            </Layout.AnnotatedSection>
        </React.Fragment>
    );
};

export default Tag;
