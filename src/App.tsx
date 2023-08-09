import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import Spline from '@splinetool/react-spline';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div style={{ border: '1px solid #333' }}>
                <Spline scene="https://prod.spline.design/9mBW7weXSDRnG2fJ/scene.splinecode"></Spline>
            </div>
        </div>
    );
}

export default App;
