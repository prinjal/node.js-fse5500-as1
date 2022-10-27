/**
 * @file Implements user class to store the fields pertaining 
 * to the user's data.
 */

import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";


export default class User {
    private username: string = '';
    private password: string = '';
    private firstName: string | null = null;
    private lastName: string | null = null;
    private email: string = '';
    private profilePhoto: string | null = null;
    private headerImage: string | null = null;
    private accountType: AccountType = AccountType.Personal;
    private maritalStauts: MaritalStatus = MaritalStatus.Single;
    private biography: string | null = null;
    private dateOfBirth: Date | null = null;
    private joined: Date = new Date();
    private location: Location | null = null;




    constructor(data: any) {
        this.username = data.username;
        this.password = data.password;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.profilePhoto = data.profilePhoto;
        this.headerImage = data.headerImage;
        this.accountType = data.accountType;
        this.maritalStauts = data.maritalStatus;
        this.biography = data.biography;
        this.dateOfBirth = data.dateOfBirth;
        this.joined = data.joined;
        this.location = data.location;
    }

}