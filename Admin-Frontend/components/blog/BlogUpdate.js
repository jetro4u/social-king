import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getTags } from '../../actions/tag';
import { singleBlog, updateBlog } from '../../actions/blog';

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorjs-constants";
// import ModalExample from './ModalExample'


import { API } from '../../config';
import {Button, Card, Layout, SkeletonBodyText, SkeletonDisplayText, 
    SkeletonPage, TextContainer, EmptyState, OptionList } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import ResourceListWithProducts from '../ResourceList';
import store from 'store-js';

const BlogUpdate = ({ shop, router }) => {
    console.log('shop in BlogUpdate function', shop);

    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [modalState, setModalState] = useState(false);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const [checkedTag, setCheckedTag] = useState([]); // tags
    const [selectedTags, setSelectedTags] = useState([]); //polaris tags selected state 


    const [values, setValues] = useState({
        title: '',
        error: '',
        success: '',
        formData: '',
        title: '',
        body: ''
    });

    const { error, success, formData, title } = values;
    console.log('selectedTags in BlogUpdate function', selectedTags);


    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initBlog();
        initTags();
    }, [router]);

    const initBlog = () => {
        if (router.query.slug) {
            singleBlog(router.query.slug).then(data => {
                console.log('blog data:', data);
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values, title: data.title });
                    setBody(data.body);
                    getEditorBody(data.body);
                    setTagsArray(data.tags);
                }
            });
        }
    };

    const getEditorBody = body => {
        return body;
    };

    const setTagsArray = blogTags => {
        let ta = [];
        blogTags ? blogTags.map((t, i) => {
            ta.push(t._id);
        }) : [];
        setSelectedTags(ta);
    };

    const initTags = () => {
        getTags(shop).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };

    const showPolarisTags = () => {
        console.log('tags in showTags func', tags);
        let tagsArray = tags.map((t, i) => (
            {value: t._id, label: t.name}
        ));

        return (
            <Card>
              <OptionList
                title="Categorize and Increase Visibility with Tags"
                onChange={setSelectedTags}
                options={tagsArray}
                selected={selectedTags}
                allowMultiple
              />
            </Card>
        )
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
    };

    const editBlog = e => {
        e.preventDefault();
        updateBlog(formData, token, router.query.slug).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '', success: `Blog titled "${data.title}" is successfully updated` });
                if (isAuth() && isAuth().role === 1) {
                    // Router.replace(`/admin/crud/${router.query.slug}`);
                    Router.replace(`/admin`);
                } else if (isAuth() && isAuth().role === 0) {
                    // Router.replace(`/user/crud/${router.query.slug}`);
                    Router.replace(`/user`);
                }
            }
        });
    };

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );

    const handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        setModalState(false)
        console.log(resources)
        console.log(idsFromResources)
        store.set('ids', idsFromResources);
    };

    const emptyState = !store.get('ids');
    const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

    return (
       <SkeletonPage title={title} type="input" primaryAction secondaryActions={2}>
           {showSuccess()}
           {showError()}
           <ResourcePicker
              resourceType="Product"
              showVariants={false}
              open={modalState}
              onSelection={(resources) => handleSelection(resources)}
              onCancel={() => setModalState(false)}
            />
           <Button primary onClick={editBlog}>Publish</Button>
              <Layout>
                <Layout.Section>
                  <Card sectioned title="Title">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
                  </Card>
                  <Card sectioned title="Content">
                    <EditorJs
                        tools={EDITOR_JS_TOOLS}
                        data={body ? body[0] : {}}
                        enableReInitialize={true}
                      />
                  </Card>
                  <Card sectioned title="Variants">
                    <SkeletonBodyText />
                  </Card>
                </Layout.Section>
                <Layout.Section secondary>
                  <Card title="Tags">
                    <Card.Section>
                      {showPolarisTags()}
                    </Card.Section>
                    <Card.Section>
                      <SkeletonBodyText lines={1} />
                    </Card.Section>
                  </Card>
                  <Card title="Promoted Products" subdued>
                    <Card.Section>
                        <TitleBar
                          primaryAction={{
                            content: 'Select Related Products',
                            onAction: () => setModalState(true),
                          }}
                        />
                        {emptyState ? (
                           <Layout>
                                <p>Sample app using React and Next.js</p>
                                <EmptyState
                                    heading="Discount your products temporarily"
                                    action={{
                                      content: 'Select products',
                                      onAction: () => setModalState(true),
                                    }}
                                    image={img}
                                  >
                                  <p>Select products to change their price temporarily.</p>
                              </EmptyState>
                            </Layout>
                         ) : (
                        <ResourceListWithProducts />
                         )}
                    </Card.Section>
                    <Card.Section>
                      <SkeletonBodyText lines={2} />
                    </Card.Section>
                  </Card>
                </Layout.Section>
              </Layout>
        </SkeletonPage>
    );
};

export default withRouter(BlogUpdate);
