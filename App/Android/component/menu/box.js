import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity as Touch,
} from 'react-native';

import { MaterialIcons } from '../common';

export default class Box extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        onUser: null,
        onStar: null,
        onDownload: null,
    };

    static propTypes = {
        onUser: PropTypes.func,
        onStar: PropTypes.func,
        onDownload: PropTypes.func,
    };

    render() {
        return (
            <View style={this.props.style}>

                <View style={styles.top}>
                    <View style={styles.img}>
                        <Image
                            style={styles.img}
                            source={require('./img/user.jpg')}
                            />
                    </View>
                    <Text style={styles.login}>请登录</Text>
                </View>

                <View style={styles.bottom}>

                    <View style={styles.pick}>
                        <MaterialIcons
                            name="star"
                            color="#fff"
                            size={20}
                            />
                        <Text style={styles.pickText}>我的收藏</Text>
                    </View>

                    <View style={styles.pick}>
                        <MaterialIcons
                            name="file-download"
                            color="#fff"
                            size={18}
                            />
                        <Text style={styles.pickText}>离线下载</Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        // justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    login: {
        color: '#fff',
        paddingHorizontal: 10,
    },
    pick: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pickText: {
        color: '#fff',
        marginLeft: 15,
        fontWeight: '500',
    },
});
