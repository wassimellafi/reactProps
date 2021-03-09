import './App.css';
import ProfileComponent from "./profile/profile"
import Imageprofil from "./profile.png"
function App() {
  return (
   <>
   
    <ProfileComponent fullName="wassim" />
    <ProfileComponent bio="xxxxxx" />
    <ProfileComponent profession="ingénieur informatique" />
    <ProfileComponent><img src={Imageprofil}  alt="img" /></ProfileComponent>
    <ProfileComponent version='16' />
   </>
  );
}

export default App;
