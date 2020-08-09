import { EmptyState, Layout, Page } from '@shopify/polaris';
import Router from 'next/router'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

function Index(props) {

	const emptyState = true;
  	
    return (
	  <Page>
	   <Layout>
			    <EmptyState
			        heading="Expower Shoppers to Share Their Voices"
			        action={{
			          content: 'Manage Posts',
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

export default Index;