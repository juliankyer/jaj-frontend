import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import Error from './ErrorMessage';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.boxShadow};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      image
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query 
        query={SINGLE_ITEM_QUERY} 
        variables={{ id: this.props.id }} 
      >
        {({error, loading, data }) => {
          // TODO -- update error styles 
          if (error) return <Error error={error} />
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for {this.props.id}</p>

          const { item } = data;
          
          return (
            <SingleItemStyles>
              <Head>
                <title>JAJ | {item.title}</title>
              </Head>
              <img src={item.image} alt={item.title} />
              <div className='details'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyles>
          )
        }}
      </Query>
    );
  }
}

export default SingleItem;