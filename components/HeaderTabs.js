import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        text='Delivery'
        bgColor='black'
        textColor='white'
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text='Pickup'
        bgColor='white'
        textColor='black'
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: 'bold',
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
