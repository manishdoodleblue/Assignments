import React , {useState}from 'react'

import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import './Review.css'

 function Review() {
     const[review,setReview]=useState (  [
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
      ]
      )
      const[index,setIndex]=useState(0);
      const handlePrevious=() =>{
        setIndex(index === 0 ? review.length-1 : index-1)
      }
      const handleNext=() =>{
          if (index===review.length-1){
          setIndex(0)
      }
      else{setIndex(index+1)}}
      const handleRandom = () => {
        let randomValue = Math.floor(Math.random() * review.length);
        if (randomValue === index) {
            randomValue = ((randomValue + 1) > (review.length - 1)) ? 0 : randomValue + 1
        }
        setIndex(randomValue)
    }
  return (
    <div>
        <h1 className='text-center ms-2'>OUR REVIEWS</h1>
        <div className='text-center'>
          <div className='card text-center col-2 ms-5 '>
            <img src={review[index].image} height='150px' width='150px' className='it1'></img>
        <div>{review[index].name}</div>
        <div>{review[index].job}</div>
        <div>{review[index].text}</div>
        <span onClick={handlePrevious}><FcPrevious/></span>
        <span onClick={handleNext}><FcNext/></span><br/>
        <button onClick={handleRandom}>surprise me</button>
        </div>
        </div>
    </div>
  )
}
export default Review
