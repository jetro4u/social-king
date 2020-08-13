import { EmptyState, Layout, Page, Button } from '@shopify/polaris';
import { useState, useEffect } from 'react';
import Router from 'next/router'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

function Index(props) {

	const [shopDomain, setShopDomain] = useState('');
    
	const emptyState = true;
  	console.log('props',props)

  	useEffect(() => {
        setShopDomain(props.app.shopOrigin)
    }, []);

    return (
	  <Page>
	   <Layout>
			    <EmptyState
			        heading="Expower Shoppers to Share Their Voices"
			        image={img}
			      >
			   	   <p>Visit your {' '}
                                <Button external={true} primary url={`https://${shopDomain}/community/connect`}>
                                      Community Pages
                                </Button>
                                
                             </p>
		      </EmptyState>
		    </Layout>
	  </Page>
	);
}

export default Index;