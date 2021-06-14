import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

const rating = () => {
   const ratingCompleted =(rating)=> {
        console.log("Rating is: " + rating)
        console.log(rating);
      }
      
    return (
        <View>
            
            <Rating
                type='star'
                ratingColor='tomato'
                ratingCount={50}
                imageSize={40}
                showRating
                totalCont={5}
                //onFinishRating={ratingCompleted}
                rated={440/2}
                />
            <AirbnbRating
                count={5}
                reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={7/2}
                size={20}
                />

            <Text> first name</Text>
        </View>   
    )
}

export default rating

const styles = StyleSheet.create({})
