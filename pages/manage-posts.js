import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../actions/auth';
import { list, removeBlog, toggleBlogVisibility } from '../actions/blog';
import moment from 'moment';
import ToggleButton from 'react-toggle-button';
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
} from '@shopify/polaris';

const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [loaded, setLoaded] = useState({value: false});
    const [message, setMessage] = useState('');
    const [toggleValue, setToggleValue] = useState(true);
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const hideShowBlog = slug => {
        console.log('ran hideShowBlog with this slug:', slug);
        toggleBlogVisibility(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                console.log('data',data);
                loadBlogs();
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };


    const loadBlogs = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log('blog array after updating: ',data);
                setBlogs(data);
                setLoaded(true);
            }
        });
    };

    
    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        }
    };

    const showAllBlogs = () => {
        // const contentStatus = enabled ? 'Disable' : 'Enable';
        // const textStatus = enabled ? 'enabled' : 'disabled';

        return blogs.map((blog, i) => {
            return (
                <SettingToggle
                    key={i}
                    action={{
                      content: blog.hidden ? 'Show': 'Hide',
                      onAction: hideShowBlog
                      // onAction: hideShowBlog(blog.slug)

                    }}
                    hidden={blog.hidden}
                  >
                    <h3>{blog.title}</h3>

                    <p className="mark">
                        Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(blog)}
                    This post is{' '}
                    <TextStyle variation="strong">{blog.hidden ? 'hidden': 'public'}</TextStyle>.
                </SettingToggle>
            );
        });
    };

    return (
     <Page>
        <Layout>
            <div className="row">
                <div className="col-md-12">
                    {message && <div className="alert alert-warning">{message}</div>}

                    {loaded && blogs.length == 0
                        ? <p>Loading</p>
                        : <div className="row">
                                <Layout.AnnotatedSection
                                    title="Manage Posts"
                                    description="Review new posts and set approved content live."
                                  >
                                    {showAllBlogs()}
                                </Layout.AnnotatedSection>
                          </div>
                  }

                </div>
            </div>
        </Layout>
      </Page>
    );
};

export default BlogRead;