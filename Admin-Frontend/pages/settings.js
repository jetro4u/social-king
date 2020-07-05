import { list, removeBlog, toggleBlogVisibility } from '../actions/blog';
import Link from 'next/link';
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

class AnnotatedLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      discount: '10%',
      enabled: false,
      blogs: ['this is a blog']
    };
    this.loadBlogs = this.loadBlogs.bind(this);
    this.showAllBlogs = this.showAllBlogs.bind(this);
  }
 

  loadBlogs(){
      console.log('ran loadBlogs function');
      list().then(data => {
          if (data.error) {
              console.log(data.error);
          } else {
              console.log('blog array after updating: ',data);
              // setBlogs(data);
              // setLoaded(true);
              this.setState({
                blogs: data
              });
          }
      });
  };

  componentDidMount(){
    this.loadBlogs();
  }  

  showAllBlogs(){
    const { enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';

    let {blogs} = this.state
    return blogs.map((blog, i) => {
        console.log('blog in showAllBlogs function',blog);
        return (  
          <SettingToggle
            key={i}
            action={{
              content: contentStatus,
              onAction: this.handleToggle,
            }}
            hidden={blog.hidden}
          >
          <p>{blog.title}</p>
            This post is{' '}
            <TextStyle variation="strong">{textStatus}</TextStyle>.
          </SettingToggle>
        )
      })
  }

  render() {
    const { discount,enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';

    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Filter by Post Status"
            >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                    <ButtonGroup segmented={true} fullWidth={false} connectedTop={true}>
                      <Button>Published</Button>
                      <Button primary>Drafts</Button>
                      <Button danger>Removed</Button>
                    </ButtonGroup>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Manage Posts"
            description="Review new posts and set them approved content live."
          >
            {this.state.blogs ? this.showAllBlogs() : ''}
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log('submission', this.state);
  };

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  handleToggle = () => {
    this.setState(({ enabled }) => {
      return { enabled: !enabled };
    });
  };
}

export default AnnotatedLayout;