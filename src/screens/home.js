import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Space from '../components/Space';
import {Image} from 'react-native-elements';
import {Pressable} from 'react-native';

const Home = () => {
  const [section, setSection] = useState(true);
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;
  const scale3 = useRef(new Animated.Value(1)).current;
  const scale4 = useRef(new Animated.Value(1)).current;
  const scale5 = useRef(new Animated.Value(1)).current;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerTranslateX = useRef(new Animated.Value(200)).current;
  const maskOpacity = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    Animated.timing(scale1, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scale1, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressIn2 = () => {
    Animated.timing(scale2, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut2 = () => {
    Animated.timing(scale2, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  
  const onPressIn3 = () => {
    Animated.timing(scale3, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut3 = () => {
    Animated.timing(scale3, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const onPressIn4 = () => {
    Animated.timing(scale4, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut4 = () => {
    Animated.timing(scale4, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressIn5 = () => {
    Animated.timing(scale5, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut5 = () => {
    Animated.timing(scale5, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    Animated.timing(drawerTranslateX, {
      toValue: drawerOpen ? 0 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const hideDrawer = () => {
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <Animated.View
          style={[
            styles.mask,
            {
              opacity: maskOpacity,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [
                {
                  translateX: drawerTranslateX,
                },
              ],
              zIndex: 100,
            },
          ]}>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Menu Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Menu Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Menu Item 3</Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.mainContent}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {!section ? (
              <>
                <View style={styles.topSection}>
                  <Space height={40} />
                  <View style={styles.locationSection}>
                    <Image
                      source={require('../assets/images/location.png')}
                      style={[styles.icon, styles.left]}
                    />
                    <View style={[styles.left, styles.locationText]}>
                      <Text style={styles.locationLabel}>Location</Text>
                      <Text style={styles.location}>Lorem Ipsum </Text>
                    </View>
                    <Image
                      source={require('../assets/images/avatar.png')}
                      style={[styles.icon, styles.right]}
                    />
                  </View>
                  <Space height={20} />
                  <View style={styles.label}>
                    <Text style={styles.location}>With Luxury Yachts</Text>
                    <Text style={styles.location}>Relax on this planet...</Text>
                  </View>
                  <Space height={20} />
                  <Animated.View style={{transform: [{scale: scale1}]}}>
                    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
                      <View style={styles.searchField}>
                        <Image
                          source={require('../assets/images/search.png')}
                          style={styles.searchIcon}
                        />
                        <Text style={styles.searchLabel}>
                          Where do you want to sail?
                        </Text>
                      </View>
                    </Pressable>
                  </Animated.View>
                </View>
                <View style={styles.main}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Type
                    </Text>
                    <Space height={10} />
                    <ScrollView style={styles.carousel} horizontal={true}>
                      <View>
                        <Image
                          source={require('../assets/images/type_1.png')}
                          style={styles.image}
                        />
                        <Space height={8} />
                        <Text style={styles.textAlignCenter}>Yacht</Text>
                      </View>
                      <Space width={20} />
                      <View>
                        <Image
                          source={require('../assets/images/type_2.png')}
                          style={styles.image}
                        />
                        <Space height={8} />
                        <Text style={styles.textAlignCenter}>RIB</Text>
                      </View>
                      <Space width={20} />
                      <View>
                        <Image
                          source={require('../assets/images/type_3.png')}
                          style={styles.image}
                        />
                        <Space height={8} />
                        <Text style={styles.textAlignCenter}>HouseBoat</Text>
                      </View>
                    </ScrollView>
                  </View>
                  <Space height={20} />
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Popular Destination
                    </Text>
                    <Space height={10} />
                    <ScrollView style={styles.carousel} horizontal={true}>
                      <View>
                        <Image
                          source={require('../assets/images/destination_1.png')}
                          style={styles.image}
                        />
                        <Space height={8} />
                        <Text style={styles.textAlignCenter}>
                          Dubai, Marina
                        </Text>
                      </View>
                      <Space width={20} />
                      <View>
                        <Image
                          source={require('../assets/images/destination_2.png')}
                          style={styles.image}
                        />
                        <Space height={8} />
                        <Text style={styles.textAlignCenter}>Abu dhabi</Text>
                      </View>
                      <Space width={20} />
                      <View>
                        <Image
                          source={require('../assets/images/destination_3.png')}
                          style={styles.image}
                        />
                        <Space height={8} />
                        <Text style={styles.textAlignCenter}>
                          Ras Al Khaimah
                        </Text>
                      </View>
                    </ScrollView>
                  </View>
                  <Space height={20} />
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Popular Listing
                    </Text>
                    <Space height={10} />
                    <View style={styles.card}>
                      <Image
                        source={require('../assets/images/yacht_1.png')}
                        style={styles.cardImage}
                      />
                      <View style={styles.cardInfo}>
                        <Text style={{fontWeight: '900', fontSize: 20}}>
                          Gulf Craft Majestic 62
                        </Text>
                        <Text style={{fontSize: 12}}>
                          Dubai, United Arab Emirates | 25 people | 62 Feet
                        </Text>
                        <Space height={5} />
                        <View styles={styles.searchField}>
                          <Image
                            source={require('../assets/images/star.png')}
                            style={[{flex: 0, width: 24, height: 24}]}
                          />
                          <Text styles={{flex: 0}}> 5.0 (34 Bookings)</Text>
                        </View>
                        <View styles={styles.searchField}>
                          <Image
                            source={require('../assets/images/skipper.png')}
                            style={[{flex: 0, width: 24, height: 10}]}
                          />
                          <Text styles={{flex: 0}}>
                            {' '}
                            6 | With or without skippers
                          </Text>
                        </View>
                        <Text style={{fontWeight: '500', fontSize: 20}}>
                          From 800Aed per hour
                        </Text>
                      </View>
                    </View>
                    <Space height={30} />
                  </View>
                </View>
              </>
            ) : (
              <View style={{margin: 16}}>
                <Animated.View style={{transform: [{scale: scale1}]}}>
                  <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
                    <View style={styles.searchWidget}>
                      <Image
                        source={require('../assets/images/point.png')}
                        style={styles.searchIcon}
                      />
                      <Text style={styles.searchLabel}>
                        Dubai, United Arab Emirates
                      </Text>
                    </View>
                  </Pressable>
                </Animated.View>
                <Space height={20} />
                <View style={styles.searchItems}>
                  <Animated.View style={{transform: [{scale: scale2}]}}>
                    <Pressable onPressIn={onPressIn2} onPressOut={onPressOut2}>
                      <View style={styles.searchWidget}>
                        <Text style={styles.searchItem}>Dates</Text>
                      </View>
                    </Pressable>
                  </Animated.View>
                  <Space width={16} />
                  <Animated.View style={{transform: [{scale: scale3}]}}>
                    <Pressable onPress={toggleDrawer} onPressIn={onPressIn3} onPressOut={onPressOut3}>
                      <View style={styles.searchWidget}>
                        <Text style={styles.searchItem}>Guests</Text>
                      </View>
                    </Pressable>
                  </Animated.View>
                  <Space width={16} />
                  <Animated.View style={{transform: [{scale: scale4}]}}>
                    <Pressable onPressIn={onPressIn4} onPressOut={onPressOut4}>
                      <View style={styles.searchWidget}>
                        <Text style={styles.searchItem}>More Filters</Text>
                      </View>
                    </Pressable>
                  </Animated.View>
                </View>
                <Space height={20} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black', fontSize: 20}}>
                    100+ Boats Available
                  </Text>
                  <Animated.View style={{transform: [{scale: scale5}]}}>
                    <Pressable onPressIn={onPressIn5} onPressOut={onPressOut5}>
                      <Image
                        source={require('../assets/images/sort.png')}
                        style={{width: 24, height: 24}}
                      />
                    </Pressable>
                  </Animated.View>
                </View>
                <View>
                  <Space height={10} />
                  <View style={styles.card}>
                    <Image
                      source={require('../assets/images/yacht_1.png')}
                      style={styles.cardImage}
                    />
                    <View style={styles.cardInfo}>
                      <Text style={{fontWeight: '900', fontSize: 20}}>
                        Gulf Craft Majestic 62
                      </Text>
                      <Text style={{fontSize: 12}}>
                        Dubai, United Arab Emirates | 25 people | 62 Feet
                      </Text>
                      <Space height={5} />
                      <View styles={styles.searchField}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={[{flex: 0, width: 24, height: 24}]}
                        />
                        <Text styles={{flex: 0}}> 5.0 (34 Bookings)</Text>
                      </View>
                      <View styles={styles.searchField}>
                        <Image
                          source={require('../assets/images/skipper.png')}
                          style={[{flex: 0, width: 24, height: 10}]}
                        />
                        <Text styles={{flex: 0}}>
                          {' '}
                          6 | With or without skippers
                        </Text>
                      </View>
                      <Text style={{fontWeight: '500', fontSize: 20}}>
                        From 800Aed per hour
                      </Text>
                    </View>
                  </View>
                  <Space height={30} />
                  <View style={styles.card}>
                    <Image
                      source={require('../assets/images/yacht_1.png')}
                      style={styles.cardImage}
                    />
                    <View style={styles.cardInfo}>
                      <Text style={{fontWeight: '900', fontSize: 20}}>
                        Gulf Craft Majestic 62
                      </Text>
                      <Text style={{fontSize: 12}}>
                        Dubai, United Arab Emirates | 25 people | 62 Feet
                      </Text>
                      <Space height={5} />
                      <View styles={styles.searchField}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={[{flex: 0, width: 24, height: 24}]}
                        />
                        <Text styles={{flex: 0}}> 5.0 (34 Bookings)</Text>
                      </View>
                      <View styles={styles.searchField}>
                        <Image
                          source={require('../assets/images/skipper.png')}
                          style={[{flex: 0, width: 24, height: 10}]}
                        />
                        <Text styles={{flex: 0}}>
                          {' '}
                          6 | With or without skippers
                        </Text>
                      </View>
                      <Text style={{fontWeight: '500', fontSize: 20}}>
                        From 800Aed per hour
                      </Text>
                    </View>
                  </View>
                  <Space height={30} />
                  <View style={styles.card}>
                    <Image
                      source={require('../assets/images/yacht_1.png')}
                      style={styles.cardImage}
                    />
                    <View style={styles.cardInfo}>
                      <Text style={{fontWeight: '900', fontSize: 20}}>
                        Gulf Craft Majestic 62
                      </Text>
                      <Text style={{fontSize: 12}}>
                        Dubai, United Arab Emirates | 25 people | 62 Feet
                      </Text>
                      <Space height={5} />
                      <View styles={styles.searchField}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={[{flex: 0, width: 24, height: 24}]}
                        />
                        <Text styles={{flex: 0}}> 5.0 (34 Bookings)</Text>
                      </View>
                      <View styles={styles.searchField}>
                        <Image
                          source={require('../assets/images/skipper.png')}
                          style={[{flex: 0, width: 24, height: 10}]}
                        />
                        <Text styles={{flex: 0}}>
                          {' '}
                          6 | With or without skippers
                        </Text>
                      </View>
                      <Text style={{fontWeight: '500', fontSize: 20}}>
                        From 800Aed per hour
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  topSection: {
    height: 260,
    backgroundColor: '#246bbc',
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
    marginRight: 8,
  },
  locationText: {
    paddingHorizontal: 8,
  },
  location: {
    color: '#ffffff',
  },
  label: {
    paddingLeft: 16,
  },
  searchField: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    flex: 1,
    margin: 16,
    width: 20,
    height: 20,
  },
  searchLabel: {
    margin: 16,
    flex: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  carousel: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  card: {
    height: 340,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 170,
  },
  cardInfo: {
    padding: 10,
  },
  searchWidget: {
    backgroundColor: '#f5f5f5',
    borderColor: '#A9B4BE',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchItem: {
    margin: 8,
    color: 'black',
  },
  drawerButton: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  drawerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  drawer: {
    width: 0,
    backgroundColor: '#f1f1f1',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    overflow: 'hidden',
    position: 'relative',
  },
  drawerItem: {
    paddingVertical: 8,
  },
  drawerItemText: {
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Home;
