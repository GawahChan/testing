export default function playerHasBlueTick(userData) {
    if(!userData) {
        return false;
    } else if(userData.currentTask < 24) {
        return false;
    } else if(userData.haveAvatar === false) {
        return false;
    } else {
        return true;
    }
};