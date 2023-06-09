import React from 'react'

const Foods = ({id, title, category, price, img, desc}) => {
  return (
    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}<br /><b>Category:</b> {category}</p>
                        </div>
                    </article>
  )
}

export default Foods