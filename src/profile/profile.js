import React from "react";
import PropTypes from "prop-types";
const ProfileComponent  = props => {
  const styleObject = {color:"red", textAlign:"center"}
    return(
        <div style={styleObject}>
      {props.fullName} 
      {props.bio}
      {props.profession}
      {props.children}
      <h1>React {props.version} Documentation</h1>

        </div>
        
    )
   };
   ProfileComponent.propTypes = {
 anyProp: PropTypes.any,
 booleanProp: PropTypes.bool,
 numberProp: PropTypes.number,
 stringProp: PropTypes.string,
 functionProp: PropTypes.func
};
export default ProfileComponent;