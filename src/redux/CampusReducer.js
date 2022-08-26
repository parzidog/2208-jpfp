const initState = {
    data:[
        {
            id:1,
            name:"Muppets University",
            imgUrl: 'https://image-cdn.neatoshop.com/styleimg/37466/none/kiwigreen/default/269117-20.jpg',
            address: '123 Sesame Street',
            description: 'A place of learning, a place of knowledge'
             }
    ]
}


const campusReducer = (state=initState, action)=>{
    return state;
}

export default campusReducer;