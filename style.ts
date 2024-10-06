
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 5
      },
      container:{
borderWidth:1,
padding:15,
borderRadius:15,
borderColor:'green'
      },

    inputbox:{
        borderWidth:1,
        borderRadius:15,
        padding:10,
        paddingHorizontal:15,

    },
    inputheading:{
        marginHorizontal:10,
        marginVertical:6,
        fontWeight:'bold',
        fontSize:15,
        color:'black'
    },
    inputerror:{
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize:15,
        color:'red'
    },
    btnSubmit:{
        padding:15,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'black',
        borderRadius:15,
        marginVertical:10
    },
    txtSubmit:{
        textAlign:'center',
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
})

export default styles;