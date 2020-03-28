import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20,
        backgroundColor:'#000'
    },

    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    incidentList:{
        marginTop:32,
    },

    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#141438',
        marginBottom:16,
        marginTop:48,
    },

    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginTop:24
    },

    incidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#e2a9a9'
    },

    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#141438',
        marginBottom:16,
    },
    heroTitle:{
        color:'#e2a9a9',
        fontWeight:'bold',
        fontSize:20,
        lineHeight:30
    },

    heroDescription:{
        color:'#e2a9a9',
        fontSize:15,
        marginTop:16
    },

    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    action:{
        backgroundColor:'#E02041',
        borderRadius:8,
        height:50,  
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },

    actionText:{
        color:'#141438',
        fontSize:15,
        fontWeight:'bold'
    }
});