import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Fiction',
                    imageUrl: 'https://i.ibb.co/Wfjd81W/pexels-george-milton-7034716.jpg',
                    id: 1,
                    linkUrl: 'shop'
                },
                {
                    title: 'Kids',
                    imageUrl: 'https://i.ibb.co/GTzJFfH/pexels-olia-danilevich-4982457.jpg',
                    id: 2,
                    linkUrl: 'kids'
                },
                {
                    title: 'Non-Fiction',
                    imageUrl: 'https://i.ibb.co/BPG6VJ2/pexels-kaboompics-com-5834.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'New Arrival',
                    imageUrl: 'https://i.ibb.co/ccyKKvg/pexels-burst-545049.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: ''

                },
                {
                    title: 'Used',
                    imageUrl: 'https://i.ibb.co/r2hqfYM/pexels-pixabay-33085.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />)
                    )
                }
            </div>
        )
    }
}
export default Directory;