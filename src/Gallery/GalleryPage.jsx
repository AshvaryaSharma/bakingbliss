import React from 'react';
import ImageSlideshow from './ImageSlideshow';

const image = [
  {
    url:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/117335018_176170950692741_499243945393347438_o.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=CAIZJTBvawoAX-gKkOE&_nc_ht=scontent-dfw5-2.xx&oh=7dc50aa949ccb393dbe578a81402af2f&oe=5F866E55",
    label: "Double Chocolate Chip",
  },
  {
    url:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/95847089_137117981264705_7647779244415647744_o.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=8re8pLx3V3IAX-WnRFp&_nc_ht=scontent-dfw5-1.xx&oh=8743377fe963046934fc5861fc736ac2&oe=5F89AED8",
    label: "Strawberry basket",
  },
  {
    url:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/94689808_132333321743171_1456471414923067392_o.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=wrBR1JX5eyQAX9oY-TV&_nc_ht=scontent-dfw5-1.xx&oh=697c27b58e3726854bba689c447a288d&oe=5F88250E",
    label: "Biscotti Loaf",
  },
  {
    url:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/94597341_132333311743172_8375085153734623232_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=dXNiyE9jPp8AX-oRJjy&_nc_ht=scontent-dfw5-2.xx&oh=5d1bc9057884882d782789ed6f9bdfa8&oe=5F867AF5",
    label: "Biscotti Loaf after baking",
  },
  {
    url:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/90428620_104359924540511_4721459459753246720_n.jpg?_nc_cat=110&_nc_sid=e3f864&_nc_ohc=MRI2UOTM8wYAX9WTxpu&_nc_ht=scontent-dfw5-1.xx&oh=12f59a4d35e5f653c831d2e5c645bbaa&oe=5F883563",
    label: "Blueberry cake",
  },
];

function GalleryPage() {
    return (
        <div className="gallery">
            <h2 className="section-heading yellow">
                Clicks of some of our treats
            </h2>
            <div className="gallery__container" >
               <ImageSlideshow className="gallery__slideshow" imageDetails={image}/>

            </div>
        </div>
    )
}

export default GalleryPage
