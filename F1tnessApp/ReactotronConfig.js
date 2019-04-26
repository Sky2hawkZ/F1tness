import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export default reactotron = Reactotron
    .configure({ name: 'React Native F1tness' })
    .use(reactotronRedux()) //  <- here i am!
    .connect() //Don't forget about me!

