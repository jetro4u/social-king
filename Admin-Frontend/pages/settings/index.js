import { useState, useCallback, useEffect } from 'react';
import { getProfile, update } from '../../actions/user';
import IconDropZone from '../../components/settings/IconDropZone';
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
  TextStyle
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

const Settings = (props) => {
  console.log('props in Settings Component', props)

  const [successMessage, setSuccessMessage] = useState('');
  const [communityName, setCommunityName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');

  const handleCommunityNameChange = useCallback((newValue) => setCommunityName(newValue), []);
  const handleBackgroundColorChange = useCallback((newValue) => setBackgroundColor(newValue), []);
  const handlePrimaryColorChange = useCallback((newValue) => setPrimaryColor(newValue), []);

  const init = () => {
        getProfile(props).then(data => {
            if (data.error) {
                console.log('err data: ', data)
            } else {
                setCommunityName(data.communityName);
                setBackgroundColor(data.backgroundColor)
                setPrimaryColor(data.primaryColor)
                
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const updateSettings = ()=>{
      let newSettings = {communityName, backgroundColor, primaryColor}
     console.log('ran updateSettings func with this data: ', ) 
      update({props, newSettings}).then(data => {
            if (data.error) {
                console.log('err data: ', data)
            } else {
                setSuccessMessage('Settings successfully saved.')
            }
        });
    }

    

  return (
      <Page>
        <Layout>
        <TitleBar
          primaryAction={{
            content: 'Update Settings',
            onAction: ()=>updateSettings(),
          }}
        />
        {successMessage ? successMessage : ''}
          <Layout.AnnotatedSection
            title="Set Your Social Network's Settings"
            >
            <Card sectioned>
              <FormLayout>
                <TextField label="Community Name" value={communityName ? communityName : ''} onChange={handleCommunityNameChange} />;
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
           <TextField label="Background Color" value={backgroundColor ? backgroundColor : ''} onChange={handleBackgroundColorChange} type="text"/>
           <TextField label="Primary Color" value={primaryColor ? primaryColor : ''} onChange={handlePrimaryColorChange} type="text" />
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
}

export default Settings;