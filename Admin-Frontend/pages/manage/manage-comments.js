// import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeComment, toggleCommentVisibility } from '../../actions/comment';
import moment from 'moment';
import {
  Button,
  ButtonGroup,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
  SettingToggle,
  TextStyle,
  Link,
  EmptyState,
  List
} from '@shopify/polaris';

const ManagePosts = (props) => {
    const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
    const [comments, setComments] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [message, setMessage] = useState('');
    const [toggleValue, setToggleValue] = useState(true);
    const token = getCookie('token');

    useEffect(() => {
        loadComments();
    }, []);

    const hideShowComment = id => {
        toggleCommentVisibility(id).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                console.log('data',data);
                loadComments();
            }
        });
    };

    const deleteComment = id => {
        removeComment(id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadComments();
            }
        });
    };


    const loadComments = () => {
        list(props).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log('comment array after updating: ',data);
                setComments(data);
                setLoaded(true);
            }
        });
    };

    
    const deleteConfirm = id => {
        let answer = window.confirm('Are you sure you want to delete this comment?');
        if (answer) {
            deleteComment(id);
        }
    };

    const showAllBlogs = () => {
        return loaded ? (
            <div className="row">
                <Layout.AnnotatedSection
                    title="Manage Posts"
                    description="Review new posts and set approved content live."
                  >
                {blogs.map((blog, i) => {
                    return (
                    <React.Fragment>
                        <SettingToggle
                            key={i}
                            action={{
                              content: blog.hidden ? 'Make Public': 'Make Hidden',
                              onAction: hideShowBlog.bind(null, blog.slug)
                              // onAction: hideShowBlog(blog.slug)

                            }}
                            hidden={blog.hidden}
                          >
                            <h3>{blog.title}</h3>

                            <p className="mark">
                                Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
                            </p>
                            This comment is{' '}
                            <TextStyle variation="strong">{blog.hidden ? 'hidden': 'public'}</TextStyle>.
                            <ButtonGroup segmented={true} fullWidth={false} connectedTop={true}>
                              <Button key={0} primary url={`/manage/blog/${blog.slug}`}>
                                       Review   
                              </Button>
                              <Button key={1} onClick={() => deleteConfirm(blog.slug)}>Delete</Button>
                            </ButtonGroup>
                        </SettingToggle>
                    </React.Fragment>) })};
                 </Layout.AnnotatedSection>
                </div>      
           ) : ( <p>Loading...</p> )
    };

    return (
        <Page>
            <Layout>
                {message && <div className="alert alert-warning">{message}</div>}

                {loaded && blogs.length==0
                    ? <EmptyState
                            heading="No New Posts Quite Yet"
                            action={{
                              content: 'Configure Settings',
                              onAction:  () => Router.push('/settings'),
                            }}
                            image={img}
                          >
                           <p>We recommend the following checklist to help you get started:</p>
                           <br/>
                           <List type="number">
                              <List.Item>Add Tags</List.Item>
                              <List.Item>Configure Settings (ie Customize the Look & Feel of Your Network)</List.Item>
                              <List.Item>Create Some Posts</List.Item>
                              <List.Item>Invite Shoppers to create posts (via an email blast, or each time they make a purchase)</List.Item>
                            </List>
                      </EmptyState>
                    : showAllBlogs()
                }
            </Layout>
        </Page>
    );
};

export default ManageComments;