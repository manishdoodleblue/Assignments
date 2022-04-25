import React, { useState } from 'react'
import './Captain.css'
import image1 from "./images/image1.jpeg"
import image2 from "./images/image2.jpeg"
import image3 from "./images/image3.jpeg"
import image4 from "./images/image4.jpeg"
import image5 from "./images/image5.jpeg"
import image6 from "./images/image6.jpeg"
import image7 from "./images/image7.jpeg"
import image8 from "./images/image8.jpeg"
import image9 from "./images/image9.jpeg"
function Captain() {
  const [datas, setdatas] = useState([
    {
      id: 1,
      title: 'Buttermilk pancakes',
      category: 'Breakfast',
      price: 15.99,
      img: image1,
      desc: 'I m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
    },
    {
      id: 2,
      title: 'Diner double',
      category: 'Lunch',
      price: 13.99,
      img: image2,
      desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
    },
    {
      id: 3,
      title: 'Godzilla milkshake',
      category: 'Shakes',
      price: 6.99,
      img: image3,
      desc: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      id: 4,
      title: 'Country delight',
      category: 'Breakfast',
      price: 20.99,
      img: image4,
      desc: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
    },
    {
      id: 5,
      title: 'Egg attack',
      category: 'Lunch',
      price: 22.99,
      img: image5,
      desc: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90s pop-up',
    },
    {
      id: 6,
      title: 'Oreo dream',
      category: 'Shakes',
      price: 18.99,
      img: image6,
      desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
    },
    {
      id: 7,
      title: 'Bacon overflow',
      category: 'Breakfast',
      price: 8.99,
      img: image7,
      desc: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
    },
    {
      id: 8,
      title: 'American classic',
      category: 'Lunch',
      price: 12.99,
      img: image8,
      desc: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    },
    {
      id: 9,
      title: 'Quarantine buddy',
      category: 'Shakes',
      price: 16.99,
      img: image9,
      desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    },
  ]

  );
  const [mani, setMani] = useState(datas)
  const category = datas.map(data => data.category)
  const uniquecategory = [...new Set(category)]
  uniquecategory.unshift('All')
  console.log(uniquecategory)
  const handleTab = (l) => {
    console.log(l)
    if (l === 'All') {
      setMani(datas)
      return
    }
    const filteredDatas = datas.filter(data => data.category === l)
    setMani(filteredDatas)
  }
  return (
    <div>
      <div className='line   d-flex justify-content-center'>
        <center> <h2>Our Menu</h2></center></div>
      <br />
      <center><div className='d-flex justify-content-around col-md-3 color'>
        {uniquecategory.map((l,i) => <span key={i} onClick={()=>handleTab(l)}>{l}</span>)}</div></center>
      <br />
      <br />
      <div className='container'>
        <div className='row'>
          {mani.map(data => <div className='col-12 col-md-6 mb-5'><div className='row'>
            <div className='col-sm-8 col-md-5'><img src={data.img} width='100%' height='150' /></div>
            <div className='col-md-6'>
              <div className='d-flex justify-content-between'>

                <span> {data.title}</span>
                <span> ${data.price}</span> </div>
              <hr />
              <div>
                {data.desc}
              </div>
            </div>  </div> </div>)}
        </div>

      </div>
    </div>

  )
}
export default Captain;