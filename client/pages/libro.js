import React, { Component } from 'react';
import { useRouter } from 'next/router'

//Logic
import { ApolloConsumer } from 'react-apollo';

//Graphql
import { getLibro } from '../graphql/query';

//Component
import LibroContainer from '../containers/LibroContainer';

class Libro extends Component {
	static async getInitialProps(context) {
		const client = context.apolloClient;
		const { id } = context.query;
		
		const datos = {
			where: {
				id
			}
		};

		const { data } = await client.query({ variables: datos, query: getLibro });
		const { libro } = data
		console.log(libro)
		return { libro, id };
	}

	render() {
		return (
			<ApolloConsumer>
				{(client) => <LibroContainer libro={this.props.libro} id={this.props.id} client={client} />}
			</ApolloConsumer>
		);
	}
}

export default Libro;