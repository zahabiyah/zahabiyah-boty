
import hk from  '/Users/zahabiyahboty/visualstudiocode/my-app/src/images/hk.JPG'

import {Dimensions, Image} from 'react-native';


const dimensions = Dimensions.get('window');   
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;


export default function Intro() {

    return (
        <Image
     style={{height: imageHeight, width: imageWidth}}
     resizeMode="contain"
     source={hk}
   />   
    );
}