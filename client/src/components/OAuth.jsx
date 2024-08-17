import { Button } from "flowbite-react";
import React from "react";
import {
  AiFillAmazonSquare,
  AiFillGoogleCircle,
  AiFillGooglePlusCircle,
} from "react-icons/ai";

function OAuth() {
    const handleGoogleClick =()=>{
        
    }
  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue With Google
    </Button>
  );
}

export default OAuth;
