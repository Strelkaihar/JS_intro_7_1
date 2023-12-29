//JavaScript code
// async function getUser(userId){
//     const resp = await $.ajax({
//         url: `users/${userId}`,
//         dataType: 'json'
//     });
//     return {
//         id: +resp.id,
//         name: resp.name,
//         birthDate: new Date(resp.birthDate)
//     }
// }
// getUser(1).then((user) => {
//     user.id = '1234';
//     user.birthDate = '01/01/2001';
// })
// getUser('2').then((user) => {
//    console.log('User: ', JSON.stringify(user))
// })
//Fix
/**
 * 
 * @param {number} userId 
 * @returns user object
 */
async function getUser(userId){
    const resp = await $.ajax({
        url: `users/${userId}`,
        dataType: 'json'
    });
    return {
        id: +resp.id,
        name: resp.name,
        birthDate: new Date(resp.birthDate)
    }
}
getUser(1).then((user) => {
    user.id = 1234;
    user.birthDate = new Date('01/01/2001');
})
getUser(2).then((user) => {
   console.log('User: ', JSON.stringify(user))
})