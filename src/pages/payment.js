import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Space from '../components/Space';
import TextButton from '../components/TextButton';
import IconTextButton from '../components/IconTextButton';
import { StripeProvider, useConfirmPayment } from '@stripe/stripe-react-native';

const Payment = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardType, setCardType] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const { confirmPayment, loading } = useConfirmPayment();

  const handleFirstNameChange = (text) => {
    const formattedText = text.replace(/[^A-Za-z]/g, '');
    setFirstName(formattedText);
  };

  const handleLastNameChange = (text) => {
    const formattedText = text.replace(/[^A-Za-z]/g, '');
    setLastName(formattedText);
  };

  const handleCardNumberChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '');
    let formattedCardNumber = '';
    for (let i = 0; i < formattedText.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedCardNumber += ' ';
      }
      formattedCardNumber += formattedText[i];
    }
    setCardNumber(formattedCardNumber);
  };

  const handleExpirationDateChange = (text) => {
    const formattedText = text.replace(/\D/g, '');

    let formattedExpirationDate = '';
    if (formattedText.length > 2) {
      const month = formattedText.slice(0, 2);
      const year = formattedText.slice(2, 4);
      const validMonth = Math.max(1, Math.min(12, parseInt(month, 10))).toString().padStart(2, '0');
      formattedExpirationDate = `${validMonth}/${year}`;
    } else {
      formattedExpirationDate = formattedText;
    }
    setExpirationDate(formattedExpirationDate);
  };

  const handleCVVChange = (text) => {
    const formattedText = text.replace(/\D/g, '');
    setCVV(formattedText);
  };

  const fetchPaymentIntentClientSecret = async () => {
    // FIXME: API_URL must be set
    const response = await fetch(`${'API_URL'}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
      }),
    });
    const { clientSecret } = await response.json();

    return clientSecret;
  };

  const handlePayPress = async () => {
    if (!validation()) {
      return;
    }
    alert('You successfully booked!');
    navigation.replace('Search');

    // const clientSecret = await fetchPaymentIntentClientSecret();

    // // Confirm the payment with the card details
    // const {paymentIntent, error} = await confirmPayment(clientSecret, {
    //   paymentMethodType: 'Card',
    //   paymentMethodData: {
    //     billingDetails,
    //   },
    // });

    // if (error) {
    //   console.log('Payment confirmation error', error);
    // } else if (paymentIntent) {
    //   console.log('Success from promise', paymentIntent);
    // }
  };

  const validation = () => {
    if (firstName == '') {
      alert(['Please input firstname.']);
      return false;
    }
    if (lastName == '') {
      alert('Please input lastname.');
      return false;
    }
    if (cardNumber == '') {
      alert('Please input card number.');
      return false;
    }
    if (cardType == 2) {
      if (cardNumber.length < 18) {
        alert('Card number is invalid.');
        return false;
      }
    } else {
      if (cardNumber.length < 19) {
        alert('Card number is invalid.');
        return false;
      }
    }

    if (expirationDate == '') {
      alert('Please input expiration date.');
      return false;
    }
    if (expirationDate.length < 5) {
      alert('Expiration date is invalid.');
      return false;
    }

    if (cvv == '') {
      alert('Please input CVV.');
      return false;
    }
    if (cvv.length < 4) {
      alert('CVV is invalid.');
      return false;
    }
    return true;
  };

  return (
    <StripeProvider
      publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.leftComponent}
                onPress={() => {
                  navigation.navigate('Book');
                }}>
                <Image
                  source={require('../assets/images/arrow_left.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Total Price</Text>
              <View style={styles.rightComponent} />
            </View>
            <View style={{ paddingHorizontal: 40 }}>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: '#246bbc',
                    }}>
                    $ 300 / hour
                  </Text>
                  <Space height={16} />
                  <View style={[styles.float, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20, color: '#093373' }}>From</Text>
                    <View
                      style={[
                        styles.right,
                        {
                          width: 150,
                        },
                      ]}>
                      <Text style={{ fontSize: 15, color: '#093373' }}>
                        10 / 03 / 2023 10 : 00
                      </Text>
                    </View>
                  </View>
                  <Space height={16} />
                  <View style={[styles.float, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20, color: '#093373' }}>To</Text>
                    <View
                      style={[
                        styles.right,
                        {
                          width: 150,
                        },
                      ]}>
                      <Text style={{ fontSize: 15, color: '#093373' }}>
                        10 / 03 / 2023 18 : 00
                      </Text>
                    </View>
                  </View>
                </View>
                <Space height={16} />
                <View
                  style={{ borderBottomWidth: 2, borderStyle: 'dashed' }}></View>
                <Space height={16} />
                <View>
                  <View style={[styles.float, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20, color: '#093373' }}>
                      Rental Price
                    </Text>
                    <View>
                      <Text style={{ fontSize: 15, color: '#093373' }}>
                        $ 820
                      </Text>
                    </View>
                  </View>
                  <Space height={16} />
                  <View style={[styles.float, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20, color: '#093373' }}>
                      Service Fee
                    </Text>
                    <View>
                      <Text style={{ fontSize: 15, color: '#093373' }}>
                        $ 910
                      </Text>
                    </View>
                  </View>
                  <Space height={16} />
                  <View style={[styles.float, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20, color: '#093373' }}>
                      Handling Fees
                    </Text>
                    <View>
                      <Text style={{ fontSize: 15, color: '#093373' }}>$ 58</Text>
                    </View>
                  </View>
                  <Space height={16} />
                </View>

                <Space height={16} />
                <View
                  style={{ borderBottomWidth: 2, borderStyle: 'dashed' }}></View>
                <Space height={16} />
                <View style={[styles.float, { alignItems: 'center' }]}>
                  <Text style={{ fontSize: 20, color: '#093373' }}>
                    Total Price
                  </Text>
                  <View style={[]}>
                    <Text style={{ fontSize: 15, color: 'black' }}>$1, 800</Text>
                  </View>
                </View>
                <Space height={16} />
                <View
                  style={{ borderBottomWidth: 2, borderStyle: 'dashed' }}></View>
                <Space height={16} />
                <View style={[styles.float, { alignItems: 'center' }]}>
                  <Text style={{ fontSize: 20, color: '#093373' }}>
                    Secure Payment
                  </Text>
                </View>
                <Space height={16} />
                <View style={[styles.float]}>
                  <View>
                    <Text>First Name</Text>
                    <Space height={4} />
                    <TextInput
                      style={styles.input}
                      value={firstName}
                      onChangeText={handleFirstNameChange}
                      placeholder="Enter first name"
                      placeholderTextColor={'rgba(0,0,0,0.5)'}
                    />
                  </View>
                  <Space width={8} />
                  <View>
                    <Text>Last Name</Text>
                    <Space height={4} />
                    <TextInput
                      style={styles.input}
                      value={lastName}
                      onChangeText={handleLastNameChange}
                      placeholderTextColor={'rgba(0,0,0,0.5)'}
                      placeholder="Enter last name"
                    />
                  </View>
                </View>
                <Space height={16} />
                <View>
                  <View style={styles.float}>
                    <Text>Card Number</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity onPress={() => { setCardType(0); }}>
                        <Image
                          source={require('../assets/images/visa.png')}
                          style={{ width: 36, height: 24, marginLeft: 4 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { setCardType(1); }}>
                        <Image
                          source={require('../assets/images/mastercard.png')}
                          style={{ width: 36, height: 24, marginLeft: 4 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { setCardType(2); }}>
                        <Image
                          source={require('../assets/images/amex.png')}
                          style={{ width: 36, height: 24, marginLeft: 4 }}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* <CardField
                      postalCodeEnabled={true}
                      placeholders={{
                        number: '4242 4242 4242 4242',
                      }}
                      cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                      }}
                      style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                      }}
                      onCardChange={cardDetails => {
                        console.log('cardDetails', cardDetails);
                      }}
                      onFocus={focusedField => {
                        console.log('focusField', focusedField);
                      }}
                    /> */}
                  </View>
                  <Space height={4} />
                  <TextInput
                    style={styles.inputCard}
                    value={cardNumber}
                    onChangeText={handleCardNumberChange}
                    keyboardType='numeric'
                    maxLength={cardType == 2 ? 18 : 19}
                    placeholder={cardType == 2 ? "1234 1234 1234 123" : "1234 1234 1234 1234"}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                  />
                </View>
                <Space height={16} />
                <View style={[styles.float]}>
                  <View>
                    <Text>Expiration Date</Text>
                    <Space height={4} />
                    <TextInput
                      style={styles.input}
                      value={expirationDate}
                      onChangeText={handleExpirationDateChange}
                      keyboardType="numeric"
                      maxLength={5}
                      placeholder="MM/YY"
                      placeholderTextColor={'rgba(0,0,0,0.5)'}
                    />
                  </View>
                  <View>
                    <Text>CVV / cryptogram</Text>
                    <Space height={4} />
                    <TextInput
                      style={styles.input}
                      value={cvv}
                      onChangeText={handleCVVChange}
                      keyboardType="numeric"
                      maxLength={4}
                      placeholder="CVV"
                      placeholderTextColor={'rgba(0,0,0,0.5)'}
                    />
                  </View>
                </View>
              </View>
              <View></View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.tab}>
            <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
              <IconTextButton
                title="Validate and pay $1,800"
                hasIcon={false}
                onPress={handlePayPress}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
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
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
  scrollContainer: { flexGrow: 1, overflow: 'scroll', paddingBottom: 100 },
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: '#003580',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
  input: {
    width: 140,
    height: 36,
    borderColor: '#003580',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 10,
    color: 'black',
  },
  inputCard: {
    width: '100%',
    height: 36,
    borderColor: '#003580',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 10,
    color: 'black',
  },
});

export default Payment;
