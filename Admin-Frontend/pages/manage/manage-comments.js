// import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeComment, toggleCommentVisibility } from '../../actions/comment';
import { renderBlocks } from "../../components/blog/renderBlocks";
import renderHTML from 'react-render-html';
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

const ManageComments = (props) => {
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

    const showAllComments = () => {
        return loaded ? (
                <Layout.AnnotatedSection
                    title="Manage Comments"
                    description="Review new Comments and set approved content live."
                  >
                {comments.map((comment, i) => {
                    return (
                      <SettingToggle
                          key={i}
                          action={{
                            content: comment.hidden ? 'Make Public': 'Make Hidden',
                            onAction: hideShowComment.bind(null, comment._id)
                          }}
                          hidden={comment.hidden}
                        >
                          <p>{comment.body ? renderHTML(renderBlocks(comment)) : ''}</p>

                          <p className="mark">
                              Written by {comment.postedBy.name} | Published {moment(comment.updatedAt).fromNow()}
                          </p>
                          This comment is{' '}
                          <TextStyle variation="strong">{comment.hidden ? 'hidden': 'public'}</TextStyle>.
                          <ButtonGroup segmented={true} fullWidth={false} connectedTop={true}>
                            <Button key={1} onClick={() => deleteConfirm(comment._id)}>Delete</Button>
                          </ButtonGroup>
                      </SettingToggle>) })};
                 </Layout.AnnotatedSection>
           ) : ( <p>Loading...</p> )
    };

    return (
        <Page>
            <Layout>
                {message && <div className="alert alert-warning">{message}</div>}

                {loaded && comments.length==0
                    ? <EmptyState
                            heading="No New Comments Quite Yet"
                            action={{
                              content: 'Add Tags',
                              onAction:  () => Router.push('/manage/manage-tags'),
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
                    : showAllComments()
                }
            </Layout>
        </Page>
    );
};

export default ManageComments;