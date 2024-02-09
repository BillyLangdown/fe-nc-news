import displayPicture from '../assets/blank-display-picture.webp';

export default function Header() {
  return (
    <header>
      <div className='w-100 py-3 bg-light mb-4 container-fluid d-flex justify-content-between align-items-center'>
        <h1 className='text-center custom-header-size m-0'>NC-NEWS</h1>
        <img className='display-picture rounded-circle' src={displayPicture} alt="User's profile picture" />
      </div>
    </header>
  );
}
