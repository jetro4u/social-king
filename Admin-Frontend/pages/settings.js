import IconDropZone from '../components/settings/IconDropZone';
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
    // this.state = {
    //   discount: '10%',
    //   enabled: false,
    //   blogs: ['this is a blog']
    // };
    // this.loadBlogs = this.loadBlogs.bind(this);
    // this.showAllBlogs = this.showAllBlogs.bind(this);
  }

  componentDidMount(){
    // this.loadBlogs();
    console.log('loaded settings page');
  }  

  render() {
    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Set Your Social Network's Settings"
            >
            <Card sectioned>
              <FormLayout>
                <TextField label="Community Name" onChange={() => {}} />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Set Featured Icon Image"
            description="This icon will appear within your Site's Community Pages."
          >
          <IconDropZone />
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Set Featured Header Image"
            description="This Header Image will appear within your Site's Community Pages."
          >
          <IconDropZone />
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="CSS Customization"
            description="Add Your Brand Colors to your Site's Community Pages."
          >
           <TextField type="text" label="Background color" onChange={() => {}} />
           <TextField type="text" label="Primary color" onChange={() => {}} />
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