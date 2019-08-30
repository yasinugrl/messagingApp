import React, { Component } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import Login from './components/Onboarding/Login';
import Register from './components/Onboarding/Register';
import SelectRoom from './components/SelectRoom/SelectRoom';
import MessagePage from './components/Message/Message';

class RouterPage extends Component {
    render() {
        return (
            <Router>
                <Stack 
                hideNavBar
                key="root"
                transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal })} // this is requirede for horizontal push on android
                >
                    {/* <Scene
                            key="message"
                            component={MessagePage}
                            title='Message Page' initial/> */}

                    <Scene hideNavBar key="onboarding">
                        <Scene key="login"
                            hideNavBar
                            component={Login}
                            initial
                        />

                        <Scene key="register"
                            hideNavBar
                            component={Register}
                        />
                    </Scene>

                    <Scene key="main">

                        <Scene
                            key="selectRoom"
                            component={SelectRoom}
                            title='Select Message Room'
                            initial />

                        <Scene
                            key="message"
                            component={MessagePage}
                            title='Message Page' />

                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default RouterPage;