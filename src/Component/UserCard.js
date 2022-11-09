import React from "react";

const UserCard=(props)=>
{
return(
    <div className='column'>
    <div className='ui card'>
        <div className='content'>
        <img class="right floated mini ui image" src={props.image} style={{width:"100%",height:200}}/>

            <div className='header'>
                {props.name}</div>
            <div className='meta'>{props.description}</div>

        </div>
        <div class="description">
              Elliot requested permission to view your contact details
            </div>
        <div className='ui bottom button'>
            <i className='add icon'></i>
            Add Friend
        </div>
        <div class="extra content">
            <div class="ui three buttons">
              <div class="ui basic green button">Approve</div>
              <div class="ui basic red button">Decline</div>
              <div class="ui basic blue button">Follow</div>
            </div>
            </div>
        
    </div>
    </div>

)
}
export default UserCard;