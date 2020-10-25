import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import {
  Container,
  Content,
  Button,
  Thumbnail,
  Badge,
  Textarea,
} from 'native-base';
// import { Icon, Permissions, ImagePicker } from 'expo';

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      image: null,
      uploading: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Instagram',
  });

  postFeed = async (properties) => {
    try {
      this.setState({ uploading: true });
      alert('投稿しました');
      this.setState({
        message: null,
        image: null,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ uploading: false });
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <View style={styles.imageSection}>
              {this.state.image ? (
                <Thumbnail
                  large
                  square
                  source={{ uri: this.state.image }}
                  style={styles.image}
                />
              ) : null}
            </View>

            <View style={styles.textSection}>
              <Textarea
                style={styles.description}
                rowSpan={10}
                bordered
                placeholder='メッセージ'
                onChangeText={(message) => this.setState({ message })}
              />
            </View>

            <Button
              style={styles.button}
              dark
              rounded
              onPress={() => this.postFeed(this.state)}
              disabled={this.state.uploading}
            >
              <Text style={styles.buttonText}>投稿</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notLoginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSection: {
    position: 'relative',
    width: width,
    height: width,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  image: {
    width: width,
    height: width,
  },
  iconButton: {
    position: 'absolute',
    bottom: -32,
    right: width / 20,
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textSection: {
    padding: 10,
  },
  title: {
    width: (width * 9) / 10,
    marginBottom: 20,
  },
  description: {
    width: (width * 9) / 10,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
  loginButton: {
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default FeedScreen;
