import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
import Router from 'next/router'
import { withRouter } from 'next/router'
import { useRouter } from 'next/router'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

function Index() {
	
	const emptyState = !store.get('ids');
  	console.log('store.get(ids): ',store.get('ids'))
  	
  	const router = useRouter()
    console.log('router.pathname',router.pathname)

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