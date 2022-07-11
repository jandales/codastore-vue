import store  from   '../../../libraries/autheticate'
export default(to, from, next) => {
    if (store.getters['authenticated'] === true) {
       next({name: 'account'});
    } else  next()
}