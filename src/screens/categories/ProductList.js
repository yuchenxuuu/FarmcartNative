import React, {useState}  from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import fruitsData from '../../assets/data/fruitData';
import vegitablesData from '../../assets/data/vegetableData';


function Item({ item }) {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.item}>
      <Image style={styles.productsImage} source={item.img} resizeMode="contain"/>
      <Text style={styles.title}>{`${item.name}\n`}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.description}>{item.price}</Text>
      <Text style={styles.description}>{'\n'}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Add</Text>
      </TouchableOpacity>


    </View>
  );
}

export default function ProductList() {


  return (
    <SafeAreaView style={styles.container}>

      <Collapse>
        <CollapseHeader style={styles.collapseHeader} >
          <View style={{width:180,alignItems:'center'}}>
              <Text style={styles.titleCollapseHeader}> Fruits </Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            data={fruitsData}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </CollapseBody>
        </Collapse>

        <Collapse>
          <CollapseHeader style={styles.collapseHeader} >
            <View style={{width:180,alignItems:'center'}}>
                <Text style={styles.titleCollapseHeader}> Vegitables </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <FlatList
              data={vegitablesData}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </CollapseBody>
        </Collapse>

        <Collapse>
          <CollapseHeader style={styles.collapseHeader} >
            <View style={{width:180,alignItems:'center'}}>
                <Text style={styles.titleCollapseHeader}> Meats </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <FlatList
              data={vegitablesData}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </CollapseBody>
        </Collapse>

        <Collapse>
          <CollapseHeader style={styles.collapseHeader} >
            <View style={{width:180,alignItems:'center'}}>
                <Text style={styles.titleCollapseHeader}> Others </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <FlatList
              data={vegitablesData}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </CollapseBody>
        </Collapse>



      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: "gray",
    fontSize: 12,
  },
  productsImage: {
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  collapseHeader: {
    alignItems:'center',
    padding:10,
    backgroundColor:'#ffffff00'
  },
  titleCollapseHeader: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5
  }
});
