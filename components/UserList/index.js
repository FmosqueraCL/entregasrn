import { FlatList, StyleSheet, View } from 'react-native'
import CardUser from './CardUser';

const UserList =({users, onModal}) => {
    return (
        <View style={styles.ListContainer}>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({item})=><CardUser user={item} onModal={onModal}/>
                }
            />
        </View>
    );
};

const styles =StyleSheet.create ({
    ListContainer: {
        width:'100%'
    }
});

export default UserList;