import React, {Component} from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

import img1 from '../../assets/bear.png';
import img2 from '../../assets/buffalo.png';
import img3 from '../../assets/chick.png';
import img4 from '../../assets/chicken.png';
import img5 from '../../assets/cow.png';

const imageList = [img1, img2, img3, img4, img5];



class ImagePickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }
        this.onPick = this.onPick.bind(this)
    }

    onPick(image) {
        this.setState({image})
    }

    render() {
        return (
            <div>
                <ImagePicker
                    images={imageList.map((image, i) => ({src: image, value: i}))}
                    onPick={this.onPick}
                />
                <button type="button" onClick={() => this.state.image}>OK</button>
            </div>
        )
    }
}

export default ImagePickerComponent