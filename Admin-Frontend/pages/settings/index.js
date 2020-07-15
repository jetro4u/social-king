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
  const [backgroundColor, setBackgroundColor] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');

  const handleCommunityNameChange = useCallback((newValue) => setCommunityName(newValue), []);
  const handleBackgroundColorChange = useCallback((newValue) => setBackgroundColor(newValue), []);
  const handlePrimaryColorChange = useCallback((newValue) => setPrimaryColor(newValue), []);

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
      // const fd = new FormData();
      //Take the first selected file
      // fd.append('file', getBase64(files[0]));
      getBase64(files.slice(-1)[0], (iconImg) => {
          let newSettings = {files, iconImg, communityName, backgroundColor, primaryColor}
          console.log('ran updateSettings func with this data: ',newSettings ) 
          update({props, newSettings}).then(data => {
                if (data.error) {
                    console.log('err data: ', data)
                } else {
                    setSuccessMessage('Settings successfully saved.')
                }
            });
      });

      
    }

    const getBase64 = (file, cb) => {
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

    const iconFileUpload = !iconFiles.length && <DropZone.FileUpload
                                            actionTitle="Add file"
                                            actionHint="or drop files to upload" />;

    const headerFileUpload = !headerFiles.length && <DropZone.FileUpload
                                            actionTitle="Add file"
                                            actionHint="or drop files to upload" />;

    const uploadedIconFiles = iconFiles.length > 0 && (
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
    );

    const uploadedHeaderFiles = headerFiles.length > 0 && (
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
    );
    

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