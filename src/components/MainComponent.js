import './MainComponent.scss'

const MainComponent = (text = 'Default text') => {
    const box = document.createElement('div')
    box.style = '2px soled #CCC'
    box.classList.add('main-component-box')

    box.textContent = text

    return box
}

export default MainComponent