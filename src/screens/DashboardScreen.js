import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
// import { getUsers } from '../localDB/db';

const DashboardScreen = () => {
  const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   getUsers((users) => {
  //     setUserData(users);
  //   });
  // }, []);

  // Process userData to extract month-wise data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50, 30, 20, 30, 40, 60], // Example data, replace with processed userData
      },
    ],
  };

  return (
    <View>
      <Text>Dashboard</Text>
      {/* <BarChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          // backgroundGradientFrom: '#fb8c00',
          // backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          color :'red',
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> */}
    </View>
  );
};

export default DashboardScreen;
