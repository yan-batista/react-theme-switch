import React, { useContext } from 'react'
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'
import {Container} from './styles.js'

const Header = props => {
    const { title } = useContext(ThemeContext)

    return (
        <Container>
            Hello World
            <Switch
                onChange={props.toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={20}
            />
        </Container>
    )
}

export default Header;
