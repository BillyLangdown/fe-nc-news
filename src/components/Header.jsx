import displayPicture from '../assets/blank-display-picture.webp'

export default function Header(){
    return(
        <header id='header'>
            <h1 id='title'>NC-NEWS</h1>
           <img id='current-display-picture' src={displayPicture} alt="The current user's profile picture"/>
        </header>
       
    )
}