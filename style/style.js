import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', 
  },
  header: {
    marginTop: 60,
    marginBottom: 15,
    backgroundColor: '#4A90E2', 
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    position: 'absolute', 
    bottom: 0
  },
  title: {
    color: '#ffffff', 
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#ffffff', 
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameinfo: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    color: '#333333', 
    
  },
  row: {
    marginTop: 20,
    padding: 10,
  },
  flex: {
    flexDirection: 'row',
  },
  button: {
    margin: 30,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#7ED321', 
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 20,
  },
});
