import React from 'react';
import"./Artist.css";

export default function Artist(props) {

	if(!props.artist) return null;
	const {id, name, images,genres, followers } = props.artist;

    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3 well well-lg">
                <h3 className="text-center"> { name } </h3>
                <img className="img-responsive img-circle" src={ images[1].url }  />
                <ul className="list-group">
                	<li className="list-group-item">
                		Followers  <span className="pull-right"> {followers.total} </span>
                	</li>
                	<li className="list-group-item">
                		Genres  
         						{/* <span classname="pull-right"> { genres.join(",")} </span> */}
         						
                			<ul className="list-group">
                				{
                					genres.map((item,key) => {
                						return <li className="list-group-item" key={key}> { item } </li>;
                					})
                				}
                			</ul>
                		
                	</li>
                </ul>
            </div>
        </div>
    );
}