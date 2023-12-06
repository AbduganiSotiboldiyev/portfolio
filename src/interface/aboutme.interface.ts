export interface AboutMe {
    name : string;
    id : string;
    description : string;
    avatar : {
        url: string;
    }
    aboutInfo :{
        text    : string;
        html : string;
    }
}