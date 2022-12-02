import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        borderStartColor : 'white',
        margin : 10
    },
    inner_container : {

        padding:  5,
    },

    image : {
        height : Dimensions.get('window').height / 4,
        width : Dimensions.get('window').width,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10
    },
    title : {
        fontWeight : 'bold',
        fontSize : 22
    },
    description : {
        marginTop : 5
        
    },
    author : {
        textAlign : 'right',
        fontStyle : "italic",

    }
});