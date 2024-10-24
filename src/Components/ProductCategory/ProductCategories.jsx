import React from 'react'
import './ProductCategories.css';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';

const ProductCategories = () => {
    const categoriesData = [
        'Documentaries', 
        'Commercials',
        'TV Shows',
        'Short Films',
        'Creative Interviews',
        'Photography',
        'Corporate Videos',
        'Animations',
        'Markeeting'
    ]
  return (
    <div className='project-categories-section'>
        {categoriesData.map((item, index) => (
            <PrimeryButton 
              text={item} 
              width={'auto'} 
              height={'40px'} 
              padding={'5px 40px'}
              fontSize={'18px'}
              lineHeight={'22px'}
              fontWeight={'400'}
              color={'#fff'}
              arrowTrue={false}
            />
        ))}
      </div>
  )
}

export default ProductCategories
