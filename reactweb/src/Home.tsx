import logo from './logo.svg';
import BottomNav from './BottomNav';

const HomePage = () => {
    return (
        <div className="HomePage">
        <header className="HomePage-header">
            <h1>Hi, I am Joshua Kindelberger...</h1>
        </header>

        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        </div>
    );
}

export default HomePage