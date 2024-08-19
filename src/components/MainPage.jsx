import { numberFormat, numberFormatAbbreviate } from '../utils/number-utils'
import Image, { Avatar } from './Common/Image'

const MainPage = () => (
    <main>
        <h1>Explore Bali</h1>

        <Avatar
            src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg"
            name="bali"
            size={300}
        />

        <Image
            auto="compress"
            cs="tinysrgb"
            src="/photos/2166553/pexels-photo-2166553.jpeg"
            width={300}
        />

        {/* <ol> */}
        <li>Bedugul {numberFormat(10000)}</li>
        <li>Seminyak {numberFormatAbbreviate(50000)}</li>
        <li>Denpasar {numberFormatAbbreviate(9000000)}</li>
        {/* </ol> */}
    </main>
)

export default MainPage
