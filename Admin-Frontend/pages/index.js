import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
import Router from 'next/router'
import { withRouter } from 'next/router'
import { useRouter } from 'next/router'
import { checkForCharge } from '../actions/auth';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

function Index(props) {
	const router = useRouter()
    console.log('router.pathname',router.pathname)

	if(router && router.query && router.query.charge_id) {
		console.log('here is the charge_id', router.query.charge_id);	
		checkForCharge(router.query.charge_id, props.app.shopOrigin)
		console.log('props.app.shopOrigin', props.app.shopOrigin);
	} 

	const emptyState = !store.get('ids');
  	
    return (
	  <Page>
	   <Layout>
			    <EmptyState
			        heading="Expower Shoppers to Share Their Voices"
			        action={{
			          content: 'View New Posts',
			          onAction:  () => Router.push('/manage/manage-posts'),
			        }}
			        image={img}
			      >
			   	   <p>Create a Social Network around your Brand, 
			      		And Promote Related Products
			      		Alongside User-Generated Content.</p>

		      </EmptyState>
		    </Layout>
	  </Page>
	);
}

export default withRouter(Index);