import '../styles/Nav.css'

function Nav(){

    function openMenu(id){
        const block = document.getElementById(id)
        block.classList.toggle('open')
    }

    return(
        <div id='nav'>
            <ul>
                <li onClick={() => openMenu('about')}>about</li>
                <li onClick={() => openMenu('category')}>projects</li>
                <li>contact</li>
            </ul>
        </div>
    )

}

export default Nav