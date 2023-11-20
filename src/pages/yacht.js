import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import Space from '../components/Space';
import IconTextButton from '../components/IconTextButton';
import CONFIG from '../utils/consts/config';

const Yacht = ({navigation}) => {
  const [aboutSize, setAboutSize] = useState(true);
  const [featureSize, setFeatureSize] = useState(true);
  const [specificationSize, setSpecificationSize] = useState(true);
  const [allowSize, setAllowSize] = useState(true);
  const [cancellationSize, setCancellationSize] = useState(true);
  const [depositSize, setDepositSize] = useState(true);
  const [captainInfoSize, setCaptainInfoSize] = useState(true);
  const [bookingSize, setBookingSize] = useState(true);

  return (
    <View style={[styles.container, {backgroundColor: 'white'}]}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <ImageSlider
          imageLinks={[
            CONFIG.API_URL + 'asset/yachts/yacht_1.png',
            CONFIG.API_URL + 'asset/yachts/yacht_2.png',
            CONFIG.API_URL + 'asset/yachts/yacht_3.png',
          ]}
        />
        <TouchableOpacity
          style={{position: 'absolute', left: 20, top: 30}}
          onPress={() => {
            navigation.pop();
          }}>
          <Image
            source={require('../assets/images/arrow_left.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <View style={{margin: 16}}>
          <View style={styles.float}>
            <View>
              <Text
                style={{fontSize: 20, color: '#246bbc', fontWeight: 'bold'}}>
                Luxury 60 Feet Majesty YACHT
              </Text>
            </View>
            <View style={[styles.float, {marginTop: 4}]}>
              <Image
                source={require('../assets/images/point.png')}
                style={{width: 20, height: 20}}
              />
              <Text> Dubai</Text>
            </View>
          </View>
          <Space height={16} />
          <View style={styles.rowLeft}>
            <Image
              source={require('../assets/images/star.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{color: 'black'}}> 5.0 (34 Bookings)</Text>
          </View>
          <Space height={16} />
          <View
            style={[
              styles.float,
              {
                borderRadius: 12,
                borderColor: 'black',
                borderWidth: 1,
                paddingVertical: 12,
                paddingHorizontal: 2,
              },
            ]}>
            <View
              style={{
                width: '24%',
                alignItems: 'center',
                paddingRight: 2,
                borderRightWidth: 1,
              }}>
              <View
                style={{
                  height: '30',
                  borderRadius: 10,
                  backgroundColor: '#20A84E',
                  paddingVertical: 4,
                  paddingHorizontal: 16,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#FFCE31'}}>
                  99%
                </Text>
              </View>
              <Space height={8} />
              <View>
                <Text
                  numberOfLines={2}
                  style={{textAlign: 'center', fontSize: 13, color: 'black'}}>
                  Owner’s response rate
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '25%',
                alignItems: 'center',
                paddingRight: 2,
                borderRightWidth: 1,
              }}>
              <View
                style={{
                  height: '30',
                  borderRadius: 10,
                  backgroundColor: '#FFCE31',
                  paddingVertical: 4,
                  paddingHorizontal: 16,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#093373'}}>
                  Moderate
                </Text>
              </View>
              <Space height={8} />
              <View>
                <Text
                  numberOfLines={2}
                  style={{textAlign: 'center', fontSize: 13, color: 'black'}}>
                  Cancelation policy
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '25%',
                alignItems: 'center',
                paddingRight: 2,
                borderRightWidth: 1,
              }}>
              <Image
                source={require('../assets/images/users.png')}
                style={{width: 32, height: 20}}
              />
              <Space height={12} />
              <View>
                <Text
                  numberOfLines={2}
                  style={{textAlign: 'center', fontSize: 13, color: 'black'}}>
                  Up to 12 passengers
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '25%',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/skipper.png')}
                style={{width: 40, height: 18}}
              />
              <Space height={12} />
              <View>
                <Text
                  numberOfLines={2}
                  style={{textAlign: 'center', fontSize: 13, color: 'black'}}>
                  Captained
                </Text>
              </View>
            </View>
          </View>
          <Space height={16} />
          <View>
            <Text style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
              About
            </Text>
            <Space height={8} />
            <View style={{height: aboutSize ? 'auto' : 80}}>
              <Text style={{paddingLeft: 8, fontSize: 16, color: 'black'}}>
                Greetings from Amwaj Al Bahar Boats and Yachts Chartering! 3
                cabins, flying bridge, sun deck, living room, kitchen, etc.
                Spacious outdoor and indoor areas. Large Flybridge with BBQ
                Beautiful interior Soft drinks & water provided (guests are
                permitted to bring other beverages of their choice). Friendly
                and experienced crew Great for parties, gatherings, celebrations
                or corporate team-building day out
              </Text>
            </View>

            <Space height={8} />
            <TouchableOpacity
              onPress={() => {
                setAboutSize(!aboutSize);
              }}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                {aboutSize ? 'View less' : 'View more'}
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <Text style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
              Features
            </Text>
            <Space height={8} />
            {featureSize ? (
              <View style={{paddingLeft: 8}}>
                <View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      Air Conditioning
                    </Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>Anchor</Text>
                    <Image
                      source={require('../assets/images/no.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>Bathroom</Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      Cooler / Ice chest
                    </Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      Floating mat
                    </Text>
                    <Image
                      source={require('../assets/images/no.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>GPS</Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>Shower</Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>Stereo</Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      Stereo Aux Input
                    </Text>
                    <Image
                      source={require('../assets/images/yes.png')}
                      style={{width: 16, height: 16}}
                    />
                  </View>
                </View>
              </View>
            ) : (
              ''
            )}
            <Space height={8} />
            <TouchableOpacity
              onPress={() => {
                setFeatureSize(!featureSize);
              }}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                {featureSize ? 'View less' : 'View more'}
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
                  Specification
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setSpecificationSize(!specificationSize);
                  }}>
                  <Image
                    source={
                      specificationSize
                        ? require('../assets/images/up.png')
                        : require('../assets/images/down.png')
                    }
                    style={{width: 16, height: 16}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Space height={8} />
            {specificationSize ? (
              <View style={{paddingLeft: 8}}>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Year</Text>
                  <Text style={{color: 'black', fontSize: 16}}>2009</Text>
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Length</Text>
                  <Text style={{color: 'black', fontSize: 16}}>30 m</Text>
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Made by</Text>
                  <Text style={{color: 'black', fontSize: 16}}>Beneteau</Text>
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Model</Text>
                  <Text style={{color: 'black', fontSize: 16}}>Majesty</Text>
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Capacity</Text>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Up to 12 people
                  </Text>
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Yacht Type</Text>
                  <Text style={{color: 'black', fontSize: 16}}>Flybridge</Text>
                </View>
              </View>
            ) : (
              ''
            )}
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <Text style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
              Location
            </Text>
            <Space height={8} />
            <Image
              source={require('../assets/images/destination_1.png')}
              style={{marginLeft: 8, width: '96%', height: 200}}
            />
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <Text style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
              Reviews
            </Text>
            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}>
                  <View style={styles.float}>
                    <View style={styles.float}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 100,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../assets/images/avatar.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <View style={{paddingLeft: 8}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Leo
                        </Text>
                        <Text style={{color: 'black'}}>Sep, 2023</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign: 'right'}}>1 / 34</Text>
                      <Space height={4} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                      </View>
                    </View>
                  </View>
                  <Space height={16} />
                  <View>
                    <Text style={{color: 'black'}}>
                      “ I Have travelled the wonder scene by this yacht. It was
                      really attractive and nice. I love that. And I want to
                      play again.”
                    </Text>
                  </View>
                </View>
                <Space width={16} />
                <View
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}>
                  <View style={styles.float}>
                    <View style={styles.float}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 100,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../assets/images/avatar.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <View style={{paddingLeft: 8}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Leo
                        </Text>
                        <Text style={{color: 'black'}}>Sep, 2023</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign: 'right'}}>1 / 34</Text>
                      <Space height={4} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                      </View>
                    </View>
                  </View>
                  <Space height={16} />
                  <View>
                    <Text style={{color: 'black'}}>
                      “ I Have travelled the wonder scene by this yacht. It was
                      really attractive and nice. I love that. And I want to
                      play again.”
                    </Text>
                  </View>
                </View>
                <Space width={16} />
                <View
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}>
                  <View style={styles.float}>
                    <View style={styles.float}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 100,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../assets/images/avatar.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <View style={{paddingLeft: 8}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Leo
                        </Text>
                        <Text style={{color: 'black'}}>Sep, 2023</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign: 'right'}}>1 / 34</Text>
                      <Space height={4} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                      </View>
                    </View>
                  </View>
                  <Space height={16} />
                  <View>
                    <Text style={{color: 'black'}}>
                      “ I Have travelled the wonder scene by this yacht. It was
                      really attractive and nice. I love that. And I want to
                      play again.”
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <Space height={8} />
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <Text style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
              Things to know
            </Text>
            <Space height={8} />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Allowed on the yacht
            </Text>
            <Space height={8} />
            {allowSize ? (
              <View style={{paddingLeft: 8}}>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Air Conditioning
                  </Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Anchor</Text>
                  <Image
                    source={require('../assets/images/no.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Bathroom</Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Cooler / Ice chest
                  </Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Floating mat
                  </Text>
                  <Image
                    source={require('../assets/images/no.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>GPS</Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Shower</Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>Stereo</Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <View style={styles.float}>
                  <Text style={{color: 'black', fontSize: 16}}>
                    Stereo Aux Input
                  </Text>
                  <Image
                    source={require('../assets/images/yes.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
              </View>
            ) : (
              ''
            )}

            <Space height={8} />
            <TouchableOpacity
              onPress={() => {
                setAllowSize(!allowSize);
              }}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                {allowSize ? 'View Less' : 'View More'}
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
                  Cancellation
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setCancellationSize(!cancellationSize);
                  }}>
                  <Image
                    source={
                      cancellationSize
                        ? require('../assets/images/up.png')
                        : require('../assets/images/down.png')
                    }
                    style={{width: 16, height: 16}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Space height={8} />
            {cancellationSize ? (
              <View style={{paddingLeft: 8}}>
                <View>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {' '}
                    - Free cancellations until 5 days before the booking start
                    time
                  </Text>
                </View>
                <Space height={4} />
                <View>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {' '}
                    - 50% refund for cancellations between 3-5 days before the
                    booking start time
                  </Text>
                </View>
                <Space height={4} />
                <View>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {' '}
                    - Cancellations within 2 days of the booking start time are
                    non-refundable
                  </Text>
                </View>
              </View>
            ) : (
              ''
            )}

            <Space height={8} />
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                See policy
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
                  Security deposit
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setDepositSize(!depositSize);
                  }}>
                  <Image
                    source={
                      depositSize
                        ? require('../assets/images/up.png')
                        : require('../assets/images/down.png')
                    }
                    style={{width: 16, height: 16}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Space height={8} />
            {depositSize ? (
              <View style={{paddingLeft: 8}}>
                <Text style={{color: 'black', fontSize: 16}}>
                  A security deposit hold (not a charge) will be placed on your
                  credit card 48 hours before you booking starts to cover any
                  incidental damage that may accur during your rental. This hold
                  is replaced 48 hours after the booking is complete, if no
                  claims are made. The security deposit amount for the yacht you
                  are booking will be outlined during the check-out process.
                </Text>
              </View>
            ) : (
              ''
            )}

            <Space height={8} />
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                Learn more
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
                  Captain info
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setCaptainInfoSize(!captainInfoSize);
                  }}>
                  <Image
                    source={
                      captainInfoSize
                        ? require('../assets/images/up.png')
                        : require('../assets/images/down.png')
                    }
                    style={{width: 16, height: 16}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Space height={8} />
            {captainInfoSize ? (
              <View style={{paddingLeft: 8}}>
                <Text style={{color: 'black', fontSize: 16}}>
                  If requested, the owner can provide a list of available
                  captains for bareboat charter, or the renter can use their own
                  qualified captain. if the yacht is being time chartered, the
                  owner will provide the Captain.
                </Text>
              </View>
            ) : (
              ''
            )}
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
                  Booking options
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setBookingSize(!bookingSize);
                  }}>
                  <Image
                    source={
                      bookingSize
                        ? require('../assets/images/up.png')
                        : require('../assets/images/down.png')
                    }
                    style={{width: 16, height: 16}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Space height={8} />
            {bookingSize ? (
              <View>
                <Text
                  style={{
                    paddingLeft: 8,
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Captained
                </Text>

                <Space height={8} />
                <View style={{paddingLeft: 8}}>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>2 hours</Text>
                    <Text style={{color: 'black', fontSize: 16}}>$ 575</Text>
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>3 hours</Text>
                    <Text style={{color: 'black', fontSize: 16}}>$ 845</Text>
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>4 hours</Text>
                    <Text style={{color: 'black', fontSize: 16}}>$ 1100</Text>
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>6 hours</Text>
                    <Text style={{color: 'black', fontSize: 16}}>$ 1685</Text>
                  </View>
                  <View style={styles.float}>
                    <Text style={{color: 'black', fontSize: 16}}>8 hours</Text>
                    <Text style={{color: 'black', fontSize: 16}}>$ 2200</Text>
                  </View>
                </View>
              </View>
            ) : (
              ''
            )}
          </View>
          <Space height={16} />
          <View style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={{color: '#246bbc', fontSize: 20, fontWeight: 'bold'}}>
                  Owner
                </Text>
              </View>
            </View>
            <Space height={16} />
            <View style={styles.float}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: CONFIG.API_URL + 'asset/avatars/1.png'}}
                  style={{
                    marginLeft: 8,
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    borderColor: '#246bbc',
                    borderWidth: 1,
                    padding: 16,
                  }}
                />
                <View style={{marginLeft: 8, alignContent: 'center'}}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    Salih
                  </Text>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    971-50-1234567
                  </Text>
                </View>
              </View>
              <View>
                <IconTextButton
                  title="Direct Message"
                  hasIcon={true}
                  icon={require('../assets/images/comment.png')}
                  onPress={() => {
                    navigation.navigate('Contact');
                  }}
                />
              </View>
            </View>

            <Space height={16} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tab}>
          <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <View style={[styles.float, {alignItems: 'center'}]}>
              <View>
                <View>
                  <Text
                    style={{
                      color: '#246bbc',
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    $300 / hr
                  </Text>
                </View>
              </View>
              <Space width={40} />
              <View>
                <IconTextButton
                  title="Instant Book"
                  hasIcon={true}
                  onPress={() => {
                    navigation.navigate('Book');
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    position: 'relative',
  },
  contentContainerStyle: {flexGrow: 1, overflow: 'scroll', paddingBottom: 80},
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
};
export default Yacht;
