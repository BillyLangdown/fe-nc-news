import displayPicture from '../assets/blank-display-picture.webp'

export default function Header(){
    return(
        <header>
            <div className='w-100 h-25 p-3 bg-light my-4 container d-flex justify-content-center align-items-center'>
                <h1 className='text-center custom-header-size'>NC-NEWS</h1>
                <img className='display-picture'   src={displayPicture} alt="The current user's profile picture"/>
            </div>
        </header>
       
    )
}