import React from 'react';

const Blogs = () => {
    return (
        <div className="w-75 mx-auto mt-3 border border-info p-5 rounded">
            <h1 className="text-info text-center">Freequently asked Questions?</h1>
            <div className="my-5">
                <h2>1. Difference between authorization and authentication?</h2>
                <p>Ans: Authentication এবং authorization উভয়ই নিরাপত্তার ক্ষেত্রে ব্যবহার করা হয়, যা একটি স্বয়ংক্রিয় ডেটা সিস্টেম প্রক্রিয়ায় নিরাপত্তার অনুমতি দেয়। যদিও এটি সত্য যে তারা সাধারণত একই রকম কাজ করে , তবে তারা একে অপরের থেকে সম্পূর্ণ আলাদা।

                    Authentication প্রক্রিয়ায়, সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা হয়। Authorization প্রক্রিয়ায় থাকাকালীন, resources এ অ্যাক্সেস করার জন্য একজন ব্যক্তির বা ব্যবহারকারীর পরিচয় পরীক্ষা করা হয়।

                    Authentication প্রক্রিয়ায়, ব্যবহারকারী বা ব্যক্তিদের verifiy করা হয়। Authorization প্রক্রিয়া চলাকালীন, ব্যবহারকারী বা ব্যক্তিদের validate করা হয়।

                    Authorization প্রক্রিয়ার আগে authentication করা হয়। Authorization প্রক্রিয়াটি authenticationপ্রক্রিয়ার পরে করা হয়।

                    Authentication প্রক্রিয়ায় সাধারণত ব্যবহারকারীর লগইন বিবরণ প্রয়োজন হয়। Authorization প্রক্রিয়ায় ব্যবহারকারীর বিশেষাধিকার বা নিরাপত্তা স্তর প্রয়োজন হয়।

                    Authentication নির্ধারণ করে যে ব্যক্তি একজন ব্যবহারকারী কিনা। Authorization নির্ধারণ করে ব্যবহারকারীর অনুমতি আছে কিনা।</p>
            </div>
            <div  className="my-5">
                <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Ans: ফায়ারবেস রিয়েলটাইম ডেটাবেস সরাসরি ক্লায়েন্ট-সাইড কোড থেকে ডাটাবেসে নিরাপদ অ্যাক্সেসের অনুমতি দিয়ে সমৃদ্ধ, সহযোগী অ্যাপ্লিকেশন তৈরি করতে সহায়তা করে । ডেটা স্থায়ীভাবে বজায় থাকে, এবং অফলাইনে থাকাকালীনও, রিয়েল-টাইম ইভেন্টগুলি অব্যাহত থাকে। যখন ডিভাইসটি সংযোগ restores করে, তখন রিয়েলটাইম ডেটাবেস স্থানীয় ডেটা পরিবর্তনগুলিকে remote আপডেটের সাথে সিঙ্ক্রোনাইজ করে যা ক্লায়েন্ট অফলাইনে থাকাকালীন ঘটেছিল, যেকোনো স্বয়ংক্রিয়ভাবে একত্রিত করে।

                    ফায়ারবেস ছাড়া authentication এর জন্য আরও অনেক বিকল্প পদ্ধতি রয়েছে। যেমন:

                    1.Cookie-Based authentication
                    2. Token-Based authentication
                    3. Third party access(OAuth, API-token)
                    4. OpenId
                    5. SAML</p>
            </div>
            <div>
                <h2>3. What other services does firebase provide other than authentication?</h2>
                <p>Ans: Firebase হল একটি সম্পূর্ণ প্যাকেজ যা মোবাইল বা ওয়েব অ্যাপ্লিকেশনগুলিকে দক্ষতার সাথে দ্রুত বিকাশ করতে সাহায্য করতে পারে।

                    Firebase যে পরিষেবাগুলি প্রদান করে তার মধ্যে সবচেয়ে দরকারী হল:

                    1. Cloud Firestore
                    2. Cloud Functions
                    3. Authentication
                    4. Hosting
                    5. Cloud Storage
                    6. Google Analytics
                    7. Predictions
                    8. Cloud Messaging
                    9. Dynamic Links
                    10. Remote Config</p>
            </div>
        </div>
    );
};

export default Blogs;