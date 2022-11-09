import React from "react";
import UserCard from "./UserCard";
import pic1 from './images/images.jpg'
import pic2 from './images/s11.jpg'
import pic3 from './images/s22.jpg'
const MainCard=()=>
{
    return(
        <div className='ui three column grid'>
        <UserCard name='Ashish Gupta' image={pic3} 
        description='hi i am ashish'>
           
        </UserCard>
      
        <UserCard name='Abhi Gupta'  image={pic2}
        description ='hi i am abhi'>
</UserCard>
<UserCard name='Ravi Gupta' image={pic1}
description='hi i am Ravi'>

        
        
</UserCard>
        <UserCard name='Ashish Gupta' image={pic3} 
        description='hi i am ashish'>
           
        </UserCard>
      
        <UserCard name='Abhi Gupta'  image={pic2}
        description ='hi i am abhi'>
</UserCard>
<UserCard name='Ravi Gupta' image={pic1}
description='hi i am Ravi'>

        
        
</UserCard>
        
        </div>
    )

}
export default MainCard;