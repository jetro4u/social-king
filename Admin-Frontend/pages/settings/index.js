import { useState, useCallback, useEffect } from 'react';
import { getProfile, update } from '../../actions/user';
import Link from 'next/link';
import {
  Button,
  Caption,
  DropZone,
  Thumbnail,
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
  const [aboutCommunity, setAboutCommunity] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [CSSCode, setCSSCode] = useState('');
  const [moderationRequired, setModerationRequired] = useState(true);

  const [iconImageURL, setIconImageURL] = useState('');
  const [headerImageURL, setHeaderImageURL] = useState('');

  const handleCommunityNameChange = useCallback((newValue) => setCommunityName(newValue), []);
  const handleAboutCommunityChange = useCallback((newValue) => setAboutCommunity(newValue), []);
  const handleBackgroundColorChange = useCallback((newValue) => setBackgroundColor(newValue), []);
  const handlePrimaryColorChange = useCallback((newValue) => setPrimaryColor(newValue), []);
  const handleCSSCodeChange = useCallback((newValue) => setCSSCode(newValue), []);

  //dropzone
  const [iconFiles, setIconFiles] = useState([]);
  const [headerFiles, setHeaderFiles] = useState([]);
  
  console.log('rendered Settings component with files', iconFiles)

  const handleIconDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setIconFiles((iconFiles) => [...iconFiles, ...acceptedFiles]),
    [],
  );

  const handleHeaderDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) =>
      setHeaderFiles((headerFiles) => [...headerFiles, ...acceptedFiles]),
    [],
  );

  const init = () => {
        getProfile(props).then(data => {
            if (data.error) {
                console.log('err data: ', data)
            } else {
                setAboutCommunity(data.aboutCommunity);
                setCommunityName(data.communityName);
                setBackgroundColor(data.backgroundColor)
                setPrimaryColor(data.primaryColor)
                setIconImageURL(data.iconImageURL)
                setHeaderImageURL(data.headerImageURL)
                setCSSCode(data.CSSCode)      
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const updateSettings = ()=>{
      getBase64(iconFiles.slice(-1)[0], (iconImg) => {
          getBase64(headerFiles.slice(-1)[0], (headerImg) => {
            let newSettings = {CSSCode, iconImg, headerImg, communityName, aboutCommunity, backgroundColor, primaryColor}
            console.log('ran updateSettings func with this data: ',newSettings ) 
            update({props, newSettings}).then(data => {
                  if (data.error) {
                      console.log('err data: ', data)
                  } else {
                      setSuccessMessage('Settings successfully saved.')
                  }
              });
          });
      });
    }

    const getBase64 = (file, cb) => {
      console.log('file', file)
        if(file==undefined){
          console.log('ran file undefined logic', file)
          return cb(file);
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    const iconFileUpload = !iconImageURL && !iconFiles.length && <DropZone.FileUpload
                                            actionTitle="Add file"
                                            actionHint="or drop files to upload" />;

    const headerFileUpload = !headerImageURL && !headerFiles.length && <DropZone.FileUpload
                                            actionTitle="Add file"
                                            actionHint="or drop files to upload" />;

    const uploadedIconFiles = iconFiles.length > 0 ? (
      <Stack vertical>
        {iconFiles.slice(-1).map((file, index) => (
          <Stack alignment="center" key={index}>
            <Thumbnail
              size="large"
              alt={file.name}
              source={
                validImageTypes.indexOf(file.type) > 0
                  ? window.URL.createObjectURL(file)
                  : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
              }
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    ) : (
      <Stack alignment="center">
        <Thumbnail
          size="large"
          alt={'Icon Image'}
          source={
            iconImageURL
              ? iconImageURL
              : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
          }
        />
        <div>
          Icon Image
        </div>
      </Stack>
    );

    const uploadedHeaderFiles = headerFiles.length > 0 ? (
      <Stack vertical>
        {headerFiles.slice(-1).map((file, index) => (
          <Stack alignment="center" key={index}>
            <Thumbnail
              size="large"
              alt={file.name}
              source={
                validImageTypes.indexOf(file.type) > 0
                  ? window.URL.createObjectURL(file)
                  : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
              }
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    ): (
      <Stack alignment="center">
        <Thumbnail
          size="large"
          alt={'Header Image'}
          source={
            headerImageURL
              ? headerImageURL
              : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
          }
        />
        <div>
          Header Image
        </div>
      </Stack>
    );
    
    const toggleApprovalSetting = () => {
      console.log('ran toggleApprovalSetting fun in Settings/index.js');
      setModerationRequired(false);
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
                <TextField label="Community Name" value={communityName ? communityName : ''} onChange={handleCommunityNameChange} />
              </FormLayout>
            </Card>
            <Card sectioned>
              <FormLayout>
                <TextField multiline={3} label="About Your Community" value={aboutCommunity ? aboutCommunity : ''} onChange={handleAboutCommunityChange} />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Set Featured Icon Image"
            description="This icon will appear within your Site's Community Pages."
          >
          <DropZone 
            allowMultiple={false}
            onDrop={handleIconDropZoneDrop}>
            {uploadedIconFiles}
            {iconFileUpload}
          </DropZone>

          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Set Featured Header Image"
            description="This Header Image will appear within your Site's Community Pages."
          >
          <DropZone 
            allowMultiple={false}
            onDrop={handleHeaderDropZoneDrop}>
            {uploadedHeaderFiles}
            {headerFileUpload}
          </DropZone>

          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Moderation Setting"
            description="Enable Shoppers to Post New Content without Moderator Approval"
          >
          <SettingToggle
              action={{
                content: moderationRequired ? 'Require Approval': 'Let it Rip',
                onAction: toggleApprovalSetting.bind(this)
              }}
              hidden={moderationRequired}
            > </SettingToggle>
          </Layout.AnnotatedSection> 
          <Layout.AnnotatedSection
            title="Community Colors"
            description="Add Your Brand Colors to your Site's Community Pages. Custom Colors can be in any of the following formats: Color Name: DeepSkyBlue, Hex: #00bfff, or RGB: rgb(0, 191, 255)"
          >
           <TextField label="Background Color" value={backgroundColor ? backgroundColor : ''} onChange={handleBackgroundColorChange} type="text"/>
           <TextField label="Primary Color" value={primaryColor ? primaryColor : ''} onChange={handlePrimaryColorChange} type="text" />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
            title="CSS Code Customization"
            description="Make the Styling Completely Your Own with Custom CSS Code which will automatically load on every page of your Public-Facing Community Pages"
          >
            <TextField
              label="CSS Code"
              value={CSSCode}
              onChange={handleCSSCodeChange}
              multiline={4}
            />
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
}

export default Settings;