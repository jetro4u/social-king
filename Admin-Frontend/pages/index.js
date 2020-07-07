import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
import Router from 'next/router'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };
  render() {
  	const emptyState = !store.get('ids');
  	console.log('store.get(ids): ',store.get('ids'))
    return (
	  <Page>
	   <TitleBar
	      primaryAction={{
	        content: 'Settings',
	        onAction: () => Router.push('/settings'),
	      }}
	    />
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

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    console.log(resources)
    console.log(idsFromResources)
    store.set('ids', idsFromResources);
  };
}

export default Index;