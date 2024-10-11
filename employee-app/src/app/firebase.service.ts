import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyBheEmigPTRlfsXKm1Tb677_Si6ZJkpyxs',
    authDomain: 'employee-management-syst-27f3f.firebaseapp.com',
    projectId: 'employee-management-syst-27f3f',
    storageBucket: 'employee-management-syst-27f3f.appspot.com',
    messagingSenderId: '75037522606',
    appId: '1:75037522606:web:d3ab37abff3436d73d8b3f',
    measurementId: 'G-6YTP79LSRY',
};

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    constructor() {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        console.log('Firebase initialized');
    }
}
