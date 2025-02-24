import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = (props) => {
  return (
      <Query query={PAGINATION_QUERY}>
        {({data, loading, error}) => {
          if(loading) return <p>Loading...</p>

          const count = data.itemsConnection.aggregate.count;
          const pages = Math.ceil(count / perPage);
          const { page } = props;
          return (
            <PaginationStyles>
              <Head>
                <title>JAJ - Page {page} of {pages}</title>
              </Head>

              <Link href={{ 
                pathname: 'shop', 
                query: { page: page - 1}
              }}>
                <a className='prev' aria-disabled={page <= 1}>Previous</a>
              </Link>
              <p>Page {props.page} of {pages}</p>

              <Link href={{ 
                pathname: 'shop', 
                query: { page: page + 1}
              }}>
                <a className='next' aria-disabled={page >= pages}>Next</a>
              </Link>
            </PaginationStyles>
          ) 
        }}
      </Query>
  );
};

export default Pagination;