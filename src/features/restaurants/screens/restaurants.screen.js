import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const AppSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchArea = styled.View`
  padding: 16px;
`;

const ListArea = styled.View`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <AppSafeArea>
        <SearchArea>
          <Searchbar />
        </SearchArea>
        <ListArea>
          <RestaurantInfoCard />
        </ListArea>
      </AppSafeArea>
    </>
  );
};
