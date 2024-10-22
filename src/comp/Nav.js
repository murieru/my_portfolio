import '../styles/Nav.css'


function Nav({ openSection, setOpenSection }){

    

    function openMenu(e, id){
        setOpenSection(openSection === id ? null : id)
        const openSections = document.querySelectorAll('.open');
        openSections.forEach(section => {
            if (section.id !== id) {
                section.classList.remove('open');
            }
        });

        const block = document.getElementById(id)
        block.classList.toggle('open')
    }


    return(
        <div id='nav'>
            <ul>
                <li className={ openSection === 'about' ? 'selected': ''} onClick={(e) => openMenu(e, 'about')}>about</li>
                <li className={ openSection === 'contact' ? 'selected': ''} onClick={(e) => openMenu(e, 'contact')}>contact</li>
            </ul>
        </div>
    )

}

export default Nav