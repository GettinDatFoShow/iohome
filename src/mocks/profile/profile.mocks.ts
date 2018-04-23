import { History } from './../../models/history/history.interface';
import { Profile } from './../../models/profile/profile.interface';


const profileList: Profile[] = [
    {
        firstName: 'Ralf', 
        lastName: 'Boomer',
        email: 'hipster420@email.com', 
        avatar: 'assets/imgs/avatars/avatar_general_256_1.png',
        dateOfBirth: new Date(),
        history: new Array<History>()
    },
    {
        firstName: 'Trip', 
        lastName: 'McNealy',
        email: 'superGringo@email.com', 
        avatar: 'assets/imgs/avatars/avatar_general_256_2.png',
        dateOfBirth: new Date(),
        history: new Array<History>()
    },
    {
        firstName: 'Tyler', 
        lastName: 'Durden',
        email: 'monaLisa@email.com', 
        avatar: 'assets/imgs/avatars/avatar_general_256_3.png',
        dateOfBirth: new Date(),
        history: new Array<History>()
    },
    {
        firstName: 'Frank', 
        lastName: 'Waco',
        email: 'iWin@email.com', 
        avatar: 'assets/imgs/avatars/avatar_general_256_4.png',
        dateOfBirth: new Date(),
        history: new Array<History>()
    }
]
