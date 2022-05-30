import React from "react";
import Sections from './secThree/index';
import one from '../assets/images/one.svg';
import two from '../assets/images/two.svg';
import three from '../assets/images/three.svg';
import '../components/secThree/style.css';

const SectionThree =() =>{
    return (
        <div>
            <div className='div1-sce3'>
                <Sections
                    image={one} 
                    title='PASSIONATE'
                    text='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
                />
            </div>
            <div className='div1-sce3'>
                <Sections
                image={two} 
                title='RESOURCEFUL'
                text='Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
                />
            </div>
            <div className='div1-sce3'>
                <Sections
                image={three} 
                title='FRIENDLY'
                text='We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
                />
            </div>
        </div>
    );
}
export default SectionThree;