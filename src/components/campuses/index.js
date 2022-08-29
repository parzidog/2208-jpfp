import React from "react";
import Campus from "./Campus"
import {useSelector} from "react-redux";

function campuses(){

    const campuses = [
  {
        id:1,
        name:"Muppets University",
        imgUrl: 'https://image-cdn.neatoshop.com/styleimg/37466/none/kiwigreen/default/269117-20.jpg',
        address: '123 Sesame Street',
        description: 'A place of learning, a place of knowledge'
         },
    {
        id:2,
        name:"Sith Academy",
        imgUrl: 'https://i.kym-cdn.com/photos/images/original/000/559/643/1b7.png',
        address: '666 Koriban Drive',
        description: 'Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken.'
         },
];

    return(
        <div className="allCampuses">
            {campuses.map(itm=>
                <Campus key={itm.id} data={itm}/>
            )}
        </div>
    )
}

export default campuses