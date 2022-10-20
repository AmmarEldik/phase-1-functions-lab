// Code your solution in this file!
const scuber = 42 ;
function distanceFromHqInBlocks(location){
    if (location>scuber)
    {
        let disBlocks= location - scuber;
      return disBlocks;
}
    else if(location<scuber){
        let disblocks= (location - scuber) * -1;
        return disblocks;
    };
    };

    function distanceFromHqInFeet(location) {

       let disBlocks = distanceFromHqInBlocks(location);

           let disfeet = disBlocks * 264 ;
         return disfeet;

    };

    function distanceTravelledInFeet(start, end){

       if (start<end){
        return(end - start)*264;
       }else if (start > end){
        return(start - end)*264;
       }; 
    }

    function calculatesFarePrice(start, destination){
        let feetTravelled = distanceTravelledInFeet (start, destination);

        if (feetTravelled<400){
            return 0
        } else if (feetTravelled >400 && feetTravelled <2000 ){
            return (feetTravelled - 400) * 0.02;
        }
            else if (feetTravelled > 2000 && feetTravelled < 2500 ){
            return 25
        }
        else if ( feetTravelled > 2500){
            return "cannot travel that far";
        }
    }