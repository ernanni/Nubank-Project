import styled from 'styled-components/native';
import { Animated } from 'react-native'

export const Container = styled(Animated.View)`
   height: 100px;
   margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  height: 100px;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px;
  width: 100px;
`;

export const TabText = styled.Text`
  color: #FFF;
  font-size: 13px;
`;