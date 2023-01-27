import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export function Loading(){
	return (
		<View style={styles.load}>
			<ActivityIndicator color='#7C3AED'></ActivityIndicator>
		</View>
	)
}

const styles = StyleSheet.create({
	load: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: '#09090A'
	},
  });
  