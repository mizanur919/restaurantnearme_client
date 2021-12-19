import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AppSafeArea } from "../../../components/utility/safe-area.component";

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListOfRestaurant = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <>
      <AppSafeArea>
        <SearchArea>
          <Searchbar />
        </SearchArea>
        <ListOfRestaurant
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </AppSafeArea>
    </>
  );
};
