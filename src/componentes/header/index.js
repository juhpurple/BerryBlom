import React from 'react';
import './style.css';


const Header = () => {
    return (
        <header>
            <div className='header'>


                <form novalidate action="/pesquisa" method="GET">
                    <input type="search" id="pesquisa" name="pesquisa" placeholder="Digite sua busca..." required></input>
                    <button type="submit">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2Yv2tTURTHPzGRQn/oYH9BOkghEcf2f+giHVzbDt2kiINbwZi2o5ubEkUqdLFp3Up/uJuKdRId/ANMCy3VOrdaLpwHx8tLMO+epI/iFw488u79vu+959xzzg1cUvQARbFuUoBeYAaoAsfAH8+O5d20jO0YrgL3gP0YUY3sEJgHutotbgT45H38DHgPPAcWxdxzTd7psXtAvl3ixoG6+thP4BEw2GTOEFCSsdG878BYO3ZOi9sEbrQwvx/Y8kTmLWNOu9W5L5uAJwtUFM9HIGch8IEi3U4oLoKbu6H45giESw8HKuZacWsjDAAnwrkv+TMxZtRq3YGwwmPFOxVCtKZSybCdPoZUCnoTQhRVCJfnrLEr3Ech8Re54Rn2qCj+RHFYVARle30sKv5CEoKCIliw18dSqMBuLzlb44Xiv3YpD4nDagfSTDWEaFq5wXUlVigr3lnLUue6klAMAr+Es27RxN5Xq90KbBZywDvF9xCjdmtPkVYSiswBLxVPLXCxfyEvTaZuu1xX0opbd7z2/ymQwRBjnsgT6Uqane5hORBRzPm2bn3jy0sn7F+adsX10aXJPX+IuTTVZOf0b1+SVpJmsTTX4rWzLgciK25d997/AO5gjB5pNlelGviijiQJz8akkl7ZOd8TJeu49Gu3c9Ut4Po/jC/IzvkLewv0kRJMAKcxIr8Bt0kJSg3i1p38u6QAGYnVOJG/gSfAlYsW2Qd8bZIFXpMCFL3/cLR9JiWYjEnuzl6RIpQ9ca6k3iRFyAAr4tZlYPSiBf0HncY5VL4JeFblRx8AAAAASUVORK5CYII="></img>            
                     </button>
                </form>

                <picture>
                    <img src='./assets/logo.png' alt='logo otica'></img>
                </picture>
                
                <nav>
                <button className='carrinho'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDUlEQVR4nO2aT4wkUxzH37DLhvizB5EhtOl63++bGemRmIPERhpZMTE7M/17pTbEMicjyx5YQsKBSARxWObiIA4OJCS4Yg8u608QNkEklg0SQRhk2USEIa/TPWk99aqrZ6qqZ0d9k9+hO/X71e/z6tXv/SulSpUqtVk1FBpzpRhzUwScrzaRhizwkiX/aRpwLASuUJtBDa3rK2AtE+CtwhMR4BIx5noxJoozq/VMpPU5fca8LQZuSRWlSKmT/9N1kgw4JsbMpo1tyb0xcX7pJ7/pWm27kHcJ8KgA066rq3Um4DUhf901PHxaEXAyOjoswNEu/6dSwwn5Qj9wLcApX7yG1kG7KibBRePjp8wZU5s15gxvbsDjMf7LkTEmFZwln+gXzpL7Y0INtRtKyL9dXCFvj4NrAGMCfL7yW+u6B+792PtrPZMKbi4ILrDAz33BAc+saiRjrop5wl/H+P9hye+7/nunO96DSp0kwO+eHHakgmsmNjZWseSikK8LebDDPontlsChVTGA69bQA9r2UXe8iBzxXT9dq21X65WQV3vgVpXzhcnJrRZ4bw1gyyG5uzteQ+tdnl7z7brBmnCjo8O+pGZGRs7tvn6uUjm7T8BlC+zzNOx9Hp83VFbyvY9uvhh3vQMU8t00YK7geO9LPud5cgeygyPf9iS31+cTVatnuSKR+MQS/Jv3BT6I820At2YGJ8CzngQXk/ymtD4zrmGE/CsE5pN8kyplaMzlWcLdE1tUyIO9fPdMTJwuwJudYALc0svPAtVcK2XPEp+yak1pfaqQdwrwZAhclsYn90qZZrxx75bKWPV6fYslX869Urb7vyWPe272jZBfZmkW+MnXmAI8pLKWkB/2MXblZW6wn8gD7vkNAPeKykMWeGCQYG4CHjcjykQNwA4MDvjYrRGzIYmRW38NAOwLC9w9X6lsU3lqYXJyqwB/elp2nwV2ZmbkjqhavVAVKQE+i4MLgRvViS7rG1iBx9SJLgs87Hk3jgvwanN7MCMT4EVLPlLY9rs15trChwBgac6Yi3KHq9frWzwbPnkPBU+rIiSADODpvVYIXMf6brlAuOwny0kSra+x5OECwA65Ba8ahMIguDgk91hgIQfb6Q5p1EZQlEEiGwams8is7PsDPwpwv6usqr/F8H5L/tDqikc3xKzHkjenPUvwxgAOeN65xK2/XOWOoBK3BILg0p4xjDGtE6G4YvLbwIpJpPV4j2rXs+WbxSghRtrdssw1a8x5Pcr4DWvewmtZ6kPGPOSOvDxg37kzg5Sbtl95YhT/1UOn3KJSyE+7klpyY5RKKbc4bVfKlRjkkSgItBq05iuVba1PMhYtea879uo3hvsEpDWtcwegd6T9oKBUqVKlSpX6P+pf0puFSzbfY6MAAAAASUVORK5CYII="></img>               
                </button>
                    <ul>
                        <li>
                            <a href='#'>Cadastro</a>
                        </li>

                        <li>
                            <a href='#'>Queridinhos</a>
                        </li>


                        <li>
                            <a href='#'>Loja</a>
                        </li>


                        <li>
                            <a href='#'>Sobre</a>
                        </li>


                        <li>
                            <a href='#'>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;
