import Tag from '../../components/blog/Tag';
import Link from 'next/link';

import {
  Layout,
  Page,
} from '@shopify/polaris';

const ManageTags = (props) => {
    return (
    <Page>
        <Layout>    
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