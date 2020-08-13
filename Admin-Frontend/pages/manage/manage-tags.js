import Tag from '../../components/blog/Tag';
import Link from 'next/link';

import {
  Layout,
  Page,
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

const ManageTags = (props) => {
    return (
    <Page>
        <Layout> 
            <TitleBar
                primaryAction={{
                  content: 'View My Network',
                  url: 'https://'+ props.app.shopOrigin+ '/community/connect',
                  external: true
                }}
              />  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <Tag {...props}/>
                    </div>
                </div>
            </div>
         </Layout>
    </Page>
    );
};


export default ManageTags;