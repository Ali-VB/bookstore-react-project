import React from 'react'
import BOOK_DATA from './book.data'
import Collection from '../../components/collection/collection'

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections:
                BOOK_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }

            </div>
        )
    }
}
export default ShopPage;