const username = "sam";
const age = 26;
export default function connect(){    //only one can be default
    return `${username} is connected`;
}

function disconnect(){
    return `${username} is disconnected`;

}

export {username, age, connect, disconnect};