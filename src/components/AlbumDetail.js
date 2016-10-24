import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, image, thumbnail_image, url } = album;
	const {
		thumbnailStyle,
		albumText,
		titleText,
		thumbnailContainerStyle,
		imageStyle } = styles;
	return (
			<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
					source={{ uri: thumbnail_image }} 
					style={thumbnailStyle}
					/>
				</View>
				<View style={albumText}>
					<Text style={titleText}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
				source={{ uri: image }}
				style={imageStyle}
				/>
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
		);
	}; 

const styles = {
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	albumText: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titleText: {
		fontSize: 18
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};
export default AlbumDetail;
