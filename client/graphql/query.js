//GraphQL
import gql from 'graphql-tag';

export const getUser = gql`
	query user(
		$where: UserWhereUniqueInput!
	) {
		user(where: $where) {
			id
			name
		}
	}
`;

export const allLibros = gql`
	query libroes(
		$where: LibroWhereInput
		$orderBy: LibroOrderByInput
		$skip: Int
		$after: String
		$before: String
		$first: Int
		$last: Int
	) {
		libroes(
			where: $where
			orderBy: $orderBy
			skip: $skip
			after: $after
			before: $before
			first: $first
			last: $last
		) {
            id
			titulo
            fecha_publicado
            autor
			tomo
		}
	}
`;

export const getLibro = gql`
	query libro($where: LibroWhereUniqueInput!) {
		libro(where: $where) {
			id
			titulo
            fecha_publicado
            autor
            editorial
            edicion
            tomo
            descripcion
            link
		}
	}
`;
