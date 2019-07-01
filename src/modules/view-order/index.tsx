import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import {Title, TitleHeader, Caption, Medium} from 'commons/text';
import {Column, Spacing} from 'commons/ui';
import {Button} from 'commons/button';

import {Colors} from 'styles';
import styles from './styles';

import * as Icons from 'assets/icons';
import Icon from 'react-native-vector-icons/EvilIcons';

const Divider = styled.TouchableOpacity`
  padding-left: 15;
  padding-right: 15;
  height: 40px;
  background-color: ${Colors.background};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: ${Colors.danger};
`;

function ViewOrder(props: any) {
  const deviceHeight = Math.max(
    Dimensions.get('window').height,
    Dimensions.get('screen').height,
  );

  const [modal, setModal] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Modal
        style={styles.modal}
        isVisible={modal}
        onSwipeComplete={() => setModal(false)}
        swipeDirection={['down']}
        backdropOpacity={0.8}
        deviceHeight={deviceHeight}>
        <View style={styles.modalTop}>
          <Title>Set available time</Title>
        </View>
        <View style={styles.modalBody}>
          <Title>Modal Body</Title>
        </View>
      </Modal>

      <Divider onPress={() => setModal(true)}>
        <Title>Set available time</Title>
        <Icon name="chevron-right" size={22} />
      </Divider>

      <Column style={styles.list} isColumn justifyContent="space-between">
        <Medium isBold>Invite friends</Medium>

        <Caption color={Colors.text}>
          Let friend order and pay separately by inviting to your table
        </Caption>

        <Spacing marginBottom={10} />

        <Avatar />
      </Column>

      <Spacing marginBottom={10} />

      <Column style={styles.list} isColumn justifyContent="space-between">
        <Medium isBold>Your order</Medium>

        <View style={styles.listWrapper}>
          <Column
            justifyContent="space-between"
            alignItems="center"
            style={styles.menu}>
            <Column alignItems="center">
              <Title color={Colors.info} isBold>
                1
              </Title>
              <Spacing marginRight={15} />
              <Column isColumn>
                <Title>Burrito chicken special</Title>
                <Caption>Small</Caption>
              </Column>
            </Column>

            <Caption>$13.99</Caption>
          </Column>
          <Column
            justifyContent="space-between"
            alignItems="center"
            style={styles.menu}>
            <Column alignItems="center">
              <Title color={Colors.info} isBold>
                4
              </Title>
              <Spacing marginRight={15} />
              <Column isColumn>
                <Title>Burrito chicken special</Title>
                <Caption>Small</Caption>
              </Column>
            </Column>

            <Caption>$13.99</Caption>
          </Column>

          <Column style={styles.menu}>
            <Caption>Add special request</Caption>
          </Column>

          <Column
            justifyContent="space-between"
            alignItems="center"
            style={[styles.menu]}>
            <Column
              justifyContent="space-between"
              alignItems="center"
              style={styles.fullWidth}>
              <Column alignItems="center">
                <Spacing marginRight={25} />
                <Column isColumn>
                  <Title>Tax and Fees</Title>
                </Column>
              </Column>

              <Caption>$13.99</Caption>
            </Column>
          </Column>

          <Column
            justifyContent="space-between"
            alignItems="center"
            style={[styles.menu]}>
            <Column
              justifyContent="space-between"
              alignItems="center"
              style={styles.fullWidth}>
              <Column alignItems="center">
                <Spacing marginRight={25} />
                <Column isColumn>
                  <Title>Total</Title>
                </Column>
              </Column>

              <Title color={Colors.dark} isBold>
                $54.99
              </Title>
            </Column>
          </Column>

          <Column
            justifyContent="space-between"
            alignItems="center"
            style={[styles.menu, styles.noBorder, styles.noPadding]}>
            <Column
              justifyContent="space-between"
              alignItems="center"
              style={styles.fullWidth}>
              <Column alignItems="center">
                <Spacing marginRight={25} />
                <View>
                  <Image source={Icons.google.default} />
                </View>
                <Spacing marginRight={10} />
                <Column isColumn>
                  <Title>Google Pay</Title>
                </Column>
              </Column>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('Payment')}>
                <Caption>Change</Caption>
              </TouchableOpacity>
            </Column>
          </Column>
        </View>
      </Column>

      <Spacing marginTop={15} />

      <View>
        <Button
          bgColor={Colors.warning}
          borderRadius={'0px'}
          onPress={() => props.navigation.navigate('OrderSuccess')}>
          <Title color={Colors.dark} isBold>
            Place Order
          </Title>
        </Button>
      </View>
    </ScrollView>
  );
}

ViewOrder.navigationOptions = {
  headerTitle: <TitleHeader>Golden Vegetable Food</TitleHeader>,
  headerLeft: null,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
};

export default ViewOrder;
