import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity as Touch,
    Dimensions,
} from 'react-native';

import ViewPager from './view-pager/ViewPager';

const window = Dimensions.get('window');


// 轮播图，幻灯片
export default class Slide extends Component {

    constructor(props) {
        super(props);

        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: dataSource.cloneWithPages(this.props.data),
        };
    }

    static defaultProps = {
        height: 220,
        width: window.width,
        data: [],
        onPress: () => { },
    };

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
        data: PropTypes.array.isRequired,
        onPress: PropTypes.func,
    };

    renderPage = (data, position) => (
        <View collapsable={true}>
            <Image
                style={{ width: window.width, height: 220 }}
                source={{ uri: data.image }}
                resizeMode="cover"
                />
            <Touch
                activeOpacity={0.7}
                style={styles.shade}
                onPress={event => this.props.onPress(event, data.id)}
                >
                <Text style={styles.title}>
                    {data.title}
                </Text>
            </Touch>
        </View>
    );

    render() {
        return (
            <View style={{ height: this.props.height, width: this.props.width }}>{
                this.props.data.length > 1 ?
                    <ViewPager
                        dataSource={this.state.dataSource}
                        renderPage={this.renderPage}
                        isLoop={false}
                        autoPlay={true}
                        time={6000}
                        />
                    :
                    <View collapsable={true}>
                        <Image
                            style={{ width: window.width, height: 220 }}
                            source={{ uri: this.props.data[0].image }}
                            resizeMode="cover"
                            />
                        <Touch
                            style={styles.shade}
                            onPress={event => this.props.onPress(event, data.id)}
                            >
                            <Text style={styles.title}>
                                {this.props.data[0].title}
                            </Text>
                        </Touch>
                    </View>
            }</View>
        );
    }
}

const styles = StyleSheet.create({
    contanter: {
        flex: 1,
    },
    shade: {
        position: 'absolute',
        top: 0, bottom: 0,
        left: 0, right: 0,
        backgroundColor: 'rgba(1, 1, 1, 0.4)',
    },
    title: {
        position: 'absolute',
        bottom: 3,
        color: '#fff',
        fontSize: 22,
        padding: 10,
        paddingBottom: 18,
    },
});

