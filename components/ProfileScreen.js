import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Content, Thumbnail, Button } from 'native-base';
// import { authFacebook, logout, userCollection } from '../modules/firebase';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Instagram',
  });

  render() {
    const tempAvatar =
      'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d';

    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <View style={styles.profileSection}>
              <View style={styles.profileMain}>
                <Thumbnail
                  large
                  source={{
                    uri: tempAvatar,
                  }}
                  style={styles.avatar}
                />
                <Text style={styles.name}>{'未設定'}</Text>
              </View>
              <Button
                style={styles.editButton}
                transparent
                dark
                onPress={() => this.props.navigation.navigate('Edit')}
              >
                <Text style={styles.buttonText}>プロフィール編集</Text>
              </Button>
              {/* <Button style={styles.logoutButton} dark rounded onPress={logout}> */}
              <Button style={styles.logoutButton}>
                <Text style={styles.buttonText}>ログアウト</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  notLoginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: width,
    height: height / 3,
    padding: 10,
    backgroundColor: 'black',
  },
  avatar: {
    width: height / 5,
    height: height / 5,
    borderRadius: height / 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  editButton: {
    position: 'absolute',
    padding: 10,
    bottom: 10,
    right: 10,
  },
  logoutButton: {
    position: 'absolute',
    padding: 10,
    bottom: 10,
    left: 10,
  },
  loginButton: {
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: 10.5,
    color: 'white',
  },
});

export default ProfileScreen;
