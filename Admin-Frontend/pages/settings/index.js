import { useState, useCallback, useEffect } from 'react';
import { getProfile, update } from '../../actions/user';
import IconDropZone from '../../components/settings/IconDropZone';
import { list, removeBlog, toggleBlogVisibility } from '../../actions/blog';
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

const Settings = (props) => {
  console.log('props in Settings Component', props)

  const [communityName, setCommunityName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');

  const handleCommunityNameChange = useCallback((newValue) => setCommunityName(newValue), []);
  const handleBackgroundColorChange = useCallback((newValue) => setBackgroundColor(newValue), []);
  const handlePrimaryColorChange = useCallback((newValue) => setPrimaryColor(newValue), []);

  const init = () => {
        getProfile(props).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    trackingID: data.trackingID
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

  return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Set Your Social Network's Settings"
            >
            <Card sectioned>
              <FormLayout>
                <TextField label="Community Name" value={communityName} onChange={handleCommunityNameChange} />;
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
           <TextField label="Background Color" value={backgroundColor} onChange={handleBackgroundColorChange} type="text"/>
           <TextField label="Primary Color" value={primaryColor} onChange={handlePrimaryColorChange} type="text" />
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
}

export default Settings;