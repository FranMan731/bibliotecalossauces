//GraphQL
import gql from 'graphql-tag';

export const createLibro = gql`
    mutation createLibro($data: LibroCreateInput!) {
        createLibro(data: $data) {
            id
            titulo
            autor
        }
    }
`

export const login = gql`
    mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id
				name
			}
		}
	}
`

export const updateLibro = gql`
    mutation updateLibro($data: LibroUpdateInput!, $where: LibroWhereUniqueInput!) {
        updateLibro(data: $data, where: $where) {
            id
            titulo
        }
    }
`

export const deleteLibro = gql`
    mutation deleteLibro($where: LibroWhereUniqueInput!) {
        deleteLibro(where: $where) {
            id
            titulo
        }
    }
`

export const uploadLibro = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            id
        }
    }
`